import { useTranslation } from "react-i18next";
import { Flex, Heading } from "@chakra-ui/react";
import { SquareBackground } from "./SquareBackground";
import { CardsContainer } from "./CardsContainer";
import { ProjectCard } from "./ProjectsCard";
import { ServiceCard } from "./ServiceCard";

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

export const CardsSection = ({ section, children, heading }) => {

    const {t} = useTranslation();
  //data
  const ProjectsData = [
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

  const title = {
    fontSize : "4rem",
    color : "#fff",
    alignSelf : "flex-end",
    borderBottom : "5px solid",
    borderColor : "orange.400"
  }
  

  const servicesContent = servicesData.map((service) => (
    <ServiceCard key={service.title} data={service} />
  ));

  const projectsContent = ProjectsData.map((project) => (
    <ProjectCard  key={project.logo} data={project} />
  ));

  const container = {
    w: "100%",
    h: "100%",
  };
  return (
    <Flex sx={container}>
      <SquareBackground opacity={0.95}>
        <Heading sx={title}>{heading}</Heading>
        <CardsContainer>
           {section === "services" ? servicesContent : projectsContent} 
        </CardsContainer>
        {children}
      </SquareBackground>
    </Flex>
  );
};
