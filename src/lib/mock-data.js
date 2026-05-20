const MOCK_BRANCHES = [
  {
    _id: 'mock-branch-main',
    name: 'Main Branch',
    code: 'MAIN',
    city: 'Karachi',
    status: 'active',
  },
  {
    _id: 'mock-branch-north',
    name: 'North Branch',
    code: 'NORTH',
    city: 'Lahore',
    status: 'active',
  },
  {
    _id: 'mock-branch-south',
    name: 'South Branch',
    code: 'SOUTH',
    city: 'Islamabad',
    status: 'active',
  },
];

const MOCK_BRANCH = MOCK_BRANCHES[0];

const MOCK_DEPARTMENTS = [
  {
    _id: 'mock-dept-1',
    name: 'General Studies',
    code: 'GEN',
    branchId: MOCK_BRANCHES[0]._id,
    branchName: MOCK_BRANCHES[0].name,
    status: 'active',
  },
  {
    _id: 'mock-dept-2',
    name: 'Science',
    code: 'SCI',
    branchId: MOCK_BRANCHES[0]._id,
    branchName: MOCK_BRANCHES[0].name,
    status: 'active',
  },
  {
    _id: 'mock-dept-3',
    name: 'Administration',
    code: 'ADM',
    branchId: MOCK_BRANCHES[1]._id,
    branchName: MOCK_BRANCHES[1].name,
    status: 'active',
  },
];

const MOCK_USERS = [
  {
    _id: 'mock-super-admin-1',
    role: 'super_admin',
    firstName: 'Super',
    lastName: 'Admin',
    fullName: 'Super Admin',
    email: 'superadmin@easeacademy.com',
    password: 'SuperAdmin@123',
  },
  {
    _id: 'mock-branch-admin-1',
    role: 'branch_admin',
    firstName: 'Branch',
    lastName: 'Admin',
    fullName: 'Branch Admin',
    email: 'branchadmin@easeacademy.com',
    password: 'BranchAdmin@123',
    branchId: MOCK_BRANCH._id,
    branchName: MOCK_BRANCH.name,
    status: 'active',
    lastLogin: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    profilePhoto: { url: 'https://ui-avatars.com/api/?name=Branch+Admin&background=0f62fe&color=fff', publicId: 'branch-admin-1' },
    adminProfile: {
      documents: [
        { type: 'cnic', name: 'CNIC Front', url: 'https://example.com/cnic-front.pdf' },
        { type: 'cv', name: 'CV', url: 'https://example.com/cv.pdf' },
      ],
      permissions: [
        'manage_users',
        'manage_students',
        'manage_teachers',
        'manage_attendance',
        'manage_exams',
        'view_reports',
      ],
    },
  },
  {
    _id: 'mock-teacher-1',
    role: 'teacher',
    firstName: 'Teacher1',
    lastName: 'Demo',
    fullName: 'Teacher1 Demo',
    email: 'teacher1@easeacademy.com',
    password: 'Teacher@123',
    branchId: MOCK_BRANCH._id,
    branchName: MOCK_BRANCH.name,
    status: 'active',
    profilePhoto: { url: 'https://ui-avatars.com/api/?name=Teacher+One&background=0ea5e9&color=fff', publicId: 'teacher-1' },
    teacherProfile: {
      employeeId: 'T-1001',
      designation: 'Senior Teacher',
      departmentId: MOCK_DEPARTMENTS[0]._id,
      department: MOCK_DEPARTMENTS[0].name,
      joiningDate: '2022-09-01T00:00:00.000Z',
      experience: { totalYears: 5 },
      subjects: ['mock-subject-1', 'mock-subject-3'],
      classes: ['mock-class-1', 'mock-class-2'],
      qualifications: ['B.Ed', 'M.A. English'],
      salaryDetails: {
        basicSalary: 65000,
        allowances: { transport: 5000, medical: 3000 },
        deductions: { tax: 2000 },
      },
      bankAccount: {
        bankName: 'HBL',
        accountNumber: '1234567890',
        iban: 'PK00HABB0000001234567890',
      },
      emergencyContact: {
        name: 'Ali Demo',
        relationship: 'Brother',
        phone: '03001234567',
      },
      documents: [
        { type: 'cnic', name: 'CNIC', url: 'https://example.com/teacher-cnic.pdf' },
      ],
    },
  },
  {
    _id: 'mock-teacher-2',
    role: 'teacher',
    firstName: 'Teacher2',
    lastName: 'Demo',
    fullName: 'Teacher2 Demo',
    email: 'teacher2@easeacademy.com',
    password: 'Teacher@123',
    branchId: MOCK_BRANCHES[1]._id,
    branchName: MOCK_BRANCHES[1].name,
    status: 'on_leave',
    profilePhoto: { url: 'https://ui-avatars.com/api/?name=Teacher+Two&background=14b8a6&color=fff', publicId: 'teacher-2' },
    teacherProfile: {
      employeeId: 'T-1002',
      designation: 'Teacher',
      departmentId: MOCK_DEPARTMENTS[1]._id,
      department: MOCK_DEPARTMENTS[1].name,
      joiningDate: '2023-02-15T00:00:00.000Z',
      experience: { totalYears: 3 },
      subjects: ['mock-subject-2'],
      classes: ['mock-class-1'],
      qualifications: ['B.Sc'],
      salaryDetails: {
        basicSalary: 52000,
        allowances: { transport: 4000 },
        deductions: { tax: 1500 },
      },
      bankAccount: {
        bankName: 'Meezan Bank',
        accountNumber: '9876543210',
      },
      emergencyContact: {
        name: 'Sara Demo',
        relationship: 'Sister',
        phone: '03111234567',
      },
      documents: [],
    },
  },
  {
    _id: 'mock-student-1',
    role: 'student',
    firstName: 'Student1',
    lastName: 'Demo',
    fullName: 'Student1 Demo',
    email: 'student1@easeacademy.com',
    password: 'Student@123',
    branchId: MOCK_BRANCH._id,
    branchName: MOCK_BRANCH.name,
  },
  {
    _id: 'mock-parent-1',
    role: 'parent',
    firstName: 'Parent1',
    lastName: 'Demo',
    fullName: 'Parent1 Demo',
    email: 'parent1@easeacademy.com',
    password: 'Parent@123',
    branchId: MOCK_BRANCH._id,
    branchName: MOCK_BRANCH.name,
  },
  {
    _id: 'mock-staff-1',
    role: 'staff',
    firstName: 'Staff',
    lastName: 'One',
    fullName: 'Staff One',
    email: 'staff1@easeacademy.com',
    password: 'Staff@123',
    branchId: MOCK_BRANCH._id,
    branchName: MOCK_BRANCH.name,
  },
];

export function isMockModeEnabled() {
  return true;
}

export function getMockUsers() {
  return MOCK_USERS;
}

export function getMockBranches() {
  return MOCK_BRANCHES.map((branch) => ({ ...branch }));
}

export function getMockBranchById(branchId) {
  return MOCK_BRANCHES.find((branch) => branch._id === branchId) || null;
}

export function getMockDepartments(branchId = null) {
  return MOCK_DEPARTMENTS
    .filter((department) => !branchId || department.branchId === branchId)
    .map((department) => ({
      ...department,
      branchId: getMockBranchById(department.branchId) || department.branchId,
    }));
}

export function getMockBranchAdmins() {
  return MOCK_USERS.filter((user) => user.role === 'branch_admin').map((user) => {
    const branch = getMockBranchById(user.branchId);

    return {
      ...user,
      branchId: branch,
      branchName: branch?.name,
      status: user.status || 'active',
      lastLogin: user.lastLogin || new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      documents: user.adminProfile?.documents || [],
      profilePhoto: user.profilePhoto || null,
    };
  });
}

export function getMockUserByEmail(email) {
  return MOCK_USERS.find((user) => user.email.toLowerCase() === String(email || '').toLowerCase()) || null;
}

export function getMockUserById(userId) {
  return MOCK_USERS.find((user) => user._id === userId) || null;
}

export function toSafeMockUser(user) {
  if (!user) {
    return null;
  }

  return {
    _id: user._id,
    role: user.role,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    email: user.email,
    branchId: user.branchId,
    branchName: user.branchName,
    branchCode: user.branchId ? MOCK_BRANCH.code : undefined,
    isActive: true,
    adminProfile: user.adminProfile || { permissions: [] },
    permissions: user.adminProfile?.permissions || [],
  };
}

export function toMockClientUser(user) {
  if (!user) {
    return null;
  }

  const branch = user.branchId ? getMockBranchById(user.branchId) : null;

  return {
    ...toSafeMockUser(user),
    branchId: branch || user.branchId,
    branchName: branch?.name || user.branchName,
    branchCode: branch?.code || (user.branchId ? MOCK_BRANCH.code : undefined),
    branchIdValue: branch?._id || user.branchId,
  };
}

export function getMockBranchAdminDashboard() {
  return {
    stats: {
      students: {
        total: 100,
        active: 94,
        inactive: 6,
        thisMonth: 12,
        growth: 12,
      },
      teachers: {
        total: 10,
        active: 9,
        inactive: 1,
        thisMonth: 2,
        growth: 8,
      },
      classes: {
        total: 10,
      },
      subjects: {
        total: 60,
      },
      books: {
        total: 320,
      },
    },
    classDistribution: [
      { name: 'Grade 1 - A', code: 'G1A', studentCount: 10 },
      { name: 'Grade 1 - B', code: 'G1B', studentCount: 10 },
      { name: 'Grade 2 - A', code: 'G2A', studentCount: 10 },
      { name: 'Grade 2 - B', code: 'G2B', studentCount: 10 },
      { name: 'Grade 3 - A', code: 'G3A', studentCount: 10 },
    ],
    upcomingEvents: [
      {
        _id: 'event-1',
        title: 'PTM Meeting',
        startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'scheduled',
      },
      {
        _id: 'event-2',
        title: 'Weekly Assembly',
        startDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'scheduled',
      },
    ],
    branchInfo: {
      branchId: MOCK_BRANCH._id,
      branchName: MOCK_BRANCH.name,
    },
  };
}

export function getMockTeacherClasses() {
  return [
    {
      _id: 'cls-1',
      classId: 'mock-class-1',
      name: 'Grade 5 - Section A',
      code: 'G5A',
      className: 'Grade 5',
      section: 'A',
      subjectId: 'sub-math',
      subjectName: 'Mathematics',
      branchName: MOCK_BRANCH.name,
      timetableId: 'tt-1',
      schedule: [
        { day: 'Monday', startTime: '09:00', endTime: '09:40', periodNumber: 1, periodType: 'lecture' },
        { day: 'Wednesday', startTime: '10:00', endTime: '10:40', periodNumber: 2, periodType: 'lecture' },
      ],
      studentCount: 35,
      students: [],
      nextClass: 'Monday at 09:00',
    },
    {
      _id: 'cls-2',
      classId: 'mock-class-2',
      name: 'Grade 6 - Section B',
      code: 'G6B',
      className: 'Grade 6',
      section: 'B',
      subjectId: 'sub-sci',
      subjectName: 'Science',
      branchName: MOCK_BRANCH.name,
      timetableId: 'tt-2',
      schedule: [
        { day: 'Tuesday', startTime: '11:00', endTime: '11:40', periodNumber: 3, periodType: 'lecture' },
        { day: 'Thursday', startTime: '12:00', endTime: '12:40', periodNumber: 4, periodType: 'lecture' },
      ],
      studentCount: 31,
      students: [],
      nextClass: 'Tuesday at 11:00',
    },
  ];
}

export function getMockSuperAdminDashboardStats() {
  return {
    headerStats: {
      totalBranches: 1,
      activeBranches: 1,
      inactiveBranches: 0,
      branchGrowth: 0,
      totalStudents: 100,
      studentGrowth: 12,
      totalRevenue: 1250000,
      revenueChange: 15.2,
      systemUptime: 99.8,
      activeSessions: 6,
      peakSessions: 20,
      sessionChange: 5.7,
      feeCollectionRate: 78,
      collectedAmount: 980000,
      collectionChange: 3.2,
      totalClasses: 10,
      activeClasses: 10,
      totalTeachers: 10,
      totalEvents: 4,
      upcomingEvents: 2,
      totalExams: 30,
      scheduledExams: 24,
      totalExpenses: 57000,
      paidExpenses: 57000,
      pendingExpenses: 0,
      unreadNotifications: 3,
      activeFeeTemplates: 1,
    },
    performanceMetrics: {
      monthlyRevenue: 450000,
      revenueGrowth: 15.2,
      collectionEfficiency: 78,
      efficiencyChange: 3.2,
      outstandingAmount: 125000,
      outstandingChange: -5.1,
      avgAttendance: 92,
      attendanceChange: 2.1,
      passPercentage: 87,
      passChange: 4.3,
      activeStudents: 94,
      studentChange: 12,
      apiResponseTime: 145,
      responseChange: -12.5,
      systemUptime: 99.8,
      activeUsers: 6,
      userChange: 8,
      dailyActiveUsers: 4,
      dauChange: 7.2,
      loginSuccessRate: 98.5,
      loginChange: 0.8,
      avgSessionDuration: 24,
      sessionChange: -3.1,
      totalAttendanceRecords: 85,
      presentCount: 760,
      absentCount: 45,
      completedEvents: 2,
      completedExams: 6,
    },
    revenueAnalytics: {
      revenueTrend: [
        { month: 'Jul', revenue: 45000, target: 50000 },
        { month: 'Aug', revenue: 52000, target: 50000 },
        { month: 'Sep', revenue: 48000, target: 55000 },
        { month: 'Oct', revenue: 61000, target: 60000 },
        { month: 'Nov', revenue: 55000, target: 60000 },
        { month: 'Dec', revenue: 67000, target: 65000 },
      ],
      branchRevenue: [{ branch: MOCK_BRANCH.name, revenue: 220000, students: 100 }],
      collectionData: [
        { name: 'Collected', value: 780000, percentage: 78 },
        { name: 'Outstanding', value: 220000, percentage: 22 },
      ],
      paymentMethods: [
        { name: 'Online', value: 45 },
        { name: 'Cash', value: 30 },
        { name: 'Cheque', value: 15 },
        { name: 'Bank Transfer', value: 10 },
      ],
      expenseBreakdown: [
        { category: 'Salary', amount: 0 },
        { category: 'Utilities', amount: 45000 },
        { category: 'Supplies', amount: 12000 },
      ],
    },
    studentAnalytics: {
      enrollmentTrend: [
        { month: 'Jul', students: 70, new: 10 },
        { month: 'Aug', students: 80, new: 10 },
        { month: 'Sep', students: 88, new: 8 },
        { month: 'Oct', students: 92, new: 4 },
        { month: 'Nov', students: 96, new: 4 },
        { month: 'Dec', students: 100, new: 4 },
      ],
      branchDistribution: [{ branch: MOCK_BRANCH.name, students: 100, percentage: 100 }],
      gradeEnrollment: [
        { grade: 'Grade 1', students: 20 },
        { grade: 'Grade 2', students: 20 },
        { grade: 'Grade 3', students: 20 },
        { grade: 'Grade 4', students: 20 },
        { grade: 'Grade 5', students: 20 },
      ],
      attendanceTrend: [
        { month: 'Jul', rate: 90 },
        { month: 'Aug', rate: 91 },
        { month: 'Sep', rate: 92 },
        { month: 'Oct', rate: 93 },
        { month: 'Nov', rate: 92 },
        { month: 'Dec', rate: 92 },
      ],
      userRoleDistribution: [
        { role: 'Students', count: 100, percentage: 84 },
        { role: 'Teachers', count: 10, percentage: 8 },
        { role: 'Parents', count: 6, percentage: 5 },
        { role: 'Branch Admins', count: 1, percentage: 1 },
      ],
    },
    recentActivities: [
      {
        id: 'a1',
        type: 'seed',
        user: 'System',
        action: 'loaded demo mock data',
        target: '100 students, 10 teachers',
        timestamp: new Date().toISOString(),
        branch: MOCK_BRANCH.name,
      },
    ],
    systemAlerts: [
      {
        id: 1,
        priority: 'low',
        category: 'Demo',
        title: 'Mock Mode Enabled',
        message: 'App is running without MongoDB environment variable.',
        timestamp: new Date().toISOString(),
        actionRequired: false,
      },
    ],
    branchPerformance: [
      {
        id: MOCK_BRANCH._id,
        name: MOCK_BRANCH.name,
        code: MOCK_BRANCH.code,
        status: 'active',
        students: 100,
        teachers: 10,
        classes: 10,
        attendanceRate: 92,
        revenue: 220000,
        expenses: 57000,
      },
    ],
    summary: {
      totalBranches: 1,
      totalUsers: 118,
      totalStudents: 100,
      totalTeachers: 10,
      totalParents: 6,
      totalBranchAdmins: 1,
      totalSuperAdmins: 1,
      totalClasses: 10,
      totalEvents: 4,
      totalExams: 30,
      totalExpenses: 2,
      totalNotifications: 3,
      totalFeeTemplates: 1,
    },
  };
}

export { MOCK_BRANCH };
