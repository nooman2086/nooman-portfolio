import Section from './Section';
import Badge from './Badge';
import { caseStudies } from '../data/site';
import type { CaseStudy } from '../types';

const isPlaceholder = (text: string) => text.includes('[');

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-4">
      <dt className="pt-0.5 font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="m-0 text-[15px]">{children}</dd>
    </div>
  );
}

function CaseCard({ study }: { study: CaseStudy }) {
  const draft = isPlaceholder(study.problem) || isPlaceholder(study.approach);
  return (
    <article className="card">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {draft && <Badge tone="warn">In preparation</Badge>}
        {study.status.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
        <span className="font-mono text-xs uppercase tracking-wider text-muted">{study.industry}</span>
      </div>
      <h3 className="mb-2 text-xl">{study.title}</h3>
      <p className="mb-4 max-w-prose text-[15px] text-muted">{study.context}</p>

      <details className="group border-t border-line pt-3">
        <summary className="cursor-pointer text-sm font-medium text-accent">
          Read the case study
        </summary>
        <dl className="mt-4 grid gap-4">
          <Field label="My role">{study.role}</Field>
          <Field label="Business problem">{study.problem}</Field>
          <Field label="Solution approach">{study.approach}</Field>
          <Field label="Technology">
            <ul className="flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <li key={t} className="rounded border border-line px-2 py-0.5 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </Field>
          <Field label="Decisions and trade-offs">
            <ul className="grid gap-2">
              {study.decisions.map((d) => (
                <li key={d.decision}>
                  <strong className="font-medium">{d.decision}</strong>
                  <br />
                  <span className="text-muted">{d.tradeoff}</span>
                </li>
              ))}
            </ul>
          </Field>
          <Field label="Verified outcomes">
            {study.outcomes ?? <span className="text-muted">No verified outcomes published.</span>}
          </Field>
          <Field label="Lessons learned">{study.lessons}</Field>
        </dl>
        {!study.published && (
          <p className="mt-4 text-xs text-muted">Anonymized. Customer identity withheld.</p>
        )}
      </details>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <Section id="cases" index="05" label="Case studies" title="Anonymized project case studies">
      <p className="mb-6 max-w-prose">
        Customers are described by industry and context only. Each case study states my actual role and whether the work
        was proposed, designed, implemented or measured.
      </p>
      <div className="grid gap-4">
        {caseStudies.map((study) => (
          <CaseCard key={study.id} study={study} />
        ))}
      </div>
    </Section>
  );
}
