import { Brain, Code, Users } from 'lucide-react'

export const CATEGORIES = [
  {
    value: 'technical',
    label: 'Technical',
    description: 'Concepts, problem solving and hands-on knowledge.',
    icon: Code,
  },
  {
    value: 'hr',
    label: 'HR',
    description: 'Background, motivation and fit for the role.',
    icon: Users,
  },
  {
    value: 'behavioral',
    label: 'Behavioral',
    description: 'Past situations, teamwork and decision making.',
    icon: Brain,
  },
]

export const DIFFICULTIES = [
  { value: 'easy', label: 'Easy', description: 'Warm-up questions.' },
  { value: 'medium', label: 'Medium', description: 'Typical interview level.' },
  { value: 'hard', label: 'Hard', description: 'Deeper, tougher questions.' },
]

// PROVISIONAL: replace with the languages Gnani actually supports (Phase 5).
export const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
]