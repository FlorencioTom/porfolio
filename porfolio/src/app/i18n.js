import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "projects": "Projects",
      "contact": "Contact",
      "title-intro":"Hello! i'm  Florencio",
      "availability":"Available to work"
    }
  },
  es: {
    translation: {
      "home": "Inicio",
      "about": "Sobre mi",
      "projects": "Proyectos",
      "contact": "Contacto",
      "title-intro":"Hola! Soy Florencio",
      "availability":"Disponible para Trabajar"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
