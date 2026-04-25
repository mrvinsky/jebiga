import { getAllLessons } from '@/data/curriculum';
import LessonClient from './LessonClient';

export function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((lesson) => ({
    id: lesson.id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <LessonClient id={id} />;
}
