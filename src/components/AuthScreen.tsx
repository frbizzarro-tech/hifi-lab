import { FormEvent, useState } from 'react'
import { supabase } from '../lib/supabase'

type AuthMode = 'password-login' | 'password-signup' | 'magic-link'

function getRedirectTo() {
  return `${window.location.origin}${import.meta.env.BASE_URL}`
}

export function AuthScreen() {
  const [mode, setMode] = useState<AuthMode>('password-login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function handlePasswordLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return

    setBusy(true)
    setMessage(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setBusy(false)

    if (error) {
      setMessage(error.message)
      return
    }

    setMessage('Accesso riuscito.')
  }

  async function handlePasswordSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return

    if (password.length < 8) {
      setMessage('Scegli una password di almeno 8 caratteri.')
      return
    }

    if (password !== passwordConfirm) {
      setMessage('Le due password non coincidono.')
      return
    }

    setBusy(true)
    setMessage(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: getRedirectTo(),
      },
    })

    setBusy(false)

    if (error) {
      setMessage(error.message)
      return
    }

    if (data.session) {
      setMessage('Account creato e accesso effettuato.')
      return
    }

    setMessage('Account creato. Se Supabase richiede conferma email, controlla la posta.')
  }

  async function handleMagicLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!supabase) return

    setBusy(true)
    setMessage(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: getRedirectTo(),
      },
    })

    setBusy(false)

    if (error) {
      if (error.message.toLowerCase().includes('rate limit')) {
        setMessage('Limite email Supabase superato. Riprova più tardi oppure usa email + password.')
      } else {
        setMessage(error.message)
      }
      return
    }

    setMessage('Ti ho inviato un magic link. Controlla la mail.')
  }

  async function handlePasswordReset() {
    if (!supabase) return

    if (!email) {
      setMessage('Inserisci prima la tua email.')
      return
    }

    setBusy(true)
    setMessage(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: getRedirectTo(),
    })

    setBusy(false)

    if (error) {
      if (error.message.toLowerCase().includes('rate limit')) {
        setMessage('Limite email Supabase superato. Riprova più tardi.')
      } else {
        setMessage(error.message)
      }
      return
    }

    setMessage('Ti ho inviato una mail per impostare o recuperare la password.')
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,.28),_transparent_38%),#0f172a] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-5 py-10">
        <section className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl border border-lab-line bg-lab-card/90 p-7 shadow-2xl backdrop-blur">
            <p className="mb-4 inline-flex rounded-full bg-lab-gold px-3 py-1 text-sm font-black text-slate-950">
              Foundation v1.2
            </p>
            <h1 className="mb-4 text-5xl font-black tracking-tight md:text-6xl">
              Hi-Fi Lab
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-8 text-slate-300">
              Accademia personale di elettronica vintage, multimetro, saldatura e riparazioni.
              Ora puoi entrare con email e password, evitando il limite dei magic link.
            </p>

            <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => { setMode('password-login'); setMessage(null) }}
                className={`rounded-2xl px-4 py-3 font-black ${mode === 'password-login' ? 'bg-lab-accent text-slate-950' : 'bg-slate-800 text-slate-200'}`}
              >
                Entra
              </button>
              <button
                type="button"
                onClick={() => { setMode('password-signup'); setMessage(null) }}
                className={`rounded-2xl px-4 py-3 font-black ${mode === 'password-signup' ? 'bg-lab-accent text-slate-950' : 'bg-slate-800 text-slate-200'}`}
              >
                Crea account
              </button>
              <button
                type="button"
                onClick={() => { setMode('magic-link'); setMessage(null) }}
                className={`rounded-2xl px-4 py-3 font-black ${mode === 'magic-link' ? 'bg-lab-accent text-slate-950' : 'bg-slate-800 text-slate-200'}`}
              >
                Magic link
              </button>
            </div>

            {mode === 'password-login' && (
              <form onSubmit={handlePasswordLogin} className="space-y-3">
                <input
                  className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
                  type="email"
                  required
                  placeholder="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
                  type="password"
                  required
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  className="min-h-12 w-full rounded-2xl bg-lab-accent px-5 font-black text-slate-950 disabled:opacity-60"
                  disabled={busy}
                >
                  {busy ? 'Accesso...' : 'Entra con password'}
                </button>
                <button
                  type="button"
                  onClick={handlePasswordReset}
                  className="w-full rounded-2xl bg-slate-800 px-5 py-3 font-bold text-slate-200"
                  disabled={busy}
                >
                  Imposta / recupera password
                </button>
              </form>
            )}

            {mode === 'password-signup' && (
              <form onSubmit={handlePasswordSignup} className="space-y-3">
                <input
                  className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
                  type="email"
                  required
                  placeholder="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
                  type="password"
                  required
                  placeholder="password, almeno 8 caratteri"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input
                  className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
                  type="password"
                  required
                  placeholder="ripeti password"
                  value={passwordConfirm}
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                />
                <button
                  className="min-h-12 w-full rounded-2xl bg-lab-accent px-5 font-black text-slate-950 disabled:opacity-60"
                  disabled={busy}
                >
                  {busy ? 'Creazione...' : 'Crea account'}
                </button>
              </form>
            )}

            {mode === 'magic-link' && (
              <form onSubmit={handleMagicLink} className="space-y-3">
                <input
                  className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
                  type="email"
                  required
                  placeholder="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  className="min-h-12 w-full rounded-2xl bg-lab-accent px-5 font-black text-slate-950 disabled:opacity-60"
                  disabled={busy}
                >
                  {busy ? 'Invio...' : 'Invia magic link'}
                </button>
              </form>
            )}

            {message && (
              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
                {message}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-lab-line bg-slate-950/60 p-6">
            <h2 className="mb-4 text-2xl font-black">Accesso</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✓ Email + password per evitare il rate limit dei magic link</li>
              <li>✓ Magic link resta disponibile come alternativa</li>
              <li>✓ Recupero password via email</li>
              <li>✓ Progressi salvati su Supabase</li>
              <li>✓ Sincronizzazione tra laptop e cellulare</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
