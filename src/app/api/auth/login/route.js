import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { isMockModeEnabled, getMockUserByEmail, toSafeMockUser } from '@/lib/mock-data';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const JWT_REFRESH_EXPIRES_IN = '30d';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { email, password } = body;
    
    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // If mock mode is enabled, bypass DB and return canned credentials
    if (isMockModeEnabled()) {
      const mockUser = getMockUserByEmail(email);

      if (!mockUser || mockUser.password !== password) {
        return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
      }

      const safeUser = toSafeMockUser(mockUser);

      const tokenPayload = {
        userId: safeUser._id,
        email: safeUser.email,
        role: safeUser.role,
        branchId: safeUser.branchId,
      };

      const accessToken = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
      const refreshToken = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });

      const response = NextResponse.json({ success: true, data: { user: safeUser, accessToken, refreshToken }, message: 'Login successful (mock)' }, { status: 200 });

      response.cookies.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      return response;
    }

    const result = await import('@/backend/controllers/authController').then(mod => mod.loginUser(email, password));

    // Set refresh token as httpOnly cookie
    const response = NextResponse.json(result, { status: 200 });

    response.cookies.set('refreshToken', result.data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Login failed' },
      { status: 401 }
    );
  }
}
