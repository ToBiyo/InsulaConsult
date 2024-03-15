import { NavigationButtons } from "./NavigationButtons";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable: "mobile",
});

export const ServiceSectionContent = ({ data, inverted }) => {
  const { title, subservices } = data;
  console.log(inverted);
  const container = {
    w: "100%",
    h: "auto",
    flexDir: "column",
    justifyContent: "center",
    alignItems: { base: "center", md: "flex-start" },
    padding: { base: "0", md: "0 50px" },
    gap: "50px",
  };
  const heading = {
    fontSize: { base: "2.2rem", md: "3rem" },
    color: "orange.400",
    textAlign: { base: "center", md: "left" },
    fontFamily: "body",
    fontWeight: "normal",
  };
  const subserviceContainer = {
    flexDir: "column",
    padding: "10px 0",
    gap: "10px",
    borderBottom: "1px dotted orange",
  };
  const subHeading = {
    fontSize: { base: "1.3rem", md: "1.6rem" },
    color: "orange.300",
    textAlign: { base: "center", md: "left" },
    fontFamily: "heading",
    fontWeight: "normal",
  };
  const subText = {
    color: "#fff",
    fontSize: { base: "0.9rem", md: "1.1rem" },
    textAlign: { base: "center", md: "left" },
    fontFamily: "body",
  };

  const AosEffect = inverted ? "fade-left" : "fade-right";
  return (
    <Flex sx={container}>
      <Heading
        as={"h3"}
        sx={heading}
        data-aos={AosEffect}
        data-aos-duration={500}
        data-aos-delay={200}
      >
        {title}
      </Heading>
      {subservices.map((subservice) => (
        <Flex
          sx={subserviceContainer}
          key={subservice.heading}
          data-aos={"fade-up"}
          data-aosdelay={800}
        >
          <Heading as={"h3"} sx={subHeading}>
            {subservice.heading}
          </Heading>
          <Text sx={subText}>{subservice.description}</Text>
        </Flex>
      ))}
      <NavigationButtons data-aos={AosEffect} />
    </Flex>
  );
};
