import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { TextSection } from "../components/TextSection";
import { DetailsPageContainer } from "../components/DetailsPageContainer";
import { Footer } from "../components/Footer";
import { AboutSectionContent } from "../components/AboutSectionContent";

//assets
import banner from "../assets/images/About/banner.jpg";
export const About = () => {
  const { t } = useTranslation("about");

  const aboutData = [
    {
      title : t("about_description_title"),
      description : t("about_description")
    },
    {
      title : t("about_mission_title"),
      description : t("about_mission_description")
    }
  ]
  const box = {
    flexDir: "column",
    w: "100%",
    h: "auto",
    backgroundPosition : "center",
    backgroundAttachment: "fixed",
    bgImage: `url(${banner})`,
  };

  return (
    <Flex sx={box}>
      <TextSection   h={"h2"} heading ={t("about_head_title")} text={t("about_head_description")}></TextSection>
      <DetailsPageContainer data={aboutData} Component={AboutSectionContent} />
      <Footer />
    </Flex>
  );
};
