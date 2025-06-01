import { prisma } from "../prisma";

export async function createSubscriber(email: string) {
  "use server";

  const existingSubscriber = await prisma.subscribers.findUnique({
    where: { email },
  });

  if (existingSubscriber) return 'Email already subscribed';

  await prisma.subscribers.create({
    data: { email },
  });

    return 'Thanks for subscribing!';
}
