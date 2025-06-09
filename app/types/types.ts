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
  summary: string;
  borough: string;
  author: Author;
  categories: Category[];
  media: Media[];
  createdAt: Date;
  updatedAt?: Date;
};

export type Media = {
  id: string;
  url: string;
  storyId: string;
  isThumbnail: boolean;
};

type Author = {
  id: string;
  firstName: string;
  lastName: string;
};

export type Filters = {
  search: string;
  boroughs: string[];
  categories: string[];
};

export type RawStory = {
  title: string;
  id: string;
  content: string;
  summary: string;
  borough: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
  categories: { category: Category }[];
  media: RawMedia[];
  createdAt: Date;
}

export type RawMedia = {
  id: number | string;
  cid: string;
  storyId: string;
  isThumbnail: boolean;
}
export type StorySave = {
  id: string;
  storyId: string;
  userId: string;
  createdAt: Date;
}