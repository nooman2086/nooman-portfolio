interface BadgeProps {
  children: string;
  tone?: 'neutral' | 'ok' | 'warn';
}

const tones = {
  neutral: 'bg-accent-soft text-accent',
  ok: 'bg-accent-soft text-accent',
  warn: 'bg-warn-soft text-warn',
} as const;

/** Small uppercase status label. Text is always shown, so meaning never relies on colour alone. */
export default function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
