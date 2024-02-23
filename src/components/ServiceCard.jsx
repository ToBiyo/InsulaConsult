//chakra
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
export const ServiceCard = ({ data }) => {
  const { img, title, subservices } = data;

  const Card = {
    flexDir : "column",
    color : "#fff",
    width : "20%", gap : "20px",
    alignItems : "center",
    
  };
  const serviceImage = {
    w : "150px"
  };

  const ServiceHeading = {
    fontSize : "1.2rem",
    color : "orange.400",
    textAlign : "center"
  };
  const subservicesBox = {
    flexDir : "column", 
    justifyContent : "center", textAlign : "center"
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
      
        <Heading sx={ServiceHeading}>{title}</Heading>
      
      <Flex sx={subservicesBox}>{subservicesContent}</Flex>
    </Flex>
  );
};
