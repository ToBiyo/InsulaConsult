import { Heading, Flex, Text } from "@chakra-ui/react";
import Buttons from "./Buttons";

export function ServicesDetails({ data, inverted }) {
  const { title, subservices } = data;

  const container = {
    w: "40%",
    h: "auto",
    margin: "0 10%",
    flexDir: "column",
    justifyContent: "center",
    alignItems: { base: "center", md: "flex-start" },
    padding: { base: "0", md: "0 50px" },
    gap: "50px",
  };
  const heading = {
    fontSize: { base: "2.2rem", md: "3rem" },
    color: inverted ? "primary" : "orange.400",
    textAlign: { base: "center", md: "left" },
    fontFamily: "title",
    fontWeight: "normal",
  };
  const subserviceContainer = {
    flexDir: "column",
    padding: "10px 0",
    gap: "10px",
    borderBottom: "1px dotted orange",
  };
  const subHeading = {
    fontSize: { base: "1.3rem", md: "1.4rem" },
    color: inverted ? "orange.400" : "orange.300",
    textAlign: { base: "center", md: "left" },
    fontFamily: "title",
    fontWeight: "normal",
  };
  const subText = {
    color: inverted ? "#000" : "#fff",
    fontSize: { base: "1rem", md: "1.2rem" },
    textAlign: { base: "center", md: "left" },
    fontFamily: "text",
  };

  return (
    <Flex sx={container}>
      <Heading as={"h3"} sx={heading}>
        {title}
      </Heading>
      {subservices.map((subservice) => (
        <Flex sx={subserviceContainer} key={subservice.heading}>
          <Heading as={"h3"} sx={subHeading}>
            {subservice.heading}
          </Heading>
          <Text sx={subText}>{subservice.description}</Text>
        </Flex>
      ))}
      <Buttons />
    </Flex>
  );
}