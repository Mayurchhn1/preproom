export interface RehearsalGoal {
  id: 'clarity' | 'confidence' | 'structure';
  label: string;
  description: string;
}

export const rehearsalGoals: RehearsalGoal[] = [
  {
    id: 'clarity',
    label: 'Clarity',
    description: 'Give answers that are clear, direct, and easy to follow.',
  },
  {
    id: 'confidence',
    label: 'Confidence',
    description: 'Practice delivering answers with a calm, confident presence.',
  },
  {
    id: 'structure',
    label: 'Structure',
    description: 'Build answers with a clear beginning, evidence, and conclusion.',
  },
];
