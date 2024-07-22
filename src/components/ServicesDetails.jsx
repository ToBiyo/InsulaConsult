import { Heading, Flex, Text } from "@chakra-ui/react";
import Buttons from "./Buttons";

export function ServicesDetails({ data, inverted }) {
  const { title, subservices } = data;

  const container = {
    w: { base: "80%", lg: "40%" },
    h: "auto",
    margin: "0 10%",
    flexDir: "column",
    justifyContent: "center",
    alignItems: { base: "center", lg: "flex-start" },
    padding: { base: "0", md: "0 50px" },
    gap: "50px",
  };
  const heading = {
    fontSize: { base: "2.2rem", md: "3.5rem" },
    color: inverted ? "primary" : "#fff",
    textAlign: { base: "center", lg: "left" },
    fontFamily: "title",
    fontWeight: "400",

    ":after": {
      content: '" "',
      m: "10px 0 0 0",
      width: "200px",
      display: "block",
      h: "5px",
      bg: "orange.400",
    },
  };
  const subserviceContainer = {
    w: "100%",
    flexDir: "column",
    padding: "10px 0",
    gap: "10px",

    borderBottom: "1px dotted orange",
  };
  const subHeading = {
    fontSize: { base: "1.3rem", md: "1.8rem" },
    fontWeight: "600",
    color: "orange.400",
    textAlign: { base: "center", lg: "left" },
    fontFamily: "title",
  };
  const subText = {
    color: inverted ? "#000" : "#fff",
    fontSize: { base: "1rem", md: "1.2rem" },
    textAlign: { base: "center", lg: "left" },
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
      <Buttons primary={inverted} />
    </Flex>
  );
}
