import { NavigationButtons } from "./NavigationButtons";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export const ProjectsSectionContent = ({ data }) => {
  const { logo, heading, description } = data;
  const container = {
    flexDir: "column",
    color: "#fff",
    h: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    padding : "0 20px"
  };
  const title = {
    fontSize: "1.5rem",
    color: "orange.400",
    textAlign: "center",
  };
  const text = {
    
    fontSize: "1.1rem",
  };
  const logoContainer = {
    padding: "50px",
    bg: "#fff",
    borderRadius: "50%",
  };
  const logoImage = {
    w: "200px",
  };
  return (
    <Flex sx={container}>
      <Flex sx={logoContainer}>
        <Image sx={logoImage} src={logo} />
      </Flex>
      <Heading sx={title}>{heading}</Heading>
      <Text sx={text}>{description}</Text>
      <NavigationButtons />
    </Flex>
  );
};
