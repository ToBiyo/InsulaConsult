import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//resources
import homeIt from "./assets/locales/it/home.json";
import homeEn from "./assets/locales/en/home.json";
import buttonsIt from "./assets/locales/it/buttons.json";
import buttonsEn from "./assets/locales/en/buttons.json";
import servicesIt from "./assets/locales/it/services.json";
import servicesEn from "./assets/locales/en/services.json";
import menuIt from "./assets/locales/it/menu.json";
import menuEn from "./assets/locales/en/menu.json";
import aboutIt from "./assets/locales/it/about.json";
import aboutEn from "./assets/locales/en/about.json";
import projectsIt from "./assets/locales/it/projects.json";
import projectsEn from "./assets/locales/en/projects.json";
import networkIt from "./assets/locales/it/network.json";
import networkEn from "./assets/locales/en/network.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    suppotredLngs: ["it", "en"],
    fallbackLng: "it",
    ns: ["home", "buttons", "services", "menu", "about"],
    defaultNS: "home",
    debug: true,
    lng: "it" || "en",
    resources: {
      en: {
        home: homeEn,
        buttons: buttonsEn,
        services: servicesEn,
        menu: menuEn,
        about: aboutEn,
        projects: projectsEn,
        network : networkEn
      },
      it: {
        home: homeIt,
        buttons: buttonsIt,
        services: servicesIt,
        menu: menuIt,
        about: aboutIt,
        projects: projectsIt,
        network : networkIt
      },
    },
  });

export default i18n;
