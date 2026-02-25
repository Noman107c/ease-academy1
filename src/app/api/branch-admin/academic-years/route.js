import { NextResponse } from 'next/server';
import { withAuth, requireRole } from '@/backend/middleware/auth';
import { ROLES } from '@/constants/roles';
import {
  getAcademicYearsByBranch,
  getCurrentAcademicYear,
} from '@/backend/controllers/academicYearController';

/**
 * GET /api/branch-admin/academic-years
 * Get all academic years assigned to the branch admin's branch
 */
export async function GET(request) {
  return withAuth(
    async (request, user) => {
      try {
        // Get the branch ID from the user's profile
        const branchId = user.branchId;

        if (!branchId) {
          return NextResponse.json(
            { success: false, message: 'Branch not found for user' },
            { status: 400 }
          );
        }

        // Get all academic years for this branch
        const result = await getAcademicYearsByBranch(branchId);

        return NextResponse.json(result, { status: 200 });
      } catch (error) {
        console.error('Get branch academic years error:', error);
        return NextResponse.json(
          { success: false, message: error.message || 'Failed to fetch academic years' },
          { status: 500 }
        );
      }
    },
    [requireRole(ROLES.BRANCH_ADMIN)]
  )(request);
}

/**
 * GET /api/branch-admin/academic-years/current
 * Get current academic year for the branch
 */
export async function POST(request) {
  return withAuth(
    async (request, user) => {
      try {
        const branchId = user.branchId;

        if (!branchId) {
          return NextResponse.json(
            { success: false, message: 'Branch not found for user' },
            { status: 400 }
          );
        }

        const result = await getCurrentAcademicYear(branchId);

        return NextResponse.json(result, { status: 200 });
      } catch (error) {
        console.error('Get current academic year error:', error);
        return NextResponse.json(
          { success: false, message: error.message || 'Failed to fetch current academic year' },
          { status: 500 }
        );
      }
    },
    [requireRole(ROLES.BRANCH_ADMIN)]
  )(request);
}
