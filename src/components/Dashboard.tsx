import type { User } from '@supabase/supabase-js'
import type { Lesson, LessonProgress } from '../types/course'
import { allLessons, courseModules } from '../data/course'
import { levelFromXp, totalXp, xpIntoLevel } from '../lib/xp'
import { ProgressBar } from './ProgressBar'
import { StatCard } from './StatCard'

type Props = {
  user: User
  progress: Record<string, LessonProgress>
  onOpenLesson: (lesson: Lesson) => void
  onLogout: () => void
}

export function Dashboard({ user, progress, onOpenLesson, onLogout }: Props) {
  const completedCount = Object.values(progress).filter((item) => item.completed).length
  const xp = totalXp(progress)
  const level = levelFromXp(xp)
  const xpCurrent = xpIntoLevel(xp)
  const totalLessons = allLessons.length

  return (
    <main className="min-h-screen bg-lab-bg text-slate-100">
      <div className="mx-auto max-w-6xl px-5 py-6">
        <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-lab-line bg-lab-card p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-lab-accent">Hi-Fi Lab</p>
            <h1 className="text-3xl font-black">Dashboard</h1>
            <p className="text-sm text-slate-400">{user.email}</p>
          </div>
          <button onClick={onLogout} className="rounded-2xl bg-slate-800 px-4 py-3 font-bold text-slate-200">
            Esci
          </button>
        </header>

        <section className="mb-5 grid gap-4 md:grid-cols-3">
          <StatCard label="Livello" value={level} detail={`${xpCurrent}/150 XP verso il prossimo`} />
          <StatCard label="XP totale" value={xp} detail="Lezioni + quiz perfetti" />
          <StatCard label="Lezioni" value={`${completedCount}/${totalLessons}`} detail="Completate" />
        </section>

        <section className="mb-6 rounded-3xl border border-lab-line bg-lab-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-black">Progresso corso</h2>
            <span className="text-sm text-slate-400">{Math.round((completedCount / totalLessons) * 100)}%</span>
          </div>
          <ProgressBar value={completedCount} max={totalLessons} />
        </section>

        <section className="space-y-5">
          {courseModules.map((module) => (
            <article key={module.id} className="rounded-3xl border border-lab-line bg-lab-card p-5 shadow-xl">
              <div className="mb-4">
                <p className="mb-2 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-wide text-lab-accent">
                  {module.status === 'open' ? 'Sbloccato' : 'Bloccato'}
                </p>
                <h2 className="text-2xl font-black">{module.title}</h2>
                <p className="text-slate-400">{module.subtitle}</p>
              </div>

              <div className="grid gap-3">
                {module.lessons.map((lesson) => {
                  const item = progress[lesson.id]
                  const done = Boolean(item?.completed)

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onOpenLesson(lesson)}
                      className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-left transition hover:border-lab-accent"
                    >
                      <span className={`grid h-10 w-10 place-items-center rounded-2xl text-xl font-black ${done ? 'bg-lab-green text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                        {done ? '✓' : '○'}
                      </span>
                      <span className="flex-1">
                        <strong className="block text-slate-100">{lesson.title}</strong>
                        <small className="block text-slate-400">
                          {lesson.duration} · {lesson.xp} XP base · {done ? `score ${item.score}/${item.total_questions}` : lesson.summary}
                        </small>
                      </span>
                    </button>
                  )
                })}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
