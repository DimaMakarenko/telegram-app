import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// localization resources
import en from 'assets/localization/en';
import ru from 'assets/localization/ru';

// date localization resources
import { enUS, ru as ruRU } from 'date-fns/locale';

// init date locales
export type DateLocales = {
  [key: string]: Locale;
};

export const dateLocales: DateLocales = {
  en: enUS,
  ru: ruRU,
};

i18n.use(initReactI18next).init({
  debug: false,
  lng: 'en',
  resources: {
    en,
    ru,
  },
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
