export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
} | null;

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Story = {
  title: string;
  id: string;
  content: string;
  borough: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};
