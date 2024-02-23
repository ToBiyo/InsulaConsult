import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { NavigationButtons } from "../components/NavigationButtons";
import { Footer } from "../components/Footer";
import { TextSection } from "../components/TextSection";
import { CardsSectionContainer } from "../components/CardsSectionContainer";
import {ServiceCard} from "../components/ServiceCard";
import {ProjectCard} from "../components/ProjectsCard";


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
    {
      logo: logo1,
      title: t("project1_title"),
      description: t("project1_description"),
    },
    {
      logo: logo2,
      title: t("project2_title"),
      description: t("project2_description"),
    },
    {
      logo: logo3,
      title: t("project3_title"),
      description: t("project3_description"),
    },
    {
      logo: logo4,
      title: t("project4_title"),
      description: t("project4_description"),
    },
  ];

  const servicesData = [
    {
      img: consult,
      title: t("consult_service"),
      subservices: [t("consult_subservice_0"), t("consult_subservice_1")],
    },
    {
      img: management,
      title: t("management_service"),
      subservices: [
        t("management_subservice_0"),
        t("management_subservice_1"),
        t("management_subservice_2"),
      ],
    },
    {
      img: project,
      title: t("project_service"),
      subservices: [
        t("project_subservice_0"),
        t("project_subservice_1"),
        t("project_subservice_2"),
        t("project_subservice_3"),
      ],
    },
    {
      img: comunication,
      title: t("comunication_service"),
      subservices: [
        t("comunication_subservice_0"),
        t("comunication_subservice_1"),
      ],
    },
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
        <CardsSectionContainer
          heading={t("service_heading")}
          path={"/InsulaConsult/services"}
          data={servicesData}
          Component = {ServiceCard}
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
        <CardsSectionContainer
          heading={t("project_heading")}
          path={"/InsulaConsult/projects"}
          data={projectsData}
          Component = {ProjectCard}
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
      <Footer />
    </Flex>
  );
};
