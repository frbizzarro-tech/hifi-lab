# Hi-Fi Lab

**Accademia personale di elettronica vintage, hi-fi e riparazioni.**

Questa è la foundation v1: una web app React + TypeScript + Tailwind con login Supabase, dashboard, quiz, XP, livelli e salvataggio progressi.

## 1. Caricamento su GitHub

Estrai lo ZIP e carica **il contenuto della cartella** nella root del repository `hifi-lab`.

La root del repo deve contenere direttamente:

```text
.github/
src/
supabase/
docs/
package.json
vite.config.ts
index.html
README.md
```

Non deve diventare così:

```text
hifi-lab-foundation-v1/
  src/
  package.json
```

## 2. Supabase: crea le tabelle

Vai in:

**Supabase → SQL Editor → New query**

Incolla il contenuto di:

```text
supabase/schema.sql
```

Poi clicca **Run**.

## 3. Supabase: URL di autenticazione

Vai in:

**Supabase → Authentication → URL Configuration**

Imposta:

```text
Site URL:
https://frbizzarro-tech.github.io/hifi-lab/
```

Aggiungi anche nei redirect URLs:

```text
https://frbizzarro-tech.github.io/hifi-lab/
http://localhost:5173/hifi-lab/
http://localhost:5173/
```

## 4. GitHub: aggiungi i secrets

Vai in:

**GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

Crea questi due secrets:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Nel primo incolla la Project URL Supabase.
Nel secondo incolla la anon/public key Supabase.

## 5. GitHub Pages

Vai in:

**GitHub repo → Settings → Pages**

Sotto **Build and deployment**, scegli:

```text
Source: GitHub Actions
```

## 6. Deploy

Dopo aver caricato i file, GitHub Actions lancerà il build automaticamente.

Il sito sarà disponibile qui:

```text
https://frbizzarro-tech.github.io/hifi-lab/
```

## 7. Avvio locale facoltativo

Sul tuo computer:

```bash
npm install
cp .env.example .env
npm run dev
```

Poi apri l'indirizzo mostrato dal terminale.

## Note

- La anon key Supabase è pensata per il frontend, ma non inserirla nel codice sorgente: usa i GitHub Secrets.
- Le regole RLS nel file SQL fanno sì che ogni utente possa leggere e modificare solo i propri progressi.
