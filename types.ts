
export type LearningStatus = 'not-studied' | 'memorized' | 'not-memorized';

export interface FlashcardData {
  id: number;
  word: string;
  pronunciation?: string;
  definition: string;
  example: string;
  partOfSpeech?: string; // Dynamically assigned from sub-theme name for compatibility
  level?: string; // A1-C2
  category?: string;
  status?: LearningStatus; // Status within a learning session
}

export interface SubTheme {
    id: string;
    name: string;
    cards: FlashcardData[];
    // Fix: Add optional 'isReview' property to satisfy type checks in ModeSelection.tsx.
    isReview?: boolean;
}

export interface MainTheme {
    id: string;
    name: string;
    subThemes: SubTheme[];
}

export interface CustomPreset {
  id: number;
  name: string;
  cardIds: number[];
}

export interface AppData {
  customPresets: CustomPreset[];
  themedProgress: Record<string, number[]>;
  presetProgress: Record<number, number[]>;
  totalReviewProgress: Record<string, { deck: number[]; memorizedInDeck: number[] }>;
  userThemes: MainTheme[];
  favoriteCardIds: number[];
}

// FIX: Centralize LearningSource type to ensure it's consistent and includes all possible source types.
export type LearningSource = { type: 'themed'; id: string } | { type: 'preset'; id: number } | { type: 'total-review'; id: string };

// FIX: Centralize ActiveLearningSession interface to ensure it's consistent across components.
export interface ActiveLearningSession {
  cards: FlashcardData[];
  source: LearningSource;
  title: string;
}