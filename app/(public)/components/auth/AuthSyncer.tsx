'use client';
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthSyncer() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
       fetch('/api/auth/sync', {
    method: 'POST',
    body: JSON.stringify({ userId: user.sub, email: user.email }),
    headers: { 'Content-Type': 'application/json' }
  });
    }
  }, [user]);

  return null;
}
