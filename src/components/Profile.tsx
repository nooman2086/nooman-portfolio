import Section from './Section';
import { pillars, profileNote } from '../data/site';

export default function Profile() {
  return (
    <Section id="profile" index="01" label="Profile" title="Two specializations, one architecture discipline">
      <div className="mb-7 grid gap-4 sm:grid-cols-2">
        {pillars.map((p) => (
          <article key={p.title} className="card">
            <p className="eyebrow mb-2">{p.kind}</p>
            <h3 className="mb-2 text-xl">{p.title}</h3>
            <p className="text-[15px] text-muted">{p.summary}</p>
          </article>
        ))}
      </div>
      <p className="max-w-prose">{profileNote}</p>
    </Section>
  );
}
