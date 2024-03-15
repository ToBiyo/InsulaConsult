import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { NavigationButtons } from "../components/NavigationButtons";
import { TextSection } from "../components/TextSection";
import { CardsSection } from "../components/CardsSection";
import { ServiceCard } from "../components/cards/ServiceCard";
import { ProjectCard } from "../components/cards/ProjectsCard";

//data structure
import { projectsCardsData } from "../data/data";
import { servicesCardsData } from "../data/data";
//resource
import home from "../assets/images/Home/home.png";
import about from "../assets/images/Home/about.png";
import network from "../assets/images/Home/network.png";

//services
import consult from "../assets/images/Servizi/consult.svg";
import management from "../assets/images/Servizi/management.svg";
import project from "../assets/images/Servizi/project.svg";
import comunication from "../assets/images/Servizi/comunication.svg";

//assets projects
import logo1 from "../assets/images/Progetti/logo1.png";
import logo2 from "../assets/images/Progetti/logo2.png";
import logo3 from "../assets/images/Progetti/logo3.png";
import logo4 from "../assets/images/Progetti/logo4.png";

export const Home = () => {
  const { t } = useTranslation();

  const container = {
    w: "100vw",
    height: "auto",
    flexDir: "column",
    bgImage: `url(${home})`,
    bgAttachment: "fixed",
  };
  const projectsData = [
    new projectsCardsData(
      logo1,
      t("project1_title"),
      t("project1_description")
    ),
    new projectsCardsData(
      logo2,
      t("project2_title"),
      t("project2_description")
    ),
    new projectsCardsData(
      logo3,
      t("project3_title"),
      t("project3_description")
    ),
    new projectsCardsData(
      logo4,
      t("project4_title"),
      t("project4_description")
    ),
  ];

  const servicesData = [
    new servicesCardsData(consult, t("consult_service"), [
      t("consult_subservice_0"),
      t("consult_subservice_1"),
    ]),
    new servicesCardsData(management, t("management_service"), [
      t("management_subservice_0"),
      t("management_subservice_1"),
    ]),
    new servicesCardsData(project, t("project_service"), [
      t("project_subservice_0"),
      t("project_subservice_1"),
      t("project_subservice_2"),
      t("project_subservice_3"),
    ]),
    new servicesCardsData(comunication, t("comunication_service"), [
      t("comunication_subservice_0"),
      t("comunication_subservice_1"),
    ]),
  ];

  return (
    <Flex sx={container}>
      <header>
        <TextSection
          src={home}
          h={"h1"}
          heading={"home_head_title"}
          text={"home_head_description"}
        >
          <NavigationButtons />
        </TextSection>
      </header>
      <main>
        <CardsSection
          heading={t("service_heading")}
          path={"/InsulaConsult/services"}
          data={servicesData}
          Component={ServiceCard}
        />
        <section>
          <TextSection
            src={about}
            h={"h2"}
            heading={"about_heading"}
            text={"about_description"}
            path={"/about"}
          ></TextSection>
        </section>
        <CardsSection
          heading={t("project_heading")}
          path={"/InsulaConsult/projects"}
          data={projectsData}
          Component={ProjectCard}
        />
        <section>
          <TextSection
            src={network}
            h={"h2"}
            heading={"network_heading"}
            text={"network_description"}
            path={"/network"}
          ></TextSection>
        </section>
      </main>
    </Flex>
  );
};
