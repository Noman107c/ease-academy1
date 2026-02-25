import mongoose from 'mongoose';

const academicYearSchema = new mongoose.Schema(
  {
    yearName: {
      type: String,
      required: [true, 'Academic year name is required'],
      trim: true,
      unique: true,
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required'],
    },
    branches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
      },
    ],
    status: {
      type: String,
      enum: ['active', 'inactive', 'archived'],
      default: 'active',
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
academicYearSchema.index({ yearName: 1 });
academicYearSchema.index({ isCurrent: 1 });
academicYearSchema.index({ status: 1 });
academicYearSchema.index({ branches: 1 });

// Pre-save middleware to ensure only one current academic year per branch
academicYearSchema.pre('save', async function (next) {
  if (this.isCurrent) {
    // If this year is set as current, unset all others for the same branches
    const AcademicYear = this.constructor;
    await AcademicYear.updateMany(
      { branches: { $in: this.branches }, isCurrent: true, _id: { $ne: this._id } },
      { isCurrent: false }
    );
  }
  next();
});

const AcademicYear =
  mongoose.models.AcademicYear || mongoose.model('AcademicYear', academicYearSchema);

export default AcademicYear;
