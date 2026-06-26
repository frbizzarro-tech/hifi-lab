import type { LessonProgress } from '../types/course'

export function xpForLesson(baseXp: number, score: number, totalQuestions: number) {
  const bonus = totalQuestions > 0 && score === totalQuestions ? 20 : 0
  return baseXp + score * 10 + bonus
}

export function totalXp(progress: Record<string, LessonProgress>) {
  return Object.values(progress).reduce((sum, item) => {
    return sum + (item.completed ? item.xp_awarded : 0)
  }, 0)
}

export function levelFromXp(xp: number) {
  return Math.floor(xp / 150) + 1
}

export function xpIntoLevel(xp: number) {
  return xp % 150
}
