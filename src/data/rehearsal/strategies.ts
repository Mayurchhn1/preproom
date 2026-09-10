import {RehearsalGoal} from './goals';

export interface RehearsalStrategy {
  goalId: RehearsalGoal['id'];
  title: string;
  summary: string;
  questionCount: number;
  estimatedMinutes: number;
  focusPoints: string[];
}

export const rehearsalStrategies: RehearsalStrategy[] = [
  {
    goalId: 'clarity',
    title: 'Clear, direct answers',
    summary: 'Practice answering interview questions with a clear point and minimal drift.',
    questionCount: 3,
    estimatedMinutes: 5,
    focusPoints: [
      'Lead with your main point',
      'Use simple supporting evidence',
      'Finish with a clear takeaway',
    ],
  },
  {
    goalId: 'confidence',
    title: 'Calm, confident delivery',
    summary: 'Practice delivering strong answers with a calm and confident presence.',
    questionCount: 3,
    estimatedMinutes: 5,
    focusPoints: [
      'Answer without rushing',
      'Use specific examples',
      'End with a confident conclusion',
    ],
  },
  {
    goalId: 'structure',
    title: 'Structured interview stories',
    summary: 'Practice building answers with a clear beginning, evidence, and conclusion.',
    questionCount: 3,
    estimatedMinutes: 5,
    focusPoints: [
      'Set the context',
      'Explain the evidence',
      'Close with the outcome',
    ],
  },
];
