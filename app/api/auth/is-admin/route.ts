import { isUserAdmin } from '@/app/auth-actions/isUserAdmin';

export async function POST(req: Request) {
  const { userId } = await req.json();
  
  const admin = await isUserAdmin(userId); 
  return new Response(JSON.stringify({ isAdmin: admin }));
}