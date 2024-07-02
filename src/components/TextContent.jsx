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
    width: "40%",
    margin: "0 10%",
    gap: "40px",
  };
  const textHeading = {
    color: "orange.400",
    fontSize: "4rem",
    fontWeight: "600",
    fontFamily: "title",
  };
  const textParagraph = {
    color: inverted ? "primary" : "#fff",
    fontFamily: "text",
    fontWeight: "200",
    fontSize: "1.2rem",
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
