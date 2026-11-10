import Section from './Section';
import { contact } from '../data/site';

const isPlaceholder = (text: string) => text.includes('[');

export default function Contact() {
  const hasEmail = contact.email !== '' && !isPlaceholder(contact.email);
  return (
    <Section id="contact" index="09" label="Contact" title="Professional connections" last>
      <p className="mb-5 max-w-prose">{contact.intro}</p>
      <ul className="mb-6 grid gap-2">
        <li>
          <span className="eyebrow mr-3">LinkedIn</span>
          {contact.linkedinUrl ? (
            <a href={contact.linkedinUrl} rel="noopener noreferrer" className="text-accent">
              {contact.linkedinUrl.replace(/^https?:\/\//, '')}
            </a>
          ) : (
            <span className="text-muted">[Add your LinkedIn URL in src/data/site.ts]</span>
          )}
        </li>
        <li>
          <span className="eyebrow mr-3">Email</span>
          {hasEmail ? (
            <a href={`mailto:${contact.email}`} className="text-accent">
              {contact.email}
            </a>
          ) : (
            <span className="text-muted">{contact.email}</span>
          )}
        </li>
      </ul>
      <p className="max-w-prose rounded border border-l-[3px] border-line border-l-accent bg-surface px-4 py-3 text-sm text-muted">
        {contact.notice}
      </p>
    </Section>
  );
}
