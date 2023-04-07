import i18next from "i18next";
import { esp } from "./es";
import { eng } from "./en";

const i18 = (lang) => {
  i18next.init({
    lng: lang,
    resources: {
      es: { translation: esp },
      en: { translation: eng },
    },
  });
  return i18next;
};

export default i18;
