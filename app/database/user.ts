import { User } from "../types/types";
import { prisma } from "./prisma";

export async function createUser(FormData: FormData) {
  'use server';

  const id = FormData.get('id')?.toString();
  const email = FormData.get('email')?.toString();

  if (!id || !email) {
    return;
  }

  await prisma.user.create({
    data: {
      id,
      email,
      firstName: '',
      lastName: '',
    },
  });
}

export async function getUser(id: string) {
  'use server';
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

export async function UpdateUser(data: FormData, user: User) {
  'use server';

  const firstName = data.get('firstName');
  const lastName = data.get('lastName');

  if (!firstName || !lastName) {
    return;
  }

  await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      firstName: firstName.toString(),
      lastName: lastName.toString(),
    },
  });
}