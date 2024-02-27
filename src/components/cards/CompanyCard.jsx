import { Flex, Box, Image, Link } from "@chakra-ui/react";
import React from "react";

export const CompanyCard = ({ data }) => {
  const { src, link } = data;
  const card = {
    flexDir: "column",
    w: "300px",
    alignItems: "center",
    gap: "20px",
    margin : "20px 0"
  };
  const logoContainer = {
    width: {base : "180px", md : "200px"},
    h: {base : "180px", md : "200px"},
    bg: "#fff",
    borderRadius: "50%",
    position: "relative",
    border : "3px solid orange"
  };
  const logoImage = {
    position: "absolute",
    display: "block",
    width: {base : "120px", md : "140px"},
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  };
  const text = {
    color: "#fff",
    textAlign: "center",
  };

  return (
    <Flex sx={card}>
      <Link href={link} isExternal>
        <Box sx={logoContainer}>
          <Image src={src} sx={logoImage} />
        </Box>
      </Link>
      {/* <Text sx={text}>{description}</Text> */}
    </Flex>
  );
};
