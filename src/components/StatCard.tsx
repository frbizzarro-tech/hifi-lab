type Props = {
  label: string
  value: string | number
  detail?: string
}

export function StatCard({ label, value, detail }: Props) {
  return (
    <div className="rounded-3xl border border-lab-line bg-lab-card p-5 shadow-xl">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-4xl font-black text-slate-50">{value}</p>
      {detail && <p className="mt-1 text-sm text-slate-400">{detail}</p>}
    </div>
  )
}
