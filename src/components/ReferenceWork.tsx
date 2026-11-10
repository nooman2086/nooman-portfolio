import Section from './Section';
import Badge from './Badge';
import { referenceProjects } from '../data/site';

export default function ReferenceWork() {
  return (
    <Section id="reference" index="06" label="Reference work" title="Hands-on projects that close the gaps">
      <p className="mb-6 max-w-prose">
        Vendor-neutral reference builds using public documentation and personal lab environments. Each will publish its
        architecture decision records and diagrams.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {referenceProjects.map((p) => (
          <li key={p.title} className="card">
            <Badge tone={p.status === 'Published' ? 'ok' : 'warn'}>{p.status}</Badge>
            <h3 className="mb-2 mt-3 text-lg">{p.title}</h3>
            <p className="text-[15px] text-muted">{p.summary}</p>
            {p.repoUrl && (
              <a href={p.repoUrl} className="mt-3 inline-block text-sm text-accent" rel="noopener noreferrer">
                View repository
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
