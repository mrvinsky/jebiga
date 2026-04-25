import { LessonContent } from './contentTypes';
import { lessonContent as contentA } from './lessonContentA';
import { lessonContentB } from './lessonContentB';
import { lessonContentC } from './lessonContentC';
import { lessonContentD } from './lessonContentD';
import { lessonContentE } from './lessonContentE';
import { lessonContentF } from './lessonContentF';

export type { LessonContent, VocabItem, DialogueLine } from './contentTypes';

export const lessonContent: Record<string, LessonContent> = {
  ...contentA,
  ...lessonContentB,
  ...lessonContentC,
  ...lessonContentD,
  ...lessonContentE,
  ...lessonContentF,
};

export const getLessonContent = (lessonId: string): LessonContent | null =>
  lessonContent[lessonId] ?? null;
