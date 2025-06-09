'use server'

import { createAccessToken } from './createAccessToken';
type Role = {
  id: string;
  name: string;
  description: string;
};

export async function getUsersRoles(id: string): Promise<Role[]> {

  const token = await createAccessToken();

  const response = await fetch(
    `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${id}/roles`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to get user roles');
  }

  const data: Role[] = await response.json();
  return data;
}
