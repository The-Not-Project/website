'use client';

import { createContext, useContext, useState } from 'react';
import { Story, Filters, User, Category } from '@/app/types/types';
import { BoroughSummaries } from '@/app/constants/boroughs';

type PublicServerActions = {
  getUser: (id: string) => Promise<User | null>;
  UpdateUser: (data: FormData, user: User) => Promise<void>;
  getCategories: () => Promise<Category[]>;
  getStories: (filters?: Filters, compression?: number) => Promise<Story[]>;
  getRecommendations: (compression?: number) => Promise<Story[]>;
  getRadarStory: (compression?: number) => Promise<Story | null>;
};

type BoroughType = {
  fileName: string;
  borough: string;
  description: string;
};

type AppContextType = PublicServerActions & {
  currentBorough: BoroughType;
  setCurrentBorough: (borough: BoroughType) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function PublicServerActionsProvider({
  children,
  ...actions
}: {
  children: React.ReactNode;
} & PublicServerActions) {
  const [currentBorough, setCurrentBorough] = useState<BoroughType>(
    BoroughSummaries.queens
  );
  const [loading, setLoading] = useState<boolean>(false);

  const value: AppContextType = {
    ...actions,
    currentBorough,
    setCurrentBorough,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}