import { Flex, Heading, Text } from "@chakra-ui/react";
import Buttons from "./Buttons";

export default function TextContent({
  heading,
  text,
  path,
  pathText,
  buttonText,
  inverted,
}) {
  const TextContainer = {
    display: "flex",
    flexDir: "column",
    width: { base: "80%", lg: "50%", xl: "40%" },
    margin: "0 10%",
    gap: "40px",
    alignItems: { base: "center", md: "flex-start" },
  };
  const textHeading = {
    color: "orange.400",
    fontSize: { base: "3rem", lg: "4rem" },
    fontWeight: "600",
    fontFamily: "title",
    textAlign: { base: "center", md: "inherit" },
  };
  const textParagraph = {
    color: inverted ? "#000" : "#fff",
    fontFamily: "text",
    fontWeight: "200",
    fontSize: { base: "1rem", md: "1.2rem" },
    textAlign: { base: "center", md: "inherit" },
  };
  return (
    <Flex sx={TextContainer}>
      <Heading as={"h2"} sx={textHeading}>
        {heading}
      </Heading>
      <Text as={"p"} sx={textParagraph}>
        {text}
      </Text>
      <Buttons path={path} pathText={pathText} buttonText={buttonText} />
    </Flex>
  );
}
