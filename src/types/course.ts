export type QuizQuestion = {
  id: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type Lesson = {
  id: string
  title: string
  duration: string
  xp: number
  summary: string
  theory: string[]
  lab?: string[]
  quiz: QuizQuestion[]
}

export type CourseModule = {
  id: string
  title: string
  subtitle: string
  status: 'open' | 'locked'
  lessons: Lesson[]
}

export type LessonProgress = {
  lesson_id: string
  completed: boolean
  score: number
  total_questions: number
  xp_awarded: number
  completed_at: string | null
}
