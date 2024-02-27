import { NavigationButtons } from "./NavigationButtons";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const ServiceSectionContent = ({ data }) => {
  const { title, subservices } = data;

  const container = {
    w : "100%",
    h: "auto",
    flexDir: "column",
    justifyContent: "center",
    alignItems : {base : "center", md : "flex-start"},
    padding: {base : "0", md : "0 50px"},
    gap: "50px",

    
  };
  const heading = {
    fontSize: {base : "2.2rem", md : "3rem"},
    color: "orange.400",
    textAlign : {base : "center", md : "left"}
  };
  const subserviceContainer = {
    flexDir: "column",
    padding: "10px 0",
    gap: "10px",
    borderBottom: "1px dotted orange",
  };
  const subHeading = {
    fontSize: {base : "1.3rem", md : "1.6rem"},
    color: "orange.300",
    textAlign : {base : "center", md : "left"}
  };
  const subText = {
    color: "#fff",
    fontSize: {base : "0.9rem", md : "1.1rem"},
    textAlign : {base : "center", md : "left"}
  };
  return (
    <Flex sx={container}>
      <Heading as={"h3"} sx={heading}>
        {title}
      </Heading>
      {subservices.map((subservice) => (
        <Flex sx={subserviceContainer} key={subservice.heading}>
          <Heading as={"h3"} sx={subHeading}>
            {subservice.heading}
          </Heading>
          <Text sx={subText}>{subservice.description}</Text>
        </Flex>
      ))}
      <NavigationButtons />
    </Flex>
  );
};
