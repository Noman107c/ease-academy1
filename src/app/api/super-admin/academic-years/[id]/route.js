import { NextResponse } from 'next/server';
import { withAuth, requireRole } from '@/backend/middleware/auth';
import { ROLES } from '@/constants/roles';
import {
  getAcademicYearById,
  updateAcademicYear,
  deleteAcademicYear,
  toggleAcademicYearStatus,
  setAsCurrentAcademicYear,
} from '@/backend/controllers/academicYearController';

/**
 * GET /api/super-admin/academic-years/[id]
 * Get academic year by ID
 */
export async function GET(request, { params }) {
  return withAuth(
    async (request, user) => {
      try {
        const { id } = params;
        const result = await getAcademicYearById(id);
        return NextResponse.json(result, { status: 200 });
      } catch (error) {
        console.error('Get academic year error:', error);
        return NextResponse.json(
          { success: false, message: error.message || 'Failed to fetch academic year' },
          { status: 404 }
        );
      }
    },
    [requireRole(ROLES.SUPER_ADMIN)]
  )(request);
}

/**
 * PUT /api/super-admin/academic-years/[id]
 * Update academic year
 */
export async function PUT(request, { params }) {
  return withAuth(
    async (request, user) => {
      try {
        const { id } = params;
        const body = await request.json();

        const { yearName, startDate, endDate, branches, status, isCurrent, description, action } =
          body;

        // Handle special actions
        if (action === 'toggleStatus') {
          const result = await toggleAcademicYearStatus(id);
          return NextResponse.json(result, { status: 200 });
        }

        if (action === 'setCurrent') {
          const result = await setAsCurrentAcademicYear(id, user._id);
          return NextResponse.json(result, { status: 200 });
        }

        // Regular update
        const updates = {};
        if (yearName) updates.yearName = yearName;
        if (startDate) updates.startDate = startDate;
        if (endDate) updates.endDate = endDate;
        if (branches) updates.branches = branches;
        if (status) updates.status = status;
        if (isCurrent !== undefined) updates.isCurrent = isCurrent;
        if (description !== undefined) updates.description = description;

        const result = await updateAcademicYear(updates, id, user._id);
        return NextResponse.json(result, { status: 200 });
      } catch (error) {
        console.error('Update academic year error:', error);
        return NextResponse.json(
          { success: false, message: error.message || 'Failed to update academic year' },
          { status: 400 }
        );
      }
    },
    [requireRole(ROLES.SUPER_ADMIN)]
  )(request);
}

/**
 * DELETE /api/super-admin/academic-years/[id]
 * Delete academic year
 */
export async function DELETE(request, { params }) {
  return withAuth(
    async (request, user) => {
      try {
        const { id } = params;
        const result = await deleteAcademicYear(id);
        return NextResponse.json(result, { status: 200 });
      } catch (error) {
        console.error('Delete academic year error:', error);
        return NextResponse.json(
          { success: false, message: error.message || 'Failed to delete academic year' },
          { status: 400 }
        );
      }
    },
    [requireRole(ROLES.SUPER_ADMIN)]
  )(request);
}
