//chakra
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable: "mobile",
});

export const ProjectCard = ({ data, i }) => {
  const { logo, description } = data;

  const ProjectCard = {
    w: "300px",
    flexDir: "column",
    alignItems: "center",
    gap: "30px",
    margin: "20px 0",
    color: "#000",
    textAlign: "center",
  };
  const logoContainer = {
    w: { base: "120px", md: "180px" },
    h: { base: "120px", md: "180px" },
    bg: "#fff",
    borderRadius: "50%",
    position: "relative",
    border: "1px solid orange",
  };

  const logoImage = {
    position: "relative",
    display: "block",
    width: { base: "100px", md: "150px" },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  let AosEffect = i % 2 == 0 ? "fade-up" : "fade-down";
  return (
    <Flex
      sx={ProjectCard}
      className="projectCard"
      color={"#fff"}
      data-aos={AosEffect}
      data-aos-delay={150}
      data-aos-duration={500}
    >
      <Box sx={logoContainer}>
        <Image src={logo} sx={logoImage} />
      </Box>
      <Text fontFamily={"text"} fontSize={"1.2rem"}>
        {description}
      </Text>
    </Flex>
  );
};
