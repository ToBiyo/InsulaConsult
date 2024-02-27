import { NavigationButtons } from "./NavigationButtons";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export const ProjectsSectionsDetails = ({ data }) => {
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
    fontSize: {base : "1.3rem", md : "1.6rem"},
    color: "orange.400",
    textAlign: {base : "center", md : "left"}
  };
  const text = {
    fontSize: {base : "0.9rem", md : "1rem"},
    textAlign: {base : "center", md : "left"}
  };
  const logoContainer = {
    w : {base :"150px", md : "180px"},
    h : {base :"150px", md : "180px"},
    bg: "#fff",
    borderRadius: "50%",
    display : "block",
    position : "relative"
  };
  const logoImage = {
    position: "absolute",
    display: "block",
    width: "150px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
    
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
