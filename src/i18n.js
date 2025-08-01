import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import bg from './locales/bg/translation.json';
import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';
import de from './locales/de/translation.json';
import el from './locales/el/translation.json';

const resources = {
  bg: { translation: bg },
  en: { translation: en },
  ru: { translation: ru },
  de: { translation: de },
  el: { translation: el },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'bg',
    fallbackLng: 'bg',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
