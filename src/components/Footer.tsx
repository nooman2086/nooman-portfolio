import { profile } from '../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-3 px-5">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.title}</span>
      </div>
    </footer>
  );
}
