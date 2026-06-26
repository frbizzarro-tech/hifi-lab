type Props = {
  value: number
  max: number
}

export function ProgressBar({ value, max }: Props) {
  const width = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0

  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-950">
      <div
        className="h-full rounded-full bg-lab-accent transition-all"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
