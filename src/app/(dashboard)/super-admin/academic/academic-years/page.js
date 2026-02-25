'use client';

import { useState, useEffect } from 'react';
import {
  Calendar,
  Plus,
  Search,
  Edit,
  Trash2,
  Building2,
  CalendarDays,
  CheckCircle,
  Eye,
} from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import apiClient from '@/lib/api-client';
import Modal from '@/components/ui/modal';
import Input from '@/components/ui/input';
import Dropdown from '@/components/ui/dropdown';
import { Button } from '@/components/ui/button';

export default function AcademicYearsPage() {
  const [academicYears, setAcademicYears] = useState([]);
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingYear, setEditingYear] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [yearToDelete, setYearToDelete] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingYear, setViewingYear] = useState(null);

  const [formData, setFormData] = useState({
    yearName: '',
    startDate: '',
    endDate: '',
    branches: [],
    status: 'active',
    isCurrent: false,
    description: '',
  });

  useEffect(() => {
    loadAcademicYears();
    loadBranches();
  }, [searchTerm, statusFilter]);

  const loadAcademicYears = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (statusFilter) params.append('status', statusFilter);
      params.append('limit', '100');

      const response = await apiClient.get(`/api/super-admin/academic-years?${params}`);

      if (response.success) {
        const yearsData = response.data.academicYears || response.data || [];
        setAcademicYears(yearsData);
      } else {
        toast.error(response.message || 'Failed to load academic years');
      }
    } catch (error) {
      console.error('Error loading academic years:', error);
      toast.error(error.message || 'Failed to load academic years');
    } finally {
      setLoading(false);
    }
  };

  const loadBranches = async () => {
    try {
      const response = await apiClient.get('/api/super-admin/branches?limit=200');
      if (response.success) {
        const branchesData = response.data.branches || response.data || [];
        setBranches(branchesData);
      }
    } catch (error) {
      console.error('Error loading branches:', error);
    }
  };

  const handleAddNew = () => {
    setEditingYear(null);
    setFormData({
      yearName: '',
      startDate: '',
      endDate: '',
      branches: [],
      status: 'active',
      isCurrent: false,
      description: '',
    });
    setShowModal(true);
  };

  const handleEdit = (year) => {
    setEditingYear(year);
    setFormData({
      yearName: year.yearName || '',
      startDate: year.startDate ? format(new Date(year.startDate), 'yyyy-MM-dd') : '',
      endDate: year.endDate ? format(new Date(year.endDate), 'yyyy-MM-dd') : '',
      branches: year.branches?.map((b) => (typeof b === 'object' ? b._id : b)) || [],
      status: year.status || 'active',
      isCurrent: year.isCurrent || false,
      description: year.description || '',
    });
    setShowModal(true);
  };

  const handleView = (year) => {
    setViewingYear(year);
    setShowViewModal(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.yearName || !formData.startDate || !formData.endDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const yearData = {
        yearName: formData.yearName,
        startDate: formData.startDate,
        endDate: formData.endDate,
        branches: formData.branches,
        status: formData.status,
        isCurrent: formData.isCurrent,
        description: formData.description,
      };

      const url = editingYear
        ? `/api/super-admin/academic-years/${editingYear._id}`
        : '/api/super-admin/academic-years';

      let response;
      if (editingYear) {
        response = await apiClient.put(url, yearData);
      } else {
        response = await apiClient.post(url, yearData);
      }

      if (response.success) {
        toast.success(response.message || 'Academic year saved successfully');
        setShowModal(false);
        loadAcademicYears();
      } else {
        toast.error(response.message || 'Operation failed');
      }
    } catch (error) {
      console.error('Error saving academic year:', error);
      toast.error(error.message || 'Failed to save academic year');
    }
  };

  const handleDelete = async () => {
    if (!yearToDelete) return;

    try {
      const response = await apiClient.delete(`/api/super-admin/academic-years/${yearToDelete._id}`);

      if (response.success) {
        toast.success('Academic year deleted successfully');
        setShowDeleteModal(false);
        setYearToDelete(null);
        loadAcademicYears();
      } else {
        toast.error(response.message || 'Failed to delete academic year');
      }
    } catch (error) {
      console.error('Error deleting academic year:', error);
      toast.error(error.message || 'Failed to delete academic year');
    }
  };

  const handleToggleStatus = async (year) => {
    try {
      const response = await apiClient.put(`/api/super-admin/academic-years/${year._id}`, {
        action: 'toggleStatus',
      });

      if (response.success) {
        toast.success(response.message || 'Status updated successfully');
        loadAcademicYears();
      } else {
        toast.error(response.message || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error toggling status:', error);
      toast.error(error.message || 'Failed to update status');
    }
  };

  const handleSetCurrent = async (year) => {
    try {
      const response = await apiClient.put(`/api/super-admin/academic-years/${year._id}`, {
        action: 'setCurrent',
      });

      if (response.success) {
        toast.success(response.message || 'Set as current academic year successfully');
        loadAcademicYears();
      } else {
        toast.error(response.message || 'Failed to set as current');
      }
    } catch (error) {
      console.error('Error setting as current:', error);
      toast.error(error.message || 'Failed to set as current');
    }
  };

  const toggleBranchSelection = (branchId) => {
    setFormData((prev) => ({
      ...prev,
      branches: prev.branches.includes(branchId)
        ? prev.branches.filter((id) => id !== branchId)
        : [...prev.branches, branchId],
    }));
  };

  // Calculate stats
  const totalYears = academicYears.length;
  const activeYears = academicYears.filter((y) => y.status === 'active').length;
  const currentYear = academicYears.find((y) => y.isCurrent);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1 pt-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Academic Years</h1>
          <p className="text-sm text-gray-600 mt-1">Manage academic years for your branches</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="w-4 h-4" />
          Add Academic Year
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-600">Total Academic Years</p>
              <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{totalYears}</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CalendarDays className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-600">Active Years</p>
              <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{activeYears}</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-600">Current Year</p>
              <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                {currentYear?.yearName || 'Not Set'}
              </p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-600">Total Branches</p>
              <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{branches.length}</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="min-w-0">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search academic years..."
            />
          </div>

          <Dropdown
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={[
              { value: '', label: 'All Status' },
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
              { value: 'archived', label: 'Archived' },
            ]}
            placeholder={null}
          />
        </div>
      </div>

      {/* Academic Years Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academicYears.length === 0 ? (
          <div className="col-span-full bg-white p-12 rounded-lg border border-gray-200 text-center">
            <CalendarDays className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No academic years found. Create your first academic year to get started.</p>
          </div>
        ) : (
          academicYears.map((year) => (
            <div
              key={year._id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{year.yearName}</h3>
                    {year.isCurrent && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 mt-1">
                        Current
                      </span>
                    )}
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      year.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : year.status === 'inactive'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {year.status}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {year.startDate
                      ? format(new Date(year.startDate), 'MMM yyyy')
                      : 'N/A'}{' '}
                    -{' '}
                    {year.endDate ? format(new Date(year.endDate), 'MMM yyyy') : 'N/A'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="w-4 h-4" />
                  <span>
                    {year.branches?.length || 0} branch
                    {year.branches?.length !== 1 ? 'es' : ''} assigned
                  </span>
                </div>

                {/* Branch List Preview */}
                {year.branches && year.branches.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-1">Assigned Branches:</p>
                    <div className="flex flex-wrap gap-1">
                      {year.branches.slice(0, 3).map((branch) => (
                        <span
                          key={branch._id || branch}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {branch.name || branch.code || 'Branch'}
                        </span>
                      ))}
                      {year.branches.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                          +{year.branches.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-gray-200 flex flex-wrap gap-2">
                  <Button
                    onClick={() => handleView(year)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button
                    onClick={() => handleEdit(year)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      setYearToDelete(year);
                      setShowDeleteModal(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>

                {!year.isCurrent && year.status === 'active' && (
                  <Button
                    onClick={() => handleSetCurrent(year)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-green-600 bg-green-50 rounded-lg hover:bg-green-100"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Set as Current
                  </Button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create/Edit Modal */}
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          title={editingYear ? 'Edit Academic Year' : 'Add New Academic Year'}
          size="lg"
          footer={
            <div className="flex items-center justify-end gap-3">
              <Button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </Button>
              <Button type="submit" form="academic-year-form">
                {editingYear ? 'Update Academic Year' : 'Create Academic Year'}
              </Button>
            </div>
          }
        >
          <form id="academic-year-form" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year Name <span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.yearName}
                  onChange={(e) => setFormData({ ...formData, yearName: e.target.value })}
                  placeholder="e.g., 2024-2025"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <Dropdown
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  options={[
                    { value: 'active', label: 'Active' },
                    { value: 'inactive', label: 'Inactive' },
                    { value: 'archived', label: 'Archived' },
                  ]}
                  placeholder={null}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date <span className="text-red-500">*</span>
                </label>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows="3"
                placeholder="Optional description for this academic year"
              />
            </div>

            {/* Branch Selection */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Assign to Branches
              </label>
              <div className="border border-gray-200 rounded-lg max-h-48 overflow-y-auto p-3 space-y-2">
                {branches.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-4">No branches available</p>
                ) : (
                  branches.map((branch) => (
                    <label
                      key={branch._id}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.branches.includes(branch._id)}
                        onChange={() => toggleBranchSelection(branch._id)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-700">{branch.name}</p>
                        <p className="text-xs text-gray-500">{branch.code}</p>
                      </div>
                    </label>
                  ))
                )}
              </div>
              {formData.branches.length > 0 && (
                <p className="text-xs text-gray-500 mt-1">
                  {formData.branches.length} branch(es) selected
                </p>
              )}
            </div>

            {/* Set as Current */}
            <div className="mt-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isCurrent}
                  onChange={(e) => setFormData({ ...formData, isCurrent: e.target.checked })}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm font-medium text-gray-700">Set as Current Academic Year</span>
              </label>
              <p className="text-xs text-gray-500 mt-1 ml-6">
                This will mark this academic year as the current one for selected branches
              </p>
            </div>
          </form>
        </Modal>
      )}

      {/* View Modal */}
      {showViewModal && viewingYear && (
        <Modal
          open={showViewModal}
          onClose={() => setShowViewModal(false)}
          title="Academic Year Details"
          size="lg"
          footer={
            <div className="flex items-center justify-end">
              <Button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Close
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Year Name</p>
                <p className="font-medium text-gray-900">{viewingYear.yearName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <span
                  className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                    viewingYear.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : viewingYear.status === 'inactive'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {viewingYear.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p className="font-medium text-gray-900">
                  {viewingYear.startDate
                    ? format(new Date(viewingYear.startDate), 'MMMM d, yyyy')
                    : 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">End Date</p>
                <p className="font-medium text-gray-900">
                  {viewingYear.endDate
                    ? format(new Date(viewingYear.endDate), 'MMMM d, yyyy')
                    : 'N/A'}
                </p>
              </div>
            </div>

            {viewingYear.isCurrent && (
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700 font-medium">This is the current academic year</p>
              </div>
            )}

            {viewingYear.description && (
              <div>
                <p className="text-sm text-gray-500">Description</p>
                <p className="font-medium text-gray-900">{viewingYear.description}</p>
              </div>
            )}

            <div>
              <p className="text-sm text-gray-500 mb-2">Assigned Branches</p>
              <div className="flex flex-wrap gap-2">
                {viewingYear.branches && viewingYear.branches.length > 0 ? (
                  viewingYear.branches.map((branch) => (
                    <span
                      key={branch._id || branch}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                    >
                      {branch.name || branch.code || 'Branch'}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No branches assigned</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <p className="text-sm text-gray-500">Created By</p>
                <p className="font-medium text-gray-900">
                  {viewingYear.createdBy?.fullName || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Created At</p>
                <p className="font-medium text-gray-900">
                  {viewingYear.createdAt
                    ? format(new Date(viewingYear.createdAt), 'MMMM d, yyyy h:mm a')
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <Modal
          open={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          title="Delete Academic Year"
          size="sm"
          footer={
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          }
        >
          <div className="p-4">
            <p className="text-gray-600">
              Are you sure you want to delete "{yearToDelete?.yearName}"? This action cannot be
              undone.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}
