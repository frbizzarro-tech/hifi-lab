export function ConfigMissing() {
  return (
    <main className="min-h-screen bg-lab-bg text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-5">
        <section className="rounded-3xl border border-lab-line bg-lab-card p-6 shadow-2xl">
          <p className="mb-3 inline-flex rounded-full bg-amber-400 px-3 py-1 text-sm font-black text-slate-950">
            Configurazione richiesta
          </p>
          <h1 className="mb-4 text-3xl font-black">Supabase non è configurato</h1>
          <p className="mb-4 text-slate-300">
            Crea un file <code>.env</code> in locale oppure aggiungi i GitHub Secrets
            <code> VITE_SUPABASE_URL</code> e <code>VITE_SUPABASE_ANON_KEY</code>.
          </p>
          <p className="text-sm text-slate-400">
            Vedi il README incluso nel progetto.
          </p>
        </section>
      </div>
    </main>
  )
}
