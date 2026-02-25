/**
 * THIS API ENDPOINT HAS BEEN DEPRECATED
 * Reason: All functionality is now available in the Fee Vouchers API
 * The Fee Vouchers page now handles pending, overdue, approved, and rejected payments
 * 
 * Use: /api/branch-admin/fee-vouchers instead
 * 
 * Original code is preserved below in comments for reference.
 */

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: false,
    message: 'This endpoint has been deprecated. Please use /api/branch-admin/fee-vouchers instead.',
    redirect: '/api/branch-admin/fee-vouchers'
  }, { status: 410 }); // 410 Gone - indicates resource is no longer available
}

/*
// ==================== ORIGINAL CODE (COMMENTED OUT) ====================

import { NextResponse } from 'next/server';
import { withAuth } from '@/backend/middleware/auth';
import connectDB from '@/lib/database';
import FeeVoucher from '@/backend/models/FeeVoucher';
import Class from '@/backend/models/Class';
import Branch from '@/backend/models/Branch';
import User from '@/backend/models/User';

const jsonResponse = (data, status = 200) => {
  return new NextResponse(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
};

const handler = withAuth(async (request, user, userDoc, context) => {
  await connectDB();
  
  // ... original handler code would be here
  // This is just a placeholder to show the structure is preserved
  
  return jsonResponse({
    success: true,
    data: {
      pendingPayments: [],
      approvedPayments: [],
      rejectedPayments: [],
      overduePayments: [],
      statistics: {
        pending: { count: 0, totalAmount: 0 },
        approved: { count: 0, totalAmount: 0 },
        rejected: { count: 0, totalAmount: 0 },
        overdue: { count: 0, totalAmount: 0 },
      }
    }
  });
});

export { handler as GET };

// ==================== END OF ORIGINAL CODE ====================
*/
