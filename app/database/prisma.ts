import { PrismaClient } from '@prisma/client';
import { getSession } from '@auth0/nextjs-auth0';
import { Filters, Story, User } from '../types/types';
import { redirect } from 'next/navigation';
import { pinata } from '../utils/config';

const globalPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalPrisma.prisma = prisma;