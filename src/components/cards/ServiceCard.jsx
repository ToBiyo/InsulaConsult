//chakra
import { Flex, Image, Heading, Text, Box } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable: "mobile",
});

export const ServiceCard = ({ data, i }) => {
  const { img, title, subservices } = data;

  const Card = {
    w: "300px",
    flexDir: "column",
    color: "#fff",
    gap: "20px",
    alignItems: "center",
    margin: "20px 0",
  };
  const serviceImage = {
    w: { base: "120px", md: "170px" },
    position: "absolute",
    display: "block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const logoContainer = {
    w: { base: "130px", md: "180px" },
    h: { base: "130px", md: "180px" },
    position: "relative",
    bg: "#fff",
    borderRadius: "50%",
    border: "1px solid orange",
  };
  const ServiceHeading = {
    fontSize: { base: "1.2rem", md: "1.3rem" },
    color: "orange.400",
    textAlign: "center",
    fontFamily: "heading",
    fontWeight: "normal",
  };
  const subservicesBox = {
    flexDir: "column",
    justifyContent: "center",
    textAlign: "center",
    fontSize: { base: "0.9rem", md: "1.1rem" },
  };

  const AosEffect = i % 2 == 0 ? "fade-down" : "fade-up";

  const subservicesContent = subservices.map((subservice) => (
    <Text
      className="listItem"
      key={subservice}
      margin={"5px 0"}
      fontSize={{ base: "1rem", md: "1.05rem" }}
      fontFamily={"body"}
    >
      <CheckIcon color={"orange.400"} width={"15px"} margin={" 0 5px"} />
      {subservice}
    </Text>
  ));

  return (
    <Flex
      sx={Card}
      className="Card"
      data-aos={AosEffect}
      data-aos-delay={150}
      data-aos-duration={500}
    >
      <Box sx={logoContainer}>
        <Image src={img} sx={serviceImage} />
      </Box>

      <Heading sx={ServiceHeading}>{title}</Heading>

      <Flex sx={subservicesBox}>{subservicesContent}</Flex>
    </Flex>
  );
};
