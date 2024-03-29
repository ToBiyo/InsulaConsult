import { Flex, Heading, Text } from "@chakra-ui/react";
import { NavigationButtons } from "./NavigationButtons";
import { sectionHeadingStyle, sectionText } from "../utitlities/constantStyles";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable: "mobile",
});

export const AboutSectionContent = ({ data, inverted }) => {
  const { title, description } = data;

  const textContainer = {
    w: "100%",
    h: "100%",
    flexDir: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: { base: "center", md: "flex-start" },
  };

  const txt = {
    fontSize: { base: "0.9rem", md: "1rem", lg: "1.1rem" },
    color: "#fff",
    textAlign: { base: "center", md: "left" },
    fontFamily: "body",
  };
  const AosEffect = inverted ? "fade-left" : "fade-right";

  return (
    <Flex sx={textContainer}>
      <Heading
        sx={sectionHeadingStyle}
        data-aos={AosEffect}
        data-aos-delay="300"
        data-aos-duration="500"
      >
        {title}
      </Heading>
      <Text sx={txt} data-aos="fade-up">
        {description}
      </Text>
      <NavigationButtons />
    </Flex>
  );
};
