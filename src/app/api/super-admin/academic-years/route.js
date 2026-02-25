import { NextResponse } from 'next/server';
import { withAuth, requireRole } from '@/backend/middleware/auth';
import { ROLES } from '@/constants/roles';
import {
  getAllAcademicYears,
  createAcademicYear,
  getCurrentAcademicYear,
} from '@/backend/controllers/academicYearController';

/**
 * GET /api/super-admin/academic-years
 * Get all academic years with filtering and pagination
 */
export async function GET(request) {
  return withAuth(
    async (request, user) => {
      try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const search = searchParams.get('search');
        const branchId = searchParams.get('branchId');
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;

        const result = await getAllAcademicYears({
          status,
          search,
          branchId,
          page,
          limit,
        });

        return NextResponse.json(result, { status: 200 });
      } catch (error) {
        console.error('Get academic years error:', error);
        return NextResponse.json(
          { success: false, message: error.message || 'Failed to fetch academic years' },
          { status: 500 }
        );
      }
    },
    [requireRole(ROLES.SUPER_ADMIN)]
  )(request);
}

/**
 * POST /api/super-admin/academic-years
 * Create a new academic year
 */
export async function POST(request) {
  return withAuth(
    async (request, user) => {
      try {
        const body = await request.json();

        const { yearName, startDate, endDate, branches, status, isCurrent, description } = body;

        // Validate required fields
        if (!yearName || !startDate || !endDate) {
          return NextResponse.json(
            { success: false, message: 'Year name, start date, and end date are required' },
            { status: 400 }
          );
        }

        const result = await createAcademicYear(
          {
            yearName,
            startDate,
            endDate,
            branches,
            status,
            isCurrent,
            description,
          },
          user._id
        );

        return NextResponse.json(result, { status: 201 });
      } catch (error) {
        console.error('Create academic year error:', error);
        return NextResponse.json(
          { success: false, message: error.message || 'Failed to create academic year' },
          { status: 400 }
        );
      }
    },
    [requireRole(ROLES.SUPER_ADMIN)]
  )(request);
}
