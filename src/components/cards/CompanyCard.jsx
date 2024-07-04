import { Flex, Box, Image, Link } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable: "mobile",
});

export const CompanyCard = ({ data, i }) => {
  const { src, link } = data;
  const card = {
    flexDir: "column",
    w: "250px",
    alignItems: "center",
    gap: "20px",
    margin: "20px 0",
  };
  const logoContainer = {
    width: { base: "180px", md: "200px" },
    h: { base: "180px", md: "200px" },
    bg: "#fff",
    borderRadius: "50%",
    position: "relative",
    border: "3px solid orange",
    transition: "all ease-in-out 0.3s",
    ":hover": {
      transform: "scale(1.1)",
    },
  };
  const logoImage = {
    position: "absolute",
    display: "block",
    width: { base: "120px", md: "140px" },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  };

  let AosEffect = i % 2 == 0 ? "fade-up" : "fade-down";

  return (
    <Flex sx={card} data-aos={AosEffect} data-aos-duration="800">
      <Link href={link} isExternal>
        <Box sx={logoContainer}>
          <Image src={src} sx={logoImage} />
        </Box>
      </Link>
    </Flex>
  );
};
