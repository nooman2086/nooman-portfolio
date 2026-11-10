import Section from './Section';
import Badge from './Badge';
import { articles, certifications, writingCadence } from '../data/site';

export default function Credentials() {
  return (
    <Section id="credentials" index="08" label="Credentials and writing" title="Certifications and thought leadership">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <article key={c.name} className="card">
            <Badge tone={c.status === 'Achieved' ? 'ok' : 'warn'}>{c.status}</Badge>
            <h3 className="mb-1 mt-3 text-xl">{c.name}</h3>
            <p className="text-sm text-accent">{c.issuer}</p>
            <p className="mt-2 text-[15px] text-muted">{c.detail}</p>
            {c.credentialUrl && (
              <a href={c.credentialUrl} className="mt-3 inline-block text-sm text-accent" rel="noopener noreferrer">
                Verify credential
              </a>
            )}
          </article>
        ))}
        <article className="card">
          <p className="eyebrow mb-2">Publishing cadence</p>
          <p className="text-[15px] text-muted">{writingCadence}</p>
          {articles.length === 0 && (
            <p className="mt-3 text-[15px]">First articles are in preparation.</p>
          )}
        </article>
      </div>

      {articles.length > 0 && (
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {articles.map((a) => (
            <li key={a.url} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
              <a href={a.url} className="font-medium" rel="noopener noreferrer">
                {a.title}
              </a>
              <span className="font-mono text-xs text-muted">
                {a.kind} · {a.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
