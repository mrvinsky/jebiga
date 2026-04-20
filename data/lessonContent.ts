import { LessonContent } from './contentTypes';
import { lessonContent as contentA } from './lessonContentA';
import { lessonContentB } from './lessonContentB';
import { lessonContentC } from './lessonContentC';
import { lessonContentD } from './lessonContentD';
import { lessonContentE } from './lessonContentE';

export type { LessonContent, VocabItem, DialogueLine } from './contentTypes';

export const lessonContent: Record<string, LessonContent> = {
  ...contentA,
  ...lessonContentB,
  ...lessonContentC,
  ...lessonContentD,
  ...lessonContentE,
};

export const getLessonContent = (lessonId: string): LessonContent | null =>
  lessonContent[lessonId] ?? null;
