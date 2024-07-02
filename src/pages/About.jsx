import { Flex, Heading } from "@chakra-ui/react";
import { TextSection } from "../layout/TextSection";
import { useTranslation } from "react-i18next";
import TextContent from "../components/TextContent";

//assets
import banner from "../assets/images/About/banner.jpg";

export function About() {
  const { t } = useTranslation(["about", "buttons"]);
  const container = {
    bgImage: `url(${banner})`,
    flexDir: "column",
    bgAttachment: "fixed",
  };
  return (
    <Flex sx={container}>
      <TextSection>
        <TextContent
          heading={t("about:about_head_title")}
          text={t("about:about_head_description")}
          buttonText={t("buttons:get_in_touch_btn")}
        />
      </TextSection>
      <TextSection inverted={true}>
        <TextContent
          inverted={true}
          heading={t("about:about_description_title")}
          text={t("about:about_description")}
          buttonText={t("buttons:get_in_touch_btn")}
        />
      </TextSection>
      <TextSection>
        <TextContent
          heading={t("about:about_mission_title")}
          text={t("about:about_mission_description")}
          buttonText={t("buttons:get_in_touch_btn")}
        />
      </TextSection>
    </Flex>
  );
}
