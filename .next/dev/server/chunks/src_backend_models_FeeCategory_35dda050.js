module.exports = [
"[project]/src/backend/models/FeeCategory.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const feeCategorySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Category name is required'
        ],
        trim: true,
        unique: true,
        minlength: [
            2,
            'Category name must be at least 2 characters'
        ],
        maxlength: [
            100,
            'Category name cannot exceed 100 characters'
        ]
    },
    code: {
        type: String,
        required: [
            true,
            'Category code is required'
        ],
        unique: true,
        uppercase: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: [
            500,
            'Description cannot exceed 500 characters'
        ]
    },
    color: {
        type: String,
        default: 'blue',
        enum: [
            'blue',
            'green',
            'purple',
            'yellow',
            'pink',
            'indigo',
            'orange',
            'red',
            'gray',
            'teal',
            'cyan'
        ]
    },
    icon: {
        type: String,
        default: 'DollarSign'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    branchId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: 'Branch',
        default: null
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
// Indexes for faster queries
feeCategorySchema.index({
    code: 1
});
feeCategorySchema.index({
    branchId: 1
});
feeCategorySchema.index({
    isActive: 1
});
const FeeCategory = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.FeeCategory || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('FeeCategory', feeCategorySchema);
const __TURBOPACK__default__export__ = FeeCategory;
}),
];

//# sourceMappingURL=src_backend_models_FeeCategory_35dda050.js.map