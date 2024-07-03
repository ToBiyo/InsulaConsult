//chakra
import { Flex, Image, Text, Box } from "@chakra-ui/react";

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

  return (
    <Flex sx={ProjectCard} className="projectCard" color={"#fff"}>
      <Box sx={logoContainer}>
        <Image src={logo} sx={logoImage} />
      </Box>
      <Text fontFamily={"text"} fontSize={"1.2rem"}>
        {description}
      </Text>
    </Flex>
  );
};
