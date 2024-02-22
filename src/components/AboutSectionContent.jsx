import { Flex, Heading, Text } from "@chakra-ui/react";
import { NavigationButtons } from "./NavigationButtons";

export const AboutSectionContent = ({ data }) => {
  const { title, description } = data;

  const textContainer = {
    w: "100%",
    h: "100%",
    flexDir: "column",
    gap: "20px",
    justifyContent: "center",
    padding: ""
  };

  const titleHeading = {
    fontSize: "4rem",
    color: "orange.400",
  };
  const txt = {
    fontSize: "1.1rem",
    color: "#fff",
  };
  return (
    <Flex sx={textContainer}>
      <Heading sx={titleHeading}>
        {title}
      </Heading>
      <Text sx={txt}>{description}</Text>
      <NavigationButtons />
    </Flex>
  );
};
