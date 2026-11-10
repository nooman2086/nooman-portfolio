import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const readTheme = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable: the choice applies for this visit only */
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
