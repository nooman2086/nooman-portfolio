import Section from './Section';
import { capabilities } from '../data/site';

export default function Competencies() {
  return (
    <Section id="competencies" index="03" label="Architecture competencies" title="Capability map by architecture domain">
      <p className="mb-6 max-w-prose">
        Organized along the TOGAF architecture domains. Items marked as primary are my specializations. Supporting
        capabilities are in active development.
      </p>
      <div className="grid gap-3">
        {capabilities.map((row) => (
          <div key={row.layer} className="grid overflow-hidden rounded-md border border-line bg-surface sm:grid-cols-[150px_1fr]">
            <h3 className="flex items-center bg-accent-soft px-4 py-3 font-mono text-xs font-normal uppercase tracking-wider text-accent">
              {row.layer}
            </h3>
            <ul className="flex flex-wrap gap-2 p-4">
              {row.primary.map((item) => (
                <li key={item} className="rounded border border-accent px-2.5 py-0.5 text-sm font-medium text-accent">
                  <span className="sr-only">Primary: </span>
                  {item}
                </li>
              ))}
              {row.supporting.map((item) => (
                <li key={item} className="rounded border border-line px-2.5 py-0.5 text-sm">
                  <span className="sr-only">Supporting: </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 flex flex-wrap gap-5 text-sm text-muted" aria-hidden="true">
        <span>
          <i className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm border border-accent" />
          Primary specialization
        </span>
        <span>
          <i className="mr-1.5 inline-block h-2.5 w-2.5 rounded-sm border border-line" />
          Supporting capability
        </span>
      </p>
    </Section>
  );
}
