module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/constants/themes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Theme Configuration
__turbopack_context__.s([
    "ACADEMIC_YEAR",
    ()=>ACADEMIC_YEAR,
    "BORDER_RADIUS",
    ()=>BORDER_RADIUS,
    "COLORS",
    ()=>COLORS,
    "DATE_FORMATS",
    ()=>DATE_FORMATS,
    "FONTS",
    ()=>FONTS,
    "GENDER",
    ()=>GENDER,
    "PAGINATION",
    ()=>PAGINATION,
    "SHADOWS",
    ()=>SHADOWS,
    "SPACING",
    ()=>SPACING,
    "STATUS",
    ()=>STATUS,
    "THEMES",
    ()=>THEMES,
    "THEME_TOKENS",
    ()=>THEME_TOKENS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};
const COLORS = {
    // Primary Colors
    primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554'
    },
    // Secondary Colors
    secondary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
        950: '#022c22'
    },
    // Success Colors
    success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16'
    },
    // Warning Colors
    warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03'
    },
    // Danger Colors
    danger: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a'
    },
    // Info Colors
    info: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49'
    },
    // Neutral/Gray Colors
    gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712'
    }
};
const FONTS = {
    sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
    ],
    serif: [
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif'
    ],
    mono: [
        'JetBrains Mono',
        'Fira Code',
        'Consolas',
        'Monaco',
        'Courier New',
        'monospace'
    ]
};
const SPACING = {
    0: '0px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
};
const BORDER_RADIUS = {
    none: '0px',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
};
const SHADOWS = {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none'
};
const DATE_FORMATS = {
    DISPLAY: 'MMM DD, YYYY',
    API: 'YYYY-MM-DD',
    TIME: 'hh:mm A',
    DATETIME: 'MMM DD, YYYY hh:mm A'
};
const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100
};
const STATUS = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    SUSPENDED: 'suspended',
    DELETED: 'deleted'
};
const GENDER = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other'
};
const ACADEMIC_YEAR = {
    CURRENT: '2024-2025',
    PREVIOUS: '2023-2024'
};
const THEME_TOKENS = {
    light: {
        background: COLORS.gray[50],
        foreground: COLORS.gray[900],
        card: '#ffffff',
        cardForeground: COLORS.gray[900],
        popover: '#ffffff',
        popoverForeground: COLORS.gray[900],
        primary: COLORS.primary[500],
        primaryForeground: '#ffffff',
        secondary: COLORS.secondary[500],
        secondaryForeground: '#ffffff',
        muted: COLORS.gray[100],
        mutedForeground: COLORS.gray[500],
        accent: COLORS.primary[100],
        accentForeground: COLORS.primary[900],
        destructive: COLORS.danger[500],
        destructiveForeground: '#ffffff',
        border: COLORS.gray[200],
        input: COLORS.gray[200],
        ring: COLORS.primary[500]
    },
    dark: {
        background: COLORS.gray[950],
        foreground: COLORS.gray[50],
        card: COLORS.gray[900],
        cardForeground: COLORS.gray[50],
        popover: COLORS.gray[900],
        popoverForeground: COLORS.gray[50],
        primary: COLORS.primary[400],
        primaryForeground: COLORS.gray[900],
        secondary: COLORS.secondary[400],
        secondaryForeground: COLORS.gray[900],
        muted: COLORS.gray[800],
        mutedForeground: COLORS.gray[400],
        accent: COLORS.primary[800],
        accentForeground: COLORS.primary[100],
        destructive: COLORS.danger[600],
        destructiveForeground: COLORS.gray[50],
        border: COLORS.gray[800],
        input: COLORS.gray[800],
        ring: COLORS.primary[400]
    }
};
const __TURBOPACK__default__export__ = {
    THEMES,
    COLORS,
    FONTS,
    SPACING,
    BORDER_RADIUS,
    SHADOWS,
    THEME_TOKENS,
    DATE_FORMATS,
    PAGINATION,
    STATUS,
    GENDER,
    ACADEMIC_YEAR
};
}),
"[project]/src/components/ThemeProvider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/themes.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"].LIGHT,
    toggleTheme: ()=>{},
    setTheme: (theme)=>{}
});
function ThemeProvider({ children, defaultTheme = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"].LIGHT }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTheme);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load theme from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"]).includes(storedTheme)) {
            setTheme(storedTheme);
        }
    }, []);
    // Update theme in localStorage and document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        localStorage.setItem('theme', theme);
        // Remove existing theme classes
        document.documentElement.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"].LIGHT, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"].DARK);
        // Add current theme class
        document.documentElement.classList.add(theme);
        // Set data attribute for CSS
        document.documentElement.setAttribute('data-theme', theme);
    }, [
        theme,
        mounted
    ]);
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>prevTheme === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"].LIGHT ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"].DARK : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$themes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEMES"].LIGHT);
    };
    const value = {
        theme,
        toggleTheme,
        setTheme
    };
    // Prevent flash of incorrect theme
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeProvider.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
const __TURBOPACK__default__export__ = ThemeProvider;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

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
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/constants/api-endpoints.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Configuration
__turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG,
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS,
    "buildUrl",
    ()=>buildUrl,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFullUrl",
    ()=>getFullUrl
]);
const API_CONFIG = {
    BASE_URL: ("TURBOPACK compile-time value", "http://localhost:3000") || '',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000
};
const API_ENDPOINTS = {
    // Authentication Endpoints
    AUTH: {
        LOGIN: '/api/auth/login',
        ME: '/api/auth/me',
        REGISTER: '/api/auth/register',
        LOGOUT: '/api/auth/logout',
        REFRESH: '/api/auth/refresh',
        FORGOT_PASSWORD: '/api/auth/forgot-password',
        RESET_PASSWORD: '/api/auth/reset-password',
        VERIFY_EMAIL: '/api/auth/verify-email',
        RESEND_VERIFICATION: '/api/auth/resend-verification',
        CHANGE_PASSWORD: '/api/auth/change-password'
    },
    // Super Admin Endpoints
    SUPER_ADMIN: {
        DASHBOARD: '/api/super-admin/dashboard',
        DASHBOARD_STATS: '/api/super-admin/dashboard/stats',
        NOTIFICATIONS: {
            LIST: '/api/notifications',
            MARK_READ: '/api/notifications'
        },
        // Branch Management
        BRANCHES: {
            CREATE: '/api/super-admin/branches',
            LIST: '/api/super-admin/branches',
            GET: '/api/super-admin/branches/:id',
            UPDATE: '/api/super-admin/branches/:id',
            DELETE: '/api/super-admin/branches/:id',
            STATS: '/api/super-admin/branches/stats',
            ACTIVATE: '/api/super-admin/branches/:id/activate',
            DEACTIVATE: '/api/super-admin/branches/:id/deactivate'
        },
        // Branch Admin Management
        BRANCH_ADMINS: {
            CREATE: '/api/super-admin/branch-admins',
            LIST: '/api/super-admin/branch-admins',
            GET: '/api/super-admin/branch-admins/:id',
            UPDATE: '/api/super-admin/branch-admins/:id',
            DELETE: '/api/super-admin/branch-admins/:id',
            ASSIGN_BRANCH: '/api/super-admin/branch-admins/:id/assign-branch'
        },
        SELF_ATTENDANCE: {
            CHECK_IN: '/api/teacher/self-attendance/check-in',
            CHECK_OUT: '/api/teacher/self-attendance/check-out'
        },
        // Global Settings
        SETTINGS: {
            GET: '/api/super-admin/settings',
            UPDATE: '/api/super-admin/settings',
            RESET: '/api/super-admin/settings/reset'
        },
        // Events Management
        EVENTS: {
            CREATE: '/api/super-admin/events',
            LIST: '/api/super-admin/events',
            GET: '/api/super-admin/events/:id',
            UPDATE: '/api/super-admin/events/:id',
            DELETE: '/api/super-admin/events/:id'
        },
        // Expenses Management
        EXPENSES: {
            CREATE: '/api/super-admin/expenses',
            LIST: '/api/super-admin/expenses',
            GET: '/api/super-admin/expenses/:id',
            UPDATE: '/api/super-admin/expenses/:id',
            DELETE: '/api/super-admin/expenses/:id'
        },
        // Subscriptions Management
        SUBSCRIPTIONS: {
            CREATE: '/api/super-admin/subscriptions',
            LIST: '/api/super-admin/subscriptions',
            GET: '/api/super-admin/subscriptions/:id',
            UPDATE: '/api/super-admin/subscriptions/:id',
            DELETE: '/api/super-admin/subscriptions/:id'
        },
        // Salaries Management
        SALARIES: {
            CREATE: '/api/super-admin/salaries',
            LIST: '/api/super-admin/salaries',
            GET: '/api/super-admin/salaries/:id',
            UPDATE: '/api/super-admin/salaries/:id',
            DELETE: '/api/super-admin/salaries/:id',
            PROCESS: '/api/super-admin/salaries/:id/process'
        },
        // Payroll Management
        PAYROLL: {
            PROCESS: '/api/payroll/process',
            LIST: '/api/payroll/list',
            GET: (id)=>`/api/payroll/${id}`,
            SLIP: (id)=>`/api/payroll/slip/${id}`,
            MARK_PAID: (id)=>`/api/payroll/${id}/mark-paid`,
            REPORTS: {
                SUMMARY: '/api/payroll/reports/summary'
            }
        },
        // Employee Attendance Management
        EMPLOYEE_ATTENDANCE: {
            CHECK_IN: '/api/employee-attendance/check-in',
            CHECK_OUT: '/api/employee-attendance/check-out',
            MARK: '/api/employee-attendance/mark',
            LIST: '/api/employee-attendance/list',
            SUMMARY: '/api/employee-attendance/summary',
            TODAY: '/api/employee-attendance/today',
            REPORTS: '/api/employee-attendance/reports',
            UPDATE: '/api/employee-attendance'
        },
        // Users Management (Super Admin)
        USERS: {
            LIST: '/api/super-admin/users',
            GET: '/api/super-admin/users/:id',
            CREATE: '/api/super-admin/users',
            UPDATE: '/api/super-admin/users/:id',
            DELETE: '/api/super-admin/users/:id'
        },
        // Employees Management (Teachers & Staff only)
        EMPLOYEES: {
            LIST: '/api/super-admin/employees'
        },
        // Teachers Management
        TEACHERS: {
            CREATE: '/api/super-admin/teachers',
            LIST: '/api/super-admin/teachers',
            GET: '/api/super-admin/teachers/:id',
            UPDATE: '/api/super-admin/teachers/:id',
            DELETE: '/api/super-admin/teachers/:id'
        },
        // Students Management
        STUDENTS: {
            CREATE: '/api/super-admin/users/students',
            LIST: '/api/super-admin/users/students',
            GET: '/api/super-admin/students/:id',
            UPDATE: '/api/super-admin/students/:id',
            DELETE: '/api/super-admin/students/:id',
            SEARCH: '/api/super-admin/students/search'
        },
        // Classes Management
        CLASSES: {
            CREATE: '/api/super-admin/classes',
            LIST: '/api/super-admin/classes',
            GET: '/api/super-admin/classes/:id',
            UPDATE: '/api/super-admin/classes/:id',
            DELETE: '/api/super-admin/classes/:id'
        },
        // Fee Templates
        FEE_TEMPLATES: {
            CREATE: '/api/super-admin/fee-templates',
            LIST: '/api/super-admin/fee-templates',
            GET: '/api/super-admin/fee-templates/:id',
            UPDATE: '/api/super-admin/fee-templates/:id',
            DELETE: '/api/super-admin/fee-templates/:id'
        },
        // Fee Categories
        FEE_CATEGORIES: {
            CREATE: '/api/super-admin/fee-categories',
            LIST: '/api/super-admin/fee-categories',
            GET: '/api/super-admin/fee-categories/:id',
            UPDATE: '/api/super-admin/fee-categories/:id',
            DELETE: '/api/super-admin/fee-categories/:id'
        },
        // Fee Vouchers
        FEE_VOUCHERS: {
            CREATE: '/api/super-admin/fee-vouchers',
            LIST: '/api/super-admin/fee-vouchers',
            GET: '/api/super-admin/fee-vouchers/:id',
            UPDATE: '/api/super-admin/fee-vouchers/:id',
            DELETE: '/api/super-admin/fee-vouchers/:id',
            CANCEL: '/api/super-admin/fee-vouchers/:id/cancel',
            APPROVE_PAYMENT: '/api/super-admin/fee-vouchers/:voucherId/approve-payment',
            MANUAL_PAYMENT: '/api/super-admin/fee-vouchers/:id/manual-payment'
        },
        // Pending Fees Management
        PENDING_FEES: {
            LIST: '/api/super-admin/pending-fees',
            APPROVE: '/api/super-admin/pending-fees/approve',
            REJECT: '/api/super-admin/pending-fees/reject'
        },
        // Subjects Management
        SUBJECTS: {
            CREATE: '/api/super-admin/subjects',
            LIST: '/api/super-admin/subjects',
            GET: '/api/super-admin/subjects/:id',
            UPDATE: '/api/super-admin/subjects/:id',
            DELETE: '/api/super-admin/subjects/:id'
        },
        STAFF: {
            CREATE: '/api/super-admin/staff',
            LIST: '/api/super-admin/staff',
            GET: '/api/super-admin/staff/:id',
            UPDATE: '/api/super-admin/staff/:id',
            DELETE: '/api/super-admin/staff/:id'
        },
        // Timetables Management
        TIMETABLES: {
            CREATE: '/api/super-admin/timetables',
            LIST: '/api/super-admin/timetables',
            GET: (id)=>`/api/super-admin/timetables/${id}`,
            UPDATE: (id)=>`/api/super-admin/timetables/${id}`,
            DELETE: (id)=>`/api/super-admin/timetables/${id}`,
            CLASS_TIMETABLE: (classId)=>`/api/super-admin/timetables/class/${classId}`,
            TEACHER_TIMETABLE: (teacherId)=>`/api/super-admin/timetables/teacher/${teacherId}`
        },
        // Attendance Management
        ATTENDANCE: {
            CREATE: '/api/super-admin/attendance',
            SCAN: '/api/super-admin/attendance/scan',
            LIST: '/api/super-admin/attendance',
            GET: '/api/super-admin/attendance/:id',
            UPDATE: '/api/super-admin/attendance/:id',
            DELETE: '/api/super-admin/attendance/:id'
        },
        // Grades (alias to school endpoints)
        GRADES: {
            LIST: '/api/school/grades',
            CREATE: '/api/school/grades',
            GET: '/api/school/grades/:id',
            UPDATE: '/api/school/grades/:id',
            DELETE: '/api/school/grades/:id'
        },
        // Levels (alias to school endpoints)
        LEVELS: {
            LIST: '/api/school/levels',
            CREATE: '/api/school/levels',
            GET: '/api/school/levels/:id',
            UPDATE: '/api/school/levels/:id',
            DELETE: '/api/school/levels/:id'
        },
        // Streams (alias to school endpoints)
        STREAMS: {
            LIST: '/api/school/streams',
            CREATE: '/api/school/streams',
            GET: '/api/school/streams/:id',
            UPDATE: '/api/school/streams/:id',
            DELETE: '/api/school/streams/:id'
        },
        // Library Management
        LIBRARY: {
            BOOKS: '/api/super-admin/library/books',
            GET: '/api/super-admin/library/books/:id',
            UPDATE: '/api/super-admin/library/books/:id',
            DELETE: '/api/super-admin/library/books/:id'
        },
        // Departments Management
        DEPARTMENTS: {
            CREATE: '/api/super-admin/departments',
            LIST: '/api/super-admin/departments',
            GET: '/api/super-admin/departments/:id',
            UPDATE: '/api/super-admin/departments/:id',
            DELETE: '/api/super-admin/departments/:id'
        },
        // Admins Management
        ADMINS: {
            CREATE: '/api/super-admin/admins',
            LIST: '/api/super-admin/admins',
            GET: '/api/super-admin/admins/:id',
            UPDATE: '/api/super-admin/admins/:id',
            DELETE: '/api/super-admin/admins/:id',
            ASSIGN_BRANCH: '/api/super-admin/admins/:id/assign-branch'
        },
        // Reports
        REPORTS: {
            OVERALL: '/api/super-admin/reports/overall',
            BRANCHES: '/api/super-admin/reports/branches',
            FINANCIAL: '/api/super-admin/reports/financial',
            ATTENDANCE: '/api/super-admin/reports/attendance',
            PERFORMANCE: '/api/super-admin/reports/performance',
            EXPORT: '/api/super-admin/reports/export'
        },
        // Users Management
        USERS: {
            LIST: '/api/super-admin/users',
            GET: '/api/super-admin/users/:id',
            CREATE: '/api/super-admin/users',
            UPDATE: '/api/super-admin/users/:id',
            DELETE: '/api/super-admin/users/:id',
            BULK_CREATE: '/api/super-admin/users/bulk',
            EXPORT: '/api/super-admin/users/export'
        },
        // Library Management
        LIBRARY: {
            BOOKS: '/api/super-admin/library/books',
            BOOK: (id)=>`/api/super-admin/library/books/${id}`
        },
        // Employees Management
        EMPLOYEES: {
            LIST: '/api/super-admin/employees',
            GET: '/api/super-admin/employees/:id'
        },
        // Parent Approval Management
        PENDING_PARENTS: '/api/super-admin/pending-parents',
        PARENTS: '/api/super-admin/parents',
        CHECK_CHILDREN_MATCHES: '/api/super-admin/check-children-matches',
        APPROVE_PARENT: '/api/super-admin/approve-parent/:id',
        REJECT_PARENT: '/api/super-admin/reject-parent/:id',
        // Charts and Analytics
        CHARTS: {
            STUDENT_TRENDS: '/api/super-admin/charts/student-trends',
            CLASS_WISE_STUDENTS: '/api/super-admin/charts/class-wise-students',
            BRANCH_WISE_STUDENTS: '/api/super-admin/charts/branch-wise-students',
            STUDENT_ATTENDANCE: '/api/super-admin/charts/student-attendance',
            REVENUE_EXPENSE: '/api/super-admin/charts/revenue-expense',
            MONTHLY_FEE_COLLECTION: '/api/super-admin/charts/monthly-fee-collection',
            PASS_FAIL_RATIO: '/api/super-admin/charts/pass-fail-ratio',
            BRANCH_PERFORMANCE: '/api/super-admin/charts/branch-performance',
            USER_DISTRIBUTION: '/api/super-admin/charts/user-distribution',
            FINANCIAL_OVERVIEW: '/api/super-admin/charts/financial-overview'
        }
    },
    // Branch Admin Endpoints
    BRANCH_ADMIN: {
        DASHBOARD: '/api/branch-admin/dashboard',
        NOTIFICATIONS: {
            LIST: '/api/notifications',
            MARK_READ: '/api/notifications'
        },
        // Users Management (Branch Admin - restricted to their branch)
        USERS: {
            LIST: '/api/branch-admin/users',
            GET: '/api/branch-admin/users/:id',
            CREATE: '/api/branch-admin/users',
            UPDATE: '/api/branch-admin/users/:id',
            DELETE: '/api/branch-admin/users/:id'
        },
        // Employees Management (Teachers & Staff only from their branch)
        EMPLOYEES: {
            LIST: '/api/branch-admin/employees'
        },
        // Timetables Management for branch admin (branch-limited)
        TIMETABLES: {
            CREATE: '/api/branch-admin/timetables',
            LIST: '/api/branch-admin/timetables',
            GET: (id)=>`/api/branch-admin/timetables/${id}`,
            UPDATE: (id)=>`/api/branch-admin/timetables/${id}`,
            DELETE: (id)=>`/api/branch-admin/timetables/${id}`,
            CLASS_TIMETABLE: (classId)=>`/api/branch-admin/timetables/class/${classId}`,
            TEACHER_TIMETABLE: (teacherId)=>`/api/branch-admin/timetables/teacher/${teacherId}`
        },
        // Teachers Management
        TEACHERS: {
            CREATE: '/api/branch-admin/teachers',
            LIST: '/api/branch-admin/teachers',
            GET: '/api/branch-admin/teachers/:id',
            UPDATE: '/api/branch-admin/teachers/:id',
            DELETE: '/api/branch-admin/teachers/:id',
            ASSIGN_SUBJECTS: '/api/branch-admin/teachers/:id/assign-subjects',
            ASSIGN_CLASSES: '/api/branch-admin/teachers/:id/assign-classes',
            SCHEDULE: '/api/branch-admin/teachers/:id/schedule'
        },
        // Students Management
        STUDENTS: {
            CREATE: '/api/branch-admin/students',
            LIST: '/api/branch-admin/students',
            GET: '/api/branch-admin/students/:id',
            UPDATE: '/api/branch-admin/students/:id',
            DELETE: '/api/branch-admin/students/:id',
            ENROLL: '/api/branch-admin/students/enroll',
            TRANSFER: '/api/branch-admin/students/:id/transfer',
            PROMOTE: '/api/branch-admin/students/:id/promote',
            BULK_UPLOAD: '/api/branch-admin/students/bulk-upload',
            EXPORT: '/api/branch-admin/students/export',
            SEARCH: '/api/branch-admin/students/search'
        },
        // Classes Management
        CLASSES: {
            CREATE: '/api/branch-admin/classes',
            LIST: '/api/branch-admin/classes',
            GET: '/api/branch-admin/classes/:id',
            UPDATE: '/api/branch-admin/classes/:id',
            DELETE: '/api/branch-admin/classes/:id',
            ASSIGN_TEACHER: '/api/branch-admin/classes/:id/assign-teacher',
            STUDENTS: '/api/branch-admin/classes/:id/students',
            TIMETABLE: '/api/branch-admin/classes/:id/timetable'
        },
        // Grades (alias to school endpoints)
        GRADES: {
            LIST: '/api/school/grades',
            CREATE: '/api/school/grades',
            GET: '/api/school/grades/:id',
            UPDATE: '/api/school/grades/:id',
            DELETE: '/api/school/grades/:id'
        },
        // Staff Management
        STAFF: {
            CREATE: '/api/branch-admin/staff',
            LIST: '/api/branch-admin/staff',
            GET: '/api/branch-admin/staff/:id',
            UPDATE: '/api/branch-admin/staff/:id',
            DELETE: '/api/branch-admin/staff/:id'
        },
        // Subjects Management
        SUBJECTS: {
            CREATE: '/api/branch-admin/subjects',
            LIST: '/api/branch-admin/subjects',
            GET: '/api/branch-admin/subjects/:id',
            UPDATE: '/api/branch-admin/subjects/:id',
            DELETE: '/api/branch-admin/subjects/:id'
        },
        // Events Management
        EVENTS: {
            CREATE: '/api/branch-admin/events',
            LIST: '/api/branch-admin/events',
            GET: '/api/branch-admin/events/:id',
            UPDATE: '/api/branch-admin/events/:id',
            DELETE: '/api/branch-admin/events/:id'
        },
        // Departments Management
        DEPARTMENTS: {
            CREATE: '/api/branch-admin/departments',
            LIST: '/api/branch-admin/departments',
            GET: '/api/branch-admin/departments/:id',
            UPDATE: '/api/branch-admin/departments/:id',
            DELETE: '/api/branch-admin/departments/:id'
        },
        // Syllabus Management
        SYLLABUS: {
            CREATE: '/api/branch-admin/syllabus',
            LIST: '/api/branch-admin/syllabus',
            GET: '/api/branch-admin/syllabus/:id',
            UPDATE: '/api/branch-admin/syllabus/:id',
            DELETE: '/api/branch-admin/syllabus/:id'
        },
        // Exams Management
        EXAMS: {
            CREATE: '/api/branch-admin/exams',
            LIST: '/api/branch-admin/exams',
            GET: '/api/branch-admin/exams/:id',
            UPDATE: '/api/branch-admin/exams/:id',
            DELETE: '/api/branch-admin/exams/:id'
        },
        // Attendance Management
        ATTENDANCE: {
            CREATE: '/api/branch-admin/attendance',
            SCAN: '/api/branch-admin/attendance/scan',
            LIST: '/api/branch-admin/attendance',
            GET: '/api/branch-admin/attendance/:id',
            UPDATE: '/api/branch-admin/attendance/:id',
            DELETE: '/api/branch-admin/attendance/:id'
        },
        // Fee Management
        FEES: {
            CREATE: '/api/branch-admin/fees',
            LIST: '/api/branch-admin/fees',
            GET: '/api/branch-admin/fees/:id',
            UPDATE: '/api/branch-admin/fees/:id',
            DELETE: '/api/branch-admin/fees/:id'
        },
        // Fee Templates
        FEE_TEMPLATES: {
            CREATE: '/api/branch-admin/fee-templates',
            LIST: '/api/branch-admin/fee-templates',
            GET: '/api/branch-admin/fee-templates/:id',
            UPDATE: '/api/branch-admin/fee-templates/:id',
            DELETE: '/api/branch-admin/fee-templates/:id'
        },
        // Fee Categories
        FEE_CATEGORIES: {
            CREATE: '/api/branch-admin/fee-categories',
            LIST: '/api/branch-admin/fee-categories',
            GET: '/api/branch-admin/fee-categories/:id',
            UPDATE: '/api/branch-admin/fee-categories/:id',
            DELETE: '/api/branch-admin/fee-categories/:id'
        },
        // Fee Vouchers
        FEE_VOUCHERS: {
            CREATE: '/api/branch-admin/fee-vouchers',
            LIST: '/api/branch-admin/fee-vouchers',
            GET: '/api/branch-admin/fee-vouchers/:id',
            UPDATE: '/api/branch-admin/fee-vouchers/:id',
            DELETE: '/api/branch-admin/fee-vouchers/:id',
            CANCEL: '/api/branch-admin/fee-vouchers/:id/cancel',
            APPROVE_PAYMENT: '/api/branch-admin/fee-vouchers/:voucherId/approve-payment',
            MANUAL_PAYMENT: '/api/branch-admin/fee-vouchers/:id/manual-payment'
        },
        // Expenses Management
        EXPENSES: {
            CREATE: '/api/branch-admin/expenses',
            LIST: '/api/branch-admin/expenses',
            GET: '/api/branch-admin/expenses/:id',
            UPDATE: '/api/branch-admin/expenses/:id',
            DELETE: '/api/branch-admin/expenses/:id'
        },
        // Academic Structure (Read-only)
        LEVELS: {
            LIST: '/api/branch-admin/levels'
        },
        STREAMS: {
            LIST: '/api/branch-admin/streams'
        },
        GRADES_VIEW: {
            LIST: '/api/branch-admin/grades'
        },
        // Reports
        REPORTS: {
            ATTENDANCE: '/api/branch-admin/reports/attendance',
            PERFORMANCE: '/api/branch-admin/reports/performance',
            FINANCIAL: '/api/branch-admin/reports/financial',
            TEACHER_PERFORMANCE: '/api/branch-admin/reports/teacher-performance',
            EXPORT: '/api/branch-admin/reports/export'
        },
        // Finance
        FINANCE: {
            FEES: '/api/branch-admin/finance/fees',
            PAYMENTS: '/api/branch-admin/finance/payments',
            INVOICES: '/api/branch-admin/finance/invoices',
            EXPENSES: '/api/branch-admin/finance/expenses',
            SUMMARY: '/api/branch-admin/finance/summary'
        },
        // Employees Management
        EMPLOYEES: {
            LIST: '/api/branch-admin/employees',
            GET: '/api/branch-admin/employees/:id'
        },
        // Payroll Management
        PAYROLL: {
            PROCESS: '/api/payroll/process',
            LIST: '/api/payroll/list',
            GET: (id)=>`/api/payroll/${id}`,
            SLIP: (id)=>`/api/payroll/slip/${id}`,
            MARK_PAID: (id)=>`/api/payroll/${id}/mark-paid`,
            REPORTS: {
                SUMMARY: '/api/payroll/reports/summary'
            }
        },
        // Employee Attendance Management
        EMPLOYEE_ATTENDANCE: {
            CHECK_IN: '/api/employee-attendance/check-in',
            CHECK_OUT: '/api/employee-attendance/check-out',
            MARK: '/api/employee-attendance/mark',
            LIST: '/api/employee-attendance/list',
            SUMMARY: '/api/employee-attendance/summary',
            TODAY: '/api/employee-attendance/today',
            REPORTS: '/api/employee-attendance/reports',
            UPDATE: '/api/employee-attendance'
        },
        // Teacher Attendance Management
        TEACHER_ATTENDANCE: {
            LIST: '/api/branch-admin/teacher-attendance'
        },
        // Pending Fees Management
        PENDING_FEES: {
            LIST: '/api/branch-admin/pending-fees',
            APPROVE: '/api/branch-admin/pending-fees/approve',
            REJECT: '/api/branch-admin/pending-fees/reject'
        },
        // Library Management
        LIBRARY_MANAGEMENT: {
            BOOKS: '/api/branch-admin/library/books'
        },
        // Parent Approval Management
        PENDING_PARENTS: '/api/branch-admin/pending-parents',
        PARENTS: '/api/branch-admin/parents',
        CHECK_CHILDREN_MATCHES: '/api/branch-admin/check-children-matches',
        APPROVE_PARENT: '/api/branch-admin/approve-parent/:id',
        REJECT_PARENT: '/api/branch-admin/reject-parent/:id',
        // Library Management
        LIBRARY_MANAGEMENT: {
            BOOKS: '/api/branch-admin/library/books',
            GET: '/api/branch-admin/library/books/:id',
            UPDATE: '/api/branch-admin/library/books/:id',
            DELETE: '/api/branch-admin/library/books/:id'
        },
        // User Management for Dropdowns
        USERS: {
            LIST: '/api/branch-admin/users'
        },
        // Notifications Management
        NOTIFICATIONS: {
            HISTORY: '/api/branch-admin/notifications/history'
        },
        // Charts and Analytics
        CHARTS: {
            STUDENT_TRENDS: '/api/branch-admin/charts/student-trends',
            CLASS_WISE_STUDENTS: '/api/branch-admin/charts/class-wise-students',
            STUDENT_ATTENDANCE: '/api/branch-admin/charts/student-attendance',
            FEES_COLLECTED_PENDING: '/api/branch-admin/charts/fees-collected-pending',
            MONTHLY_FEE_COLLECTION: '/api/branch-admin/charts/monthly-fee-collection',
            PASS_FAIL_RATIO: '/api/branch-admin/charts/pass-fail-ratio'
        }
    },
    // Teacher Endpoints
    TEACHER: {
        DASHBOARD: '/api/teacher/dashboard',
        NOTIFICATIONS: {
            LIST: '/api/notifications',
            MARK_READ: '/api/notifications'
        },
        // My Classes (app route: src/app/api/teacher/my-classes)
        MY_CLASSES: {
            LIST: '/api/teacher/my-classes',
            GET: '/api/teacher/my-classes/:id'
        },
        // Classes
        CLASSES: {
            LIST: '/api/teacher/classes',
            GET: '/api/teacher/classes/:id',
            STUDENTS: '/api/teacher/classes/:id/students',
            SUBJECTS: '/api/teacher/classes/:id/subjects',
            TIMETABLE: '/api/teacher/classes/:id/timetable'
        },
        // Students
        STUDENTS: {
            LIST: '/api/teacher/students',
            GET: '/api/teacher/students/:id',
            DETAILS: '/api/teacher/student/details',
            PERFORMANCE: '/api/student/details/:id/performance'
        },
        // Attendance
        ATTENDANCE: {
            MARK: '/api/teacher/attendance/mark',
            VIEW: '/api/teacher/attendance/view',
            HISTORY: '/api/teacher/attendance/history',
            REPORT: '/api/teacher/attendance/report',
            BULK_MARK: '/api/teacher/attendance/bulk-mark',
            SCAN: '/api/teacher/attendance/scan'
        },
        //self-attendece
        SELF_ATTENDANCE: {
            STATUS: '/api/teacher/self-attendance/status',
            CHECK_IN: '/api/teacher/self-attendance/check-in',
            CHECK_OUT: '/api/teacher/self-attendance/check-out',
            HISTORY: '/api/teacher/self-attendance/history'
        },
        // Assignments
        ASSIGNMENTS: {
            CREATE: '/api/teacher/assignments',
            LIST: '/api/teacher/assignments',
            GET: '/api/teacher/assignments/:id',
            UPDATE: '/api/teacher/assignments/:id',
            DELETE: '/api/teacher/assignments/:id',
            SUBMISSIONS: '/api/teacher/assignments/:id/submissions',
            GRADE: '/api/teacher/assignments/:id/grade'
        },
        // Exams
        EXAMS: {
            CREATE: '/api/teacher/exams',
            LIST: '/api/teacher/exams',
            GET: '/api/teacher/exams/:id',
            UPDATE: '/api/teacher/exams/:id',
            UPDATE_STATUS: '/api/teacher/exams/:id',
            DELETE: '/api/teacher/exams/:id',
            SCHEDULE: '/api/teacher/exams/:id/schedule',
            RESULTS: '/api/teacher/exams/:id/results'
        },
        // Grades
        GRADES: {
            CREATE: '/api/teacher/grades',
            LIST: '/api/teacher/grades',
            UPDATE: '/api/teacher/grades/:id',
            BULK_UPLOAD: '/api/teacher/grades/bulk-upload',
            PUBLISH: '/api/teacher/grades/publish'
        },
        // Leave Management
        LEAVE: {
            APPLY: '/api/teacher/leave/apply',
            LIST: '/api/teacher/leave',
            CANCEL: '/api/teacher/leave/:id/cancel',
            HISTORY: '/api/teacher/leave/history'
        }
    },
    // Student Endpoints
    STUDENT: {
        DASHBOARD: '/student/dashboard',
        NOTIFICATIONS: {
            LIST: '/api/notifications',
            MARK_READ: '/api/notifications'
        },
        // Profile
        PROFILE: {
            GET: '/student/profile',
            UPDATE: '/student/profile',
            AVATAR: '/student/profile/avatar'
        },
        // Attendance
        ATTENDANCE: {
            VIEW: '/student/attendance',
            REPORT: '/student/attendance/report',
            SUMMARY: '/student/attendance/summary'
        },
        // Grades
        GRADES: {
            VIEW: '/student/grades',
            DETAILS: '/student/grades/:id',
            REPORT: '/student/grades/report',
            HISTORY: '/student/grades/history'
        },
        // Assignments
        ASSIGNMENTS: {
            LIST: '/student/assignments',
            GET: '/student/assignments/:id',
            SUBMIT: '/student/assignments/:id/submit',
            SUBMISSIONS: '/student/assignments/submissions'
        },
        // Schedule
        SCHEDULE: {
            TIMETABLE: '/student/schedule/timetable',
            EXAMS: '/student/schedule/exams',
            EVENTS: '/student/schedule/events'
        },
        // Fees
        FEES: {
            VIEW: '/student/fees',
            HISTORY: '/student/fees/history',
            INVOICES: '/student/fees/invoices'
        },
        // Library
        LIBRARY: {
            BOOKS: '/student/library/books',
            ISSUED: '/student/library/issued',
            HISTORY: '/student/library/history',
            SEARCH: '/student/library/search'
        },
        // Branch Admin Library Management
        LIBRARY_MANAGEMENT: {
            BOOKS: '/branch-admin/library/books'
        }
    },
    // Common/Shared Endpoints
    COMMON: {
        // File Upload
        UPLOAD: '/api/upload',
        UPLOADS: {
            SINGLE: '/api/upload',
            MULTIPLE: '/api/upload/multiple'
        },
        // Notifications
        NOTIFICATIONS: {
            LIST: '/api/notifications',
            MARK_READ: '/api/notifications'
        },
        // Search
        SEARCH: {
            GLOBAL: '/common/search',
            STUDENTS: '/common/search/students',
            TEACHERS: '/common/search/teachers',
            CLASSES: '/common/search/classes'
        }
    },
    // School endpoints (grades/levels/streams/grade-stream-subjects)
    SCHOOL: {
        GRADES: {
            LIST: '/api/school/grades',
            CREATE: '/api/school/grades',
            GET: '/api/school/grades/:id',
            UPDATE: '/api/school/grades/:id',
            DELETE: '/api/school/grades/:id'
        },
        LEVELS: {
            LIST: '/api/school/levels',
            CREATE: '/api/school/levels',
            GET: '/api/school/levels/:id',
            UPDATE: '/api/school/levels/:id',
            DELETE: '/api/school/levels/:id'
        },
        STREAMS: {
            LIST: '/api/school/streams',
            CREATE: '/api/school/streams',
            GET: '/api/school/streams/:id',
            UPDATE: '/api/school/streams/:id',
            DELETE: '/api/school/streams/:id'
        },
        GRADE_STREAM_SUBJECTS: {
            LIST: '/api/school/grade-stream-subjects',
            CREATE: '/api/school/grade-stream-subjects',
            GET: '/api/school/grade-stream-subjects/:id',
            UPDATE: '/api/school/grade-stream-subjects/:id',
            DELETE: '/api/school/grade-stream-subjects/:id'
        }
    },
    // Shared Endpoints (Used by multiple roles)
    USERS: '/api/branch-admin/users',
    NOTIFICATIONS: {
        SEND: '/api/notifications/send',
        HISTORY: '/api/branch-admin/notifications/history'
    },
    // Parent Portal Endpoints
    PARENT: {
        SIGNUP: '/api/parent/auth/signup',
        // General Parent Notifications
        NOTIFICATIONS: {
            LIST: '/api/parent/notifications',
            MARK_READ: '/api/parent/notifications'
        },
        // Get all children of authenticated parent
        CHILDREN: '/api/parent',
        // Child specific endpoints
        CHILD: {
            // Child details
            DETAILS: '/api/parent/:childId',
            // Academic information
            ASSIGNMENTS: '/api/parent/:childId/assignments',
            QUIZZES: '/api/parent/:childId/quizzes',
            EXAMS: '/api/parent/:childId/exams',
            SYLLABUS: '/api/parent/:childId/syllabus',
            NOTES: '/api/parent/:childId/notes',
            TIMETABLE: '/api/parent/:childId/timetable',
            // School activities
            EVENTS: '/api/parent/:childId/events',
            ANNOUNCEMENTS: '/api/parent/:childId/announcements',
            // Communication
            MESSAGES: '/api/parent/:childId/messages',
            NOTIFICATIONS: {
                LIST: '/api/parent/:childId/notifications',
                MARK_READ: '/api/parent/:childId/notifications'
            },
            // Progress tracking
            ATTENDANCE: '/api/parent/:childId/attendance',
            // Resources
            LIBRARY: '/api/parent/:childId/library',
            // Fee vouchers
            FEE_VOUCHERS: '/api/parent/:childId/fee-vouchers',
            PAY_FEE_VOUCHER: '/api/parent/:childId/fee-vouchers/:id/pay',
            // Assignment submission
            SUBMIT_ASSIGNMENT: '/api/parent/:childId/assignments/submit'
        }
    }
};
const buildUrl = (endpoint, params = {})=>{
    let url = endpoint;
    // Replace path parameters
    Object.keys(params).forEach((key)=>{
        url = url.replace(`:${key}`, params[key]);
    });
    return url;
};
const getFullUrl = (endpoint)=>{
    return `${API_CONFIG.BASE_URL}${endpoint}`;
};
const __TURBOPACK__default__export__ = API_ENDPOINTS;
}),
"[project]/src/lib/api-client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "axiosInstance",
    ()=>apiClient,
    "clearAccessToken",
    ()=>clearAccessToken,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAccessToken",
    ()=>getAccessToken,
    "setAccessToken",
    ()=>setAccessToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/api-endpoints.js [app-ssr] (ecmascript)");
;
;
/**
 * Enhanced API Client with Axios
 * Features:
 * - Automatic token management
 * - Request/response interceptors
 * - Error handling
 * - Loading states
 * - Retry logic
 */ // Create axios instance
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL,
    timeout: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].TIMEOUT,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Token management
let accessToken = null;
const setAccessToken = (token)=>{
    accessToken = token;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const getAccessToken = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return accessToken;
};
const clearAccessToken = ()=>{
    accessToken = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
// Request Interceptor
apiClient.interceptors.request.use((config)=>{
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // Remove Content-Type header for FormData to let browser set it with boundary
    if (config.data instanceof FormData) {
        delete config.headers['Content-Type'];
    }
    // Add timestamp to prevent caching
    if (config.method === 'get') {
        config.params = {
            ...config.params,
            _t: Date.now()
        };
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Response Interceptor
apiClient.interceptors.response.use((response)=>{
    return response.data;
}, async (error)=>{
    const originalRequest = error.config;
    // Handle 401 Unauthorized - Token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            // Attempt to refresh token
            const refreshToken = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch (refreshError) {
            // Refresh failed, redirect to login
            clearAccessToken();
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return Promise.reject(refreshError);
        }
    }
    // Handle network errors
    if (!error.response) {
        return Promise.reject({
            message: 'Network error. Please check your internet connection.',
            status: 0
        });
    }
    // Handle HTML responses (when API returns error pages)
    const contentType = error.response.headers['content-type'];
    if (contentType && contentType.includes('text/html')) {
        // Return JSON error for HTML responses
        const errorStatus = error.response?.status || 500;
        let errorMessage = 'An error occurred';
        if (errorStatus === 401) {
            errorMessage = 'Authentication required. Please login again.';
        } else if (errorStatus === 403) {
            errorMessage = 'Access denied. Insufficient permissions.';
        } else if (errorStatus === 404) {
            errorMessage = 'API endpoint not found.';
        } else if (errorStatus === 500) {
            errorMessage = 'Internal server error.';
        }
        return Promise.reject({
            message: errorMessage,
            status: errorStatus,
            htmlResponse: true
        });
    }
    // Handle JSON error responses
    const errorMessage = error.response?.data?.message || 'An error occurred';
    const errorStatus = error.response?.status || 500;
    return Promise.reject({
        message: errorMessage,
        status: errorStatus,
        errors: error.response?.data?.errors
    });
});
/**
 * API Client Class
 */ class ApiClient {
    constructor(){
        this.loading = false;
    }
    /**
   * Generic request method
   */ async request(method, endpoint, data = null, config = {}) {
        this.loading = true;
        try {
            const response = await apiClient({
                method,
                url: endpoint,
                data,
                ...config
            });
            this.loading = false;
            return response;
        } catch (error) {
            this.loading = false;
            console.error('API Client Error:', {
                method,
                endpoint,
                message: error?.message || error,
                status: error?.status,
                response: error?.response?.data,
                stack: error?.stack
            });
            throw error;
        }
    }
    /**
   * GET request
   */ get(endpoint, params = {}, config = {}) {
        return this.request('GET', endpoint, null, {
            params,
            ...config
        });
    }
    /**
   * POST request
   */ post(endpoint, data, config = {}) {
        return this.request('POST', endpoint, data, config);
    }
    /**
   * PUT request
   */ put(endpoint, data, config = {}) {
        return this.request('PUT', endpoint, data, config);
    }
    /**
   * PATCH request
   */ patch(endpoint, data, config = {}) {
        return this.request('PATCH', endpoint, data, config);
    }
    /**
   * DELETE request
   */ delete(endpoint, config = {}) {
        return this.request('DELETE', endpoint, null, config);
    }
    /**
   * POST FormData request
   */ postFormData(endpoint, formData, config = {}) {
        return this.request('POST', endpoint, formData, {
            ...config,
            headers: {
                'Content-Type': 'multipart/form-data',
                ...config.headers
            }
        });
    }
    /**
   * PUT FormData request
   */ putFormData(endpoint, formData, config = {}) {
        return this.request('PUT', endpoint, formData, {
            ...config,
            headers: {
                'Content-Type': 'multipart/form-data',
                ...config.headers
            }
        });
    }
    /**
   * Upload file with progress tracking
   */ async upload(endpoint, file, onProgress = null) {
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        if (onProgress) {
            config.onUploadProgress = (progressEvent)=>{
                const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                onProgress(percentCompleted);
            };
        }
        return this.post(endpoint, formData, config);
    }
    /**
   * Bulk upload files
   */ async uploadMultiple(endpoint, files, onProgress = null) {
        const formData = new FormData();
        files.forEach((file, index)=>{
            formData.append(`files[${index}]`, file);
        });
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        if (onProgress) {
            config.onUploadProgress = (progressEvent)=>{
                const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                onProgress(percentCompleted);
            };
        }
        return this.post(endpoint, formData, config);
    }
    /**
   * Download file
   */ async download(endpoint, filename = 'download') {
        try {
            const response = await apiClient({
                method: 'GET',
                url: endpoint,
                responseType: 'blob'
            });
            // Create blob link to download
            const url = window.URL.createObjectURL(response);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            return response;
        } catch (error) {
            throw error;
        }
    }
    /**
   * Check if user is authenticated
   */ isAuthenticated() {
        return !!getAccessToken();
    }
    /**
   * Get loading state
   */ isLoading() {
        return this.loading;
    }
}
// Export singleton instance
const client = new ApiClient();
;
;
const __TURBOPACK__default__export__ = client;
}),
"[project]/src/constants/roles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/hooks/useAuth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useAuth",
    ()=>useAuth,
    "withAuth",
    ()=>withAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/api-endpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/roles.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Auth Context
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Load user from localStorage and fetch fresh data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initAuth = async ()=>{
            try {
                const token = localStorage.getItem("accessToken");
                if (token) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(token);
                    // Fetch current user
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.ME);
                    if (response.success) {
                        setUser(response.data);
                    } else {
                        // Token invalid, clear it
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                        setUser(null);
                    }
                }
            } catch (error) {
                console.error("Auth init error:", error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                setUser(null);
            } finally{
                setLoading(false);
            }
        };
        initAuth();
    }, []);
    /**
   * Redirect to appropriate dashboard based on role
   */ const redirectToDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((role)=>{
        console.log("Redirecting user with role:", role);
        const dashboards = {
            super_admin: "/super-admin",
            branch_admin: "/branch-admin",
            teacher: "/teacher",
            parent: "/parent",
            student: "/student"
        };
        const dashboard = dashboards[role] || "/dashboard";
        console.log("Redirecting to:", dashboard);
        router.push(dashboard);
    }, [
        router
    ]);
    /**
   * Login user
   */ const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.LOGIN, {
                email,
                password
            });
            if (response.success) {
                const { user, accessToken } = response.data;
                // Save token
                localStorage.setItem("accessToken", accessToken);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(accessToken);
                // Set user
                setUser(user);
                // Small delay to ensure state update
                setTimeout(()=>{
                    redirectToDashboard(user.role);
                }, 100);
                return {
                    success: true
                };
            } else {
                setError(response.message);
                return {
                    success: false,
                    message: response.message
                };
            }
        } catch (error) {
            const message = error.message || "Login failed";
            setError(message);
            return {
                success: false,
                message
            };
        } finally{
            setLoading(false);
        }
    }, [
        redirectToDashboard
    ]);
    /**
   * Register user
   */ const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (userData)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.REGISTER, userData);
            if (response.success) {
                return {
                    success: true,
                    message: response.message
                };
            } else {
                setError(response.message);
                return {
                    success: false,
                    message: response.message
                };
            }
        } catch (error) {
            const message = error.response?.data?.message || "Registration failed";
            setError(message);
            return {
                success: false,
                message
            };
        } finally{
            setLoading(false);
        }
    }, []);
    /**
   * Logout user
   */ const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            // Call logout endpoint - this now always succeeds
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.LOGOUT);
        } catch (error) {
        // Silently ignore - we'll clear local data anyway
        } finally{
            // Clear local data
            localStorage.removeItem("accessToken");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
            setUser(null);
            router.push("/login");
        }
    }, [
        router
    ]);
    /**
   * Change password
   */ const changePassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (currentPassword, newPassword)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.CHANGE_PASSWORD, {
                currentPassword,
                newPassword
            });
            if (response.success) {
                return {
                    success: true,
                    message: response.message
                };
            } else {
                setError(response.message);
                return {
                    success: false,
                    message: response.message
                };
            }
        } catch (error) {
            const message = error.response?.data?.message || "Failed to change password";
            setError(message);
            return {
                success: false,
                message
            };
        } finally{
            setLoading(false);
        }
    }, []);
    /**
   * Request password reset
   */ const forgotPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.FORGOT_PASSWORD, {
                email
            });
            if (response.success) {
                return {
                    success: true,
                    message: response.message
                };
            } else {
                setError(response.message);
                return {
                    success: false,
                    message: response.message
                };
            }
        } catch (error) {
            const message = error.response?.data?.message || "Failed to send reset email";
            setError(message);
            return {
                success: false,
                message
            };
        } finally{
            setLoading(false);
        }
    }, []);
    /**
   * Reset password with token
   */ const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (resetToken, newPassword)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.RESET_PASSWORD, {
                resetToken,
                newPassword
            });
            if (response.success) {
                return {
                    success: true,
                    message: response.message
                };
            } else {
                setError(response.message);
                return {
                    success: false,
                    message: response.message
                };
            }
        } catch (error) {
            const message = error.response?.data?.message || "Failed to reset password";
            setError(message);
            return {
                success: false,
                message
            };
        } finally{
            setLoading(false);
        }
    }, []);
    /**
   * Update user profile
   */ const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (updates)=>{
        try {
            setLoading(true);
            setError(null);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.ME, updates);
            if (response.success) {
                setUser(response.data);
                return {
                    success: true,
                    message: response.message
                };
            } else {
                setError(response.message);
                return {
                    success: false,
                    message: response.message
                };
            }
        } catch (error) {
            const message = error.response?.data?.message || "Failed to update profile";
            setError(message);
            return {
                success: false,
                message
            };
        } finally{
            setLoading(false);
        }
    }, []);
    /**
   * Refresh user data
   */ const refreshUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2d$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.ME);
            if (response.success) {
                setUser(response.data);
            }
        } catch (error) {
            console.error("Failed to refresh user:", error);
        }
    }, []);
    /**
   * Check if user has a specific role
   */ const hasRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((role)=>{
        if (!user) return false;
        if (Array.isArray(role)) {
            return role.includes(user.role);
        }
        return user.role === role;
    }, [
        user
    ]);
    /**
   * Check if user has a specific permission
   */ const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((permission)=>{
        if (!user) return false;
        // Super admin has all permissions
        if (user.role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLES"].SUPER_ADMIN) return true;
        if (Array.isArray(permission)) {
            return permission.some((p)=>user.permissions?.includes(p));
        }
        return user.permissions?.includes(permission);
    }, [
        user
    ]);
    /**
   * Check if user belongs to a specific branch
   */ const hasBranch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((branchId)=>{
        if (!user) return false;
        // Super admin has access to all branches
        if (user.role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLES"].SUPER_ADMIN) return true;
        return user.branchId === branchId;
    }, [
        user
    ]);
    const value = {
        user,
        loading,
        error,
        login,
        register,
        logout,
        changePassword,
        forgotPassword,
        resetPassword,
        updateProfile,
        refreshUser,
        hasRole,
        hasPermission,
        hasBranch,
        isAuthenticated: !!user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/useAuth.js",
        lineNumber: 375,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
function withAuth(Component, options = {}) {
    return function ProtectedRoute(props) {
        const { user, loading } = useAuth();
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
        const { requiredRole, requiredPermission, redirectTo = "/login" } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (!loading && !user) {
                router.push(redirectTo);
            } else if (user) {
                // Check role
                if (requiredRole) {
                    const hasRequiredRole = Array.isArray(requiredRole) ? requiredRole.includes(user.role) : user.role === requiredRole;
                    if (!hasRequiredRole) {
                        router.push("/unauthorized");
                        return;
                    }
                }
                // Check permission
                if (requiredPermission) {
                    const hasRequiredPermission = user.role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$roles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROLES"].SUPER_ADMIN || (Array.isArray(requiredPermission) ? requiredPermission.some((p)=>user.permissions?.includes(p)) : user.permissions?.includes(requiredPermission));
                    if (!hasRequiredPermission) {
                        router.push("/unauthorized");
                        return;
                    }
                }
            }
        }, [
            user,
            loading,
            router
        ]);
        if (loading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/useAuth.js",
                    lineNumber: 435,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/hooks/useAuth.js",
                lineNumber: 434,
                columnNumber: 9
            }, this);
        }
        if (!user) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/hooks/useAuth.js",
            lineNumber: 444,
            columnNumber: 12
        }, this);
    };
}
const __TURBOPACK__default__export__ = useAuth;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fcd63b30._.js.map