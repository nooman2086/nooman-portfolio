import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
  last?: boolean;
}

/** Numbered section with a left rail label, like chapters in an architecture document. */
export default function Section({ id, index, label, title, children, last }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-14 ${last ? '' : 'border-b border-line'}`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10">
        <p className="eyebrow pt-2">
          {index} {label}
        </p>
        <div>
          <h2 id={headingId} className="mb-5 text-3xl leading-tight">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
