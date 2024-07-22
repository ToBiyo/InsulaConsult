import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { TextSection } from "../layout/TextSection";
import { useTranslation } from "react-i18next";
import TextContent from "../components/TextContent";

//assets
import about from "../assets/images/Home/about.png";

export function About() {
  const { t } = useTranslation(["about", "buttons"]);
  const container = {
    bgImage: `url(${about})`,
    flexDir: "column",
    bgAttachment: "fixed",
    bgSize: "cover",
  };

  //reset y position to react router that remembers current scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Flex sx={container}>
      <TextSection>
        <TextContent
          heading={t("about:about_head_title")}
          text={t("about:about_head_description")}
        />
      </TextSection>
      <TextSection inverted={true}>
        <TextContent
          inverted={true}
          heading={t("about:about_description_title")}
          text={t("about:about_description")}
        />
      </TextSection>
      <TextSection>
        <TextContent
          heading={t("about:about_mission_title")}
          text={t("about:about_mission_description")}
        />
      </TextSection>
    </Flex>
  );
}
