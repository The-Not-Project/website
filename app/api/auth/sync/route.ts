import { getUser, createUser } from '@/app/database/repositories/user.repository';

export async function POST(req: Request) {
  
const { userId, email } = await req.json();

  const existingUser = await getUser(userId);

  if (!existingUser) {
    await createUser({
      id: userId,
      email
    });
  }

  return new Response('OK');
}
