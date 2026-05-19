import { NextResponse } from 'next/server';
import { isMockModeEnabled, getMockUserById, toSafeMockUser } from '@/lib/mock-data';

// Defer expensive imports (controllers/middleware) when not needed

export async function GET(request) {
  try {
    if (isMockModeEnabled()) {
      // Extract token and return mock user if token valid
      const token = request.headers.get('authorization')?.startsWith('Bearer ') ? request.headers.get('authorization').substring(7) : null;
      if (!token) {
        return NextResponse.json({ success: false, message: 'Authentication required' }, { status: 401 });
      }

      // Try to decode payload (not verifying signature here since mock)
      try {
        const payload = JSON.parse(Buffer.from(token.split('.')[1] || '', 'base64').toString('utf8'));
        const mockUser = getMockUserById(payload.userId);

        if (!mockUser) {
          return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: toSafeMockUser(mockUser) }, { status: 200 });
      } catch (e) {
        return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
      }
    }

    // Non-mock mode: dynamically import to avoid model imports during mock runs
    const { authenticate } = await import('@/backend/middleware/auth');
    const { getCurrentUser } = await import('@/backend/controllers/authController');

    const authResult = await authenticate(request);

    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.message },
        { status: authResult.status || 401 }
      );
    }

    const result = await getCurrentUser(authResult.user.userId);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Get current user error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to get user' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    if (isMockModeEnabled()) {
      const token = request.headers.get('authorization')?.startsWith('Bearer ') ? request.headers.get('authorization').substring(7) : null;
      if (!token) {
        return NextResponse.json({ success: false, message: 'Authentication required' }, { status: 401 });
      }

      try {
        const payload = JSON.parse(Buffer.from(token.split('.')[1] || '', 'base64').toString('utf8'));
        const mockUser = getMockUserById(payload.userId);

        if (!mockUser) {
          return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        const body = await request.json();
        // Return merged mock user (simulate update)
        const updated = { ...toSafeMockUser(mockUser), ...body };
        return NextResponse.json({ success: true, data: updated }, { status: 200 });
      } catch (e) {
        return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
      }
    }

    const { authenticate } = await import('@/backend/middleware/auth');
    const { updateUserProfile } = await import('@/backend/controllers/authController');

    const authResult = await authenticate(request);

    if (authResult.error) {
      return NextResponse.json(
        { success: false, message: authResult.message },
        { status: authResult.status || 401 }
      );
    }

    const body = await request.json();

    const result = await updateUserProfile(authResult.user.userId, body);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Update profile error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to update profile' },
      { status: 400 }
    );
  }
}
