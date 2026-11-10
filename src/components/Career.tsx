import Section from './Section';
import { timeline } from '../data/site';

export default function Career() {
  return (
    <Section id="career" index="02" label="Career evolution" title="From customer engagement to solution architecture">
      <ol className="divide-y divide-line">
        {timeline.map((entry) => (
          <li key={entry.period + entry.title} className="grid gap-1 py-5 first:pt-0 sm:grid-cols-[120px_1fr] sm:gap-6">
            <p className="pt-0.5 font-mono text-sm text-muted">{entry.period}</p>
            <div>
              <h3 className="font-sans text-lg font-semibold">{entry.title}</h3>
              <p className="text-sm font-medium text-accent">{entry.organization}</p>
              <p className="mt-1 max-w-prose text-[15px] text-muted">{entry.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
