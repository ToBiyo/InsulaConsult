import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { BackgroundImage } from "../components/BackgroundImage";
import { TextSection } from "../components/TextSection";
//asstes
import banner from "../assets/images/Progetti/banner.jpg";
export const Projects = () => {
  const {t} = useTranslation("projects");

  const container = {
    w: "100%",
    minHeight: "100vh",
    bgImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttaChment: "fixed",
  };
  return (
    <Flex sx={container}>
      <BackgroundImage>
        <TextSection h={"h2"} heading={t("projects_title")}></TextSection>
      </BackgroundImage>
    </Flex>
  );
};
