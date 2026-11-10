import { profile } from '../data/site';

export default function Hero() {
  return (
    <div className="border-b border-line pb-14 pt-16">
      <p className="eyebrow">{profile.title}</p>
      <h1 className="mb-5 mt-3 max-w-[20ch] text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
        {profile.headline}
      </h1>
      <p className="max-w-prose text-lg text-muted">{profile.lede}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
        <li className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
          {profile.highlightTag}
        </li>
        {profile.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a href="#cases" className="btn">
          View case studies
        </a>
        <a href="#contact" className="btn">
          Connect
        </a>
        {profile.resumeUrl && (
          <a href={profile.resumeUrl} className="btn" download>
            Download CV
          </a>
        )}
        <span className="text-sm text-muted">{profile.location}</span>
      </div>
    </div>
  );
}
