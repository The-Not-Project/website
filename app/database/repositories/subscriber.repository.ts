import { prisma } from "../prisma";

export async function createSubscriber(
  email: string,
  phone?: string
): Promise<string> {
  "use server";

  const existingSubscriber = await prisma.subscribers.findUnique({
    where: { email },
  });

  if (existingSubscriber) return "Email already subscribed";

  await prisma.subscribers.create({
    data: {
      email,
      phone: phone || null,
    },
  });

  return "Thanks for subscribing!";
}
