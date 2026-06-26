import { FormEvent, useState } from 'react'
import { supabase } from '../lib/supabase'

type Props = {
  onDone: () => void
}

export function PasswordUpdateScreen({ onDone }: Props) {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function handleUpdate(event: FormEvent<HTMLFormElement>) {
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

    const { error } = await supabase.auth.updateUser({
      password,
    })

    setBusy(false)

    if (error) {
      setMessage(error.message)
      return
    }

    setMessage('Password aggiornata. Ora puoi usare email + password.')
    setTimeout(onDone, 1200)
  }

  return (
    <main className="min-h-screen bg-lab-bg text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-2xl items-center px-5 py-10">
        <section className="w-full rounded-3xl border border-lab-line bg-lab-card p-7 shadow-2xl">
          <p className="mb-4 inline-flex rounded-full bg-lab-gold px-3 py-1 text-sm font-black text-slate-950">
            Recupero password
          </p>
          <h1 className="mb-4 text-4xl font-black">Imposta nuova password</h1>
          <p className="mb-6 text-slate-300">
            Inserisci una nuova password per il tuo account Hi-Fi Lab.
          </p>

          <form onSubmit={handleUpdate} className="space-y-3">
            <input
              className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
              type="password"
              required
              placeholder="nuova password, almeno 8 caratteri"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              className="min-h-12 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 text-slate-100 outline-none focus:border-lab-accent"
              type="password"
              required
              placeholder="ripeti nuova password"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
            <button
              className="min-h-12 w-full rounded-2xl bg-lab-accent px-5 font-black text-slate-950 disabled:opacity-60"
              disabled={busy}
            >
              {busy ? 'Aggiornamento...' : 'Salva nuova password'}
            </button>
          </form>

          {message && (
            <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
              {message}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
