import { useCallback, useEffect, useMemo, useState } from 'react'
import type { AuthChangeEvent, Session, User } from '@supabase/supabase-js'
import { AuthScreen } from './components/AuthScreen'
import { ConfigMissing } from './components/ConfigMissing'
import { Dashboard } from './components/Dashboard'
import { LessonView } from './components/LessonView'
import { PasswordUpdateScreen } from './components/PasswordUpdateScreen'
import { isSupabaseConfigured, supabase } from './lib/supabase'
import { levelFromXp, totalXp, xpForLesson } from './lib/xp'
import type { Lesson, LessonProgress } from './types/course'

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [progress, setProgress] = useState<Record<string, LessonProgress>>({})
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null)
  const [loading, setLoading] = useState(true)
  const [passwordRecoveryMode, setPasswordRecoveryMode] = useState(false)

  const user = session?.user ?? null

  const loadProgress = useCallback(async (currentUser: User) => {
    if (!supabase) return

    await supabase.from('profiles').upsert({
      id: currentUser.id,
      email: currentUser.email,
      updated_at: new Date().toISOString(),
    })

    const { data, error } = await supabase
      .from('lesson_progress')
      .select('lesson_id, completed, score, total_questions, xp_awarded, completed_at')
      .eq('user_id', currentUser.id)

    if (error) {
      console.error(error)
      return
    }

    const mapped: Record<string, LessonProgress> = {}
    ;(data ?? []).forEach((item) => {
      mapped[item.lesson_id] = item as LessonProgress
    })

    setProgress(mapped)
  }, [])

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
      if (data.session?.user) {
        void loadProgress(data.session.user)
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, nextSession) => {
      setSession(nextSession)

      if (event === 'PASSWORD_RECOVERY') {
        setPasswordRecoveryMode(true)
      }

      if (event === 'SIGNED_OUT') {
        setPasswordRecoveryMode(false)
        setActiveLesson(null)
        setProgress({})
      }

      if (nextSession?.user) {
        void loadProgress(nextSession.user)
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [loadProgress])

  const updateProfileXp = useCallback(async (currentUser: User, nextProgress: Record<string, LessonProgress>) => {
    if (!supabase) return

    const xp = totalXp(nextProgress)
    const level = levelFromXp(xp)

    await supabase.from('profiles').upsert({
      id: currentUser.id,
      email: currentUser.email,
      xp,
      level,
      updated_at: new Date().toISOString(),
    })
  }, [])

  const completeLesson = useCallback(async (lesson: Lesson, score: number, answers: Record<string, number>) => {
    if (!supabase || !user) return

    const xpAwarded = xpForLesson(lesson.xp, score, lesson.quiz.length)

    const row = {
      user_id: user.id,
      lesson_id: lesson.id,
      completed: true,
      score,
      total_questions: lesson.quiz.length,
      xp_awarded: xpAwarded,
      completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const { error } = await supabase
      .from('lesson_progress')
      .upsert(row, { onConflict: 'user_id,lesson_id' })

    if (error) {
      alert(error.message)
      return
    }

    await supabase.from('quiz_attempts').insert({
      user_id: user.id,
      lesson_id: lesson.id,
      score,
      total_questions: lesson.quiz.length,
      answers,
    })

    const wrongQuestions = lesson.quiz.filter((question) => answers[question.id] !== question.correctIndex)

    if (wrongQuestions.length > 0) {
      await supabase.from('review_items').upsert(
        wrongQuestions.map((question) => ({
          user_id: user.id,
          lesson_id: lesson.id,
          question_id: question.id,
          prompt: question.prompt,
          explanation: question.explanation,
          resolved: false,
          updated_at: new Date().toISOString(),
        })),
        { onConflict: 'user_id,lesson_id,question_id' }
      )
    }

    const nextProgress = {
      ...progress,
      [lesson.id]: {
        lesson_id: lesson.id,
        completed: true,
        score,
        total_questions: lesson.quiz.length,
        xp_awarded: xpAwarded,
        completed_at: row.completed_at,
      },
    }

    setProgress(nextProgress)
    await updateProfileXp(user, nextProgress)
    setActiveLesson(null)
  }, [progress, updateProfileXp, user])

  async function logout() {
    if (!supabase) return
    await supabase.auth.signOut()
    setPasswordRecoveryMode(false)
    setActiveLesson(null)
    setProgress({})
  }

  const currentLesson = useMemo(() => {
    if (activeLesson) return activeLesson
    return null
  }, [activeLesson])

  if (!isSupabaseConfigured) return <ConfigMissing />

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-lab-bg text-slate-100">
        <div className="rounded-3xl border border-lab-line bg-lab-card p-6 text-slate-300">
          Caricamento Hi-Fi Lab...
        </div>
      </main>
    )
  }

  if (session && passwordRecoveryMode) {
    return <PasswordUpdateScreen onDone={() => setPasswordRecoveryMode(false)} />
  }

  if (!session || !user) return <AuthScreen />

  if (currentLesson) {
    return (
      <LessonView
        lesson={currentLesson}
        onBack={() => setActiveLesson(null)}
        onComplete={completeLesson}
      />
    )
  }

  return (
    <Dashboard
      user={user}
      progress={progress}
      onOpenLesson={setActiveLesson}
      onLogout={logout}
    />
  )
}

export default App
