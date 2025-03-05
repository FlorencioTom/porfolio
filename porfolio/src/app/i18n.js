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
      "description-intro":"Passionate about creating intuitive and engaging digital experiences. If you have a project in mind or just want to connect, feel free to reach out!",
      "availability":"Available to work",
      "aboutme":"Sobre mi",
      "profesion":"Front-End Web Developer",
      "mailme":"Send Email",
      "codingSkills":{
        "text":"Coding ",
        "underline":" Skills"
      },
      
      "pprojects":{
        "text":"Personal",
        "underline":" Projects"
      },
      "link":"Link",
      "skills":"Skills",
      "finalText":"For more information, contact or connect with me.",
      "right":"All rights reserved."
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
      "profesion":"Desarrollador web Front-End",
      "description-intro":"apasionado por la creación de experiencias digitales intuitivas y atractivas. Si tienes un proyecto en mente o simplemente quieres conectar, ¡no dudes en contactarme!",
      "aboutme":"¡Hola! Soy Florencio, un desarrollador web junior apasionado por la creación de experiencias digitales intuitivas y atractivas. Si tienes un proyecto en mente o simplemente quieres conectar, ¡no dudes en contactarme!",
      "mailme":"Enviar correo",
      "codingSkills":{
        "text":"Competencias",
        "underline":"digitales"
      },
      "pprojects":{
        "text":"Proyectos",
        "underline":""
      },
      "link":"Enlace",
      "skills":"Habilidades",
      "finalText":"Para mas informacion contacta o conecta conmigo",
      "right":"Todos los derechos reservados"
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
