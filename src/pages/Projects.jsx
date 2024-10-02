import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { TextSection } from "../layout/TextSection";
import TextContent from "../components/TextContent";

//asstes
import banner from "../assets/images/Progetti/banner.webp";
import fourmLogo from "../assets/images/Progetti/logo1.webp";
import fasterLogo from "../assets/images/Progetti/logo2.webp";
import gTeachLogo from "../assets/images/Progetti/logo3.webp";
import cTourLogo from "../assets/images/Progetti/logo4.webp";
import { ProjectsDetails } from "../components/ProjectsDetails";

export default function Projects() {
  const { t } = useTranslation("projects");

  const projectsData = [
    {
      logo: fourmLogo,
      heading: t("fourMin_heading"),
      description: t("fourMin_description"),
      alt: "4-Minute Barriers logo",
    },
    {
      logo: fasterLogo,
      heading: t("faster_heading"),
      description: t("faster_description"),
      alt: "Faster logo",
    },
    {
      logo: gTeachLogo,
      heading: t("goldT_heading"),
      description: t("goldT_description"),
      alt: "Golden Ratio Teaching Logo",
    },
    {
      logo: cTourLogo,
      heading: t("cTour_heading"),
      description: t("cTour_description"),
      alt: "C-Tour logo",
    },
  ];

  const container = {
    flexDir: "column",
    bgImage: `url(${banner})`,
    bgAttachment: "fixed",
    bgSize: "cover",
  };

  //counter to react router that remembers current scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
