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
    alignItems : {base : "center", md : "flex-start"},
    
  };

  const titleHeading = {
    fontSize: {base : "2.5rem", md : "3.5rem"},
    color: "orange.400",
  };
  const txt = {
    fontSize: {base : "0.9rem", md : "1rem", lg : "1.1rem"},
    color: "#fff",
    textAlign : {base : "center", md : "left"}
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
