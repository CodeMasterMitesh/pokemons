import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationHE from './locales/he/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
  en: { translation: translationEN },
  he: { translation: translationHE },
  pt: { translation: translationPT }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'hr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;