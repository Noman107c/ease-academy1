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
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/src/backend/models/FeeVoucher.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const feeVoucherSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    voucherNumber: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    studentId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    templateId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'FeeTemplate',
        required: true
    },
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    classId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Class'
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    issueDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    },
    baseAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    items: [
        {
            name: String,
            amount: Number,
            discount: {
                enabled: Boolean,
                type: {
                    type: String,
                    enum: [
                        'fixed',
                        'percentage'
                    ]
                },
                amount: Number
            }
        }
    ],
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    lateFeeAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    discountAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    paidAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    remainingAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    status: {
        type: String,
        enum: [
            'pending',
            'paid',
            'partial',
            'overdue',
            'cancelled'
        ],
        default: 'pending'
    },
    paymentHistory: [
        {
            amount: Number,
            paymentDate: Date,
            paymentMethod: {
                type: String,
                enum: [
                    'cash',
                    'bank-transfer',
                    'online',
                    'cheque',
                    'card'
                ]
            },
            transactionId: String,
            screenshot: {
                url: String,
                publicId: String
            },
            status: {
                type: String,
                enum: [
                    'pending',
                    'approved',
                    'rejected'
                ],
                default: 'pending'
            },
            submittedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            approvedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            approvedAt: Date,
            rejectedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            rejectedAt: Date,
            rejectionReason: String,
            receivedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            remarks: String
        }
    ],
    remarks: {
        type: String,
        trim: true
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
// Indexes
feeVoucherSchema.index({
    voucherNumber: 1
});
feeVoucherSchema.index({
    studentId: 1
});
feeVoucherSchema.index({
    branchId: 1
});
feeVoucherSchema.index({
    status: 1
});
feeVoucherSchema.index({
    dueDate: 1
});
feeVoucherSchema.index({
    month: 1,
    year: 1
});
// Compound index to prevent duplicate vouchers
feeVoucherSchema.index({
    studentId: 1,
    templateId: 1,
    month: 1,
    year: 1
}, {
    unique: true
});
// Pre-save middleware to check for overdue status
feeVoucherSchema.pre('save', function(next) {
    const now = new Date();
    // Auto-update to overdue if past due date and not fully paid
    if (this.dueDate < now && this.remainingAmount > 0 && this.status !== 'paid' && this.status !== 'cancelled') {
        this.status = 'overdue';
    }
    next();
});
// Static method to update all overdue vouchers
feeVoucherSchema.statics.updateOverdueVouchers = async function() {
    const now = new Date();
    const result = await this.updateMany({
        dueDate: {
            $lt: now
        },
        remainingAmount: {
            $gt: 0
        },
        status: {
            $nin: [
                'paid',
                'cancelled',
                'overdue'
            ]
        }
    }, {
        $set: {
            status: 'overdue'
        }
    });
    return result;
};
const FeeVoucher = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.FeeVoucher || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('FeeVoucher', feeVoucherSchema);
const __TURBOPACK__default__export__ = FeeVoucher;
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

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
"[project]/src/backend/models/Counter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const counterSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
const Counter = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Counter || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Counter', counterSchema);
const __TURBOPACK__default__export__ = Counter;
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
"[project]/src/backend/templates/parentEmail.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Email Templates for Parent Management
 * Returns HTML email body based on template type
 */ __turbopack_context__.s([
    "getParentEmailTemplate",
    ()=>getParentEmailTemplate
]);
const getParentEmailTemplate = (type, parent, schoolName = 'Ease Academy')=>{
    const baseStyles = `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  `;
    const headerStyles = `
    background: linear-gradient(135deg, #2b7a78 0%, #1f8a70 100%);
    color: white;
    padding: 28px;
    text-align: center;
    border-radius: 8px 8px 0 0;
  `;
    const containerStyles = `
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  `;
    const contentStyles = `
    padding: 26px;
    background: #f9f9f9;
  `;
    const detailsStyles = `
    background: white;
    padding: 18px;
    border-radius: 4px;
    margin: 16px 0;
    border-left: 4px solid #2b7a78;
  `;
    const footerStyles = `
    background: #f0f0f0;
    padding: 18px;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #ddd;
  `;
    const parentInfo = `
    <div style="${detailsStyles}">
      <h4 style="margin-top: 0; color: #2b7a78;">Parent Information</h4>
      <table style="width:100%; font-size:14px;">
        <tr>
          <td style="padding:6px 0; font-weight:bold; width:40%;">Name:</td>
          <td style="padding:6px 0;">${parent.fullName || `${parent.firstName || ''} ${parent.lastName || ''}`.trim()}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Email:</td>
          <td style="padding:6px 0;">${parent.email || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:bold;">Phone:</td>
          <td style="padding:6px 0;">${parent.phone || 'N/A'}</td>
        </tr>
      </table>
    </div>
  `;
    if (type === 'PARENT_APPROVED') {
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
          .success { background:#e6fffa; color:#065f46; padding:10px 14px; border-radius:4px; margin:12px 0; border:1px solid #b7f5e6; font-weight:600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0; font-size:26px;">🛡️ ${schoolName}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Account Approved</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Dear ${parent.firstName || parent.fullName || ''},</p>
            <div class="success">✅ Your account has been approved successfully!</div>

            ${parentInfo}

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">You can now access your parent dashboard to view your children's academic progress, attendance, announcements, and more.</p>

            <div style="${detailsStyles}">
              <h4 style="margin-top:0; color:#2b7a78;">Getting Started</h4>
              <ul style="margin:8px 0; padding-left:20px;">
                <li>Login to your account using your email and password</li>
                <li>View your children's profiles and academic records</li>
                <li>Check attendance and performance reports</li>
                <li>Receive important announcements and notifications</li>
                <li>Communicate with teachers and school administration</li>
              </ul>
            </div>

            <p style="margin:20px 0 0 0;">Welcome to the ${schoolName} family!</p>
            <p style="margin:8px 0 0 0;">Best regards,<br><strong>${schoolName} Administration</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    // Fee Voucher Generated for Child
    if (type === 'CHILD_FEE_VOUCHER') {
        const { childName, voucherNumber, amount, dueDate, month, year, category, discountAmount, lateFeeAmount, totalAmount, className } = parent;
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
            <h2 style="margin:0; font-size:26px;">💳 Fee Voucher - ${schoolName}</h2>
            <p style="margin:8px 0 0 0; font-size:14px;">Payment Due Notification</p>
          </div>
          <div class="content">
            <p style="margin-top:0; font-size:16px; font-weight:500;">Dear ${parent.firstName || parent.fullName || 'Parent/Guardian'},</p>
            
            <div style="background:#e3f2fd; padding:12px 16px; border-radius:4px; margin:14px 0; border-left:4px solid #2196f3;">
              <strong style="color:#1565c0;">A fee voucher has been generated for your child.</strong>
            </div>

            <div class="details">
              <h4 style="margin-top:0; color:#2b7a78;">Student Details</h4>
              <table style="width:100%; font-size:14px;">
                <tr>
                  <td style="padding:6px 0; font-weight:bold; width:40%;">Student Name:</td>
                  <td style="padding:6px 0;"><strong>${childName}</strong></td>
                </tr>
                ${className ? `
                <tr>
                  <td style="padding:6px 0; font-weight:bold;">Class:</td>
                  <td style="padding:6px 0;">${className}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div class="details">
              <h4 style="margin-top:0; color:#2b7a78;">Voucher Details</h4>
              <table style="width:100%; font-size:14px;">
                <tr>
                  <td style="padding:8px 0; font-weight:bold; width:40%;">Voucher Number:</td>
                  <td style="padding:8px 0;"><strong style="color:#2b7a78;">${voucherNumber}</strong></td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Fee Category:</td>
                  <td style="padding:8px 0;">${category || 'Monthly Fee'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Month/Year:</td>
                  <td style="padding:8px 0;">${month}/${year}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Base Amount:</td>
                  <td style="padding:8px 0;">Rs. ${amount?.toLocaleString()}</td>
                </tr>
                ${discountAmount > 0 ? `
                <tr>
                  <td style="padding:8px 0; font-weight:bold; color:#27ae60;">Discount:</td>
                  <td style="padding:8px 0; color:#27ae60;">- Rs. ${discountAmount?.toLocaleString()}</td>
                </tr>
                ` : ''}
                ${lateFeeAmount > 0 ? `
                <tr>
                  <td style="padding:8px 0; font-weight:bold; color:#e74c3c;">Late Fee:</td>
                  <td style="padding:8px 0; color:#e74c3c;">+ Rs. ${lateFeeAmount?.toLocaleString()}</td>
                </tr>
                ` : ''}
                <tr style="border-top:2px solid #2b7a78;">
                  <td style="padding:12px 0; font-weight:bold; font-size:16px;">Total Payable:</td>
                  <td style="padding:12px 0; font-weight:bold; font-size:16px; color:#2b7a78;">Rs. ${totalAmount?.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-weight:bold;">Due Date:</td>
                  <td style="padding:8px 0; color:#e74c3c;"><strong>${new Date(dueDate).toLocaleDateString()}</strong></td>
                </tr>
              </table>
            </div>

            <div style="text-align:center; margin:20px 0;">
              <a href="${("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000'}/api/super-admin/fee-vouchers/${voucherId}/download" 
                 style="display:inline-block; background:#2b7a78; color:#ffffff; padding:12px 24px; text-decoration:none; border-radius:6px; font-weight:bold; font-size:16px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                📄 Download Voucher
              </a>
            </div>

            ${lateFeeAmount > 0 ? `
            <div style="background:#fff3cd; padding:14px; border-radius:4px; margin:16px 0; border-left:4px solid #ffc107;">
              <strong style="color:#856404;">⚠️ Late Fee Applied:</strong>
              <p style="margin:6px 0 0 0; color:#856404;">A late fee of Rs. ${lateFeeAmount?.toLocaleString()} has been added due to previous unpaid fees. Please clear dues promptly to avoid additional charges.</p>
            </div>
            ` : ''}

            <div style="background:#d1ecf1; padding:14px; border-radius:4px; margin:16px 0; border-left:4px solid#17a2b8;">
              <strong style="color:#0c5460;">💡 Payment Instructions:</strong>
              <ul style="margin:10px 0; padding-left:20px; color:#0c5460;">
                <li>Please pay before the due date to avoid late fees</li>
                <li>Quote voucher number <strong>${voucherNumber}</strong> when making payment</li>
                <li>Payment can be made at school office or online portal</li>
                <li>Keep the payment receipt for your records</li>
              </ul>
            </div>

            <p style="margin:18px 0 0 0; color:#666; font-size:14px;">For any queries regarding this fee voucher, please contact the school accounts department.</p>
            <p style="margin:12px 0 0 0;">Thank you for your cooperation.</p>
            <p style="margin:8px 0 0 0;">Best regards,<br><strong>${schoolName} Accounts Department</strong></p>
          </div>
          <div class="footer">
            <p style="margin:0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin:6px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    // Child Exam Scheduled
    if (type === 'CHILD_EXAM_SCHEDULED') {
        const { firstName, childName, examTitle, examType, examDate, subjectNames, className, schoolName } = parent;
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
            <h2 style="margin: 0; font-size: 26px;">📚 ${schoolName}</h2>
            <p style="margin: 8px 0 0 0; font-size: 14px;">Exam Schedule Notification</p>
          </div>

          <div class="content">
            <p style="margin-top: 0; font-size: 16px; font-weight: 500;">Dear ${firstName},</p>

            <div class="exam-alert">
              <strong>📅 Exam Scheduled for ${childName}</strong>
            </div>

            <p>A new examination has been scheduled for your child <strong>${childName}</strong>. Please find the details below:</p>

            <div style="${detailsStyles}">
              <h4 style="margin-top: 0; color: #2b7a78;">Exam Details</h4>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 40%;">Student Name:</td>
                  <td style="padding: 8px 0;">${childName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Class:</td>
                  <td style="padding: 8px 0;">${className}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Title:</td>
                  <td style="padding: 8px 0;">${examTitle}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Exam Type:</td>
                  <td style="padding: 8px 0;">${examType.replace('_', ' ').toUpperCase()}</td>
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
              <h4 style="margin-top: 0; color: #2b7a78;">Parent Guidelines</h4>
              <ul style="margin: 8px 0; padding-left: 20px;">
                <li>Ensure your child arrives at school on time for the examination</li>
                <li>Help your child prepare necessary stationery and admit card</li>
                <li>Monitor your child's preparation and provide necessary support</li>
                <li>Contact the class teacher if your child needs special assistance</li>
                <li>Check school communications regularly for any updates</li>
              </ul>
            </div>

            <p style="margin: 20px 0; color: #666; font-size: 14px;">We wish ${childName} the very best for the upcoming examination. Your support and encouragement play a crucial role in your child's success.</p>

            <p style="margin: 20px 0 0 0;">Best regards,<br><strong>${schoolName} Administration</strong></p>
          </div>

          <div class="footer">
            <p style="margin: 0;">This is an automated email. Please do not reply to this message.</p>
            <p style="margin: 6px 0 0 0;">&copy; ${new Date().getFullYear()} ${schoolName}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    }
    // Default template
    return `<html><body><p>Hello ${parent.firstName || parent.fullName || ''},</p><p>Your parent account has been updated.</p></body></html>`;
};
}),
"[project]/src/app/api/branch-admin/fee-vouchers/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeVoucher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/FeeVoucher.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeTemplate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/FeeTemplate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Counter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Counter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Notification$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Notification.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/middleware/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Class$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Class.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$utils$2f$emailService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/utils/emailService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$templates$2f$studentEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/templates/studentEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$templates$2f$parentEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/templates/parentEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Branch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backend/models/Branch.js [app-route] (ecmascript)");
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
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(async (request, user, userDoc)=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const search = searchParams.get('search') || '';
        const status = searchParams.get('status') || '';
        const month = searchParams.get('month');
        const year = searchParams.get('year');
        const classId = searchParams.get('classId');
        // Build the base query
        const query = {
            branchId: user.branchId
        };
        if (status) {
            query.status = status;
        }
        if (month) {
            query.month = parseInt(month);
        }
        if (year) {
            query.year = parseInt(year);
        }
        if (classId) {
            query.classId = classId;
        }
        // Build search conditions - search by student name or ID
        if (search) {
            const { ObjectId } = await __turbopack_context__.A("[externals]/mongodb [external] (mongodb, cjs, async loader)");
            // First, try to find student IDs that match the search name
            const studentNameSearch = new RegExp(search, 'i');
            const studentQuery = {
                $or: [
                    {
                        fullName: studentNameSearch
                    },
                    {
                        firstName: studentNameSearch
                    },
                    {
                        lastName: studentNameSearch
                    },
                    {
                        email: studentNameSearch
                    },
                    {
                        'studentProfile.registrationNumber': studentNameSearch
                    }
                ],
                role: 'student'
            };
            // Check if search is a valid MongoDB ObjectId
            let isValidObjectId = false;
            try {
                isValidObjectId = ObjectId.isValid(search) && new ObjectId(search).toString() === search;
            } catch (e) {
                isValidObjectId = false;
            }
            // Find matching students
            const matchingStudents = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(studentQuery).select('_id').lean();
            const studentIds = matchingStudents.map((s)=>s._id);
            // Build OR conditions
            const orConditions = [
                {
                    voucherNumber: {
                        $regex: search,
                        $options: 'i'
                    }
                }
            ];
            // Add student ID search if valid ObjectId
            if (isValidObjectId) {
                orConditions.push({
                    studentId: new ObjectId(search)
                });
            }
            // Add student IDs from name search
            if (studentIds.length > 0) {
                orConditions.push({
                    studentId: {
                        $in: studentIds
                    }
                });
            }
            query.$or = orConditions;
        }
        const skip = (page - 1) * limit;
        const [vouchers, total] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeVoucher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).populate('studentId', 'fullName firstName lastName email studentProfile.registrationNumber studentProfile.rollNumber studentProfile.section').populate('templateId', 'name code category').populate('classId', 'name code').populate('branchId', 'name').sort({
                createdAt: -1
            }).skip(skip).limit(limit).lean(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeVoucher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments(query)
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                vouchers,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        console.error('Error fetching fee vouchers:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message || 'Failed to fetch fee vouchers'
        }, {
            status: 500
        });
    }
}, [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireRole"])([
        'branch_admin'
    ])
]);
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(async (request, user, userDoc)=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await request.json();
        const { templateId, studentIds, dueDate, month, year, remarks } = body;
        // Validate required fields
        if (!templateId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Template is required'
            }, {
                status: 400
            });
        }
        if (!dueDate || !month || !year) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Due date, month, and year are required'
            }, {
                status: 400
            });
        }
        // Get template with populated classes
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeTemplate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(templateId).populate('classes').lean();
        if (!template) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Template not found'
            }, {
                status: 404
            });
        }
        // Fetch FeeCategory name for email
        let categoryName = '';
        if (template.category) {
            const FeeCategory = (await __turbopack_context__.A("[project]/src/backend/models/FeeCategory.js [app-route] (ecmascript, async loader)")).default;
            const cat = await FeeCategory.findById(template.category).lean();
            categoryName = cat?.name || '';
        }
        // Auto-select students based on template applicableTo (if studentIds not provided)
        let students;
        if (studentIds && Array.isArray(studentIds) && studentIds.length > 0) {
            // Manual selection provided (backward compatibility)
            students = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                _id: {
                    $in: studentIds
                },
                role: 'student',
                branchId: user.branchId,
                status: 'active'
            }).lean();
        } else {
            // Auto-select based on template
            let studentQuery = {
                role: 'student',
                branchId: user.branchId,
                status: 'active'
            };
            if (template.applicableTo === 'class-specific' && template.classes && template.classes.length > 0) {
                const classIds = template.classes.map((c)=>c._id || c);
                studentQuery['studentProfile.classId'] = {
                    $in: classIds
                };
            } else if (template.applicableTo === 'student-specific') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: 'Student-specific templates require student IDs'
                }, {
                    status: 400
                });
            }
            // else applicableTo === 'all' - all active students
            students = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(studentQuery).lean();
        }
        if (students.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'No eligible students found'
            }, {
                status: 400
            });
        }
        const createdVouchers = [];
        const errors = [];
        for (const student of students){
            let studentName = 'Student';
            try {
                studentName = student.fullName || `${student.firstName || ''} ${student.lastName || ''}`.trim() || 'Student';
                // Check if voucher already exists
                const existingVoucher = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeVoucher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    studentId: student._id,
                    templateId,
                    month: parseInt(month),
                    year: parseInt(year)
                });
                if (existingVoucher) {
                    errors.push({
                        studentId: student._id,
                        studentName,
                        message: 'Voucher already exists for this month'
                    });
                    continue;
                }
                // Check for unpaid previous vouchers to calculate late fee
                const unpaidVouchers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeVoucher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                    studentId: student._id,
                    branchId: user.branchId,
                    status: {
                        $in: [
                            'pending',
                            'partial',
                            'overdue'
                        ]
                    },
                    dueDate: {
                        $lt: new Date(dueDate)
                    }
                }).lean();
                let lateFeeAmount = 0;
                if (template.lateFee?.enabled && unpaidVouchers.length > 0) {
                    const totalUnpaid = unpaidVouchers.reduce((sum, v)=>sum + (v.remainingAmount || v.totalAmount), 0);
                    if (template.lateFee.type === 'percentage') {
                        lateFeeAmount = totalUnpaid * template.lateFee.amount / 100;
                    } else {
                        lateFeeAmount = template.lateFee.amount * unpaidVouchers.length;
                    }
                }
                // Generate voucher number
                const counter = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Counter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({
                    _id: 'feeVoucher'
                }, {
                    $inc: {
                        seq: 1
                    }
                }, {
                    new: true,
                    upsert: true
                });
                const voucherNumber = `FV-${year}-${String(month).padStart(2, '0')}-${String(counter.seq).padStart(6, '0')}`;
                // Calculate amounts from template items
                const templateBaseAmount = template.baseAmount || 0;
                const itemsAmount = (template.items || []).reduce((sum, item)=>sum + item.amount, 0);
                const baseAmount = templateBaseAmount + itemsAmount;
                // Calculate total discount (item-level + global)
                let totalDiscount = (template.items || []).reduce((sum, item)=>{
                    if (item.discount && item.discount.enabled) {
                        if (item.discount.type === 'fixed') return sum + item.discount.amount;
                        return sum + item.amount * item.discount.amount / 100;
                    }
                    return sum;
                }, 0);
                // Apply global discount on the sum of items (after item discounts)
                const sumAfterItemDiscounts = baseAmount - totalDiscount;
                if (template.discount && template.discount.enabled) {
                    if (template.discount.type === 'fixed') {
                        totalDiscount += template.discount.amount;
                    } else {
                        totalDiscount += sumAfterItemDiscounts * template.discount.amount / 100;
                    }
                }
                const discountAmount = totalDiscount;
                const totalAmount = Math.max(0, baseAmount - discountAmount + lateFeeAmount);
                // Create voucher
                const voucher = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$FeeVoucher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                    voucherNumber,
                    studentId: student._id,
                    templateId,
                    branchId: user.branchId,
                    classId: student.studentProfile?.classId,
                    month: parseInt(month),
                    year: parseInt(year),
                    dueDate: new Date(dueDate),
                    baseAmount: templateBaseAmount,
                    items: template.items || [],
                    amount: baseAmount,
                    discountAmount,
                    lateFeeAmount,
                    totalAmount,
                    remainingAmount: totalAmount,
                    status: 'pending',
                    remarks,
                    createdBy: user.userId
                });
                createdVouchers.push(voucher);
                // Create notification for student
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Notification$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                    type: 'fee_voucher',
                    title: 'Fee Voucher Generated',
                    message: `Your fee voucher for ${month}/${year} has been generated. Amount: Rs. ${totalAmount.toLocaleString()}. Due: ${new Date(dueDate).toLocaleDateString()}`,
                    targetUser: student._id,
                    metadata: {
                        voucherNumber,
                        voucherId: voucher._id,
                        amount: totalAmount,
                        dueDate,
                        month,
                        year
                    }
                });
                // Send email to student
                if (student.email) {
                    const studentEmailHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$templates$2f$studentEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStudentEmailTemplate"])('fee_voucher_generated', {
                        studentName,
                        name: studentName,
                        voucherNumber,
                        voucherId: voucher._id,
                        amount: baseAmount,
                        discountAmount,
                        lateFeeAmount,
                        totalAmount,
                        dueDate,
                        month,
                        year,
                        category: categoryName
                    });
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$utils$2f$emailService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])(student.email, `Fee Voucher Generated - ${voucherNumber}`, studentEmailHtml);
                }
                // Send email to parent/guardian
                const parentEmail = student.studentProfile?.father?.email || student.studentProfile?.mother?.email || student.studentProfile?.guardian?.email;
                const parentName = student.studentProfile?.father?.name || student.studentProfile?.mother?.name || student.studentProfile?.guardian?.name;
                if (parentEmail) {
                    const parentEmailHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$templates$2f$parentEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getParentEmailTemplate"])('CHILD_FEE_VOUCHER', {
                        firstName: parentName || 'Parent',
                        childName: studentName,
                        voucherNumber,
                        voucherId: voucher._id,
                        amount: baseAmount,
                        discountAmount,
                        lateFeeAmount,
                        totalAmount,
                        dueDate,
                        month,
                        year,
                        category: categoryName,
                        className: ''
                    });
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$utils$2f$emailService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])(parentEmail, `Fee Voucher for ${studentName} - ${voucherNumber}`, parentEmailHtml);
                    // Create notification for parent if they have account
                    const parentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                        email: parentEmail,
                        role: 'parent'
                    });
                    if (parentUser) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$models$2f$Notification$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                            type: 'fee_voucher',
                            title: `Fee Voucher - ${studentName}`,
                            message: `Fee voucher generated for your child ${studentName}. Amount: Rs. ${totalAmount.toLocaleString()}. Due: ${new Date(dueDate).toLocaleDateString()}`,
                            targetUser: parentUser._id,
                            childId: student._id,
                            metadata: {
                                voucherNumber,
                                voucherId: voucher._id,
                                amount: totalAmount,
                                dueDate,
                                month,
                                year,
                                studentName
                            }
                        });
                    }
                }
            } catch (error) {
                console.error(`Error generating voucher for student ${student._id}:`, error);
                errors.push({
                    studentId: student._id,
                    studentName,
                    message: error.message
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: `Generated ${createdVouchers.length} vouchers successfully${errors.length > 0 ? ` (${errors.length} failed)` : ''}`,
            data: {
                vouchers: createdVouchers,
                errors: errors.length > 0 ? errors : undefined
            }
        });
    } catch (error) {
        console.error('Error generating fee vouchers:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message || 'Failed to generate fee vouchers'
        }, {
            status: 500
        });
    }
}, [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backend$2f$middleware$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireRole"])([
        'branch_admin'
    ])
]);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac69fb5a._.js.map