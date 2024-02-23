//chakra
import { Flex, Image, Heading, Text, Box } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
export const ServiceCard = ({ data }) => {
  const { img, title, subservices } = data;

  const Card = {
    flexDir: "column",
    color: "#fff",
    width: "20%",
    gap: "20px",
    alignItems: "center",
  };
  const serviceImage = {
    w: "170px",
    position: "absolute",
    display: "block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const logoContainer = {
    w: "180px",
    h: "180px",
    position: "relative",
    bg: "#fff",
    borderRadius: "50%",
     border : "1px solid orange"
  };
  const ServiceHeading = {
    fontSize: "1.3rem",
    color: "orange.400",
    textAlign: "center",
  };
  const subservicesBox = {
    flexDir: "column",
    justifyContent: "center",
    textAlign: "center",
    fontSize : "1rem"
  };

  const subservicesContent = subservices.map((subservice) => (
    <Text
      className="listItem"
      key={subservice}
      margin={"5px 0"}
      fontSize={{ base: "1rem", md: "1.05rem" }}
    >
      <CheckIcon color={"orange.400"} width={"15px"} margin={" 0 5px"} />
      {subservice}
    </Text>
  ));

  return (
    <Flex sx={Card} className="Card">
      <Box sx={logoContainer}>
        <Image src={img} sx={serviceImage} />
      </Box>

      <Heading sx={ServiceHeading}>{title}</Heading>

      <Flex sx={subservicesBox}>{subservicesContent}</Flex>
    </Flex>
  );
};
