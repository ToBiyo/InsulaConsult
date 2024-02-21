//chakra
import { Flex, Image, Text } from "@chakra-ui/react";
import "./ProjectCard.css";

export const ProjectCard = ({data}) => {
  const { logo, description } = data;

  const Border = {
    width: { base: "300px", md: "500px", lg: "260px", "2xl": "250px" },
    height: { base: "360px", md: "auto", lg: "340px", "2xl": "360px" },
    alignItems: "center",
    justifyContent: "center",
    borderRadius: { base: "0 0", sm: "20px 0" },
    transition: "all ease-in-out 0.6s",
  };
  const ProjectCard = {
    width: { base: "300px", md: "500px", lg: "240px", "2xl": "250px" },
    height: { base: "400px", md: "auto", lg: "340px", "2xl": "360px" },
    flexDir: "column",
    bg: {  lg: "linear-gradient(to bottom, orange, #fff, #fff)" },
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    borderRadius: "20px 0",
    position: "relative",
    overflow: "hidden",
    transition: "all ease-in-out 0.6s",
    cursor: "pointer",
    ":hover": {
      boxShadow: { base: "none", lg: "0 0 15px #555" },
    },
    
  };

  const Overlay = {
    position: { base: "relative", lg: "absolute" },
    bg: { base: "none", lg: "linear-gradient(to top, orange, #efefef,#fff, #fff)" },
    width: { base: "100%" },
    height: {base : 'auto', lg : '100%'},
    margin : '30px 0',
    flexDir: "column",
    padding: {base : '0 30px'},
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px 0",
    opacity: { base: 1, lg: 0 },
    transition: "all ease-in-out 0.5s",
  };
  const DescriptionText = {
    color: "#555",
    fontSize: {base : "1rem", md : "1.1rem"},
    fontWeight: "normal",
    lineHeight: {base : '25px', md : '30px'},
  };
  return (
    <Flex sx={Border} className="border">
      <Flex sx={ProjectCard} className="projectCard" color={"#fff"}>
        <Image
          src={logo}
          margin={"30px 0px 0px 0px"}
          w={{base : "200px", md: "300px", xl: "200px" }}
          transition={"all ease-in-out 0.5s"}
          className="project-image"
        ></Image>

        <Flex sx={Overlay} className="overlay">
          <Image
            src={logo}
            width={"150px"}
            display={{ base: "none", lg: "flex" }}
          />
          <Text sx={DescriptionText}>{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
