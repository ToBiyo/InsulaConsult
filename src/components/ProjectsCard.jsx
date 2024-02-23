//chakra
import { Flex, Image, Text, Box } from "@chakra-ui/react";

export const ProjectCard = ({ data }) => {
  const { logo, description } = data;

  const ProjectCard = {
    flexDir: "column",
    w: "20%",
    alignItems: "center",
    gap: "30px",
    cursor: "pointer",
    transition: "all ease-in-out 0.4s",
    ":hover": {
      transform: "scale(1.03)",
    },
  };
  const logoContainer = {
    w: "180px",
    h: "180px",
    bg: "#fff",
    borderRadius: "50%",
    position: "relative",
    border: "1px solid orange",
  };
  const DescriptionText = {
    textAlign: "center",
    fontSize: "1.1rem",
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
    <Flex sx={ProjectCard} className="projectCard" color={"#fff"}>
      <Box sx={logoContainer}>
        <Image src={logo} sx={logoImage} />
      </Box>
      <Text sx={DescriptionText}>{description}</Text>
    </Flex>
  );
};
