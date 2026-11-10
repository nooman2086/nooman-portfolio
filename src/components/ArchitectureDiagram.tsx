import Section from './Section';

const channels = ['Web', 'Mobile', 'Partner APIs'];
const services = ['Order service', 'Inventory service', 'Identity service'];
const systems = ['ERP', 'Warehouse', 'Identity', 'ITSM'];

/** Illustrative, vendor-neutral integration reference. Replace with your own diagrams as you publish them. */
export default function ArchitectureDiagram() {
  return (
    <Section id="architecture" index="04" label="Architecture" title="Reference integration pattern">
      <p className="mb-6 max-w-prose">
        An illustrative layered pattern I use when modernizing around legacy systems of record: a single API entry point,
        domain services, and an event backbone that decouples consumers from core systems.
      </p>
      <figure className="m-0">
        <div className="overflow-x-auto rounded-md border border-line bg-surface p-4">
          <svg
            viewBox="0 0 720 360"
            role="img"
            aria-labelledby="arch-title arch-desc"
            className="mx-auto h-auto min-w-[620px] w-full"
          >
            <title id="arch-title">Layered integration reference architecture</title>
            <desc id="arch-desc">
              Channels at the top call an API gateway. The gateway routes to domain services. Services publish and consume
              events on an event backbone. The backbone connects to systems of record: ERP, warehouse, identity and ITSM.
            </desc>

            {/* Row 1: channels */}
            {channels.map((label, i) => (
              <g key={label}>
                <rect x={40 + i * 220} y={14} width={180} height={40} rx={6} className="fill-surface stroke-line" />
                <text x={130 + i * 220} y={39} textAnchor="middle" className="fill-ink font-sans text-[13px]">
                  {label}
                </text>
              </g>
            ))}

            {/* Row 2: gateway */}
            <rect x={40} y={92} width={640} height={40} rx={6} className="fill-accent-soft stroke-accent" />
            <text x={360} y={117} textAnchor="middle" className="fill-accent font-mono text-[12px] uppercase">
              API gateway · authentication · rate limits
            </text>

            {/* Row 3: services */}
            {services.map((label, i) => (
              <g key={label}>
                <rect x={40 + i * 220} y={172} width={180} height={40} rx={6} className="fill-surface stroke-line" />
                <text x={130 + i * 220} y={197} textAnchor="middle" className="fill-ink font-sans text-[13px]">
                  {label}
                </text>
              </g>
            ))}

            {/* Row 4: event backbone */}
            <rect x={40} y={250} width={640} height={40} rx={6} className="fill-accent-soft stroke-accent" />
            <text x={360} y={275} textAnchor="middle" className="fill-accent font-mono text-[12px] uppercase">
              Event backbone · messaging · idempotent consumers
            </text>

            {/* Row 5: systems of record */}
            {systems.map((label, i) => (
              <g key={label}>
                <rect x={40 + i * 163} y={318} width={145} height={34} rx={6} className="fill-surface stroke-line" />
                <text x={112 + i * 163} y={340} textAnchor="middle" className="fill-ink font-sans text-[13px]">
                  {label}
                </text>
              </g>
            ))}

            {/* Connectors */}
            {[130, 350, 570].map((x) => (
              <g key={`top-${x}`} className="stroke-muted" strokeWidth={1.5}>
                <line x1={x} y1={54} x2={x} y2={92} />
                <line x1={x} y1={132} x2={x} y2={172} />
                <line x1={x} y1={212} x2={x} y2={250} />
              </g>
            ))}
            {[112, 275, 438, 601].map((x) => (
              <line key={`bot-${x}`} x1={x} y1={290} x2={x} y2={318} className="stroke-muted" strokeWidth={1.5} />
            ))}
          </svg>
        </div>
        <figcaption className="mt-3 text-sm text-muted">
          Illustrative reference only. It is not taken from any customer engagement.
        </figcaption>
      </figure>
    </Section>
  );
}
