"use server"

import { UpdateUser, getCategories, createCategory, deleteCategory, editCategory } from '@/app/script';
import { User, Category } from '@/app/types/types';

export async function useAdminActions() {
  return {
    UpdateUser: async (data: FormData, user: User) => {
      return await UpdateUser(data, user);
    },
    getCategories: async () => {
      return await getCategories();
    },
    createCategory: async (data: FormData) => {
      return await createCategory(data);
    },
    deleteCategory: async (id: string) => {
      return await deleteCategory(id);
    },
    editCategory: async (id: string, data: FormData) => {
      return await editCategory(id, data);
    },
  };
}