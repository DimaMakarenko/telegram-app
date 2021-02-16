import i18n from './i18n';

// get system language code
const languageSystem = 'en';

// set default app language
const defaultLanguage = i18n.hasResourceBundle(languageSystem, 'common') ? languageSystem : 'en';

const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
};

const resetLanguage = () => changeLanguage(defaultLanguage);

export { defaultLanguage, resetLanguage, i18n };
export default changeLanguage;
