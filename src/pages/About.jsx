import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { TextContent } from "../components/TextContent";
import { TextSection } from "../components/TextSection";
import { SquareBackground } from "../components/SquareBackground";
import { SplitScreen } from "../layouts/SplitScreen";
import { Footer } from "../components/Footer";

//assets
import banner from "../assets/images/About/banner.jpg";
export const About = () => {
  const { t } = useTranslation("about");

  const box = {
    flexDir: "column",
    w: "100%",
    h: "auto",
    backgroundPosition : "center",
    backgroundAttachment: "fixed",
    bgImage: `url(${banner})`,
  };
  const container = {
    flexDir: "row",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "flex-end",
  };
  return (
    <Flex sx={box}>
      <TextSection   h={"h2"} heading ={t("about_head_title")} text={t("about_head_description")}>

      </TextSection>
      <Flex sx={container}>
        <SquareBackground width={"100%"} opacity={0.95}>
          <SplitScreen>
            <Flex></Flex>
            <TextContent
              heading={t("about_description_title")}
              text={t("about_description")}
              h={"h2"}
            ></TextContent>
          </SplitScreen>
        </SquareBackground>
      </Flex>
      <Flex sx={container}>
        <SquareBackground right={true} width={"100%"} opacity={0.95}>
          <SplitScreen>
            <TextContent
              heading={t("about_mission_title")}
              text={t("about_mission")}
              h={"h2"}
              direction={"right"}
            ></TextContent>
            <Flex></Flex>
          </SplitScreen>
        </SquareBackground>
      </Flex>
      <Footer />
    </Flex>
  );
};
