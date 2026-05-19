import { NextResponse } from 'next/server';
import { isMockModeEnabled } from '@/lib/mock-data';

export async function POST(request) {
  try {
    // If not mock-mode, attempt server-side logout using controllers
    if (!isMockModeEnabled()) {
      try {
        const { authenticate } = await import('@/backend/middleware/auth');
        const { logoutUser } = await import('@/backend/controllers/authController');
        const authResult = await authenticate(request);
        if (!authResult.error && authResult.user?.userId) {
          try {
            await logoutUser(authResult.user.userId);
          } catch (logoutError) {
            console.error('Server logout error (ignored):', logoutError);
          }
        }
      } catch (e) {
        // ignore
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
