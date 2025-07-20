'use client';

import { createContext, useContext } from 'react';
import { User, Category, Story, Filters } from '@/app/types/types';

type AdminServerActions = {
  getUser: (id: string) => Promise<User | null>;
  UpdateUser: (data: FormData, user: User) => Promise<void>;
  createCategory: (data: FormData) => Promise<void>;
  getCategories: () => Promise<Category[]>;
  editCategory: (id: string, data: FormData) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
  createStory: (data: FormData) => Promise<void>;
  createEmptyStory: () => Promise<string>;
  getStories: (filters?: Filters, compression?: number) => Promise<Story[]>;
  editStory: (id: string, data: FormData) => Promise<void>;
  deleteStory: (id: string) => Promise<void>;
  getRecommendations: (compression?: number) => Promise<Story[]>;
  addRecommendation: (id: string) => Promise<void>;
  removeRecommendation: (id: string) => Promise<void>;
  updateRadarStory : (id: string) => Promise<void>;
  getRadarStory : (compression?: number) => Promise<Story | null>;
  deleteRadarStory : () => Promise<void>;
  getMediaSignedUrl : (cid: string, compression?: number) => Promise<string>;
  processMediaFile: (storyId: string, file: File) => Promise<string>;

};

const AdminServerActionsContext = createContext<AdminServerActions | null>(null);

export function AdminServerActionsProvider({
  children,
  ...actions
}: {
  children: React.ReactNode;
} & AdminServerActions) {
  return (
    <AdminServerActionsContext.Provider value={actions}>
      {children}
    </AdminServerActionsContext.Provider>
  );
}

export function useAdminServerActions() {
  const context = useContext(AdminServerActionsContext);
  if (!context) {
    throw new Error('useAdminServerActions must be used within a AdminServerActionsProvider');
  }
  return context;
}