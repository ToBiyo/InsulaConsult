//chakra
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
export const ServiceCard = ({ data }) => {
  const { img, title, subservices } = data;

  const Card = {
    position: "relative",
    w: { base: "100%", md: "500px", lg: "250px" },
    h: { base: "360px", sm: "360px", md: "400px", lg: "360px" },
    flexDir: "column",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    transition: "all ease-in-out 0.5s",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: { base: "0", sm: "40px 0", "2xl": "20px" },
    bg: {
      base: "",
      lg: "linear-gradient(to bottom,  orange ,#fff, #fff, #fff)" /*  '2xl' : 'none' */,
    },
    ":hover": {
      transform: { lg: "scale(1.03)" },
      boxShadow: { lg: "0 0 15px #555" },
    },
    margin: { base: "10px", lg: "0px 10px", xl: "10px" },
  };
  const serviceImage = {
    h: { base: "120px", sm: "140px", md: "200px", lg: "140px" },
  };
  const HeadingBox = {
    w: "100%",
    h: "61px",
    justifyContent: "center",
  };
  const ServiceHeading = {
    width: "90%",
    fontWeight: "500",
    fontSize: { base: "1.3rem", lg: "1.1rem" },
    color: "#012d5e",
    textAlign: "center",
  };
  const subservicesBox = {
    width: "90%",
    height: "100%",
    margin: "5px auto",
    flexDir: "column",
    textAlign: "center",
    padding: "5px 0",
    display: "flex",
  };

  const subservicesContent = subservices.map((subservice) => (
    <Text
      className="listItem"
      key={subservice}
      margin={"5px 0"}
      fontSize={{ base: "1rem", md: "1.1rem", lg: "0.95rem" }}
    >
      <CheckIcon color={"orange.400"} width={"15px"} margin={" 0 5px"} />
      {subservice}
    </Text>
  ));

  return (
      <Flex sx={Card} className="Card">
      <Image src={img} sx={serviceImage}></Image>
      <Flex sx={HeadingBox}>
        <Heading sx={ServiceHeading}>{title}</Heading>
      </Flex>
      <Flex sx={subservicesBox}>{subservicesContent}</Flex>
    </Flex>
  );
};
