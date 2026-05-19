import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { isMockModeEnabled, getMockUserById } from '@/lib/mock-data';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export async function POST(request) {
  try {
    // Get refresh token from cookie
    const refreshToken = request.cookies.get('refreshToken')?.value;
    
    if (!refreshToken) {
      return NextResponse.json(
        { success: false, message: 'Refresh token not found' },
        { status: 401 }
      );
    }
    
    if (isMockModeEnabled()) {
      try {
        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        const user = getMockUserById(decoded.userId);
        if (!user) throw new Error('Invalid refresh token');

        const accessToken = jwt.sign({ userId: user._id, email: user.email, role: user.role, branchId: user.branchId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        return NextResponse.json({ success: true, data: { accessToken }, message: 'Token refreshed (mock)' }, { status: 200 });
      } catch (err) {
        return NextResponse.json({ success: false, message: 'Invalid refresh token' }, { status: 401 });
      }
    }

    const { refreshAccessToken } = await import('@/backend/controllers/authController');
    const result = await refreshAccessToken(refreshToken);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Refresh token error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to refresh token' },
      { status: 401 }
    );
  }
}
