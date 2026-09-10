import { Language, TranslationDictionary } from "./types";
import { sl } from "./locales/sl";
import { en } from "./locales/en";
import { hr } from "./locales/hr";
import { it } from "./locales/it";
import { sr } from "./locales/sr";

export * from "./types";

export const dictionaries: Record<Language, TranslationDictionary> = {
  sl,
  en,
  hr,
  it,
  sr,
};

export function getDictionary(lang: Language): TranslationDictionary {
  return dictionaries[lang] || dictionaries.sl;
}
