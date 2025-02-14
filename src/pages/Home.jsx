import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TextSection } from "../layout/TextSection";
import { CardSection } from "../layout/CardSection";
import { CardsContainer } from "../components/CardsContainer";
import { ServiceCard } from "../components/cards/ServiceCard";
import { ProjectCard } from "../components/cards/ProjectsCard";
import TextContent from "../components/TextContent";
//data structure
import { projectsCardsData } from "../data/data";
import { servicesCardsData } from "../data/data";

//assets
import home from "../assets/images/Home/home.webP";
import about from "../assets/images/Home/about.webP";
import network from "../assets/images/Home/network.webP";
//services
import consult from "../assets/images/Servizi/consult.svg";
import management from "../assets/images/Servizi/management.svg";
import project from "../assets/images/Servizi/project.svg";
import comunication from "../assets/images/Servizi/comunication.svg";
//assets projects
import logo1 from "../assets/images/Progetti/logo1.webp";
import logo2 from "../assets/images/Progetti/logo2.webp";
import logo3 from "../assets/images/Progetti/logo3.webp";
import logo4 from "../assets/images/Progetti/logo4.webp";

export default function Home() {
  const { t } = useTranslation(["home", "buttons"]);

  const servicesData = [
    new servicesCardsData(
      consult,
      t("consult_service"),
      [t("consult_subservice_0"), t("consult_subservice_1")],
      "Migliora la tua strategia di business"
    ),
    new servicesCardsData(
      management,
      t("management_service"),
      [
        t("management_subservice_0"),
        t("management_subservice_1"),
        t("management_subservice_2"),
      ],
      "Gestione del business plan"
    ),
    new servicesCardsData(
      project,
      t("project_service"),
      [
        t("project_subservice_0"),
        t("project_subservice_1"),
        t("project_subservice_2"),
        t("project_subservice_3"),
      ],
      "Creazione e gestione del business plan"
    ),
    new servicesCardsData(
      comunication,
      t("comunication_service"),
      [t("comunication_subservice_0"), t("comunication_subservice_1")],
      "Gestione eventi e comunicazione deigitale"
    ),
  ];

  const projectsData = [
    new projectsCardsData(
      logo1,
      t("home:project1_title"),
      t("home:project1_description"),
      "4-Minute Barriers logo"
    ),
    new projectsCardsData(
      logo2,
      t("home:project2_title"),
      t("home:project2_description"),
      "Faster logo"
    ),
    new projectsCardsData(
      logo3,
      t("home:project3_title"),
      t("home:project3_description"),
      "Golden Ratio Teaching Logo"
    ),
    new projectsCardsData(
      logo4,
      t("home:project4_title"),
      t("home:project4_description"),
      "C-Tour logo"
    ),
  ];

  //counter to react router that remembers current scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TextSection img={home}>
        <TextContent
          heading={t("home:home_head_title")}
          text={t("home:home_head_description")}
        />
      </TextSection>
      <CardSection
        heading={t("service_heading")}
        path={"services"}
        contact={true}
        primary={true}
      >
        <CardsContainer>
          {servicesData.map((data, i) => (
            <ServiceCard data={data} i={i} />
          ))}
        </CardsContainer>
      </CardSection>
      <TextSection img={about}>
        <TextContent
          heading={t("home:about_heading")}
          text={t("home:about_description")}
          path={"about"}
          contact={true}
        />
      </TextSection>
      <CardSection
        heading={t("project_heading")}
        path={"projects"}
        primary={true}
        contact={true}
      >
        <CardsContainer>
          {projectsData.map((data, i) => (
            <ProjectCard data={data} i={i} key={data.heading} />
          ))}
        </CardsContainer>
      </CardSection>
      <TextSection img={network}>
        <TextContent
          heading={t("home:network_heading")}
          text={t("home:network_description")}
          path={"network"}
          contact={true}
        />
      </TextSection>
    </>
  );
}
