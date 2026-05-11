import { es } from './es';
import { en } from './en';
import { ca } from './ca';
import { de } from './de';

export const languages = { es, en, ca, de };

export type Lang = keyof typeof languages;
export type Translations = typeof es;

export function getLang(url: URL): Lang {
  const path = url.pathname;
  if (path.startsWith('/en')) return 'en';
  if (path.startsWith('/ca')) return 'ca';
  if (path.startsWith('/de')) return 'de';
  return 'es';
}

export function useTranslations(lang: Lang) {
  return languages[lang];
}