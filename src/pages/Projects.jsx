import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { BgImageContainer } from "../components/BgImageContainer";
import { TextSection } from "../components/TextSection";
import { DetailsPageContainer } from "../components/DetailsPageContainer";
import { ProjectsSectionsDetails } from "../components/ProjectsSectionsDetails";
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
      logo: fourmLogo,
      heading: t("fourMin_heading"),
      description: t("fourMin_description"),
      background: faster,
    },
    {
      logo: fasterLogo,
      heading: t("faster_heading"),
      description: t("faster_description"),
      background: goldenTeach,
    },
    {
      logo: gTeachLogo,
      heading: t("goldT_heading"),
      description: t("goldT_description"),
      background: ctour,
    },
    {
      logo: cTourLogo,
      heading: t("cTour_heading"),
      description: t("cTour_description"),
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

  return (
    <Flex sx={container}>
      <BgImageContainer>
        <TextSection
          h={"h2"}
          heading={t("projects_head_heading")}
          text={t("projects_head_description")}
        />
      </BgImageContainer>
      <DetailsPageContainer
        data={projectsData}
        Component={ProjectsSectionsDetails}
      />
    </Flex>
  );
};
