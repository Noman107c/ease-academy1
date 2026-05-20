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
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/src/backend/models/Branch.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const branchSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Branch name is required'
        ],
        trim: true
    },
    code: {
        type: String,
        required: [
            true,
            'Branch code is required'
        ],
        unique: true,
        uppercase: true,
        trim: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    contact: {
        phone: String,
        email: String
    },
    location: {
        latitude: Number,
        longitude: Number,
        address: String
    },
    bankAccounts: [
        {
            accountTitle: String,
            serviceName: String,
            accountNo: String,
            iban: String,
            isDefault: {
                type: Boolean,
                default: false
            }
        }
    ],
    admin: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    status: {
        type: String,
        enum: [
            'active',
            'inactive'
        ],
        default: 'active'
    },
    settings: {
        type: Map,
        of: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
        default: {}
    }
}, {
    timestamps: true
});
const Branch = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Branch || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Branch', branchSchema);
const __TURBOPACK__default__export__ = Branch;
}),
"[project]/src/backend/models/User.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
// Import Branch model to ensure it's registered
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Branch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Branch.js [app-route] (ecmascript)");
;
;
;
const userSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    // ==================== COMMON FIELDS (ALL ROLES) ====================
    role: {
        type: String,
        required: [
            true,
            'Role is required'
        ],
        enum: [
            'super_admin',
            'branch_admin',
            'teacher',
            'student',
            'parent',
            'staff'
        ],
        index: true
    },
    // Basic Information
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    fullName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\S+@\S+\.\S+$/,
            'Please enter a valid email'
        ]
    },
    phone: {
        type: String,
        trim: true
    },
    alternatePhone: {
        type: String,
        trim: true
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        enum: [
            'male',
            'female',
            'other'
        ]
    },
    bloodGroup: {
        type: String,
        enum: [
            'A+',
            'A-',
            'B+',
            'B-',
            'AB+',
            'AB-',
            'O+',
            'O-'
        ]
    },
    religion: {
        type: String,
        trim: true
    },
    nationality: {
        type: String,
        default: 'Pakistani',
        trim: true
    },
    cnic: {
        type: String,
        trim: true,
        sparse: true
    },
    // Profile Photo (Cloudinary)
    profilePhoto: {
        url: {
            type: String
        },
        publicId: {
            type: String
        },
        uploadedAt: {
            type: Date
        }
    },
    // Address Information
    address: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        postalCode: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            default: 'Pakistan',
            trim: true
        }
    },
    // Branch Association
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        required: function() {
            return this.role !== 'super_admin';
        }
    },
    // ==================== AUTHENTICATION ====================
    expoPushToken: {
        type: String,
        default: null,
        trim: true
    },
    passwordHash: {
        type: String,
        required: true,
        select: false
    },
    refreshToken: {
        type: String,
        select: false
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date
    },
    loginHistory: [
        {
            timestamp: {
                type: Date,
                default: Date.now
            },
            ipAddress: String,
            userAgent: String,
            location: String,
            device: String
        }
    ],
    // ==================== STUDENT PROFILE ====================
    studentProfile: {
        registrationNumber: {
            type: String,
            uppercase: true,
            trim: true,
            sparse: true,
            unique: true
        },
        classId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'Class'
        },
        departmentId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'Department'
        },
        section: {
            type: String,
            trim: true
        },
        rollNumber: {
            type: String,
            trim: true
        },
        admissionDate: {
            type: Date
        },
        academicYear: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'AcademicYear'
        },
        // Previous School Information
        previousSchool: {
            name: {
                type: String,
                trim: true
            },
            lastClass: {
                type: String,
                trim: true
            },
            marks: {
                type: Number
            },
            leavingDate: {
                type: Date
            }
        },
        // Parent/Guardian Information
        father: {
            name: {
                type: String,
                trim: true
            },
            occupation: {
                type: String,
                trim: true
            },
            phone: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true,
                lowercase: true
            },
            cnic: {
                type: String,
                trim: true
            },
            income: {
                type: Number
            }
        },
        mother: {
            name: {
                type: String,
                trim: true
            },
            occupation: {
                type: String,
                trim: true
            },
            phone: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true,
                lowercase: true
            },
            cnic: {
                type: String,
                trim: true
            }
        },
        guardian: {
            name: {
                type: String,
                trim: true
            },
            relation: {
                type: String,
                trim: true
            },
            phone: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                trim: true,
                lowercase: true
            },
            cnic: {
                type: String,
                trim: true
            }
        },
        guardianType: {
            type: String,
            enum: [
                'parent',
                'guardian'
            ],
            default: 'parent'
        },
        // Fee Information
        feeDiscount: {
            type: {
                type: String,
                enum: [
                    'percentage',
                    'fixed'
                ],
                default: 'fixed'
            },
            amount: {
                type: Number,
                default: 0,
                min: 0
            },
            reason: {
                type: String,
                trim: true
            }
        },
        transportFee: {
            enabled: {
                type: Boolean,
                default: false
            },
            // routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'TransportRoute' },
            amount: {
                type: Number,
                default: 0
            }
        },
        // Student Documents (Cloudinary)
        documents: [
            {
                type: {
                    type: String
                },
                name: {
                    type: String,
                    trim: true
                },
                url: {
                    type: String
                },
                publicId: {
                    type: String
                },
                uploadedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
        // Generated QR for student (uploaded to Cloudinary)
        qr: {
            url: {
                type: String
            },
            publicId: {
                type: String
            },
            uploadedAt: {
                type: Date
            }
        }
    },
    // ==================== TEACHER PROFILE ====================
    teacherProfile: {
        employeeId: {
            type: String,
            uppercase: true,
            trim: true,
            sparse: true,
            unique: true
        },
        joiningDate: {
            type: Date
        },
        designation: {
            type: String,
            enum: [
                'Principal',
                'Vice Principal',
                'Head Teacher',
                'Senior Teacher',
                'Teacher',
                'Junior Teacher',
                'Subject Specialist',
                'Lab Instructor',
                'Physical Instructor',
                'Art Teacher',
                'Music Teacher',
                'Other'
            ]
        },
        departmentId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'Department'
        },
        department: {
            type: String,
            enum: [
                'Science',
                'Mathematics',
                'English',
                'Urdu',
                'Islamiyat',
                'Social Studies',
                'Computer Science',
                'Physics',
                'Chemistry',
                'Biology',
                'Commerce',
                'Arts',
                'Physical Education',
                'Other'
            ]
        },
        // Qualifications
        qualifications: [
            {
                degree: {
                    type: String
                },
                institution: {
                    type: String
                },
                yearOfCompletion: {
                    type: Number
                },
                grade: String,
                major: String
            }
        ],
        // Experience
        experience: {
            totalYears: {
                type: Number,
                default: 0
            },
            previousInstitutions: [
                {
                    institutionName: String,
                    designation: String,
                    fromDate: Date,
                    toDate: Date,
                    responsibilities: String
                }
            ]
        },
        // Subjects & Classes
        subjects: [
            {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'Subject'
            }
        ],
        classes: [
            {
                classId: {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                    ref: 'Class'
                },
                section: String,
                subjectId: {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                    ref: 'Subject'
                }
            }
        ],
        // Salary Information
        salaryDetails: {
            basicSalary: {
                type: Number
            },
            allowances: {
                houseRent: {
                    type: Number,
                    default: 0
                },
                medical: {
                    type: Number,
                    default: 0
                },
                transport: {
                    type: Number,
                    default: 0
                },
                other: {
                    type: Number,
                    default: 0
                }
            },
            deductions: {
                tax: {
                    type: Number,
                    default: 0
                },
                providentFund: {
                    type: Number,
                    default: 0
                },
                insurance: {
                    type: Number,
                    default: 0
                },
                other: {
                    type: Number,
                    default: 0
                }
            }
        },
        // Leave Balance
        leaveBalance: {
            casual: {
                type: Number,
                default: 15
            },
            sick: {
                type: Number,
                default: 10
            },
            annual: {
                type: Number,
                default: 20
            }
        },
        // Emergency Contact
        emergencyContact: {
            name: String,
            relationship: String,
            phone: String,
            alternatePhone: String
        },
        // Teacher Documents (CV, Resume, Certificates - Cloudinary)
        documents: [
            {
                type: {
                    type: String,
                    enum: [
                        'cnic',
                        'cv',
                        'resume',
                        'degree',
                        'certificate',
                        'experience_letter',
                        'photo',
                        'other'
                    ]
                },
                name: {
                    type: String,
                    trim: true
                },
                url: {
                    type: String
                },
                publicId: {
                    type: String
                },
                uploadedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
        // Generated QR for teacher (uploaded to Cloudinary)
        qr: {
            url: {
                type: String
            },
            publicId: {
                type: String
            },
            uploadedAt: {
                type: Date
            }
        },
        // Bank Account Details for Payroll
        bankAccount: {
            bankName: {
                type: String,
                trim: true
            },
            accountNumber: {
                type: String,
                trim: true
            },
            iban: {
                type: String,
                trim: true
            },
            branchCode: {
                type: String,
                trim: true
            }
        }
    },
    // ==================== STAFF PROFILE ====================
    staffProfile: {
        employeeId: {
            type: String,
            uppercase: true,
            trim: true,
            sparse: true,
            unique: true
        },
        joiningDate: {
            type: Date
        },
        departmentId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'Department'
        },
        role: {
            type: String,
            trim: true
        },
        shift: {
            type: String,
            enum: [
                'Morning',
                'Evening',
                'Night',
                'Rotating'
            ]
        },
        // Salary Information
        salaryDetails: {
            basicSalary: {
                type: Number
            },
            allowances: {
                houseRent: {
                    type: Number,
                    default: 0
                },
                medical: {
                    type: Number,
                    default: 0
                },
                transport: {
                    type: Number,
                    default: 0
                },
                other: {
                    type: Number,
                    default: 0
                }
            },
            deductions: {
                tax: {
                    type: Number,
                    default: 0
                },
                providentFund: {
                    type: Number,
                    default: 0
                },
                insurance: {
                    type: Number,
                    default: 0
                },
                other: {
                    type: Number,
                    default: 0
                }
            }
        },
        // Leave Balance
        leaveBalance: {
            casual: {
                type: Number,
                default: 12
            },
            sick: {
                type: Number,
                default: 10
            },
            annual: {
                type: Number,
                default: 15
            }
        },
        // Emergency Contact
        emergencyContact: {
            name: String,
            relationship: String,
            phone: String,
            alternatePhone: String
        },
        // Staff Documents (Cloudinary)
        documents: [
            {
                type: {
                    type: String,
                    enum: [
                        'cnic',
                        'cv',
                        'resume',
                        'certificate',
                        'experience_letter',
                        'photo',
                        'other'
                    ]
                },
                name: {
                    type: String,
                    trim: true
                },
                url: {
                    type: String
                },
                publicId: {
                    type: String
                },
                uploadedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ]
    },
    // ==================== ADMIN PROFILE ====================
    adminProfile: {
        permissions: [
            {
                type: String,
                enum: [
                    'manage_users',
                    'manage_branches',
                    'manage_students',
                    'manage_teachers',
                    'manage_staff',
                    'manage_fees',
                    'manage_salaries',
                    'manage_attendance',
                    'manage_exams',
                    'view_reports',
                    'manage_settings'
                ]
            }
        ],
        documents: [
            {
                type: {
                    type: String,
                    enum: [
                        'cnic',
                        'id_card',
                        'cv',
                        'certificate',
                        'photo',
                        'other'
                    ]
                },
                name: {
                    type: String,
                    trim: true
                },
                url: {
                    type: String
                },
                publicId: {
                    type: String
                },
                uploadedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ]
    },
    // ==================== PARENT PROFILE ====================
    parentProfile: {
        children: [
            {
                id: {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                    ref: 'User'
                },
                name: {
                    type: String,
                    trim: true
                },
                registrationNumber: {
                    type: String,
                    uppercase: true,
                    trim: true
                },
                dateOfBirth: {
                    type: Date
                },
                cnic: {
                    type: String,
                    trim: true
                },
                bFormNumber: {
                    type: String,
                    trim: true
                },
                gender: {
                    type: String,
                    enum: [
                        'male',
                        'female',
                        'other'
                    ]
                },
                className: {
                    type: String,
                    trim: true
                },
                classId: {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                    ref: 'Class'
                },
                section: {
                    type: String,
                    trim: true
                }
            }
        ],
        occupation: String,
        income: Number,
        fullName: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            match: [
                /^\S+@\S+\.\S+$/,
                'Please enter a valid email'
            ]
        },
        cnic: {
            type: String,
            trim: true
        },
        address: {
            street: {
                type: String,
                trim: true
            },
            city: {
                type: String,
                trim: true
            },
            state: {
                type: String,
                trim: true
            },
            postalCode: {
                type: String,
                trim: true
            },
            country: {
                type: String,
                default: 'Pakistan',
                trim: true
            }
        },
        dateOfBirth: {
            type: Date
        }
    },
    // ==================== METADATA ====================
    status: {
        type: String,
        enum: [
            'pending',
            'approved',
            'rejected',
            'active',
            'inactive',
            'graduated',
            'transferred',
            'expelled',
            'on_leave',
            'terminated',
            'resigned'
        ],
        default: 'active'
    },
    remarks: {
        type: String,
        trim: true
    },
    // Rejection fields for pending approvals
    rejectionReason: {
        type: String,
        trim: true
    },
    rejectedAt: {
        type: Date
    },
    rejectedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    resetPasswordToken: {
        type: String,
        select: false
    },
    resetPasswordExpires: {
        type: Date,
        select: false
    },
    verificationToken: {
        type: String,
        select: false
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
// ==================== INDEXES ====================
// Note: email, studentProfile.registrationNumber, teacherProfile.employeeId, staffProfile.employeeId
// already have unique indexes defined in schema, so no need to add them again here
userSchema.index({
    role: 1,
    branchId: 1
});
userSchema.index({
    role: 1,
    status: 1
});
userSchema.index({
    firstName: 1,
    lastName: 1
});
userSchema.index({
    'studentProfile.classId': 1
});
userSchema.index({
    'teacherProfile.departmentId': 1
});
userSchema.index({
    'staffProfile.departmentId': 1
});
userSchema.index({
    'parentProfile.children.id': 1
});
userSchema.index({
    isActive: 1
});
// ==================== METHODS ====================
// Compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(candidatePassword, this.passwordHash);
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
};
// Generate refresh token
userSchema.methods.generateRefreshToken = function() {
    const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
    return crypto.randomBytes(32).toString('hex');
};
// Check if user has permission
userSchema.methods.hasPermission = function(permission) {
    if (this.role === 'super_admin') return true;
    if (this.role === 'branch_admin' && this.adminProfile?.permissions) {
        return this.adminProfile.permissions.includes(permission);
    }
    return false;
};
// Generate employee ID for teacher/staff
userSchema.methods.generateEmployeeId = async function(branchCode) {
    const prefix = this.role === 'teacher' ? 'T' : 'S';
    const year = new Date().getFullYear();
    const count = await this.constructor.countDocuments({
        role: this.role,
        branchId: this.branchId
    });
    return `${branchCode}-${prefix}-${year}-${String(count + 1).padStart(3, '0')}`;
};
// Generate registration number for student
userSchema.methods.generateRegistrationNumber = async function(branchCode) {
    const year = new Date().getFullYear().toString().slice(-2);
    const count = await this.constructor.countDocuments({
        role: 'student',
        branchId: this.branchId
    });
    return `${branchCode}-${year}-${String(count + 1).padStart(4, '0')}`;
};
// Generate 6-digit random roll number
userSchema.methods.generateRollNumber = async function() {
    let rollNumber;
    let exists = true;
    while(exists){
        // Generate random 6-digit number
        rollNumber = Math.floor(100000 + Math.random() * 900000).toString();
        // Check if it exists in the same branch and class
        const existing = await this.constructor.findOne({
            role: 'student',
            branchId: this.branchId,
            'studentProfile.classId': this.studentProfile?.classId,
            'studentProfile.rollNumber': rollNumber
        });
        if (!existing) {
            exists = false;
        }
    }
    return rollNumber;
};
// Method to exclude sensitive fields from JSON response
userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.passwordHash;
    delete obj.refreshToken;
    delete obj.resetPasswordToken;
    delete obj.resetPasswordExpires;
    delete obj.verificationToken;
    delete obj.__v;
    return obj;
};
// ==================== STATIC METHODS ====================
// Find active users
userSchema.statics.findActive = function(filter = {}) {
    return this.find({
        ...filter,
        isActive: true
    });
};
// Find by role
userSchema.statics.findByRole = function(role, filter = {}) {
    return this.find({
        ...filter,
        role
    });
};
// ==================== MIDDLEWARE ====================
// Pre-save: Auto-set fullName
userSchema.pre('save', function(next) {
    if (this.firstName && this.lastName) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
    next();
});
// Pre-save: Hash password
userSchema.pre('save', async function(next) {
    if (!this.isModified('passwordHash')) {
        return next();
    }
    try {
        const salt = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].genSalt(10);
        this.passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(this.passwordHash, salt);
        next();
    } catch (error) {
        next(error);
    }
});
// Pre-save: Generate IDs
userSchema.pre('save', async function(next) {
    try {
        // Auto-generate employee ID for teacher/staff
        if ((this.role === 'teacher' || this.role === 'staff') && this.isNew) {
            const profileKey = this.role === 'teacher' ? 'teacherProfile' : 'staffProfile';
            if (!this[profileKey]?.employeeId && this.branchId) {
                const Branch = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Branch');
                const branch = await Branch.findById(this.branchId);
                const branchCode = branch?.code || 'SCH';
                this[profileKey] = this[profileKey] || {};
                if (typeof this.generateEmployeeId === 'function') {
                    this[profileKey].employeeId = await this.generateEmployeeId(branchCode);
                } else {
                    const prefix = this.role === 'teacher' ? 'T' : 'S';
                    const year = new Date().getFullYear();
                    const count = await this.constructor.countDocuments({
                        role: this.role,
                        branchId: this.branchId
                    });
                    this[profileKey].employeeId = `${branchCode}-${prefix}-${year}-${String(count + 1).padStart(3, '0')}`;
                }
            }
        }
        // Auto-generate registration number for student
        if (this.role === 'student') {
            if (!this.studentProfile?.registrationNumber && this.branchId) {
                const Branch = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Branch');
                const branch = await Branch.findById(this.branchId);
                const branchCode = branch?.code || 'SCH';
                this.studentProfile = this.studentProfile || {};
                if (typeof this.generateRegistrationNumber === 'function') {
                    this.studentProfile.registrationNumber = await this.generateRegistrationNumber(branchCode);
                } else {
                    const year = new Date().getFullYear().toString().slice(-2);
                    const count = await this.constructor.countDocuments({
                        role: 'student',
                        branchId: this.branchId
                    });
                    this.studentProfile.registrationNumber = `${branchCode}-${year}-${String(count + 1).padStart(4, '0')}`;
                }
            }
            // Auto-generate 6-digit roll number if missing
            if (!this.studentProfile?.rollNumber && this.branchId && this.studentProfile?.classId) {
                this.studentProfile = this.studentProfile || {};
                if (typeof this.generateRollNumber === 'function') {
                    this.studentProfile.rollNumber = await this.generateRollNumber();
                } else {
                    let rollNumber;
                    let exists = true;
                    while(exists){
                        rollNumber = Math.floor(100000 + Math.random() * 900000).toString();
                        const existing = await this.constructor.findOne({
                            role: 'student',
                            branchId: this.branchId,
                            'studentProfile.classId': this.studentProfile.classId,
                            'studentProfile.rollNumber': rollNumber
                        });
                        if (!existing) exists = false;
                    }
                    this.studentProfile.rollNumber = rollNumber;
                }
            }
        }
        next();
    } catch (error) {
        next(error);
    }
});
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('User', userSchema);
const __TURBOPACK__default__export__ = User;
}),
"[externals]/node:dns/promises [external] (node:dns/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:dns/promises", () => require("node:dns/promises"));

module.exports = mod;
}),
"[project]/src/lib/database.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isMockMode",
    ()=>isMockMode
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$dns$2f$promises__$5b$external$5d$__$28$node$3a$dns$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:dns/promises [external] (node:dns/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$dns$2f$promises__$5b$external$5d$__$28$node$3a$dns$2f$promises$2c$__cjs$29$__["default"].setServers([
    "8.8.8.8",
    "8.8.4.4"
]);
;
const MONGODB_URI = process.env.MONGODB_URI;
const ENABLE_REAL_DB = process.env.ENABLE_REAL_DB === 'true';
const MOCK_MODE = !ENABLE_REAL_DB || !MONGODB_URI;
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */ let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectDB() {
    if (MOCK_MODE) {
        return null;
    }
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            console.log('✅ MongoDB connected successfully');
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
function isMockMode() {
    return MOCK_MODE;
}
const __TURBOPACK__default__export__ = connectDB;
}),
"[project]/src/constants/roles.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// User Roles
__turbopack_context__.s([
    "PERMISSIONS",
    ()=>PERMISSIONS,
    "ROLES",
    ()=>ROLES,
    "getRolePermissions",
    ()=>getRolePermissions,
    "hasPermission",
    ()=>hasPermission
]);
const ROLES = {
    SUPER_ADMIN: 'super_admin',
    BRANCH_ADMIN: 'branch_admin',
    TEACHER: 'teacher',
    PARENT: 'parent',
    STUDENT: 'student'
};
const PERMISSIONS = {
    [ROLES.SUPER_ADMIN]: [
        'manage_all',
        'create_branch',
        'manage_branch_admin',
        'view_all_branches',
        'manage_settings'
    ],
    [ROLES.BRANCH_ADMIN]: [
        'manage_branch',
        'manage_teachers',
        'manage_students',
        'manage_classes',
        'view_reports'
    ],
    [ROLES.TEACHER]: [
        'view_students',
        'mark_attendance',
        'create_assignments',
        'grade_exams',
        'view_class'
    ],
    [ROLES.PARENT]: [
        'view_child',
        'view_attendance',
        'view_grades',
        'communicate_teacher'
    ],
    [ROLES.STUDENT]: [
        'view_profile',
        'view_attendance',
        'view_grades',
        'view_assignments'
    ]
};
const getRolePermissions = (role)=>PERMISSIONS[role] || [];
const hasPermission = (userRole, permission)=>{
    const permissions = getRolePermissions(userRole);
    return permissions.includes('manage_all') || permissions.includes(permission);
};
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
"[project]/src/backend/middleware/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticate",
    ()=>authenticate,
    "default",
    ()=>__TURBOPACK__default__export__,
    "extractToken",
    ()=>extractToken,
    "generateAccessToken",
    ()=>generateAccessToken,
    "generateRefreshToken",
    ()=>generateRefreshToken,
    "optionalAuth",
    ()=>optionalAuth,
    "requireBranch",
    ()=>requireBranch,
    "requirePermission",
    ()=>requirePermission,
    "requireRole",
    ()=>requireRole,
    "verifyToken",
    ()=>verifyToken,
    "withAuth",
    ()=>withAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/roles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.js [app-route] (ecmascript)");
;
;
;
;
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const JWT_REFRESH_EXPIRES_IN = '30d';
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new Error('Token has expired');
        }
        throw new Error('Invalid token');
    }
}
function generateAccessToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
}
function generateRefreshToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET, {
        expiresIn: JWT_REFRESH_EXPIRES_IN
    });
}
function extractToken(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.substring(7);
}
async function authenticate(request) {
    try {
        const token = extractToken(request);
        if (!token) {
            return {
                error: true,
                message: 'Authentication required. Please provide a valid token.',
                status: 401
            };
        }
        // Verify token
        let decoded;
        try {
            decoded = verifyToken(token);
        } catch (error) {
            return {
                error: true,
                message: error.message || 'Invalid or expired token',
                status: 401
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isMockMode"])()) {
            const mockUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMockUserById"])(decoded.userId);
            if (!mockUser) {
                return {
                    error: true,
                    message: 'User not found. Token may be invalid.',
                    status: 401
                };
            }
            const safeUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toSafeMockUser"])(mockUser);
            return {
                error: false,
                user: {
                    userId: safeUser._id,
                    email: safeUser.email,
                    fullName: safeUser.fullName,
                    firstName: safeUser.firstName,
                    lastName: safeUser.lastName,
                    role: safeUser.role,
                    branchId: safeUser.branchId,
                    branchName: safeUser.branchName,
                    permissions: safeUser.permissions || [],
                    profilePhoto: null
                },
                userDoc: {
                    _id: safeUser._id,
                    role: safeUser.role,
                    email: safeUser.email,
                    branchId: safeUser.branchId,
                    adminProfile: safeUser.adminProfile || {
                        permissions: []
                    },
                    isActive: true,
                    hasPermission: (permission)=>{
                        if (safeUser.role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ROLES"].SUPER_ADMIN) return true;
                        const permissions = safeUser.adminProfile?.permissions || [];
                        return permissions.includes(permission);
                    }
                }
            };
        }
        // Connect to database
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Find user and check if active
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(decoded.userId).select('+refreshToken').populate('branchId', 'name code');
        if (!user) {
            return {
                error: true,
                message: 'User not found. Token may be invalid.',
                status: 401
            };
        }
        if (!user.isActive) {
            return {
                error: true,
                message: 'Your account has been deactivated. Please contact administrator.',
                status: 403
            };
        }
        // Get full name based on new schema
        const fullName = user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim();
        return {
            error: false,
            user: {
                userId: user._id.toString(),
                email: user.email,
                fullName: fullName,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                branchId: user.branchId?._id?.toString() || user.branchId?.toString(),
                branchName: user.branchId?.name,
                permissions: user.adminProfile?.permissions || [],
                profilePhoto: user.profilePhoto?.url
            },
            userDoc: user
        };
    } catch (error) {
        console.error('Authentication error:', error);
        return {
            error: true,
            message: error.message || 'Authentication failed',
            status: 401
        };
    }
}
function requireRole(allowedRoles) {
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [
        allowedRoles
    ];
    return async (request, user)=>{
        if (!user || !user.role) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'User authentication required'
            }, {
                status: 401
            });
        }
        if (!roles.includes(user.role)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: `Access denied. Required role(s): ${roles.join(', ')}. Your role: ${user.role}`
            }, {
                status: 403
            });
        }
        return null; // No error, user has required role
    };
}
function requirePermission(requiredPermissions) {
    const permissions = Array.isArray(requiredPermissions) ? requiredPermissions : [
        requiredPermissions
    ];
    return async (request, user, userDoc)=>{
        if (!user || !userDoc) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'User authentication required'
            }, {
                status: 401
            });
        }
        // Super admin has all permissions
        if (user.role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ROLES"].SUPER_ADMIN) {
            return null;
        }
        // Check if user has at least one of the required permissions
        const hasPermission = permissions.some((perm)=>userDoc.hasPermission(perm));
        if (!hasPermission) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: `Access denied. Required permission(s): ${permissions.join(', ')}`
            }, {
                status: 403
            });
        }
        return null; // No error, user has permission
    };
}
function requireBranch(branchId) {
    return async (request, user)=>{
        // Super admin can access all branches
        if (user.role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ROLES"].SUPER_ADMIN) {
            return null;
        }
        if (!user.branchId || user.branchId !== branchId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Access denied. You do not belong to this branch.'
            }, {
                status: 403
            });
        }
        return null;
    };
}
function withAuth(handler, middlewares = []) {
    return async (request, context)=>{
        // Authenticate user
        const auth = await authenticate(request);
        if (auth.error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: auth.message
            }, {
                status: auth.status
            });
        }
        // Apply additional middlewares
        for (const middleware of middlewares){
            const result = await middleware(request, auth.user, auth.userDoc);
            if (result) {
                return result; // Middleware returned error response
            }
        }
        // Call the actual handler with context (params for dynamic routes)
        return handler(request, auth.user, auth.userDoc, context);
    };
}
async function optionalAuth(request) {
    try {
        const token = extractToken(request);
        if (!token) {
            return {
                error: false,
                user: null
            };
        }
        return await authenticate(request);
    } catch (error) {
        return {
            error: false,
            user: null
        };
    }
}
const __TURBOPACK__default__export__ = {
    verifyToken,
    generateAccessToken,
    generateRefreshToken,
    authenticate,
    requireRole,
    requirePermission,
    requireBranch,
    withAuth,
    optionalAuth
};
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/src/backend/utils/emailService.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Email Service Utility
 * Handles sending emails using Nodemailer
 * Configure SMTP settings in environment variables
 */ __turbopack_context__.s([
    "sendBulkEmail",
    ()=>sendBulkEmail,
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
let transporter = null;
// Initialize transporter (cached for performance)
const initializeTransporter = ()=>{
    if (transporter) return transporter;
    const emailService = process.env.EMAIL_SERVICE || 'gmail';
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = process.env.EMAIL_PORT || 587;
    if (emailHost) {
        // Custom SMTP server
        transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            host: emailHost,
            port: parseInt(emailPort),
            secure: emailPort === 465,
            auth: {
                user: emailUser,
                pass: emailPassword
            }
        });
    } else if (emailService === 'gmail' && emailUser && emailPassword) {
        // Gmail
        transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPassword
            }
        });
    } else {
        console.warn('Email service not configured. Emails will not be sent.');
        return null;
    }
    return transporter;
};
const sendEmail = async (to, subject, html)=>{
    try {
        const mailer = initializeTransporter();
        if (!mailer) {
            console.warn('Email service not configured. Skipping send.');
            return false;
        }
        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to,
            subject,
            html
        };
        await mailer.sendMail(mailOptions);
        console.log(`Email sent successfully to ${to}`);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};
const sendBulkEmail = async (to, subject, html)=>{
    try {
        const mailer = initializeTransporter();
        if (!mailer) {
            console.warn('Email service not configured. Skipping send.');
            return false;
        }
        const mailOptions = {
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: to.join(','),
            subject,
            html
        };
        await mailer.sendMail(mailOptions);
        console.log(`Email sent successfully to ${to.length} recipients`);
        return true;
    } catch (error) {
        console.error('Error sending bulk email:', error);
        return false;
    }
};
}),
"[project]/src/backend/templates/studentEmail.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Email Templates for Student Management
 * Returns HTML email body based on template type
 */ __turbopack_context__.s([
    "getStudentEmailTemplate",
    ()=>getStudentEmailTemplate
]);
const getStudentEmailTemplate = (type, student, schoolName = 'Ease Academy')=>{
    const baseStyles = `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `;
    const headerStyles = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 8px 8px 0 0;
  `;
    const containerStyles = `
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  `;
    const contentStyles = `
    padding: 30px;
    background: #f9f9f9;
  `;
    const detailsStyles = `
    background: white;
    padding: 20px;
    border-radius: 4px;
    margin: 20px 0;
    border-left: 4px solid #667eea;
  `;
    const footerStyles = `
    background: #f0f0f0;
    padding: 20px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `;
    const studentInfo = `
    <div style="${detailsStyles}">
      <h4 style="margin-top: 0; color: #667eea;">Student Information</h4>
      <table style="width: 100%; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
          <td style="padding: 8px 0;">${student.firstName} ${student.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Registration No:</td>
          <td style="padding: 8px 0;">${student.studentProfile?.registrationNumber || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Roll Number:</td>
          <td style="padding: 8px 0;">${student.studentProfile?.rollNumber || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0;">${student.email || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0;">${student.phone || 'N/A'}</td>
        </tr>
      </table>
    </div>
  `;
    if (type === 'STUDENT_CREATED') {
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${baseStyles} }
          .container { ${containerStyles} }
          .header { ${headerStyles} }
          .content { ${contentStyles} }
          .details { ${detailsStyles} }
          .footer { ${footerStyles} }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">🎓 ${schoolName}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Enrollment Confirmation</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <p>We are delighted to inform you that <strong>${student.firstName} ${student.lastName}</strong> has been successfully enrolled in ${schoolName}.</p>
            
            ${studentInfo}
            
            <div style="${detailsStyles}">
              <h4 style="margin-top: 0; color: #667eea;">Academic Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Class:</td>
                  <td style="padding: 8px 0;">${student.studentProfile?.classId?.name || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Section:</td>
                  <td style="padding: 8px 0;">${student.studentProfile?.section || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Admission Date:</td>
                  <td style="padding: 8px 0;">${new Date(student.studentProfile?.admissionDate || new Date()).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Academic Year:</td>
                  <td style="padding: 8px 0;">${student.studentProfile?.academicYear || 'N/A'}</td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">Please keep this enrollment confirmation for your records. If you have any questions or concerns, please don't hesitate to contact us.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${schoolName} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    if (type === 'STUDENT_UPDATED') {
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${baseStyles} }
          .container { ${containerStyles} }
          .header { ${headerStyles} }
          .content { ${contentStyles} }
          .details { ${detailsStyles} }
          .footer { ${footerStyles} }
          .alert { background: #ffeaa7; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #fdcb6e; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📝 ${schoolName}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Record Updated</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <p>This is to notify you that the enrollment record of <strong>${student.firstName} ${student.lastName}</strong> has been updated.</p>
            
            <div class="alert">
              <strong>⚠️ Important:</strong> Please review the updated information below to ensure all details are correct.
            </div>
            
            ${studentInfo}
            
            <div style="${detailsStyles}">
              <h4 style="margin-top: 0; color: #667eea;">Updated Academic Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Class:</td>
                  <td style="padding: 8px 0;">${student.studentProfile?.classId?.name || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Section:</td>
                  <td style="padding: 8px 0;">${student.studentProfile?.section || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: ${student.status === 'active' ? '#27ae60' : '#e74c3c'};">${student.status?.toUpperCase()}</strong></td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">If you believe this update was made in error, please contact the school administration immediately.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${schoolName} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    if (type === 'STUDENT_DEACTIVATED') {
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${baseStyles} }
          .container { ${containerStyles} }
          .header { ${headerStyles} }
          .content { ${contentStyles} }
          .details { ${detailsStyles} }
          .footer { ${footerStyles} }
          .alert { background: #fab1a0; padding: 15px; border-radius: 4px; margin: 15px 0; border-left: 4px solid #d63031; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header" style="background: linear-gradient(135deg, #d63031 0%, #e17055 100%);">
            <h2 style="margin: 0; font-size: 28px;">⚠️ ${schoolName}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Student Account Deactivated</p>
          </div>
          
          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear Parent/Guardian,</p>
            
            <div class="alert">
              <strong>Important Notice:</strong> The enrollment record of <strong>${student.firstName} ${student.lastName}</strong> has been deactivated.
            </div>
            
            <p>The student's account status has been changed to <strong>INACTIVE</strong>. This means:</p>
            <ul style="margin: 15px 0; padding-left: 20px;">
              <li>The student will not have access to the school system</li>
              <li>Records will be archived for future reference</li>
              <li>To reactivate, please contact school administration</li>
            </ul>
            
            ${studentInfo}
            
            <div style="${detailsStyles}">
              <h4 style="margin-top: 0; color: #d63031;">Current Status</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Account Status:</td>
                  <td style="padding: 8px 0;"><strong style="color: #e74c3c;">DEACTIVATED</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Deactivation Date:</td>
                  <td style="padding: 8px 0;">${new Date().toLocaleDateString()}</td>
                </tr>
              </table>
            </div>
            
            <p style="margin: 20px 0; color: #666; font-size: 14px;">If you wish to reactivate this account, please contact the school administration office.</p>
            
            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${schoolName} Administration</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    // Fee Voucher Generated
    if (type === 'fee_voucher_generated') {
        const { voucherNumber, amount, dueDate, month, year, category, discountAmount, lateFeeAmount, totalAmount } = student;
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Fee Voucher Generated</title>
      </head>
      <body style="${baseStyles}">
        <div style="${containerStyles}">
          <div style="${headerStyles}">
            <h1 style="margin: 0; font-size: 28px;">💳 Fee Voucher Generated</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">${schoolName}</p>
          </div>
          
          <div style="${contentStyles}">
            <p>Dear <strong>${student.studentName || student.name}</strong>,</p>
            
            <div style="${detailsStyles}">
              <strong>Your fee voucher has been generated successfully!</strong>
            </div>
            
            <div style="${detailsStyles}">
              <h4 style="margin-top: 0; color: #667eea;">Voucher Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Voucher Number:</td>
                  <td style="padding: 8px 0;"><strong style="color: #667eea;">${voucherNumber}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Fee Category:</td>
                  <td style="padding: 8px 0;">${category || 'Monthly Fee'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Month/Year:</td>
                  <td style="padding: 8px 0;">${month}/${year}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Base Amount:</td>
                  <td style="padding: 8px 0;">Rs. ${amount?.toLocaleString()}</td>
                </tr>
                ${discountAmount > 0 ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #27ae60;">Discount:</td>
                  <td style="padding: 8px 0; color: #27ae60;">- Rs. ${discountAmount?.toLocaleString()}</td>
                </tr>
                ` : ''}
                ${lateFeeAmount > 0 ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #e74c3c;">Late Fee:</td>
                  <td style="padding: 8px 0; color: #e74c3c;">+ Rs. ${lateFeeAmount?.toLocaleString()}</td>
                </tr>
                ` : ''}
                <tr style="border-top: 2px solid #667eea;">
                  <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">Total Amount:</td>
                  <td style="padding: 12px 0; font-weight: bold; font-size: 16px; color: #667eea;">Rs. ${totalAmount?.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Due Date:</td>
                  <td style="padding: 8px 0; color: #e74c3c;"><strong>${new Date(dueDate).toLocaleDateString()}</strong></td>
                </tr>
              </table>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000'}/api/super-admin/fee-vouchers/${student.voucherId || voucherNumber}/download" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                📄 Download Fee Voucher
              </a>
            </div>
            
            ${lateFeeAmount > 0 ? `
            <div style="background: #fff3cd; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <strong style="color: #856404;">⚠️ Late Fee Applied:</strong>
              <p style="margin: 5px 0 0 0; color: #856404;">A late fee of Rs. ${lateFeeAmount?.toLocaleString()} has been added due to previous unpaid fees.</p>
            </div>
            ` : ''}
            
            <div style="background: #d1ecf1; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #17a2b8;">
              <strong style="color: #0c5460;">💡 Payment Instructions:</strong>
              <ul style="margin: 10px 0; padding-left: 20px; color: #0c5460;">
                <li>Please pay before the due date to avoid late fees</li>
                <li>Quote your voucher number when making payment</li>
                <li>Payment can be made at the school office or online</li>
                <li>Keep the payment receipt for your records</li>
              </ul>
            </div>
            
            <p style="margin: 20px 0 0 0;">For any queries, please contact the accounts department.</p>
            <p style="margin: 10px 0 0 0;">Best regards,<br><strong>${schoolName} Accounts Department</strong></p>
          </div>
          
          <div style="${footerStyles}">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    // Exam Scheduled
    if (type === 'exam_scheduled') {
        const { studentName, examTitle, examType, examDate, subjectNames, className, schoolName } = student;
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { ${baseStyles} }
          .container { ${containerStyles} }
          .header { ${headerStyles} }
          .content { ${contentStyles} }
          .details { ${detailsStyles} }
          .footer { ${footerStyles} }
          .exam-alert { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 4px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0; font-size: 28px;">📚 ${schoolName}</h2>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Exam Schedule Notification</p>
          </div>

          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${studentName},</p>

            <div class="exam-alert">
              <strong>📅 New Exam Scheduled</strong>
            </div>

            <p>A new examination has been scheduled for your class. Please find the details below:</p>

            <div style="${detailsStyles}">
              <h4 style="margin-top: 0; color: #667eea;">Exam Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Exam Title:</td>
                  <td style="padding: 8px 0;">${examTitle}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Type:</td>
                  <td style="padding: 8px 0;">${examType.replace('_', ' ').toUpperCase()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Class:</td>
                  <td style="padding: 8px 0;">${className}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Date:</td>
                  <td style="padding: 8px 0;"><strong style="color: #e74c3c;">${examDate}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subjects:</td>
                  <td style="padding: 8px 0;">${subjectNames}</td>
                </tr>
              </table>
            </div>

            <div style="${detailsStyles}">
              <h4 style="margin-top: 0; color: #667eea;">Important Instructions</h4>
              <ul style="margin: 8px 0; padding-left: 20px;">
                <li>Make sure to arrive at least 15 minutes before the exam time</li>
                <li>Bring all necessary stationery and admit card</li>
                <li>Check the exam schedule regularly for any updates</li>
                <li>Contact your class teacher if you have any concerns</li>
              </ul>
            </div>

            <p style="margin: 20px 0; color: #666; font-size: 14px;">Best of luck for your examination! If you have any questions, please contact your class teacher or school administration.</p>

            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${schoolName} Administration</strong></p>
          </div>

          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    // Default template
    return `<html><body><p>Hello,</p><p>Student record updated.</p></body></html>`;
};
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[project]/src/lib/cloudinary.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteFromCloudinary",
    ()=>deleteFromCloudinary,
    "generateSignedUploadUrl",
    ()=>generateSignedUploadUrl,
    "getCloudinaryUrl",
    ()=>getCloudinaryUrl,
    "uploadMultipleToCloudinary",
    ()=>uploadMultipleToCloudinary,
    "uploadProfilePhoto",
    ()=>uploadProfilePhoto,
    "uploadQR",
    ()=>uploadQR,
    "uploadStaffDocument",
    ()=>uploadStaffDocument,
    "uploadStudentDocument",
    ()=>uploadStudentDocument,
    "uploadSyllabusPdf",
    ()=>uploadSyllabusPdf,
    "uploadTeacherDocument",
    ()=>uploadTeacherDocument,
    "uploadToCloudinary",
    ()=>uploadToCloudinary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cloudinary/cloudinary.js [app-route] (ecmascript)");
;
// Configure Cloudinary
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
async function uploadToCloudinary(file, options = {}) {
    try {
        const { folder = 'ease-academy', resourceType = 'auto', format, transformation } = options;
        const uploadOptions = {
            folder,
            resource_type: resourceType,
            ...format && {
                format
            },
            ...transformation && {
                transformation
            }
        };
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].uploader.upload(file, uploadOptions);
        return {
            url: result.secure_url,
            publicId: result.public_id,
            format: result.format,
            width: result.width,
            height: result.height,
            bytes: result.bytes,
            createdAt: result.created_at
        };
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error(`Failed to upload file: ${error.message}`);
    }
}
async function deleteFromCloudinary(publicId, resourceType = 'image') {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].uploader.destroy(publicId, {
            resource_type: resourceType
        });
        return result;
    } catch (error) {
        console.error('Cloudinary deletion error:', error);
        throw new Error(`Failed to delete file: ${error.message}`);
    }
}
async function uploadMultipleToCloudinary(files, options = {}) {
    try {
        const uploadPromises = files.map((file)=>uploadToCloudinary(file, options));
        return await Promise.all(uploadPromises);
    } catch (error) {
        console.error('Cloudinary multiple upload error:', error);
        throw new Error(`Failed to upload files: ${error.message}`);
    }
}
async function uploadProfilePhoto(file, userId) {
    return uploadToCloudinary(file, {
        folder: `ease-academy/profiles/${userId}`,
        transformation: [
            {
                width: 500,
                height: 500,
                crop: 'fill',
                gravity: 'face'
            },
            {
                quality: 'auto',
                fetch_format: 'auto'
            }
        ]
    });
}
async function uploadStudentDocument(file, studentId, documentType) {
    return uploadToCloudinary(file, {
        folder: `ease-academy/students/${studentId}/${documentType}`,
        resourceType: 'auto'
    });
}
async function uploadTeacherDocument(file, teacherId, documentType) {
    return uploadToCloudinary(file, {
        folder: `ease-academy/teachers/${teacherId}/${documentType}`,
        resourceType: 'auto'
    });
}
async function uploadStaffDocument(file, staffId, documentType) {
    return uploadToCloudinary(file, {
        folder: `ease-academy/staff/${staffId}/${documentType}`,
        resourceType: 'auto'
    });
}
async function uploadQR(dataUrl, userId, type) {
    return uploadToCloudinary(dataUrl, {
        folder: `ease-academy/${type}s/${userId}/qr`,
        resourceType: 'image'
    });
}
async function uploadSyllabusPdf(file, classId, branchId = null) {
    const folder = branchId ? `ease-academy/syllabus/${branchId}/${classId}` : `ease-academy/syllabus/${classId}`;
    return uploadToCloudinary(file, {
        folder,
        resourceType: 'auto'
    });
}
function getCloudinaryUrl(publicId, transformations = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].url(publicId, transformations);
}
function generateSignedUploadUrl(options = {}) {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"].utils.api_sign_request({
        timestamp,
        ...options
    }, process.env.CLOUDINARY_API_SECRET);
    return {
        signature,
        timestamp,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY
    };
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cloudinary$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v2"];
}),
"[project]/src/backend/models/Grade.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const gradeSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gradeNumber: {
        type: Number
    },
    levelId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Level'
    },
    code: {
        type: String,
        trim: true
    },
    academicYear: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'AcademicYear'
    },
    description: String,
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
gradeSchema.index({
    levelId: 1
});
gradeSchema.index({
    gradeNumber: 1
});
const Grade = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Grade || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Grade', gradeSchema);
const __TURBOPACK__default__export__ = Grade;
}),
"[project]/src/backend/models/Class.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Grade$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Grade.js [app-route] (ecmascript)");
;
;
const classSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Class name is required'
        ],
        trim: true
    },
    code: {
        type: String,
        required: [
            true,
            'Class code is required'
        ],
        unique: true,
        uppercase: true,
        trim: true
    },
    grade: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Grade',
        required: [
            true,
            'Grade is required'
        ]
    },
    sections: [
        {
            name: {
                type: String,
                required: true,
                trim: true
            },
            capacity: {
                type: Number,
                default: 40,
                min: 1
            },
            classTeacherId: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            roomNumber: {
                type: String,
                trim: true
            }
        }
    ],
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        required: [
            true,
            'Branch is required'
        ]
    },
    academicYear: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'AcademicYear',
        required: [
            true,
            'Academic year is required'
        ]
    },
    subjects: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'Subject'
        }
    ],
    feeTemplates: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'FeeTemplate'
        }
    ],
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: [
            'active',
            'inactive',
            'archived'
        ],
        default: 'active'
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
// Indexes (unique: true already creates index, so only add non-unique indexes)
// classSchema.index({ code: 1 }); // Removed - unique: true already creates this index
classSchema.index({
    branchId: 1
});
classSchema.index({
    academicYear: 1
});
classSchema.index({
    grade: 1
});
const Class = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Class || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Class', classSchema);
const __TURBOPACK__default__export__ = Class;
}),
"[project]/src/app/api/branch-admin/students/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//src/app/api/branch-admin/students/[id]/route.js
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/middleware/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$utils$2f$emailService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/utils/emailService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$templates$2f$studentEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/templates/studentEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cloudinary.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Class$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Class.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
// GET - Get all students for branch admin's branch
async function getStudents(request, authenticatedUser, userDoc) {
    try {
        if (authenticatedUser.role !== 'branch_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Access denied'
            }, {
                status: 403
            });
        }
        if (!authenticatedUser.branchId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'No branch assigned'
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const search = searchParams.get('search') || '';
        const classId = searchParams.get('classId');
        const status = searchParams.get('status');
        // Build query - only for this branch, role = student
        const query = {
            role: 'student',
            branchId: authenticatedUser.branchId
        };
        if (search) {
            query.$or = [
                {
                    firstName: {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    lastName: {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    email: {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    'studentProfile.registrationNumber': {
                        $regex: search,
                        $options: 'i'
                    }
                }
            ];
        }
        if (classId) {
            query['studentProfile.classId'] = classId;
        }
        if (status) {
            query.status = status;
        }
        const skip = (page - 1) * limit;
        const [students, total] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).populate('studentProfile.classId', 'name code').sort({
                createdAt: -1
            }).skip(skip).limit(limit).lean(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments(query)
        ]);
        console.log(`Fetched ${students.length} students for branch ${authenticatedUser.branchId}`);
        console.log(`Total students matching query: ${total}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                students,
                pagination: {
                    total,
                    page,
                    limit,
                    pages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        console.error('Get students error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message || 'Failed to fetch students'
        }, {
            status: 500
        });
    }
}
// POST - Create new student (only for branch admin's branch)
async function createStudent(request, authenticatedUser, userDoc) {
    try {
        if (authenticatedUser.role !== 'branch_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Access denied'
            }, {
                status: 403
            });
        }
        if (!authenticatedUser.branchId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'No branch assigned'
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await request.json();
        // Prepare student user data
        const userData = {
            role: 'student',
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone || '',
            alternatePhone: body.alternatePhone || '',
            dateOfBirth: body.dateOfBirth || null,
            gender: body.gender || 'male',
            bloodGroup: body.bloodGroup || '',
            religion: body.religion || '',
            nationality: body.nationality || 'Pakistani',
            cnic: body.cnic || '',
            passwordHash: body.password || `temp${Date.now()}`,
            branchId: authenticatedUser.branchId,
            createdBy: authenticatedUser.userId,
            isActive: true,
            status: body.status || 'active'
        };
        // Set address
        if (body.address) {
            userData.address = body.address;
        }
        // Set profile photo
        if (body.profilePhoto && typeof body.profilePhoto === 'object') {
            userData.profilePhoto = {
                url: body.profilePhoto.url || '',
                publicId: body.profilePhoto.publicId || '',
                uploadedAt: body.profilePhoto.uploadedAt || new Date()
            };
        }
        // Handle medical info
        if (body.medicalInfo) {
            // Store in remarks or a separate field if needed
            userData.remarks = userData.remarks || '';
        }
        // Handle emergency contact
        if (body.emergencyContact) {
        // Store in remarks or studentProfile if needed
        }
        // Map student-specific fields to studentProfile
        // Support both nested studentProfile and flat structure
        const studentProfileData = body.studentProfile || {};
        userData.studentProfile = {
            classId: studentProfileData.classId || body.classId || null,
            departmentId: studentProfileData.departmentId || body.departmentId || null,
            section: studentProfileData.section || body.section || '',
            rollNumber: studentProfileData.rollNumber || body.rollNumber || '',
            admissionDate: studentProfileData.admissionDate || body.admissionDate || body.enrollmentDate || new Date(),
            academicYear: studentProfileData.academicYear || body.academicYear || new Date().getFullYear().toString(),
            previousSchool: studentProfileData.previousSchool || {
                name: body.academicInfo?.previousSchool || body.previousSchool?.name || '',
                lastClass: body.academicInfo?.previousClass || body.previousSchool?.lastClass || '',
                marks: body.previousSchool?.marks || 0,
                leavingDate: body.previousSchool?.leavingDate || null
            },
            guardianType: studentProfileData.guardianType || body.guardianType || 'parent',
            father: studentProfileData.father || {
                name: body.parentInfo?.fatherName || body.father?.name || '',
                occupation: body.parentInfo?.fatherOccupation || body.father?.occupation || '',
                phone: body.parentInfo?.fatherPhone || body.father?.phone || '',
                email: body.parentInfo?.fatherEmail || body.father?.email || '',
                cnic: body.parentInfo?.fatherCnic || body.father?.cnic || '',
                income: body.father?.income || 0
            },
            mother: studentProfileData.mother || {
                name: body.parentInfo?.motherName || body.mother?.name || '',
                occupation: body.parentInfo?.motherOccupation || body.mother?.occupation || '',
                phone: body.parentInfo?.motherPhone || body.mother?.phone || '',
                email: body.parentInfo?.motherEmail || body.mother?.email || '',
                cnic: body.parentInfo?.motherCnic || body.mother?.cnic || ''
            },
            guardian: studentProfileData.guardian || {
                name: body.guardianInfo?.name || body.guardian?.name || '',
                relation: body.guardianInfo?.relationship || body.guardian?.relation || '',
                phone: body.guardianInfo?.phone || body.guardian?.phone || '',
                email: body.guardianInfo?.email || body.guardian?.email || '',
                cnic: body.guardianInfo?.cnic || body.guardian?.cnic || ''
            },
            feeDiscount: studentProfileData.feeDiscount || body.feeDiscount || {
                type: 'fixed',
                amount: 0,
                reason: ''
            },
            transportFee: studentProfileData.transportFee || body.transportFee || {
                enabled: false,
                routeId: null,
                amount: 0
            },
            documents: studentProfileData.documents || body.documents || []
        };
        // Validate class belongs to this branch if classId provided
        if (userData.studentProfile.classId) {
            const classDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Class$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(userData.studentProfile.classId);
            if (!classDoc || classDoc.branchId.toString() !== authenticatedUser.branchId.toString()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: 'Invalid class for this branch'
                }, {
                    status: 400
                });
            }
        }
        const student = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](userData);
        await student.save();
        // Handle profile photo upload if provided as base64
        if (body.pendingProfileFile && typeof body.pendingProfileFile === 'string' && body.pendingProfileFile.startsWith('data:image')) {
            try {
                const { uploadToCloudinary } = await __turbopack_context__.A("[project]/src/lib/cloudinary.js [app-route] (ecmascript, async loader)");
                const uploadResult = await uploadToCloudinary(body.pendingProfileFile, `students/profiles/${student._id}`);
                student.profilePhoto = {
                    url: uploadResult.url,
                    publicId: uploadResult.publicId,
                    uploadedAt: new Date()
                };
                await student.save();
            } catch (err) {
                console.error('Failed to upload profile photo:', err);
            }
        }
        // Send enrollment email to student's email if available
        try {
            if (student.email) {
                const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$templates$2f$studentEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStudentEmailTemplate"])('STUDENT_CREATED', student);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$utils$2f$emailService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])(student.email, 'Enrollment Confirmation', html);
            }
        } catch (err) {
            console.error('Failed to send student created email:', err);
        }
        // Generate QR payload and upload to Cloudinary
        try {
            const { generateStudentQR } = await __turbopack_context__.A("[project]/src/lib/qr-generator.js [app-route] (ecmascript, async loader)");
            const { uploadQR } = await __turbopack_context__.A("[project]/src/lib/cloudinary.js [app-route] (ecmascript, async loader)");
            const qrDataUrl = await generateStudentQR(student);
            if (qrDataUrl) {
                const uploadResult = await uploadQR(qrDataUrl, student._id, 'student');
                student.studentProfile = student.studentProfile || {};
                student.studentProfile.qr = {
                    url: uploadResult.url,
                    publicId: uploadResult.publicId,
                    uploadedAt: new Date()
                };
                await student.save();
            }
        } catch (err) {
            console.error('Failed to generate/upload QR for student:', err);
        }
        // Handle document uploads
        if (body.pendingDocuments && Array.isArray(body.pendingDocuments) && body.pendingDocuments.length > 0) {
            try {
                student.studentProfile = student.studentProfile || {};
                student.studentProfile.documents = student.studentProfile.documents || [];
                for (const doc of body.pendingDocuments){
                    if (doc.file && typeof doc.file === 'string' && doc.file.startsWith('data:')) {
                        const uploadResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uploadStudentDocument"])(doc.file, student._id, doc.type || 'other');
                        student.studentProfile.documents.push({
                            type: doc.type || 'other',
                            name: doc.name || 'Document',
                            url: uploadResult.url,
                            publicId: uploadResult.publicId,
                            uploadedAt: new Date()
                        });
                    }
                }
                await student.save();
            } catch (err) {
                console.error('Failed to upload documents for student:', err);
            // Don't fail the entire operation for document upload errors
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: student,
            message: 'Student created successfully'
        });
    } catch (error) {
        console.error('Create student error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message || 'Failed to create student'
        }, {
            status: 500
        });
    }
}
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(getStudents);
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(createStudent);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__55e63868._.js.map