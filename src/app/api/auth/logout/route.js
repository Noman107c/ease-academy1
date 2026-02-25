import { NextResponse } from 'next/server';
import { logoutUser } from '@/backend/controllers/authController';
import { authenticate } from '@/backend/middleware/auth';

export async function POST(request) {
  try {
    // Try to authenticate user, but don't fail logout if token is expired
    const authResult = await authenticate(request);
    
    // If user is authenticated, perform server-side logout
    if (authResult.success && authResult.user?._id) {
      try {
        await logoutUser(authResult.user._id);
      } catch (logoutError) {
        // Ignore logout errors - still clear cookies
        console.error('Server logout error (ignored):', logoutError);
      }
    }
    
    // Always clear refresh token cookie and return success
    const response = NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );
    
    // Clear refresh token cookie
    response.cookies.delete('refreshToken');
    
    // Also clear accessToken cookie if it exists
    response.cookies.delete('accessToken');
    
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    // Still return success to allow client-side cleanup
    const response = NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );
    response.cookies.delete('refreshToken');
    response.cookies.delete('accessToken');
    return response;
  }
}
