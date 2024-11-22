import { Permission, Role, User } from '../types';

export const permissions: Permission[] = [
  { id: 'read_users', name: 'Read Users', description: 'View user information' },
  { id: 'write_users', name: 'Write Users', description: 'Create and edit users' },
  { id: 'delete_users', name: 'Delete Users', description: 'Remove users from the system' },
  { id: 'manage_roles', name: 'Manage Roles', description: 'Create and modify roles' },
  { id: 'view_analytics', name: 'View Analytics', description: 'Access system analytics' },
];

export const roles: Role[] = [
  {
    id: 'admin',
    name: 'Administrator',
    description: 'Full system access',
    permissions: ['read_users', 'write_users', 'delete_users', 'manage_roles', 'view_analytics'],
  },
  {
    id: 'manager',
    name: 'Manager',
    description: 'User management and analytics',
    permissions: ['read_users', 'write_users', 'view_analytics'],
  },
  {
    id: 'viewer',
    name: 'Viewer',
    description: 'Read-only access',
    permissions: ['read_users'],
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'James Carter',
    email: 'james.carter@example.com',
    avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
    roleId: 'admin',
    status: 'active',
    createdAt: '2024-03-01',
  },
  {
    id: '2',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    roleId: 'manager',
    status: 'active',
    createdAt: '2024-03-02',
  },
  {
    id: '3',
    name: 'Liam Johnson',
    email: 'liam.johnson@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    roleId: 'viewer',
    status: 'inactive',
    createdAt: '2024-03-03',
  },
];
