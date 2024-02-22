import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { BackgroundImage } from "../components/BackgroundImage";
import { TextSection } from "../components/TextSection";
import { Footer } from "../components/Footer";
import { PageSectionsContainer } from "../components/PageSectionsContainer";
import { ProjectsSectionContent } from "../components/ProjectsSectionContent";
//asstes
import banner from "../assets/images/Progetti/banner.jpg";
import faster from "../assets/images/Progetti/Faster.jpg";
import goldenTeach from "../assets/images/Progetti/goldenTeach.jpg";
import fourMinutes from "../assets/images/Progetti/FourMinutes.jpg";
import ctour from "../assets/images/Progetti/ctour.jpg";
import fourmLogo from "../assets/images/Progetti/logo1.png";
import fasterLogo from "../assets/images/Progetti/logo2.png";
import gTeachLogo from "../assets/images/Progetti/logo3.png";
import cTourLogo from "../assets/images/Progetti/logo4.png";

export const Projects = () => {
  const { t } = useTranslation("projects");

  const projectsData = [
    {
      logo: fasterLogo,
      heading: t("project_1_heading"),
      description: t("project_1_description"),
      background: faster,
    },
    {
      logo: gTeachLogo,
      heading: t("project_2_heading"),
      description: t("project_2_description"),
      background: goldenTeach,
    },
    {
      logo: cTourLogo,
      heading: t("project_3_heading"),
      description: t("project_3_description"),
      background: ctour,
    },
    {
      logo: fourmLogo,
      heading: t("project_4_heading"),
      description: t("project_4_description"),
      background: fourMinutes,
    },
  ];

  const container = {
    w: "100%",
    h: "auto",
    flexDir: "column",
    bgImage: `url(${banner})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  const projectContainer = {
    h: "100vh",
    bgImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttaChment: "fixed",
  };
  
  return (
    <Flex sx={container}>
      <BackgroundImage>
        <TextSection h={"h2"} heading={"Projects"}></TextSection>
      </BackgroundImage>
      <PageSectionsContainer data={projectsData} Component={ProjectsSectionContent}></PageSectionsContainer>
      <Footer />
    </Flex>
  );
};
