import { prisma } from "./prisma";

export async function getCategories() {
  'use server';

  const categories = await prisma.category.findMany();

  return categories;
}

export async function createCategory(data: FormData) {
  'use server';

  const name = data.get('name');
  const description = data.get('description');

  if (!name || !description) {
    return;
  }

  await prisma.category.create({
    data: {
      name: name.toString(),
      description: description.toString(),
    },
  });
}

export async function deleteCategory(id: string) {
  'use server';

  await prisma.category.delete({
    where: {
      id,
    },
  });
}

export async function editCategory(id: string, data: FormData) {
  'use server';

  const name = data.get('name');
  const description = data.get('description');

  if (!name || !description) {
    return;
  }

  await prisma.category.update({
    where: {
      id,
    },
    data: {
      name: name.toString(),
      description: description.toString(),
    },
  });
}