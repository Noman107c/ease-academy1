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
"[project]/src/backend/models/Attendance.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const AttendanceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
        index: true
    },
    classId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
        index: true
    },
    subjectId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Subject'
    },
    date: {
        type: Date,
        required: true,
        index: true
    },
    attendanceType: {
        type: String,
        enum: [
            'daily',
            'subject',
            'event'
        ],
        default: 'daily'
    },
    eventId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Event'
    },
    records: [
        {
            studentId: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            status: {
                type: String,
                enum: [
                    'present',
                    'absent',
                    'late',
                    'half_day',
                    'excused',
                    'leave'
                ],
                required: true
            },
            remarks: {
                type: String,
                trim: true
            },
            checkInTime: {
                type: String
            }
        }
    ],
    markedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    notes: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});
// Indexes
AttendanceSchema.index({
    branchId: 1,
    date: -1
});
AttendanceSchema.index({
    classId: 1,
    date: -1
});
// Unique per branch+class+date+attendanceType+(subjectId|eventId) to allow multiple types per day
AttendanceSchema.index({
    branchId: 1,
    classId: 1,
    date: -1,
    attendanceType: 1,
    subjectId: 1,
    eventId: 1
}, {
    unique: true
});
// Virtual for total students
AttendanceSchema.virtual('totalStudents').get(function() {
    return this.records.length;
});
// Virtual for present count
AttendanceSchema.virtual('presentCount').get(function() {
    return this.records.filter((r)=>r.status === 'present').length;
});
// Virtual for absent count
AttendanceSchema.virtual('absentCount').get(function() {
    return this.records.filter((r)=>r.status === 'absent').length;
});
// Virtual for attendance percentage
AttendanceSchema.virtual('attendancePercentage').get(function() {
    if (this.records.length === 0) return 0;
    return (this.presentCount / this.totalStudents * 100).toFixed(2);
});
const Attendance = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Attendance || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Attendance', AttendanceSchema);
const __TURBOPACK__default__export__ = Attendance;
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
"[project]/src/backend/models/Event.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const eventSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    title: {
        type: String,
        required: [
            true,
            'Event title is required'
        ],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    eventType: {
        type: String,
        enum: [
            'academic',
            'sports',
            'cultural',
            'meeting',
            'holiday',
            'exam',
            'other'
        ],
        default: 'other'
    },
    startDate: {
        type: Date,
        required: [
            true,
            'Start date is required'
        ]
    },
    endDate: {
        type: Date,
        required: [
            true,
            'End date is required'
        ]
    },
    startTime: String,
    endTime: String,
    location: String,
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        default: null
    },
    organizer: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    participants: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    targetAudience: {
        type: [
            String
        ],
        enum: [
            'students',
            'teachers',
            'parents',
            'all'
        ],
        default: [
            'all'
        ]
    },
    status: {
        type: String,
        enum: [
            'scheduled',
            'ongoing',
            'completed',
            'cancelled'
        ],
        default: 'scheduled'
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    attachments: [
        {
            name: String,
            url: String,
            type: String
        }
    ],
    reminders: [
        {
            time: Date,
            sent: {
                type: Boolean,
                default: false
            }
        }
    ],
    color: {
        type: String,
        default: '#3B82F6'
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});
// Indexes
eventSchema.index({
    startDate: 1,
    endDate: 1
});
eventSchema.index({
    branchId: 1
});
eventSchema.index({
    status: 1
});
eventSchema.index({
    eventType: 1
});
// Validate end date is after start date
eventSchema.pre('save', function(next) {
    if (this.endDate < this.startDate) {
        next(new Error('End date must be after start date'));
    }
    next();
});
// Static method to find upcoming events
eventSchema.statics.findUpcoming = function(branchId = null) {
    const query = {
        startDate: {
            $gte: new Date()
        },
        status: {
            $in: [
                'scheduled',
                'ongoing'
            ]
        }
    };
    if (branchId) {
        query.$or = [
            {
                branchId
            },
            {
                branchId: null
            }
        ];
    }
    return this.find(query).sort({
        startDate: 1
    });
};
const Event = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Event || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Event', eventSchema);
const __TURBOPACK__default__export__ = Event;
}),
"[project]/src/backend/models/Exam.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const ExamSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    examType: {
        type: String,
        enum: [
            'midterm',
            'final',
            'quiz',
            'unit_test',
            'mock',
            'surprise',
            'practical',
            'oral'
        ],
        required: true
    },
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        required: true,
        index: true
    },
    classId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
        index: true
    },
    section: {
        type: String,
        trim: true
    },
    subjects: [
        {
            subjectId: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'Subject',
                required: true
            },
            date: {
                type: Date,
                required: true
            },
            startTime: {
                type: String,
                required: true
            },
            endTime: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            totalMarks: {
                type: Number,
                required: true,
                default: 100
            },
            passingMarks: {
                type: Number,
                required: true
            },
            room: {
                type: String,
                trim: true
            },
            instructions: {
                type: String,
                trim: true
            },
            syllabus: {
                type: String,
                trim: true
            }
        }
    ],
    status: {
        type: String,
        enum: [
            'scheduled',
            'ongoing',
            'completed',
            'cancelled',
            'postponed',
            'graded',
            'active'
        ],
        default: 'scheduled'
    },
    results: [
        {
            studentId: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            subjectId: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'Subject',
                required: true
            },
            marksObtained: {
                type: Number,
                min: 0
            },
            grade: {
                type: String,
                trim: true
            },
            remarks: {
                type: String,
                trim: true
            },
            isAbsent: {
                type: Boolean,
                default: false
            },
            attachments: [
                {
                    name: String,
                    url: String,
                    publicId: String
                }
            ]
        }
    ],
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
// Indexes
ExamSchema.index({
    branchId: 1,
    'subjects.date': -1
});
ExamSchema.index({
    classId: 1
});
ExamSchema.index({
    status: 1
});
const Exam = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Exam || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Exam', ExamSchema);
const __TURBOPACK__default__export__ = Exam;
}),
"[project]/src/backend/models/Expense.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const expenseSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    title: {
        type: String,
        required: [
            true,
            'Expense title is required'
        ],
        trim: true
    },
    description: String,
    amount: {
        type: Number,
        required: [
            true,
            'Amount is required'
        ],
        min: 0
    },
    category: {
        type: String,
        enum: [
            'salary',
            'utilities',
            'maintenance',
            'supplies',
            'equipment',
            'transportation',
            'marketing',
            'other'
        ],
        required: [
            true,
            'Category is required'
        ]
    },
    date: {
        type: Date,
        required: [
            true,
            'Date is required'
        ],
        default: Date.now
    },
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        required: [
            true,
            'Branch is required'
        ]
    },
    paymentMethod: {
        type: String,
        enum: [
            'cash',
            'bank_transfer',
            'cheque',
            'credit_card',
            'online'
        ],
        default: 'cash'
    },
    paymentStatus: {
        type: String,
        enum: [
            'pending',
            'paid',
            'partially_paid',
            'cancelled'
        ],
        default: 'pending'
    },
    paidAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    vendor: {
        name: String,
        contact: String,
        email: String
    },
    invoice: {
        number: String,
        url: String
    },
    receipt: {
        number: String,
        url: String
    },
    approvedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    approvalDate: Date,
    notes: String,
    tags: [
        String
    ],
    isRecurring: {
        type: Boolean,
        default: false
    },
    recurringFrequency: {
        type: String,
        enum: [
            'daily',
            'weekly',
            'monthly',
            'yearly'
        ]
    },
    // Event-related fields
    isEventExpense: {
        type: Boolean,
        default: false
    },
    eventId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Event'
    },
    eventDetails: {
        title: String,
        eventType: String,
        startDate: Date,
        endDate: Date
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});
// Indexes
expenseSchema.index({
    branchId: 1,
    date: -1
});
expenseSchema.index({
    category: 1
});
expenseSchema.index({
    paymentStatus: 1
});
expenseSchema.index({
    date: 1
});
// Virtual for balance
expenseSchema.virtual('balance').get(function() {
    return this.amount - this.paidAmount;
});
// Method to check if fully paid
expenseSchema.methods.isFullyPaid = function() {
    return this.paidAmount >= this.amount;
};
const Expense = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Expense || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Expense', expenseSchema);
const __TURBOPACK__default__export__ = Expense;
}),
"[project]/src/backend/models/Notification.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const notificationSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    type: {
        type: String,
        enum: [
            'assignment',
            'quiz',
            'announcement',
            'general',
            'fee_voucher',
            'fee_payment',
            'fee_reminder',
            'fee_overdue',
            'admission',
            'attendance',
            'exam',
            'result',
            'leave',
            'event',
            'holiday'
        ],
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    targetUser: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    childId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String,
        trim: true
    },
    dueDate: {
        type: Date
    },
    isRead: {
        type: Boolean,
        default: false
    },
    isHidden: {
        type: Boolean,
        default: false
    },
    metadata: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
    }
}, {
    timestamps: true
});
// Indexes
notificationSchema.index({
    targetUser: 1,
    createdAt: -1
});
notificationSchema.index({
    childId: 1,
    createdAt: -1
});
notificationSchema.index({
    type: 1,
    createdAt: -1
});
const Notification = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Notification || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Notification', notificationSchema);
const __TURBOPACK__default__export__ = Notification;
}),
"[project]/src/backend/models/FeeTemplate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const feeTemplateSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Template name is required'
        ],
        trim: true,
        minlength: [
            2,
            'Template name must be at least 2 characters'
        ],
        maxlength: [
            100,
            'Template name cannot exceed 100 characters'
        ]
    },
    code: {
        type: String,
        required: [
            true,
            'Template code is required'
        ],
        unique: true,
        uppercase: true,
        trim: true
    },
    items: [
        {
            name: {
                type: String,
                required: [
                    true,
                    'Item name is required'
                ],
                trim: true
            },
            amount: {
                type: Number,
                required: [
                    true,
                    'Item amount is required'
                ],
                min: [
                    0,
                    'Amount cannot be negative'
                ]
            },
            discount: {
                enabled: {
                    type: Boolean,
                    default: false
                },
                type: {
                    type: String,
                    enum: [
                        'fixed',
                        'percentage'
                    ],
                    default: 'fixed'
                },
                amount: {
                    type: Number,
                    default: 0,
                    min: 0
                }
            }
        }
    ],
    baseAmount: {
        type: Number,
        default: 0,
        min: [
            0,
            'Base amount cannot be negative'
        ]
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    frequency: {
        type: String,
        required: [
            true,
            'Frequency is required'
        ],
        enum: [
            'one-time',
            'monthly',
            'quarterly',
            'half-yearly',
            'annually'
        ],
        default: 'monthly'
    },
    applicableTo: {
        type: String,
        enum: [
            'all',
            'class-specific',
            'student-specific'
        ],
        default: 'all'
    },
    classes: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
            ref: 'Class'
        }
    ],
    sections: [
        {
            type: String,
            trim: true
        }
    ],
    dueDate: {
        day: {
            type: Number,
            min: 1,
            max: 31,
            default: 1
        },
        month: {
            type: Number,
            min: 1,
            max: 12
        }
    },
    lateFee: {
        enabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            enum: [
                'fixed',
                'percentage'
            ],
            default: 'fixed'
        },
        amount: {
            type: Number,
            default: 0,
            min: 0
        },
        graceDays: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    discount: {
        enabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            enum: [
                'fixed',
                'percentage'
            ],
            default: 'fixed'
        },
        amount: {
            type: Number,
            default: 0,
            min: 0
        },
        criteria: {
            type: String,
            trim: true
        }
    },
    paymentMethods: [
        {
            type: String,
            enum: [
                'cash',
                'bank-transfer',
                'online',
                'cheque',
                'card'
            ]
        }
    ],
    status: {
        type: String,
        enum: [
            'active',
            'inactive',
            'archived'
        ],
        default: 'active'
    },
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch'
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
// Pre-save hook to calculate totalAmount
feeTemplateSchema.pre('save', function(next) {
    let sum = this.baseAmount || 0;
    if (this.items && this.items.length > 0) {
        sum += this.items.reduce((total, item)=>{
            let itemTotal = item.amount;
            if (item.discount && item.discount.enabled) {
                if (item.discount.type === 'fixed') {
                    itemTotal -= item.discount.amount;
                } else if (item.discount.type === 'percentage') {
                    itemTotal -= item.amount * item.discount.amount / 100;
                }
            }
            return total + Math.max(0, itemTotal);
        }, 0);
    }
    // Apply global discount if enabled
    if (this.discount && this.discount.enabled) {
        if (this.discount.type === 'fixed') {
            sum -= this.discount.amount;
        } else if (this.discount.type === 'percentage') {
            sum -= sum * this.discount.amount / 100;
        }
    }
    this.totalAmount = Math.max(0, sum);
    next();
});
// Indexes for faster queries
feeTemplateSchema.index({
    code: 1
});
feeTemplateSchema.index({
    status: 1
});
feeTemplateSchema.index({
    branchId: 1
});
feeTemplateSchema.index({
    totalAmount: 1
});
const FeeTemplate = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.FeeTemplate || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('FeeTemplate', feeTemplateSchema);
const __TURBOPACK__default__export__ = FeeTemplate;
}),
"[project]/src/app/api/super-admin/dashboard/stats/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/middleware/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Branch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Branch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Attendance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Attendance.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Class$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Class.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Event$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Event.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Exam$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Exam.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Expense$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Expense.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Notification$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Notification.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeTemplate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/FeeTemplate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
async function handler(request) {
    try {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isMockMode"])()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMockSuperAdminDashboardStats"])()
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Get current date and date ranges
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();
        const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const lastMonthYear = currentMonth === 1 ? currentYear - 1 : currentYear;
        // Get all branches
        const branches = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Branch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        const activeBranches = branches.filter((b)=>b.status === 'active').length;
        const inactiveBranches = branches.filter((b)=>b.status === 'inactive').length;
        // Get all users with detailed stats
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        const students = users.filter((u)=>u.role === 'student');
        const teachers = users.filter((u)=>u.role === 'teacher');
        const parents = users.filter((u)=>u.role === 'parent');
        const branchAdmins = users.filter((u)=>u.role === 'branch-admin');
        const superAdmins = users.filter((u)=>u.role === 'super-admin');
        // Get classes data
        const classes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Class$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).populate('grade', 'name').populate('branchId', 'name');
        const activeClasses = classes.filter((c)=>c.status === 'active').length;
        // Get attendance data
        const attendanceRecords = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Attendance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            date: {
                $gte: new Date(now.getFullYear(), now.getMonth(), 1)
            }
        }).populate('branchId', 'name');
        const totalAttendanceRecords = attendanceRecords.length;
        const totalStudentsMarked = attendanceRecords.reduce((sum, att)=>sum + att.records.length, 0);
        const presentCount = attendanceRecords.reduce((sum, att)=>sum + att.records.filter((r)=>r.status === 'present').length, 0);
        const absentCount = attendanceRecords.reduce((sum, att)=>sum + att.records.filter((r)=>r.status === 'absent').length, 0);
        const avgAttendance = totalStudentsMarked > 0 ? (presentCount / totalStudentsMarked * 100).toFixed(1) : 0;
        // Get events data
        const events = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Event$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        const upcomingEvents = events.filter((e)=>e.startDate > now && e.status === 'scheduled').length;
        const completedEvents = events.filter((e)=>e.status === 'completed').length;
        // Get exams data
        const exams = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Exam$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        const scheduledExams = exams.filter((e)=>e.status === 'scheduled').length;
        const completedExams = exams.filter((e)=>e.status === 'completed').length;
        // Get expenses data
        const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Expense$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        const totalExpenses = expenses.reduce((sum, exp)=>sum + exp.amount, 0);
        const paidExpenses = expenses.filter((e)=>e.paymentStatus === 'paid').reduce((sum, exp)=>sum + exp.amount, 0);
        const pendingExpenses = expenses.filter((e)=>e.paymentStatus === 'pending').reduce((sum, exp)=>sum + exp.amount, 0);
        // Get notifications data
        const notifications = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Notification$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        const unreadNotifications = notifications.filter((n)=>!n.isRead).length;
        // Get fee templates
        const feeTemplates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeTemplate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({});
        const activeFeeTemplates = feeTemplates.filter((ft)=>ft.status === 'active').length;
        // Calculate growth rates (comparing with last month)
        const lastMonthUsers = users.filter((u)=>u.createdAt && u.createdAt.getMonth() === lastMonth - 1 && u.createdAt.getFullYear() === lastMonthYear).length;
        const currentMonthUsers = users.filter((u)=>u.createdAt && u.createdAt.getMonth() === currentMonth - 1 && u.createdAt.getFullYear() === currentYear).length;
        const userGrowth = lastMonthUsers > 0 ? ((currentMonthUsers - lastMonthUsers) / lastMonthUsers * 100).toFixed(1) : 0;
        const branchGrowth = activeBranches > 0 ? 12.5 : 0;
        const studentGrowth = students.length > 0 ? parseFloat(userGrowth) : 0;
        // Header Statistics
        const headerStats = {
            totalBranches: branches.length,
            activeBranches,
            inactiveBranches,
            branchGrowth: parseFloat(branchGrowth),
            totalStudents: students.length,
            studentGrowth: parseFloat(studentGrowth),
            totalRevenue: 1250000,
            revenueChange: 15.2,
            systemUptime: 99.8,
            activeSessions: users.filter((u)=>u.lastLogin && now - new Date(u.lastLogin) < 24 * 60 * 60 * 1000).length,
            peakSessions: Math.floor(users.length * 0.6),
            sessionChange: 5.7,
            feeCollectionRate: 78,
            collectedAmount: 980000,
            collectionChange: 3.2,
            totalClasses: classes.length,
            activeClasses,
            totalTeachers: teachers.length,
            totalEvents: events.length,
            upcomingEvents,
            totalExams: exams.length,
            scheduledExams,
            totalExpenses: totalExpenses,
            paidExpenses: paidExpenses,
            pendingExpenses: pendingExpenses,
            unreadNotifications,
            activeFeeTemplates
        };
        // Performance Metrics
        const performanceMetrics = {
            monthlyRevenue: 450000,
            revenueGrowth: 15.2,
            collectionEfficiency: 78,
            efficiencyChange: 3.2,
            outstandingAmount: 125000,
            outstandingChange: -5.1,
            avgAttendance: parseFloat(avgAttendance),
            attendanceChange: 2.1,
            passPercentage: 87,
            passChange: 4.3,
            activeStudents: students.length,
            studentChange: parseFloat(studentGrowth),
            apiResponseTime: 145,
            responseChange: -12.5,
            systemUptime: 99.8,
            activeUsers: users.length,
            userChange: parseFloat(userGrowth),
            dailyActiveUsers: Math.floor(users.length * 0.4),
            dauChange: 7.2,
            loginSuccessRate: 98.5,
            loginChange: 0.8,
            avgSessionDuration: 24,
            sessionChange: -3.1,
            totalAttendanceRecords,
            presentCount,
            absentCount,
            completedEvents,
            completedExams
        };
        // Revenue Analytics
        const revenueAnalytics = {
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
            branchRevenue: branches.slice(0, 6).map((branch)=>({
                    branch: branch.name,
                    revenue: Math.floor(Math.random() * 50000) + 75000,
                    students: students.filter((s)=>s.branchId?.toString() === branch._id.toString()).length
                })),
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
                    amount: expenses.filter((e)=>e.category === 'salary').reduce((sum, e)=>sum + e.amount, 0)
                },
                {
                    category: 'Utilities',
                    amount: expenses.filter((e)=>e.category === 'utilities').reduce((sum, e)=>sum + e.amount, 0)
                },
                {
                    category: 'Maintenance',
                    amount: expenses.filter((e)=>e.category === 'maintenance').reduce((sum, e)=>sum + e.amount, 0)
                },
                {
                    category: 'Supplies',
                    amount: expenses.filter((e)=>e.category === 'supplies').reduce((sum, e)=>sum + e.amount, 0)
                }
            ]
        };
        // Student Analytics
        const studentAnalytics = {
            enrollmentTrend: [
                {
                    month: 'Jul',
                    students: Math.max(1200, students.length - 150),
                    new: 50
                },
                {
                    month: 'Aug',
                    students: Math.max(1235, students.length - 120),
                    new: 35
                },
                {
                    month: 'Sep',
                    students: Math.max(1278, students.length - 90),
                    new: 43
                },
                {
                    month: 'Oct',
                    students: Math.max(1305, students.length - 60),
                    new: 27
                },
                {
                    month: 'Nov',
                    students: Math.max(1342, students.length - 30),
                    new: 37
                },
                {
                    month: 'Dec',
                    students: students.length,
                    new: 47
                }
            ],
            branchDistribution: branches.slice(0, 6).map((branch, idx)=>{
                const branchStudents = students.filter((s)=>s.branchId?.toString() === branch._id.toString()).length;
                return {
                    branch: branch.name,
                    students: branchStudents,
                    percentage: students.length > 0 ? Math.round(branchStudents / students.length * 100) : 0
                };
            }),
            gradeEnrollment: [
                {
                    grade: 'Grade 1',
                    students: Math.floor(students.length * 0.12)
                },
                {
                    grade: 'Grade 2',
                    students: Math.floor(students.length * 0.11)
                },
                {
                    grade: 'Grade 3',
                    students: Math.floor(students.length * 0.10)
                },
                {
                    grade: 'Grade 4',
                    students: Math.floor(students.length * 0.12)
                },
                {
                    grade: 'Grade 5',
                    students: Math.floor(students.length * 0.11)
                },
                {
                    grade: 'Grade 6',
                    students: Math.floor(students.length * 0.11)
                },
                {
                    grade: 'Grade 7',
                    students: Math.floor(students.length * 0.10)
                },
                {
                    grade: 'Grade 8',
                    students: Math.floor(students.length * 0.11)
                }
            ],
            attendanceTrend: [
                {
                    month: 'Jul',
                    rate: 92
                },
                {
                    month: 'Aug',
                    rate: 94
                },
                {
                    month: 'Sep',
                    rate: 91
                },
                {
                    month: 'Oct',
                    rate: 95
                },
                {
                    month: 'Nov',
                    rate: 93
                },
                {
                    month: 'Dec',
                    rate: parseFloat(avgAttendance)
                }
            ],
            userRoleDistribution: [
                {
                    role: 'Students',
                    count: students.length,
                    percentage: users.length > 0 ? Math.round(students.length / users.length * 100) : 0
                },
                {
                    role: 'Teachers',
                    count: teachers.length,
                    percentage: users.length > 0 ? Math.round(teachers.length / users.length * 100) : 0
                },
                {
                    role: 'Parents',
                    count: parents.length,
                    percentage: users.length > 0 ? Math.round(parents.length / users.length * 100) : 0
                },
                {
                    role: 'Branch Admins',
                    count: branchAdmins.length,
                    percentage: users.length > 0 ? Math.round(branchAdmins.length / users.length * 100) : 0
                }
            ]
        };
        // Recent Activities - More comprehensive
        const recentActivities = [
            ...users.slice(0, 5).map((user, idx)=>({
                    id: `user_${idx}`,
                    type: 'user_created',
                    user: user.firstName + ' ' + user.lastName || 'New User',
                    action: 'joined the system',
                    target: user.role,
                    timestamp: user.createdAt || new Date(Date.now() - (idx + 1) * 5 * 60 * 1000),
                    branch: branches.find((b)=>b._id.toString() === user.branchId?.toString())?.name || 'Main Campus'
                })),
            ...events.slice(0, 3).map((event, idx)=>({
                    id: `event_${idx}`,
                    type: 'event_created',
                    user: 'System',
                    action: 'scheduled new event',
                    target: event.title,
                    timestamp: event.createdAt || new Date(Date.now() - (idx + 1) * 10 * 60 * 1000),
                    branch: branches.find((b)=>b._id.toString() === event.branchId?.toString())?.name || 'All Branches'
                })),
            ...exams.slice(0, 2).map((exam, idx)=>({
                    id: `exam_${idx}`,
                    type: 'exam_scheduled',
                    user: 'Academic Team',
                    action: 'scheduled exam',
                    target: exam.title,
                    timestamp: exam.createdAt || new Date(Date.now() - (idx + 1) * 15 * 60 * 1000),
                    branch: branches.find((b)=>b._id.toString() === exam.branchId?.toString())?.name || 'Main Campus'
                }))
        ].sort((a, b)=>new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 10);
        // System Alerts - More comprehensive
        const systemAlerts = [
            {
                id: 1,
                priority: activeBranches > 3 ? 'high' : 'low',
                category: 'System',
                title: 'Branch Activity',
                message: `${activeBranches} active branches - ${inactiveBranches} inactive`,
                timestamp: new Date(),
                actionRequired: inactiveBranches > 2
            },
            {
                id: 2,
                priority: students.length < 100 ? 'high' : 'low',
                category: 'Academic',
                title: 'Student Enrollment',
                message: `Total ${students.length} students enrolled across ${activeBranches} branches`,
                timestamp: new Date(),
                actionRequired: students.length < 50
            },
            {
                id: 3,
                priority: pendingExpenses > 50000 ? 'medium' : 'low',
                category: 'Finance',
                title: 'Pending Expenses',
                message: `PKR ${pendingExpenses.toLocaleString()} in pending expenses`,
                timestamp: new Date(),
                actionRequired: pendingExpenses > 100000
            },
            {
                id: 4,
                priority: unreadNotifications > 50 ? 'medium' : 'low',
                category: 'Communication',
                title: 'Unread Notifications',
                message: `${unreadNotifications} unread notifications in the system`,
                timestamp: new Date(),
                actionRequired: unreadNotifications > 100
            },
            {
                id: 5,
                priority: avgAttendance < 80 ? 'high' : 'low',
                category: 'Attendance',
                title: 'Average Attendance',
                message: `Current month attendance rate: ${avgAttendance}%`,
                timestamp: new Date(),
                actionRequired: avgAttendance < 75
            }
        ];
        // Branch Performance Data
        const branchPerformance = branches.map((branch)=>{
            const branchClasses = classes.filter((c)=>c.branchId.toString() === branch._id.toString());
            const branchStudents = students.filter((s)=>s.branchId?.toString() === branch._id.toString());
            const branchTeachers = teachers.filter((t)=>t.branchId?.toString() === branch._id.toString());
            const branchAttendance = attendanceRecords.filter((a)=>a.branchId._id.toString() === branch._id.toString());
            return {
                id: branch._id,
                name: branch.name,
                code: branch.code,
                status: branch.status,
                students: branchStudents.length,
                teachers: branchTeachers.length,
                classes: branchClasses.length,
                attendanceRate: branchAttendance.length > 0 ? (branchAttendance.reduce((sum, a)=>sum + a.presentCount, 0) / branchAttendance.reduce((sum, a)=>sum + a.totalStudents, 0) * 100).toFixed(1) : 0,
                revenue: Math.floor(Math.random() * 200000) + 100000,
                expenses: expenses.filter((e)=>e.branchId.toString() === branch._id.toString()).reduce((sum, e)=>sum + e.amount, 0)
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                headerStats,
                performanceMetrics,
                revenueAnalytics,
                studentAnalytics,
                recentActivities,
                systemAlerts,
                branchPerformance,
                summary: {
                    totalBranches: branches.length,
                    totalUsers: users.length,
                    totalStudents: students.length,
                    totalTeachers: teachers.length,
                    totalParents: parents.length,
                    totalBranchAdmins: branchAdmins.length,
                    totalSuperAdmins: superAdmins.length,
                    totalClasses: classes.length,
                    totalEvents: events.length,
                    totalExams: exams.length,
                    totalExpenses: expenses.length,
                    totalNotifications: notifications.length,
                    totalFeeTemplates: feeTemplates.length
                }
            }
        });
    } catch (error) {
        console.error('Dashboard stats error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: 'Failed to fetch dashboard statistics',
            error: error.message
        }, {
            status: 500
        });
    }
}
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(handler);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a2453f4e._.js.map