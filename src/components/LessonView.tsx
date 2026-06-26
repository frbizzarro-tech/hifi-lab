import { useMemo, useState } from 'react'
import type { Lesson } from '../types/course'
import { xpForLesson } from '../lib/xp'

type Props = {
  lesson: Lesson
  onBack: () => void
  onComplete: (lesson: Lesson, score: number, answers: Record<string, number>) => Promise<void>
}

export function LessonView({ lesson, onBack, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [checked, setChecked] = useState(false)
  const [saving, setSaving] = useState(false)

  const score = useMemo(() => {
    return lesson.quiz.reduce((sum, question) => {
      return sum + (answers[question.id] === question.correctIndex ? 1 : 0)
    }, 0)
  }, [answers, lesson.quiz])

  const allAnswered = lesson.quiz.every((question) => answers[question.id] !== undefined)
  const xp = xpForLesson(lesson.xp, score, lesson.quiz.length)

  async function finish() {
    setSaving(true)
    await onComplete(lesson, score, answers)
    setSaving(false)
  }

  return (
    <main className="min-h-screen bg-lab-bg text-slate-100">
      <div className="mx-auto max-w-4xl px-5 py-6">
        <button onClick={onBack} className="mb-4 rounded-2xl bg-slate-800 px-4 py-3 font-bold text-slate-200">
          ← Dashboard
        </button>

        <article className="rounded-3xl border border-lab-line bg-lab-card p-6 shadow-2xl">
          <p className="mb-3 inline-flex rounded-full bg-lab-gold px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-950">
            Lezione · {lesson.duration}
          </p>
          <h1 className="mb-3 text-4xl font-black">{lesson.title}</h1>
          <p className="mb-6 text-lg text-slate-300">{lesson.summary}</p>

          <div className="space-y-4">
            {lesson.theory.map((paragraph, index) => (
              <p key={index} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 leading-7 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          {lesson.lab && (
            <section className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
              <h2 className="mb-3 text-xl font-black text-amber-200">Laboratorio pratico</h2>
              <ol className="list-decimal space-y-2 pl-5 text-amber-100">
                {lesson.lab.map((item, index) => <li key={index}>{item}</li>)}
              </ol>
            </section>
          )}
        </article>

        <article className="mt-5 rounded-3xl border border-lab-line bg-lab-card p-6 shadow-2xl">
          <h2 className="mb-2 text-2xl font-black">Quiz</h2>
          <p className="mb-5 text-slate-400">Rispondi a tutte le domande. Dopo il controllo vedrai spiegazioni immediate.</p>

          <div className="space-y-5">
            {lesson.quiz.map((question, questionIndex) => {
              const selected = answers[question.id]
              const correct = selected === question.correctIndex

              return (
                <section key={question.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                  <h3 className="mb-3 font-black">
                    {questionIndex + 1}. {question.prompt}
                  </h3>

                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={option}
                        className={`block cursor-pointer rounded-2xl border p-3 transition ${
                          selected === optionIndex
                            ? 'border-lab-accent bg-lab-accent/10'
                            : 'border-slate-700 bg-slate-900 hover:border-slate-500'
                        }`}
                      >
                        <input
                          className="mr-3"
                          type="radio"
                          name={question.id}
                          checked={selected === optionIndex}
                          onChange={() => setAnswers({ ...answers, [question.id]: optionIndex })}
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  {checked && (
                    <div className={`mt-3 rounded-2xl p-4 ${correct ? 'bg-green-500/15 text-green-100' : 'bg-red-500/15 text-red-100'}`}>
                      <strong>{correct ? 'Corretto.' : 'Non corretto.'}</strong> {question.explanation}
                    </div>
                  )}
                </section>
              )
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {!checked ? (
              <button
                onClick={() => setChecked(true)}
                disabled={!allAnswered}
                className="rounded-2xl bg-lab-accent px-5 py-3 font-black text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Controlla risposte
              </button>
            ) : (
              <button
                onClick={finish}
                disabled={saving}
                className="rounded-2xl bg-lab-green px-5 py-3 font-black text-slate-950 disabled:opacity-50"
              >
                {saving ? 'Salvataggio...' : `Completa lezione · ${score}/${lesson.quiz.length} · +${xp} XP`}
              </button>
            )}
          </div>
        </article>
      </div>
    </main>
  )
}
