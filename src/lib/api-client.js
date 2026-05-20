import axios from 'axios';
import { API_CONFIG, API_ENDPOINTS, buildUrl, getFullUrl } from '@/constants/api-endpoints';
import {
  MOCK_BRANCH,
  getMockBranchAdminDashboard,
  getMockSuperAdminDashboardStats,
  getMockTeacherClasses,
  getMockUserByEmail,
  getMockUserById,
  getMockUsers,
  isMockModeEnabled,
  toSafeMockUser,
} from '@/lib/mock-data';

/**
 * Enhanced API Client with Axios
 * Features:
 * - Automatic token management
 * - Request/response interceptors
 * - Error handling
 * - Loading states
 * - Retry logic
 */

// Create axios instance
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Token management
let accessToken = null;

const MOCK_NOTIFICATIONS = [
  {
    _id: 'mock-notification-1',
    title: 'New assignment uploaded',
    message: 'Mathematics assignment is ready for Grade 5 students.',
    type: 'assignment',
    isRead: false,
    isEvent: false,
    link: '/teacher/assignments',
    createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    senderName: 'System',
    senderRole: 'system',
    notificationIds: ['mock-notification-1'],
  },
  {
    _id: 'mock-notification-2',
    title: 'Fee reminder sent',
    message: 'Pending fee reminder was delivered to selected parents.',
    type: 'fee_reminder',
    isRead: true,
    isEvent: false,
    link: '/branch-admin/fees',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    senderName: 'Branch Admin',
    senderRole: 'branch_admin',
    notificationIds: ['mock-notification-1', 'mock-notification-2'],
  },
  {
    _id: 'mock-notification-3',
    title: 'Staff meeting scheduled',
    message: 'All teachers must attend the weekly staff meeting on Friday.',
    type: 'announcement',
    isRead: false,
    isEvent: true,
    link: '/branch-admin/events',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    senderName: 'School Office',
    senderRole: 'system',
    notificationIds: ['mock-notification-1', 'mock-notification-2', 'mock-notification-3'],
  },
];

const MOCK_FEE_VOUCHERS = [
  {
    _id: 'mock-voucher-1',
    voucherNumber: 'FV-1001',
    status: 'paid',
    amount: 12500,
    paymentDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    branchId: MOCK_BRANCH._id,
  },
  {
    _id: 'mock-voucher-2',
    voucherNumber: 'FV-1002',
    status: 'pending',
    amount: 9800,
    paymentDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    branchId: MOCK_BRANCH._id,
  },
  {
    _id: 'mock-voucher-3',
    voucherNumber: 'FV-1003',
    status: 'partial',
    amount: 6000,
    paymentDate: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    branchId: MOCK_BRANCH._id,
  },
];

const MOCK_ACADEMIC_YEARS = [
  {
    _id: 'mock-academic-year-1',
    name: '2025-2026',
    label: '2025 - 2026',
    status: 'active',
    isCurrent: true,
  },
  {
    _id: 'mock-academic-year-2',
    name: '2024-2025',
    label: '2024 - 2025',
    status: 'completed',
    isCurrent: false,
  },
];

const MOCK_CLASSES = [
  {
    _id: 'mock-class-1',
    name: 'Grade 5',
    code: 'G5',
    section: 'A',
    branchId: MOCK_BRANCH._id,
  },
  {
    _id: 'mock-class-2',
    name: 'Grade 6',
    code: 'G6',
    section: 'B',
    branchId: MOCK_BRANCH._id,
  },
];

const MOCK_SUBJECTS = [
  { _id: 'mock-subject-1', name: 'Mathematics', code: 'MTH', classId: 'mock-class-1' },
  { _id: 'mock-subject-2', name: 'Science', code: 'SCI', classId: 'mock-class-2' },
  { _id: 'mock-subject-3', name: 'English', code: 'ENG', classId: 'mock-class-1' },
];

const MOCK_EVENTS = [
  {
    _id: 'mock-event-1',
    title: 'PTM Meeting',
    status: 'scheduled',
    startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: 'mock-event-2',
    title: 'Sports Day',
    status: 'scheduled',
    startDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

const MOCK_EXPENSES = [
  { _id: 'mock-expense-1', title: 'Stationery', amount: 15000, paymentStatus: 'paid' },
  { _id: 'mock-expense-2', title: 'Electricity', amount: 22000, paymentStatus: 'pending' },
];

const MOCK_BRANCHES = [
  {
    _id: MOCK_BRANCH._id,
    name: MOCK_BRANCH.name,
    code: MOCK_BRANCH.code,
    status: 'active',
    totalStudents: 100,
    totalTeachers: 10,
  },
];

const MOCK_NOTIFICATION_STATS = {
  totalRecipients: 3,
  readCount: 1,
  unreadCount: 2,
  readPercentage: '33.3',
  readUsers: [
    {
      name: 'Branch Admin',
      email: 'branchadmin@easeacademy.com',
      role: 'branch_admin',
      readAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
  ],
  unreadUsers: [
    { name: 'Teacher Demo', email: 'teacher1@easeacademy.com', role: 'teacher' },
    { name: 'Parent Demo', email: 'parent1@easeacademy.com', role: 'parent' },
  ],
  notificationDetails: {
    title: MOCK_NOTIFICATIONS[0].title,
    message: MOCK_NOTIFICATIONS[0].message,
    type: MOCK_NOTIFICATIONS[0].type,
  },
};

function createMockPayload(data, extra = {}) {
  return {
    success: true,
    ...extra,
    data,
  };
}

function createMockCollection(items, key) {
  return {
    success: true,
    data: {
      [key]: items,
      total: items.length,
    },
    [key]: items,
    total: items.length,
    count: items.length,
  };
}

function decodeTokenPayload(token) {
  if (!token) return null;

  try {
    if (token.startsWith('mock-access-token-') || token.startsWith('mock-refresh-token-')) {
      const userId = token.replace('mock-access-token-', '').replace('mock-refresh-token-', '');
      return userId ? { userId } : null;
    }

    const payloadPart = token.split('.')[1];
    if (!payloadPart) return null;

    const json = typeof window !== 'undefined'
      ? window.atob(payloadPart)
      : Buffer.from(payloadPart, 'base64').toString('utf8');

    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}

function getMockAuthUser() {
  const token = getAccessToken() || (typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null);
  const payload = decodeTokenPayload(token);

  if (payload?.userId) {
    const directUser = getMockUserById(payload.userId);
    if (directUser) {
      return toSafeMockUser(directUser);
    }
  }

  return null;
}

function getMockStudents() {
  return getMockUsers()
    .filter((user) => user.role === 'student')
    .map((user, index) => ({
      ...toSafeMockUser(user),
      studentProfile: {
        classId: MOCK_CLASSES[index % MOCK_CLASSES.length]._id,
        section: MOCK_CLASSES[index % MOCK_CLASSES.length].section,
        rollNumber: index + 1,
        registrationNumber: `REG-${1000 + index}`,
      },
      status: 'active',
    }));
}

function getMockTeachers() {
  return getMockUsers()
    .filter((user) => user.role === 'teacher')
    .map((user) => ({
      ...toSafeMockUser(user),
      departmentName: 'General',
      status: 'active',
    }));
}

function getMockParents() {
  return getMockUsers()
    .filter((user) => user.role === 'parent')
    .map((user) => ({
      ...toSafeMockUser(user),
      status: 'active',
    }));
}

function getMockStaff() {
  return getMockUsers()
    .filter((user) => user.role === 'staff')
    .map((user) => ({
      ...toSafeMockUser(user),
      status: 'active',
    }));
}

function getMockClasses() {
  return MOCK_CLASSES.map((classItem) => ({
    ...classItem,
    branchName: MOCK_BRANCH.name,
    studentCount: classItem._id === 'mock-class-1' ? 35 : 31,
  }));
}

function getMockSubjects() {
  return MOCK_SUBJECTS.map((subject) => ({
    ...subject,
    branchId: MOCK_BRANCH._id,
    branchName: MOCK_BRANCH.name,
  }));
}

function getMockNotifications() {
  return MOCK_NOTIFICATIONS.map((notification) => ({ ...notification }));
}

async function buildMockResponse(method, endpoint, data = null) {
  const normalizedEndpoint = String(endpoint || '').split('?')[0];
  const upperMethod = String(method || 'GET').toUpperCase();

  if (normalizedEndpoint === API_ENDPOINTS.AUTH.LOGIN && upperMethod === 'POST') {
    const email = data?.email;
    const password = data?.password;
    const mockUser = getMockUserByEmail(email);

    if (!mockUser || mockUser.password !== password) {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    const user = toSafeMockUser(mockUser);
    const encodedPayload = typeof window !== 'undefined'
      ? window.btoa(JSON.stringify({ userId: user._id, role: user.role, email: user.email, branchId: user.branchId }))
      : Buffer.from(JSON.stringify({ userId: user._id, role: user.role, email: user.email, branchId: user.branchId })).toString('base64');

    return {
      success: true,
      data: {
        user,
        accessToken: `mock.${encodedPayload}.token`,
        refreshToken: `mock.${encodedPayload}.refresh`,
      },
      message: 'Login successful (mock)',
    };
  }

  if (normalizedEndpoint === API_ENDPOINTS.AUTH.ME && upperMethod === 'GET') {
    const user = getMockAuthUser();
    return user
      ? createMockPayload(user)
      : { success: false, message: 'Authentication required' };
  }

  if (
    normalizedEndpoint === API_ENDPOINTS.AUTH.LOGOUT ||
    normalizedEndpoint === API_ENDPOINTS.AUTH.REFRESH ||
    normalizedEndpoint === API_ENDPOINTS.AUTH.REGISTER ||
    normalizedEndpoint === API_ENDPOINTS.AUTH.FORGOT_PASSWORD ||
    normalizedEndpoint === API_ENDPOINTS.AUTH.RESET_PASSWORD ||
    normalizedEndpoint === API_ENDPOINTS.AUTH.CHANGE_PASSWORD
  ) {
    return {
      success: true,
      message: 'Mock action completed successfully',
      data: null,
    };
  }

  if (normalizedEndpoint.includes('/super-admin/dashboard/stats')) {
    return createMockPayload(getMockSuperAdminDashboardStats());
  }

  if (normalizedEndpoint.includes('/branch-admin/dashboard')) {
    return createMockPayload(getMockBranchAdminDashboard());
  }

  if (normalizedEndpoint.includes('/teacher/my-classes')) {
    return createMockCollection(getMockTeacherClasses(), 'classes');
  }

  if (normalizedEndpoint.includes('/notifications/web-notifications')) {
    const notifications = getMockNotifications();
    const unreadCount = notifications.filter((notification) => !notification.isRead).length;
    return createMockPayload({ notifications, unreadCount });
  }

  if (normalizedEndpoint.includes('/notifications/stats')) {
    return createMockPayload(MOCK_NOTIFICATION_STATS);
  }

  if (normalizedEndpoint === '/api/notifications') {
    return {
      success: true,
      message: 'Notification action completed in mock mode',
      data: {
        notifications: getMockNotifications(),
      },
    };
  }

  if (normalizedEndpoint.includes('/branch-admin/fee-vouchers') || normalizedEndpoint.includes('/super-admin/fee-vouchers')) {
    return {
      success: true,
      data: {
        vouchers: MOCK_FEE_VOUCHERS,
        total: MOCK_FEE_VOUCHERS.length,
      },
      vouchers: MOCK_FEE_VOUCHERS,
      total: MOCK_FEE_VOUCHERS.length,
    };
  }

  if (normalizedEndpoint.includes('/academic-years')) {
    return createMockCollection(MOCK_ACADEMIC_YEARS, 'academicYears');
  }

  if (normalizedEndpoint.includes('/branches')) {
    return createMockCollection(MOCK_BRANCHES, 'branches');
  }

  if (normalizedEndpoint.includes('/students')) {
    return createMockCollection(getMockStudents(), 'students');
  }

  if (normalizedEndpoint.includes('/teachers')) {
    return createMockCollection(getMockTeachers(), 'teachers');
  }

  if (normalizedEndpoint.includes('/parents')) {
    return createMockCollection(getMockParents(), 'parents');
  }

  if (normalizedEndpoint.includes('/staff')) {
    return createMockCollection(getMockStaff(), 'staff');
  }

  if (normalizedEndpoint.includes('/classes')) {
    return createMockCollection(getMockClasses(), 'classes');
  }

  if (normalizedEndpoint.includes('/subjects')) {
    return createMockCollection(getMockSubjects(), 'subjects');
  }

  if (normalizedEndpoint.includes('/events')) {
    return createMockCollection(MOCK_EVENTS, 'events');
  }

  if (normalizedEndpoint.includes('/expenses')) {
    return createMockCollection(MOCK_EXPENSES, 'expenses');
  }

  if (normalizedEndpoint.includes('/users')) {
    return createMockCollection(getMockUsers().map((user) => toSafeMockUser(user)), 'users');
  }

  if (normalizedEndpoint.includes('/teacher/dashboard')) {
    return createMockPayload({
      stats: {
        totalClasses: 5,
        totalStudents: 145,
        pendingAssignments: 12,
        upcomingExams: 3,
      },
      myClasses: getMockTeacherClasses(),
      todaySchedule: [
        { time: '08:00 AM', class: 'Class 10A', subject: 'Mathematics' },
        { time: '10:00 AM', class: 'Class 10B', subject: 'Mathematics' },
        { time: '02:00 PM', class: 'Class 9A', subject: 'Mathematics' },
      ],
    });
  }

  if (normalizedEndpoint.includes('/branch-admin/charts') || normalizedEndpoint.includes('/super-admin/charts')) {
    return createMockPayload({
      data: [],
      labels: [],
      series: [],
      categories: [],
    });
  }

  if (upperMethod !== 'GET') {
    return {
      success: true,
      message: 'Mock save completed',
      data: data || null,
    };
  }

  return {
    success: true,
    message: 'Mock response',
    data: null,
  };
}

export const setAccessToken = (token) => {
  accessToken = token;
  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', token);
  }
};

export const getAccessToken = () => {
  if (!accessToken && typeof window !== 'undefined') {
    accessToken = localStorage.getItem('accessToken');
  }
  return accessToken;
};

export const clearAccessToken = () => {
  accessToken = null;
  if (typeof window !== 'undefined') {
    localStorage.removeItem('accessToken');
  }
};

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
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
        _t: Date.now(),
      };
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized - Token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh token
        const refreshToken = typeof window !== 'undefined'
          ? localStorage.getItem('refresh_token')
          : null;

        if (refreshToken) {
          const response = await axios.post(
            getFullUrl(API_ENDPOINTS.AUTH.REFRESH),
            { refreshToken }
          );

          const { token } = response.data.data;
          setAccessToken(token);

          // Retry original request
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        clearAccessToken();
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    // Handle network errors
    if (!error.response) {
      return Promise.reject({
        message: 'Network error. Please check your internet connection.',
        status: 0,
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
        htmlResponse: true, // Flag to indicate this was originally HTML
      });
    }

    // Handle JSON error responses
    const errorMessage = error.response?.data?.message || 'An error occurred';
    const errorStatus = error.response?.status || 500;

    return Promise.reject({
      message: errorMessage,
      status: errorStatus,
      errors: error.response?.data?.errors,
    });
  }
);

/**
 * API Client Class
 */
class ApiClient {
  constructor() {
    this.loading = false;
  }

  /**
   * Generic request method
   */
  async request(method, endpoint, data = null, config = {}) {
    this.loading = true;

    try {
      if (isMockModeEnabled()) {
        const mockResponse = await buildMockResponse(method, endpoint, data);
        this.loading = false;
        return mockResponse;
      }

      const response = await apiClient({
        method,
        url: endpoint,
        data,
        ...config,
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
   */
  get(endpoint, params = {}, config = {}) {
    return this.request('GET', endpoint, null, { params, ...config });
  }

  /**
   * POST request
   */
  post(endpoint, data, config = {}) {
    return this.request('POST', endpoint, data, config);
  }

  /**
   * PUT request
   */
  put(endpoint, data, config = {}) {
    return this.request('PUT', endpoint, data, config);
  }

  /**
   * PATCH request
   */
  patch(endpoint, data, config = {}) {
    return this.request('PATCH', endpoint, data, config);
  }

  /**
   * DELETE request
   */
  delete(endpoint, config = {}) {
    return this.request('DELETE', endpoint, null, config);
  }

  /**
   * POST FormData request
   */
  postFormData(endpoint, formData, config = {}) {
    return this.request('POST', endpoint, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config.headers,
      },
    });
  }

  /**
   * PUT FormData request
   */
  putFormData(endpoint, formData, config = {}) {
    return this.request('PUT', endpoint, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config.headers,
      },
    });
  }

  /**
   * Upload file with progress tracking
   */
  async upload(endpoint, file, onProgress = null) {
    const formData = new FormData();
    formData.append('file', file);
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    
    if (onProgress) {
      config.onUploadProgress = (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress(percentCompleted);
      };
    }
    
    return this.post(endpoint, formData, config);
  }

  /**
   * Bulk upload files
   */
  async uploadMultiple(endpoint, files, onProgress = null) {
    const formData = new FormData();
    
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    
    if (onProgress) {
      config.onUploadProgress = (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress(percentCompleted);
      };
    }
    
    return this.post(endpoint, formData, config);
  }

  /**
   * Download file
   */
  async download(endpoint, filename = 'download') {
    try {
      const response = await apiClient({
        method: 'GET',
        url: endpoint,
        responseType: 'blob',
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
   */
  isAuthenticated() {
    return !!getAccessToken();
  }

  /**
   * Get loading state
   */
  isLoading() {
    return this.loading;
  }
}

// Export singleton instance
const client = new ApiClient();

export { apiClient as axiosInstance };
export { setAccessToken, getAccessToken, clearAccessToken };
export default client;
