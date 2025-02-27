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
      "availability":"Available to work",
      "aboutme":"Sobre mi"
    }
  },
  es: {
    translation: {
      "home": "Inicio",
      "about": "Sobre mi",
      "projects": "Proyectos",
      "contact": "Contacto",
      "title-intro":"Hola! Soy Florencio",
      "availability":"Disponible para Trabajar",
      "aboutme":"¡Hola! Soy Florencio, un desarrollador web junior apasionado por la creación de experiencias digitales intuitivas y atractivas. Si tienes un proyecto en mente o simplemente quieres conectar, ¡no dudes en contactarme! Estoy listo para aportar mis conocimientos"
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
