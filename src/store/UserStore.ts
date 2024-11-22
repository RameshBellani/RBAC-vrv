import { create } from 'zustand';
import { User, Role, Permission } from '../types';
import { users as initialUsers, roles as initialRoles, permissions as initialPermissions } from '../data/mockData';

interface Store {
  users: User[];
  roles: Role[];
  permissions: Permission[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Role) => void;
  updateRole: (role: Role) => void;
  deleteRole: (id: string) => void;
  addPermission: (permission: Permission) => void;
  updatePermission: (permission: Permission) => void;
  deletePermission: (id: string) => void;
}

const updateItem = <T extends { id: string }>(items: T[], updatedItem: T): T[] =>
  items.map((item) => (item.id === updatedItem.id ? updatedItem : item));

const deleteItem = <T extends { id: string }>(items: T[], id: string): T[] =>
  items.filter((item) => item.id !== id);

export const useStore = create<Store>((set) => ({
  users: initialUsers,
  roles: initialRoles,
  permissions: initialPermissions,
  searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term }),

  addUser: (user) =>
    set((state) => {
      if (state.users.some((u) => u.email === user.email)) {
        console.error('User with this email already exists.');
        return state;
      }
      return { users: [...state.users, { ...user, id: crypto.randomUUID() }] };
    }),

  updateUser: (user) =>
    set((state) => ({
      users: updateItem(state.users, user),
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: deleteItem(state.users, id),
    })),

  addRole: (role) =>
    set((state) => ({ roles: [...state.roles, { ...role, id: crypto.randomUUID() }] })),

  updateRole: (role) =>
    set((state) => ({
      roles: updateItem(state.roles, role),
    })),

  deleteRole: (id) =>
    set((state) => ({
      roles: deleteItem(state.roles, id),
    })),

  addPermission: (permission) =>
    set((state) => ({
      permissions: [...state.permissions, { ...permission, id: crypto.randomUUID() }],
    })),

  updatePermission: (permission) =>
    set((state) => ({
      permissions: updateItem(state.permissions, permission),
    })),

  deletePermission: (id) =>
    set((state) => ({
      permissions: deleteItem(state.permissions, id),
    })),
}));
