export interface VocabItem {
  word: string;
  pronunciation: string;
  translation: string;
  example?: string;
}

export interface DialogueLine {
  speaker: 'A' | 'B';
  serbian: string;
  translation: string;
}

export interface LessonContent {
  scenario: string;
  vocabulary: VocabItem[];
  grammarNote?: { title: string; body: string };
  culturalTip?: string;
  dialogue?: DialogueLine[];
}
