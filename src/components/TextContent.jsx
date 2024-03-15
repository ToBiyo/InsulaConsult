import { useTranslation } from "react-i18next";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { NavigationButtons } from "./NavigationButtons";

//utilities
import { sectionHeadingStyle, sectionText } from "../utitlities/constantStyles";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable: "mobile",
});

export const TextContent = ({ heading, text, h, path, direction }) => {
  const { t } = useTranslation("home");
  const textContainer = {
    w: { base: "100%", xl: "80%" },
    h: "100%",
    flexDir: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: { base: "center", md: "flex-start" },
    padding: { base: 0, md: direction ? "0 0 0 50px" : "0 50px 0 0" },
  };

  return (
    <Flex
      sx={textContainer}
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="500"
    >
      <Heading
        as={h}
        sx={sectionHeadingStyle}
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        {t(heading)}
      </Heading>
      <Text sx={sectionText}>{t(text)}</Text>
      <NavigationButtons path={path} />
    </Flex>
  );
};
