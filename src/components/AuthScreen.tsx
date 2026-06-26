import { FormEvent, useState } from 'react'
import { supabase } from '../lib/supabase'

export function AuthScreen() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return

    setBusy(true)
    setMessage(null)

    const redirectTo = `${window.location.origin}${import.meta.env.BASE_URL}`

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    })

    setBusy(false)

    if (error) {
      setMessage(error.message)
      return
    }

    setMessage('Ti ho inviato un magic link. Apri la mail da questo stesso dispositivo oppure copia il link nel browser.')
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,.28),_transparent_38%),#0f172a] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-5 py-10">
        <section className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl border border-lab-line bg-lab-card/90 p-7 shadow-2xl backdrop-blur">
            <p className="mb-4 inline-flex rounded-full bg-lab-gold px-3 py-1 text-sm font-black text-slate-950">
              Foundation v1
            </p>
            <h1 className="mb-4 text-5xl font-black tracking-tight md:text-6xl">
              Hi-Fi Lab
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-8 text-slate-300">
              Accademia personale di elettronica vintage, multimetro, saldatura e riparazioni.
              Un percorso pratico costruito sui tuoi casi reali: faretto LED, Yamaha, Thorens e futuri restauri.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-3 sm:flex-row">
              <input
                className="min-h-12 flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
                type="email"
                required
                placeholder="la tua email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                className="min-h-12 rounded-2xl bg-lab-accent px-5 font-black text-slate-950 disabled:opacity-60"
                disabled={busy}
              >
                {busy ? 'Invio...' : 'Entra'}
              </button>
            </form>

            {message && (
              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
                {message}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-lab-line bg-slate-950/60 p-6">
            <h2 className="mb-4 text-2xl font-black">Cosa c’è già</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✓ Login con Supabase</li>
              <li>✓ Dashboard con XP e livelli</li>
              <li>✓ Quiz con feedback</li>
              <li>✓ Progressi sincronizzati tra laptop e cellulare</li>
              <li>✓ Primo caso reale: driver LED del faretto</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
