// stories/[borough]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import StoriesPageComponent from '../components/StoriesPage/storiesPage.component';

export default function StoriesPage() {
  const { borough } = useParams() as { borough: string };
  return <StoriesPageComponent boroughParam={borough} />;
}