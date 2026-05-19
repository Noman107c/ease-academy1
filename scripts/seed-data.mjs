import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables manually (same approach as other scripts)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadEnv = (filePath) => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    content.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim().replace(/^"|"$/g, '');
        process.env[key.trim()] = value;
      }
    });
  }
};

loadEnv(path.resolve(__dirname, '../.env.local'));
loadEnv(path.resolve(__dirname, '../.env'));

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

// Import models from the project
import Branch from '../src/backend/models/Branch.js';
import AcademicYear from '../src/backend/models/AcademicYear.js';
import Grade from '../src/backend/models/Grade.js';
import ClassModel from '../src/backend/models/Class.js';
import User from '../src/backend/models/User.js';
import Timetable from '../src/backend/models/Timetable.js';
import Subject from '../src/backend/models/Subject.js';
import Assignment from '../src/backend/models/Assignment.js';
import Exam from '../src/backend/models/Exam.js';
import FeeCategory from '../src/backend/models/FeeCategory.js';
import FeeTemplate from '../src/backend/models/FeeTemplate.js';
import Expense from '../src/backend/models/Expense.js';
import FeeVoucher from '../src/backend/models/FeeVoucher.js';

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime(hour, minute = 0) {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0] || '')
    .join('')
    .substring(0, 3)
    .toUpperCase();
}

async function upsertUserByEmail(email, payload) {
  let user = await User.findOne({ email }).select('+passwordHash');

  if (!user) {
    user = new User({ email, ...payload });
  } else {
    user.set(payload);
  }

  // Always reset to deterministic demo password for test login.
  user.passwordHash = payload.passwordHash;
  user.emailVerified = true;
  user.isActive = true;
  user.status = 'active';
  user.approved = true;

  await user.save();
  return user;
}

async function ensureBranch() {
  return Branch.findOneAndUpdate(
    { code: 'MAIN' },
    {
      name: 'Main Branch',
      code: 'MAIN',
      contact: { phone: '03000000000', email: 'info@easeacademy.com' },
      address: { city: 'Lahore', country: 'Pakistan' },
    },
    { upsert: true, new: true }
  );
}

async function ensureAcademicYear(superAdminId) {
  const yearName = `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`;
  const start = new Date(new Date().getFullYear(), 7, 1); // Aug 1
  const end = new Date(new Date().getFullYear() + 1, 6, 31); // Jul 31

  return AcademicYear.findOneAndUpdate(
    { yearName },
    {
      yearName,
      startDate: start,
      endDate: end,
      branches: [],
      isCurrent: true,
      createdBy: superAdminId,
    },
    { upsert: true, new: true }
  );
}

async function createGradesAndClasses(branchId, academicYearId, createdBy) {
  const grades = [];
  const classes = [];

  for (let g = 1; g <= 5; g++) {
    const grade = await Grade.findOneAndUpdate(
      { name: `Grade ${g}`, academicYear: academicYearId },
      { name: `Grade ${g}`, gradeNumber: g, academicYear: academicYearId, createdBy },
      { upsert: true, new: true }
    );
    grades.push(grade);

    // Two sections per grade
    for (const section of ['A', 'B']) {
      const code = `G${g}${section}`;
      const cls = await ClassModel.findOneAndUpdate(
        { code },
        {
          name: `Grade ${g} - Section ${section}`,
          code,
          grade: grade._id,
          sections: [{ name: section, capacity: 40 }],
          branchId,
          academicYear: academicYearId,
          createdBy,
          status: 'active',
        },
        { upsert: true, new: true }
      );
      classes.push(cls);
    }
  }

  return { grades, classes };
}

async function createCoreAccounts(branchId) {
  const primarySuperAdmin = await upsertUserByEmail('superadmin@easeacademy.com', {
    role: 'super_admin',
    firstName: 'Super',
    lastName: 'Admin',
    passwordHash: 'SuperAdmin@123',
  });

  const branchAdmin = await upsertUserByEmail('branchadmin@easeacademy.com', {
    role: 'branch_admin',
    firstName: 'Branch',
    lastName: 'Admin',
    passwordHash: 'BranchAdmin@123',
    branchId,
    adminProfile: {
      permissions: [
        'manage_users',
        'manage_students',
        'manage_teachers',
        'manage_attendance',
        'manage_exams',
        'view_reports',
      ],
    },
  });

  const staff = await upsertUserByEmail('staff1@easeacademy.com', {
    role: 'staff',
    firstName: 'Staff',
    lastName: 'One',
    passwordHash: 'Staff@123',
    branchId,
    staffProfile: {
      joiningDate: new Date(),
      role: 'Account Assistant',
      shift: 'Morning',
    },
  });

  const teachers = [];
  for (let i = 1; i <= 10; i++) {
    const teacher = await upsertUserByEmail(`teacher${i}@easeacademy.com`, {
      role: 'teacher',
      firstName: `Teacher${i}`,
      lastName: 'Demo',
      passwordHash: 'Teacher@123',
      teacherProfile: {
        joiningDate: new Date(),
        designation: 'Teacher',
        department: i % 2 === 0 ? 'Science' : 'Mathematics',
      },
      branchId,
    });

    teachers.push(teacher);
  }

  return {
    primarySuperAdmin,
    branchAdmin,
    staff,
    teachers,
    demoAccounts: [
      { role: 'Super Admin', email: 'superadmin@easeacademy.com', password: 'SuperAdmin@123' },
      { role: 'Branch Admin', email: 'branchadmin@easeacademy.com', password: 'BranchAdmin@123' },
      { role: 'Teacher', email: 'teacher1@easeacademy.com', password: 'Teacher@123' },
      { role: 'Student', email: 'student1@easeacademy.com', password: 'Student@123' },
      { role: 'Parent', email: 'parent1@easeacademy.com', password: 'Parent@123' },
      { role: 'Staff', email: 'staff1@easeacademy.com', password: 'Staff@123' },
    ],
  };
}

async function seedStudentsAndParents(classes, branchId, academicYearId, createdBy) {
  const students = [];
  const parents = [];

  const totalStudents = 100;
  for (let i = 1; i <= totalStudents; i++) {
    const classIndex = (i - 1) % classes.length;
    const cls = classes[classIndex];

    const studentEmail = `student${i}@easeacademy.com`;
    const s = await upsertUserByEmail(studentEmail, {
      role: 'student',
      firstName: `Student${i}`,
      lastName: 'Demo',
      passwordHash: 'Student@123',
      studentProfile: {
        classId: cls._id,
        section: cls.sections?.[0]?.name || 'A',
        admissionDate: new Date(),
        academicYear: academicYearId,
      },
      branchId,
      createdBy,
    });

    // Create a parent user for each student
    const parentEmail = `parent${i}@easeacademy.com`;
    const p = await upsertUserByEmail(parentEmail, {
      role: 'parent',
      firstName: `Parent${i}`,
      lastName: 'Demo',
      passwordHash: 'Parent@123',
      parentProfile: {
        fullName: `Parent of Student${i}`,
        phone: `0300${String(1000000 + i).slice(-7)}`,
        children: [
          {
            id: s._id,
            name: `${s.firstName} ${s.lastName}`,
            registrationNumber: s.studentProfile?.registrationNumber || '',
            classId: cls._id,
            className: cls.name,
            section: cls.sections?.[0]?.name || 'A',
          },
        ],
      },
      branchId,
      createdBy,
    });

    students.push(s);
    parents.push(p);
  }

  return { students, parents };
}

async function createSubjects(classes, grades, teachers, createdBy) {
  const subjectTemplate = [
    { name: 'English', weeklyHours: 5 },
    { name: 'Mathematics', weeklyHours: 6 },
    { name: 'Science', weeklyHours: 5 },
    { name: 'Urdu', weeklyHours: 4 },
    { name: 'Computer Science', weeklyHours: 3 },
    { name: 'Islamiyat', weeklyHours: 3 },
  ];

  const gradeNumberById = new Map(grades.map((g) => [String(g._id), g.gradeNumber || 0]));
  const subjectMap = new Map();

  for (let classIndex = 0; classIndex < classes.length; classIndex++) {
    const cls = classes[classIndex];
    const gradeNumber = gradeNumberById.get(String(cls.grade)) || 0;
    const classSubjects = [];

    for (let subjectIndex = 0; subjectIndex < subjectTemplate.length; subjectIndex++) {
      const template = subjectTemplate[subjectIndex];
      const code = `${cls.code}-${initials(template.name)}`;
      const leadTeacher = teachers[(classIndex + subjectIndex) % teachers.length];

      const subject = await Subject.findOneAndUpdate(
        { code },
        {
          name: template.name,
          code,
          classId: cls._id,
          grade: gradeNumber,
          gradeId: cls.grade,
          hoursPerWeek: template.weeklyHours,
          totalHoursPerYear: template.weeklyHours * 30,
          headTeacherId: leadTeacher._id,
          teachers: [leadTeacher._id],
          status: 'active',
          createdBy,
          updatedBy: createdBy,
        },
        { upsert: true, new: true }
      );

      classSubjects.push(subject);
    }

    await ClassModel.findByIdAndUpdate(cls._id, {
      $set: { subjects: classSubjects.map((s) => s._id) },
    });

    subjectMap.set(String(cls._id), classSubjects);
  }

  return subjectMap;
}

async function createTimetables(classes, teachers, subjectMap, academicYearId, branchId, createdBy) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  for (const cls of classes) {
    const classSubjects = subjectMap.get(String(cls._id)) || [];
    const section = cls.sections?.[0]?.name || 'A';

    // Create a timetable per class-section
    const periods = [];
    for (const day of days) {
      for (let p = 1; p <= 6; p++) {
        const subject = classSubjects[(p - 1) % Math.max(classSubjects.length, 1)];
        const teacher = teachers[(p - 1) % teachers.length];
        const startHour = 7 + p;
        periods.push({
          periodNumber: p,
          day,
          startTime: formatTime(startHour, 0),
          endTime: formatTime(startHour, 40),
          subjectId: subject?._id,
          teacherId: teacher._id,
          periodType: 'lecture',
          roomNumber: `R-${cls.code}-${p}`,
        });
      }
    }

    await Timetable.findOneAndUpdate(
      { classId: cls._id, section, academicYear: academicYearId, branchId },
      {
        name: `${cls.name} Timetable`,
        academicYear: academicYearId,
        branchId,
        classId: cls._id,
        section,
        effectiveFrom: new Date(),
        periods,
        timeSettings: {
          periodDuration: 40,
          breakDuration: 10,
          lunchDuration: 30,
          schoolStartTime: '08:00',
          schoolEndTime: '14:00',
        },
        status: 'active',
        createdBy,
      },
      { upsert: true, new: true }
    );
  }
}

async function createAssignments(classes, subjectMap, teachers, branchId) {
  let createdCount = 0;

  for (let classIndex = 0; classIndex < classes.length; classIndex++) {
    const cls = classes[classIndex];
    const subjects = (subjectMap.get(String(cls._id)) || []).slice(0, 3);
    const section = cls.sections?.[0]?.name || 'A';

    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      const teacher = teachers[(classIndex + i) % teachers.length];
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 7 + i * 3);

      await Assignment.findOneAndUpdate(
        { classId: cls._id, subjectId: subject._id, title: `${subject.name} Assignment ${i + 1} - ${cls.code}` },
        {
          title: `${subject.name} Assignment ${i + 1} - ${cls.code}`,
          description: `Practice work for ${subject.name} (${cls.name}).`,
          classId: cls._id,
          sectionId: section,
          subjectId: subject._id,
          teacherId: teacher._id,
          branchId,
          dueDate,
          totalMarks: 25,
          allowLateSubmission: i % 2 === 0,
          status: 'published',
        },
        { upsert: true, new: true }
      );

      createdCount += 1;
    }
  }

  return createdCount;
}

function buildExamSubjects(subjects, startOffsetDays, totalMarks, passingMarks, duration) {
  const baseDate = new Date();
  return subjects.map((subject, index) => {
    const examDate = new Date(baseDate);
    examDate.setDate(baseDate.getDate() + startOffsetDays + index);

    return {
      subjectId: subject._id,
      date: examDate,
      startTime: '09:00',
      endTime: '10:30',
      duration,
      totalMarks,
      passingMarks,
      room: `Room-${index + 1}`,
      instructions: 'Read all questions carefully before attempting.',
      syllabus: `Core chapters for ${subject.name}`,
    };
  });
}

async function createExamsAndQuizzes(classes, subjectMap, branchId, createdBy) {
  let examCount = 0;

  for (const cls of classes) {
    const subjects = subjectMap.get(String(cls._id)) || [];
    const mainSubjects = subjects.slice(0, 4);
    const quizSubjects = subjects.slice(0, 2);
    const section = cls.sections?.[0]?.name || 'A';

    if (mainSubjects.length > 0) {
      const midtermTitle = `${cls.code} Midterm ${new Date().getFullYear()}`;
      await Exam.findOneAndUpdate(
        { branchId, classId: cls._id, title: midtermTitle },
        {
          title: midtermTitle,
          examType: 'midterm',
          branchId,
          classId: cls._id,
          section,
          subjects: buildExamSubjects(mainSubjects, 14, 100, 40, 90),
          status: 'scheduled',
          createdBy,
        },
        { upsert: true, new: true }
      );
      examCount += 1;

      const finalTitle = `${cls.code} Final ${new Date().getFullYear()}`;
      await Exam.findOneAndUpdate(
        { branchId, classId: cls._id, title: finalTitle },
        {
          title: finalTitle,
          examType: 'final',
          branchId,
          classId: cls._id,
          section,
          subjects: buildExamSubjects(mainSubjects, 45, 100, 45, 90),
          status: 'scheduled',
          createdBy,
        },
        { upsert: true, new: true }
      );
      examCount += 1;
    }

    if (quizSubjects.length > 0) {
      const quizTitle = `${cls.code} Weekly Quiz ${new Date().getFullYear()}-${new Date().getMonth() + 1}`;
      await Exam.findOneAndUpdate(
        { branchId, classId: cls._id, title: quizTitle },
        {
          title: quizTitle,
          examType: 'quiz',
          branchId,
          classId: cls._id,
          section,
          subjects: buildExamSubjects(quizSubjects, 7, 20, 8, 30),
          status: 'active',
          createdBy,
        },
        { upsert: true, new: true }
      );
      examCount += 1;
    }
  }

  return examCount;
}

async function createFinanceData(branchId, createdBy, students) {
  const feeCat = await FeeCategory.findOneAndUpdate(
    { code: 'TUITION' },
    { name: 'Tuition', code: 'TUITION', branchId, createdBy },
    { upsert: true, new: true }
  );

  const feeTemplate = await FeeTemplate.findOneAndUpdate(
    { code: 'MONTHLY-TUITION' },
    { name: 'Monthly Tuition', code: 'MONTHLY-TUITION', baseAmount: 5000, frequency: 'monthly', branchId, createdBy },
    { upsert: true, new: true }
  );

  // Create fee vouchers for first 30 students for current month
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const voucherPromises = students.slice(0, 30).map(async (s, idx) => {
    const voucherNumber = `FV-${year}-${String(idx + 1).padStart(4, '0')}`;
    const dueDate = new Date(now.getFullYear(), now.getMonth(), 15);
    const amount = feeTemplate.totalAmount || feeTemplate.baseAmount || 5000;

    return FeeVoucher.findOneAndUpdate(
      { studentId: s._id, templateId: feeTemplate._id, month, year },
      {
        voucherNumber,
        studentId: s._id,
        templateId: feeTemplate._id,
        branchId,
        classId: s.studentProfile?.classId,
        month,
        year,
        dueDate,
        amount,
        totalAmount: amount,
        remainingAmount: amount,
        createdBy,
      },
      { upsert: true, new: true }
    );
  });

  await Promise.all(voucherPromises);

  // Add a few Expenses
  await Expense.findOneAndUpdate(
    { title: 'Stationery Purchase', branchId },
    { title: 'Stationery Purchase', amount: 12000, category: 'supplies', branchId, paymentStatus: 'paid', date: new Date(), paidAmount: 12000, createdBy },
    { upsert: true, new: true }
  );

  await Expense.findOneAndUpdate(
    { title: 'Electricity Bill', branchId },
    { title: 'Electricity Bill', amount: 45000, category: 'utilities', branchId, paymentStatus: 'paid', date: new Date(), paidAmount: 45000, createdBy },
    { upsert: true, new: true }
  );

  return {
    feeCategoryId: feeCat._id,
    feeTemplateId: feeTemplate._id,
    vouchersCount: Math.min(students.length, 30),
  };
}

async function main() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, { bufferCommands: false });
    console.log('Connected to MongoDB');

    const branch = await ensureBranch();

    // Create core accounts first so we can assign createdBy
    const core = await createCoreAccounts(branch._id);
    const superAdmin = core.primarySuperAdmin;

    const academicYear = await ensureAcademicYear(superAdmin._id);

    const { grades, classes } = await createGradesAndClasses(branch._id, academicYear._id, superAdmin._id);

    const { students, parents } = await seedStudentsAndParents(classes, branch._id, academicYear._id, superAdmin._id);

    const subjectMap = await createSubjects(classes, grades, core.teachers, superAdmin._id);

    await createTimetables(classes, core.teachers, subjectMap, academicYear._id, branch._id, superAdmin._id);

    const assignmentsCount = await createAssignments(classes, subjectMap, core.teachers, branch._id);

    const examsCount = await createExamsAndQuizzes(classes, subjectMap, branch._id, superAdmin._id);

    const finance = await createFinanceData(branch._id, superAdmin._id, students);

    console.log('Seed complete');
    console.log(
      `Created/updated: ${grades.length} grades, ${classes.length} classes, ${core.teachers.length} teachers, ${students.length} students, ${parents.length} parents`
    );
    console.log(
      `Academic data: ${Array.from(subjectMap.values()).reduce((sum, list) => sum + list.length, 0)} subjects, ${assignmentsCount} assignments, ${examsCount} exams/quizzes, ${finance.vouchersCount} fee vouchers`
    );
    console.log('Demo credentials:');
    core.demoAccounts.forEach((account) => {
      console.log(`- ${account.role}: ${account.email} / ${account.password}`);
    });

    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

main();
