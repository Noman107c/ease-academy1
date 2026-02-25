import AcademicYear from '@/backend/models/AcademicYear';
import Branch from '@/backend/models/Branch';
import connectDB from '@/lib/database';
import { deleteCache } from '@/lib/redis';

/**
 * Get all academic years with filtering and pagination
 */
export async function getAllAcademicYears(filters = {}) {
  try {
    await connectDB();

    const { status, search, branchId, page = 1, limit = 10 } = filters;

    // Build query
    const query = {};
    if (status) query.status = status;
    if (branchId) query.branches = branchId;
    if (search) {
      query.yearName = { $regex: search, $options: 'i' };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Get academic years with branch details
    const academicYears = await AcademicYear.find(query)
      .populate('branches', 'name code city')
      .populate('createdBy', 'fullName email')
      .populate('updatedBy', 'fullName email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count
    const total = await AcademicYear.countDocuments(query);

    return {
      success: true,
      data: {
        academicYears,
        pagination: {
          total,
          page: parseInt(page),
          limit: parseInt(limit),
          pages: Math.ceil(total / limit),
        },
      },
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Get academic year by ID
 */
export async function getAcademicYearById(academicYearId) {
  try {
    await connectDB();

    const academicYear = await AcademicYear.findById(academicYearId)
      .populate('branches', 'name code city')
      .populate('createdBy', 'fullName email')
      .populate('updatedBy', 'fullName email');

    if (!academicYear) {
      throw new Error('Academic year not found');
    }

    return {
      success: true,
      data: academicYear,
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Get current academic year for a branch
 */
export async function getCurrentAcademicYear(branchId = null) {
  try {
    await connectDB();

    let query = { isCurrent: true };
    if (branchId) {
      query.branches = branchId;
    }

    const academicYear = await AcademicYear.findOne(query).populate('branches', 'name code city');

    if (!academicYear) {
      // If no current year found, try to get the latest active year
      const latestYear = await AcademicYear.findOne({
        status: 'active',
        ...(branchId ? { branches: branchId } : {}),
      })
        .populate('branches', 'name code city')
        .sort({ startDate: -1 });

      if (!latestYear) {
        throw new Error('No academic year found');
      }

      return {
        success: true,
        data: latestYear,
        isPrevious: true,
      };
    }

    return {
      success: true,
      data: academicYear,
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Get academic years for a specific branch
 */
export async function getAcademicYearsByBranch(branchId) {
  try {
    await connectDB();

    const academicYears = await AcademicYear.find({
      branches: branchId,
      status: { $ne: 'archived' },
    })
      .populate('branches', 'name code city')
      .sort({ startDate: -1 });

    return {
      success: true,
      data: academicYears,
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Create new academic year
 */
export async function createAcademicYear(academicYearData, userId) {
  try {
    await connectDB();

    const { yearName, startDate, endDate, branches, status, isCurrent, description } =
      academicYearData;

    // Check if year name already exists
    const existingYear = await AcademicYear.findOne({ yearName });
    if (existingYear) {
      throw new Error('Academic year with this name already exists');
    }

    // Validate dates
    if (new Date(startDate) >= new Date(endDate)) {
      throw new Error('End date must be after start date');
    }

    // Validate branches if provided
    if (branches && branches.length > 0) {
      const validBranches = await Branch.find({ _id: { $in: branches } });
      if (validBranches.length !== branches.length) {
        throw new Error('One or more branches not found');
      }
    }

    // If setting as current, unset other current years for the same branches
    if (isCurrent && branches && branches.length > 0) {
      await AcademicYear.updateMany(
        { branches: { $in: branches }, isCurrent: true },
        { isCurrent: false }
      );
    }

    // Create academic year
    const academicYear = new AcademicYear({
      yearName,
      startDate,
      endDate,
      branches: branches || [],
      status: status || 'active',
      isCurrent: isCurrent || false,
      description,
      createdBy: userId,
      updatedBy: userId,
    });

    await academicYear.save();

    // Populate the created document
    await academicYear.populate('branches', 'name code city');
    await academicYear.populate('createdBy', 'fullName email');

    // Clear cache
    await deleteCache('academic-years:*');

    return {
      success: true,
      data: academicYear,
      message: 'Academic year created successfully',
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Update academic year
 */
export async function updateAcademicYear(academicYearId, updates, userId) {
  try {
    await connectDB();

    const academicYear = await AcademicYear.findById(academicYearId);

    if (!academicYear) {
      throw new Error('Academic year not found');
    }

    // Check for duplicate year name if changing
    if (updates.yearName && updates.yearName !== academicYear.yearName) {
      const existingYear = await AcademicYear.findOne({ yearName: updates.yearName });
      if (existingYear) {
        throw new Error('Academic year with this name already exists');
      }
    }

    // Validate dates if provided
    if (updates.startDate && updates.endDate) {
      if (new Date(updates.startDate) >= new Date(updates.endDate)) {
        throw new Error('End date must be after start date');
      }
    } else if (updates.startDate && academicYear.endDate) {
      if (new Date(updates.startDate) >= new Date(academicYear.endDate)) {
        throw new Error('Start date must be before end date');
      }
    } else if (updates.endDate && academicYear.startDate) {
      if (new Date(academicYear.startDate) >= new Date(updates.endDate)) {
        throw new Error('End date must be after start date');
      }
    }

    // Validate branches if provided
    if (updates.branches && updates.branches.length > 0) {
      const validBranches = await Branch.find({ _id: { $in: updates.branches } });
      if (validBranches.length !== updates.branches.length) {
        throw new Error('One or more branches not found');
      }
    }

    // If setting as current, unset other current years
    if (updates.isCurrent && !academicYear.isCurrent) {
      const branchQuery = updates.branches
        ? { branches: { $in: updates.branches } }
        : { branches: { $in: academicYear.branches } };
      await AcademicYear.updateMany(
        { ...branchQuery, isCurrent: true, _id: { $ne: academicYearId } },
        { isCurrent: false }
      );
    }

    // Update fields
    Object.keys(updates).forEach((key) => {
      if (updates[key] !== undefined) {
        academicYear[key] = updates[key];
      }
    });

    academicYear.updatedBy = userId;
    await academicYear.save();

    // Populate the updated document
    await academicYear.populate('branches', 'name code city');
    await academicYear.populate('updatedBy', 'fullName email');

    // Clear cache
    await deleteCache('academic-years:*');
    await deleteCache(`academic-year:${academicYearId}`);

    return {
      success: true,
      data: academicYear,
      message: 'Academic year updated successfully',
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Delete academic year
 */
export async function deleteAcademicYear(academicYearId) {
  try {
    await connectDB();

    const academicYear = await AcademicYear.findById(academicYearId);

    if (!academicYear) {
      throw new Error('Academic year not found');
    }

    await academicYear.deleteOne();

    // Clear cache
    await deleteCache('academic-years:*');
    await deleteCache(`academic-year:${academicYearId}`);

    return {
      success: true,
      message: 'Academic year deleted successfully',
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Toggle academic year status
 */
export async function toggleAcademicYearStatus(academicYearId) {
  try {
    await connectDB();

    const academicYear = await AcademicYear.findById(academicYearId);

    if (!academicYear) {
      throw new Error('Academic year not found');
    }

    academicYear.status = academicYear.status === 'active' ? 'inactive' : 'active';
    await academicYear.save();

    // Clear cache
    await deleteCache('academic-years:*');
    await deleteCache(`academic-year:${academicYearId}`);

    return {
      success: true,
      data: academicYear,
      message: `Academic year ${academicYear.status === 'active' ? 'activated' : 'deactivated'} successfully`,
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Set academic year as current
 */
export async function setAsCurrentAcademicYear(academicYearId, userId) {
  try {
    await connectDB();

    const academicYear = await AcademicYear.findById(academicYearId);

    if (!academicYear) {
      throw new Error('Academic year not found');
    }

    // Unset all other current years for the same branches
    await AcademicYear.updateMany(
      { branches: { $in: academicYear.branches }, isCurrent: true, _id: { $ne: academicYearId } },
      { isCurrent: false }
    );

    // Set this year as current
    academicYear.isCurrent = true;
    academicYear.status = 'active';
    academicYear.updatedBy = userId;
    await academicYear.save();

    // Clear cache
    await deleteCache('academic-years:*');
    await deleteCache(`academic-year:${academicYearId}`);

    return {
      success: true,
      data: academicYear,
      message: 'Academic year set as current successfully',
    };
  } catch (error) {
    throw error;
  }
}

export default {
  getAllAcademicYears,
  getAcademicYearById,
  getCurrentAcademicYear,
  getAcademicYearsByBranch,
  createAcademicYear,
  updateAcademicYear,
  deleteAcademicYear,
  toggleAcademicYearStatus,
  setAsCurrentAcademicYear,
};
