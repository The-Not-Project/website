'use client';

import { createContext, useContext } from 'react';
import { Story, Filters, User, Category } from '@/app/types/types';

type PublicServerActions = {
  getUser: (id: string) => Promise<User | null>;
  getStories: (filters?: Filters, compression?: number) => Promise<Story[]>;
  getStory: (id: string, compression?: number) => Promise<Story>
  getRadarStory : (compression?: number) => Promise<Story | null>;
  getRecommendations: (compression?: number) => Promise<Story[]>;
  getCategories: () => Promise<Category[]>;
};

const PublicServerActionsContext = createContext<PublicServerActions | null>(null);

export function PublicServerActionsProvider({
  children,
  ...actions
}: {
  children: React.ReactNode;
} & PublicServerActions) {
  return (
    <PublicServerActionsContext.Provider value={actions}>
      {children}
    </PublicServerActionsContext.Provider>
  );
}

export function usePublicServerActions() {
  const context = useContext(PublicServerActionsContext);
  if (!context) {
    throw new Error('usePublicServerActions must be used within a PublicServerActionsProvider');
  }
  return context;
}
