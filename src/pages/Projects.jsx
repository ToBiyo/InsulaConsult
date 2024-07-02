import { Flex } from "@chakra-ui/react";
import { TextSection } from "../layout/TextSection";
import TextContent from "../components/TextContent";
import { useTranslation } from "react-i18next";

//asstes
import banner from "../assets/images/Progetti/banner.jpg";
import fourmLogo from "../assets/images/Progetti/logo1.png";
import fasterLogo from "../assets/images/Progetti/logo2.png";
import gTeachLogo from "../assets/images/Progetti/logo3.png";
import cTourLogo from "../assets/images/Progetti/logo4.png";
import { ProjectsDetails } from "../components/ProjectsDetails";

export function Projects() {
  const { t } = useTranslation("projects");

  const projectsData = [
    {
      logo: fourmLogo,
      heading: t("fourMin_heading"),
      description: t("fourMin_description"),
    },
    {
      logo: fasterLogo,
      heading: t("faster_heading"),
      description: t("faster_description"),
    },
    {
      logo: gTeachLogo,
      heading: t("goldT_heading"),
      description: t("goldT_description"),
    },
    {
      logo: cTourLogo,
      heading: t("cTour_heading"),
      description: t("cTour_description"),
    },
  ];

  const container = {
    flexDir: "column",
    bgImage: `url(${banner})`,
    bgAttachment: "fixed",
  };

  return (
    <Flex sx={container}>
      <TextSection>
        <TextContent
          heading={t("projects_head_heading")}
          text={t("projects_head_description")}
        />
      </TextSection>
      {projectsData.map((data, index) => {
        if (index % 2 === 0) {
          return (
            <TextSection inverted={true}>
              <ProjectsDetails data={data} inverted={true} />
            </TextSection>
          );
        } else {
          return (
            <TextSection>
              <ProjectsDetails data={data} />
            </TextSection>
          );
        }
      })}
    </Flex>
  );
}
