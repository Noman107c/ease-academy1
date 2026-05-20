module.exports = [
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[project]/src/lib/qr-generator.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeQRData",
    ()=>decodeQRData,
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateQRCode",
    ()=>generateQRCode,
    "generateStaffQR",
    ()=>generateStaffQR,
    "generateStudentQR",
    ()=>generateStudentQR,
    "generateTeacherQR",
    ()=>generateTeacherQR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode/lib/index.js [app-route] (ecmascript)");
;
async function generateQRCode(data, options = {}) {
    try {
        const defaultOptions = {
            errorCorrectionLevel: 'H',
            type: 'image/png',
            quality: 0.95,
            margin: 7,
            width: 300,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            ...options
        };
        const qrDataURL = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].toDataURL(data, defaultOptions);
        return qrDataURL;
    } catch (error) {
        console.error('QR Code generation error:', error);
        throw new Error(`Failed to generate QR code: ${error.message}`);
    }
}
async function generateTeacherQR(teacher) {
    const qrData = JSON.stringify({
        id: teacher._id || teacher.id,
        employeeId: teacher.teacherProfile?.employeeId || teacher.employeeId,
        name: teacher.fullName || `${teacher.firstName} ${teacher.lastName}`,
        email: teacher.email,
        type: 'teacher',
        generatedAt: new Date().toISOString()
    });
    return generateQRCode(qrData, {
        width: 400,
        margin: 2
    });
}
async function generateStudentQR(student) {
    const qrData = JSON.stringify({
        id: student._id || student.id,
        registrationNumber: student.studentProfile?.registrationNumber || student.registrationNumber,
        name: student.fullName || `${student.firstName} ${student.lastName}`,
        class: student.studentProfile?.classId?.name || '',
        type: 'student',
        generatedAt: new Date().toISOString()
    });
    return generateQRCode(qrData, {
        width: 400,
        margin: 2
    });
}
async function generateStaffQR(staff) {
    const qrData = JSON.stringify({
        id: staff._id || staff.id,
        employeeId: staff.staffProfile?.employeeId || staff.employeeId,
        name: staff.fullName || `${staff.firstName} ${staff.lastName}`,
        email: staff.email,
        type: 'staff',
        generatedAt: new Date().toISOString()
    });
    return generateQRCode(qrData, {
        width: 400,
        margin: 2
    });
}
function decodeQRData(qrData) {
    try {
        return JSON.parse(qrData);
    } catch (error) {
        console.error('QR decode error:', error);
        return null;
    }
}
const __TURBOPACK__default__export__ = {
    generateQRCode,
    generateTeacherQR,
    generateStudentQR,
    generateStaffQR,
    decodeQRData
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4e0f6d3._.js.map