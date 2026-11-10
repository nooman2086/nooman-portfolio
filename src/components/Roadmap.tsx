import Section from './Section';
import { roadmap } from '../data/site';

export default function Roadmap() {
  return (
    <Section id="roadmap" index="07" label="Three-year roadmap" title="Toward Principal / Enterprise Architect">
      <p className="mb-6 max-w-prose">
        Progress is measured by artifacts and demonstrable capability. Certifications support that evidence and are not
        the goal. All items are planned and subject to change.
      </p>
      <ol className="grid gap-4 md:grid-cols-3">
        {roadmap.map((phase) => (
          <li key={phase.phase} className="card">
            <p className="eyebrow">{phase.phase}</p>
            <h3 className="mb-3 mt-1 text-xl">{phase.focus}</h3>
            <ul className="list-disc space-y-1.5 pl-5 text-[15px] text-muted">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
