module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/mock-data.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_BRANCH",
    ()=>MOCK_BRANCH,
    "getMockBranchAdminDashboard",
    ()=>getMockBranchAdminDashboard,
    "getMockSuperAdminDashboardStats",
    ()=>getMockSuperAdminDashboardStats,
    "getMockTeacherClasses",
    ()=>getMockTeacherClasses,
    "getMockUserByEmail",
    ()=>getMockUserByEmail,
    "getMockUserById",
    ()=>getMockUserById,
    "getMockUsers",
    ()=>getMockUsers,
    "isMockModeEnabled",
    ()=>isMockModeEnabled,
    "toSafeMockUser",
    ()=>toSafeMockUser
]);
const MOCK_BRANCH = {
    _id: 'mock-branch-main',
    name: 'Main Branch',
    code: 'MAIN'
};
const MOCK_USERS = [
    {
        _id: 'mock-super-admin-1',
        role: 'super_admin',
        firstName: 'Super',
        lastName: 'Admin',
        fullName: 'Super Admin',
        email: 'superadmin@easeacademy.com',
        password: 'SuperAdmin@123'
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
        adminProfile: {
            permissions: [
                'manage_users',
                'manage_students',
                'manage_teachers',
                'manage_attendance',
                'manage_exams',
                'view_reports'
            ]
        }
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
        branchName: MOCK_BRANCH.name
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
        branchName: MOCK_BRANCH.name
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
        branchName: MOCK_BRANCH.name
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
        branchName: MOCK_BRANCH.name
    }
];
function isMockModeEnabled() {
    return process.env.ENABLE_REAL_DB !== 'true' || !process.env.MONGODB_URI;
}
function getMockUsers() {
    return MOCK_USERS;
}
function getMockUserByEmail(email) {
    return MOCK_USERS.find((user)=>user.email.toLowerCase() === String(email || '').toLowerCase()) || null;
}
function getMockUserById(userId) {
    return MOCK_USERS.find((user)=>user._id === userId) || null;
}
function toSafeMockUser(user) {
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
        adminProfile: user.adminProfile || {
            permissions: []
        },
        permissions: user.adminProfile?.permissions || []
    };
}
function getMockBranchAdminDashboard() {
    return {
        stats: {
            students: {
                total: 100,
                active: 94,
                inactive: 6,
                thisMonth: 12,
                growth: 12
            },
            teachers: {
                total: 10,
                active: 9,
                inactive: 1,
                thisMonth: 2,
                growth: 8
            },
            classes: {
                total: 10
            },
            subjects: {
                total: 60
            },
            books: {
                total: 320
            }
        },
        classDistribution: [
            {
                name: 'Grade 1 - A',
                code: 'G1A',
                studentCount: 10
            },
            {
                name: 'Grade 1 - B',
                code: 'G1B',
                studentCount: 10
            },
            {
                name: 'Grade 2 - A',
                code: 'G2A',
                studentCount: 10
            },
            {
                name: 'Grade 2 - B',
                code: 'G2B',
                studentCount: 10
            },
            {
                name: 'Grade 3 - A',
                code: 'G3A',
                studentCount: 10
            }
        ],
        upcomingEvents: [
            {
                _id: 'event-1',
                title: 'PTM Meeting',
                startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
                status: 'scheduled'
            },
            {
                _id: 'event-2',
                title: 'Weekly Assembly',
                startDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
                status: 'scheduled'
            }
        ],
        branchInfo: {
            branchId: MOCK_BRANCH._id,
            branchName: MOCK_BRANCH.name
        }
    };
}
function getMockTeacherClasses() {
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
                {
                    day: 'Monday',
                    startTime: '09:00',
                    endTime: '09:40',
                    periodNumber: 1,
                    periodType: 'lecture'
                },
                {
                    day: 'Wednesday',
                    startTime: '10:00',
                    endTime: '10:40',
                    periodNumber: 2,
                    periodType: 'lecture'
                }
            ],
            studentCount: 35,
            students: [],
            nextClass: 'Monday at 09:00'
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
                {
                    day: 'Tuesday',
                    startTime: '11:00',
                    endTime: '11:40',
                    periodNumber: 3,
                    periodType: 'lecture'
                },
                {
                    day: 'Thursday',
                    startTime: '12:00',
                    endTime: '12:40',
                    periodNumber: 4,
                    periodType: 'lecture'
                }
            ],
            studentCount: 31,
            students: [],
            nextClass: 'Tuesday at 11:00'
        }
    ];
}
function getMockSuperAdminDashboardStats() {
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
            activeFeeTemplates: 1
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
            completedExams: 6
        },
        revenueAnalytics: {
            revenueTrend: [
                {
                    month: 'Jul',
                    revenue: 45000,
                    target: 50000
                },
                {
                    month: 'Aug',
                    revenue: 52000,
                    target: 50000
                },
                {
                    month: 'Sep',
                    revenue: 48000,
                    target: 55000
                },
                {
                    month: 'Oct',
                    revenue: 61000,
                    target: 60000
                },
                {
                    month: 'Nov',
                    revenue: 55000,
                    target: 60000
                },
                {
                    month: 'Dec',
                    revenue: 67000,
                    target: 65000
                }
            ],
            branchRevenue: [
                {
                    branch: MOCK_BRANCH.name,
                    revenue: 220000,
                    students: 100
                }
            ],
            collectionData: [
                {
                    name: 'Collected',
                    value: 780000,
                    percentage: 78
                },
                {
                    name: 'Outstanding',
                    value: 220000,
                    percentage: 22
                }
            ],
            paymentMethods: [
                {
                    name: 'Online',
                    value: 45
                },
                {
                    name: 'Cash',
                    value: 30
                },
                {
                    name: 'Cheque',
                    value: 15
                },
                {
                    name: 'Bank Transfer',
                    value: 10
                }
            ],
            expenseBreakdown: [
                {
                    category: 'Salary',
                    amount: 0
                },
                {
                    category: 'Utilities',
                    amount: 45000
                },
                {
                    category: 'Supplies',
                    amount: 12000
                }
            ]
        },
        studentAnalytics: {
            enrollmentTrend: [
                {
                    month: 'Jul',
                    students: 70,
                    new: 10
                },
                {
                    month: 'Aug',
                    students: 80,
                    new: 10
                },
                {
                    month: 'Sep',
                    students: 88,
                    new: 8
                },
                {
                    month: 'Oct',
                    students: 92,
                    new: 4
                },
                {
                    month: 'Nov',
                    students: 96,
                    new: 4
                },
                {
                    month: 'Dec',
                    students: 100,
                    new: 4
                }
            ],
            branchDistribution: [
                {
                    branch: MOCK_BRANCH.name,
                    students: 100,
                    percentage: 100
                }
            ],
            gradeEnrollment: [
                {
                    grade: 'Grade 1',
                    students: 20
                },
                {
                    grade: 'Grade 2',
                    students: 20
                },
                {
                    grade: 'Grade 3',
                    students: 20
                },
                {
                    grade: 'Grade 4',
                    students: 20
                },
                {
                    grade: 'Grade 5',
                    students: 20
                }
            ],
            attendanceTrend: [
                {
                    month: 'Jul',
                    rate: 90
                },
                {
                    month: 'Aug',
                    rate: 91
                },
                {
                    month: 'Sep',
                    rate: 92
                },
                {
                    month: 'Oct',
                    rate: 93
                },
                {
                    month: 'Nov',
                    rate: 92
                },
                {
                    month: 'Dec',
                    rate: 92
                }
            ],
            userRoleDistribution: [
                {
                    role: 'Students',
                    count: 100,
                    percentage: 84
                },
                {
                    role: 'Teachers',
                    count: 10,
                    percentage: 8
                },
                {
                    role: 'Parents',
                    count: 6,
                    percentage: 5
                },
                {
                    role: 'Branch Admins',
                    count: 1,
                    percentage: 1
                }
            ]
        },
        recentActivities: [
            {
                id: 'a1',
                type: 'seed',
                user: 'System',
                action: 'loaded demo mock data',
                target: '100 students, 10 teachers',
                timestamp: new Date().toISOString(),
                branch: MOCK_BRANCH.name
            }
        ],
        systemAlerts: [
            {
                id: 1,
                priority: 'low',
                category: 'Demo',
                title: 'Mock Mode Enabled',
                message: 'App is running without MongoDB environment variable.',
                timestamp: new Date().toISOString(),
                actionRequired: false
            }
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
                expenses: 57000
            }
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
            totalFeeTemplates: 1
        }
    };
}
;
}),
"[project]/src/app/api/auth/login/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.js [app-route] (ecmascript)");
;
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const JWT_REFRESH_EXPIRES_IN = '30d';
async function POST(request) {
    try {
        const body = await request.json();
        const { email, password } = body;
        // Validate required fields
        if (!email || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Email and password are required'
            }, {
                status: 400
            });
        }
        // If mock mode is enabled, bypass DB and return canned credentials
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isMockModeEnabled"])()) {
            const mockUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMockUserByEmail"])(email);
            if (!mockUser || mockUser.password !== password) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: 'Invalid email or password'
                }, {
                    status: 401
                });
            }
            const safeUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toSafeMockUser"])(mockUser);
            const tokenPayload = {
                userId: safeUser._id,
                email: safeUser.email,
                role: safeUser.role,
                branchId: safeUser.branchId
            };
            const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(tokenPayload, JWT_SECRET, {
                expiresIn: JWT_EXPIRES_IN
            });
            const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(tokenPayload, JWT_SECRET, {
                expiresIn: JWT_REFRESH_EXPIRES_IN
            });
            const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: {
                    user: safeUser,
                    accessToken,
                    refreshToken
                },
                message: 'Login successful (mock)'
            }, {
                status: 200
            });
            response.cookies.set('refreshToken', refreshToken, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            });
            return response;
        }
        const result = await __turbopack_context__.A("[project]/src/backend/controllers/authController.js [app-route] (ecmascript, async loader)").then((mod)=>mod.loginUser(email, password));
        // Set refresh token as httpOnly cookie
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
            status: 200
        });
        response.cookies.set('refreshToken', result.data.refreshToken, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        });
        return response;
    } catch (error) {
        console.error('Login error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message || 'Login failed'
        }, {
            status: 401
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__664dea82._.js.map