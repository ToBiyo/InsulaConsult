import Buttons from "./Buttons";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export const ProjectsDetails = ({ data, inverted }) => {
  const { logo, heading, description } = data;

  const container = {
    flexDir: "column",
    color: inverted ? "#000" : "#fff",
    h: "100%",
    w: { base: "80%", lg: "40%" },
    justifyContent: "center",
    alignItems: { base: "center", lg: "flex-start" },
    gap: "30px",
    padding: "0 20px",
    margin: "0 10%",
  };
  const title = {
    fontSize: { base: "1.3rem", md: "1.8rem" },
    color: inverted ? "primary" : "orange.400",
    textAlign: { base: "center", lg: "left" },
    fontFamily: "title",
    fontWeight: "600",
  };
  const text = {
    fontSize: { base: "1rem", md: "1.2rem" },
    textAlign: { base: "center", lg: "left" },
    fontFamily: "text",
  };
  const logoContainer = {
    w: { base: "150px", md: "180px" },
    h: { base: "150px", md: "180px" },
    bg: "#fff",
    borderRadius: "50%",
    display: "block",
    position: "relative",
    border: "2px solid orange",
  };
  const logoImage = {
    position: "absolute",
    display: "block",
    width: "150px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Flex sx={container}>
      <Flex sx={logoContainer}>
        <Image sx={logoImage} src={logo} />
      </Flex>
      <Heading sx={title}>{heading}</Heading>
      <Text sx={text}>{description}</Text>
      <Buttons primary={inverted} />
    </Flex>
  );
};
