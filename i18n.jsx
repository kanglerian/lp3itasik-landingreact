// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './src/locales/en/translation.json';
import translationID from './src/locales/id/translation.json';

const selectedLanguage = localStorage.getItem('language');
const defaultLanguage = selectedLanguage || 'id';

i18n
  .use(initReactI18next) // Inisialisasi i18next untuk penggunaan dengan React
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      id: {
        translation: translationID,
      },
    },
    lng: defaultLanguage, // Bahasa default
    fallbackLng: 'en', // Bahasa cadangan jika bahasa yang diminta tidak tersedia
    interpolation: {
      escapeValue: false, // Jangan melarikan karakter khusus
    },
  });

export default i18n;
