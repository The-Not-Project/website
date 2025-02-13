'use client';

import { createContext, useContext } from 'react';
import { User, Category, Story } from '@/app/types/types';

type ServerActions = {
  getUser: (id: string) => Promise<User | null>;
  UpdateUser: (data: FormData, user: User) => Promise<void>;
  getCategories: () => Promise<Category[]>;
  createCategory: (data: FormData) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
  editCategory: (id: string, data: FormData) => Promise<void>;
  createStory: (data: FormData) => Promise<Story>;
};

const ServerActionsContext = createContext<ServerActions | null>(null);

export function ServerActionsProvider({
  children,
  ...actions
}: {
  children: React.ReactNode;
} & ServerActions) {
  return (
    <ServerActionsContext.Provider value={actions}>
      {children}
    </ServerActionsContext.Provider>
  );
}

export function useServerActions() {
  const context = useContext(ServerActionsContext);
  if (!context) {
    throw new Error('useServerActions must be used within a ServerActionsProvider');
  }
  return context;
}