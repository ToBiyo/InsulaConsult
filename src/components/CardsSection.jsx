import { Flex, Heading } from "@chakra-ui/react";
import { NavigationButtons } from "./NavigationButtons";
import { sectionHeadingStyle } from "../utitlities/constantStyles";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable: "mobile",
});

export const CardsSection = ({ heading, path, data, Component, emptyBg }) => {
  const container = {
    w: "100%",
    padding: "50px 0",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    bg: emptyBg ? "none" : "primary",
    gap: "50px",
    borderBottom: "1px solid #fff",
  };

  const cardsContainer = {
    w: "80%",
    h: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "40px",
  };
  return (
    <Flex sx={container}>
      <Heading
        sx={sectionHeadingStyle}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {heading}
      </Heading>
      <Flex sx={cardsContainer}>
        {data.map((data, index) => (
          <Component data={data} i={index} />
        ))}
      </Flex>
      <NavigationButtons path={path} />
    </Flex>
  );
};
