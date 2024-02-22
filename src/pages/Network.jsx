import { useTranslation } from "react-i18next";
import { Flex, Heading, Image, Box } from "@chakra-ui/react";
import { TextSection } from "../components/TextSection";
import { SquareBackground } from "../components/SquareBackground";
import { SplitScreen } from "../layouts/SplitScreen";
import { Footer } from "../components/Footer";

//asstets
import banner from "../assets/images/Network/banner.jpg";
import e4b from "../assets/images/Network/e4b.png";
import quartotempo from "../assets/images/Network/Quartotempo.webp";
import sis from "../assets/images/Network/sis.png";
import zinev from "../assets/images/Network/zinev.png";
export const Network = () => {
  const { t } = useTranslation("network");
  const container = {
    w: "100%",
    h: "auto",
    flexDir: "column",
    bgImage: `url(${banner})`,
    bgPosition: "bottom",
    bgSize: "cover",
    bgAttachment: "fixed",
  };
  const logoContainer = {
    width: "180px",
    h: "180px",
    bg: "#fff",
    borderRadius: "50%",
    position: "relative",
  };
  const logo = {
    position: "absolute",
    display: "block",
    width: "150px",
    top: "50%", /* position the top  edge of the element at the middle of the parent */
    left: "50%", /* position the left edge of the element at the middle of the parent */
    transform: "translate(-50%, -50%)",
  };
  return (
    <Flex sx={container}>
      <TextSection
        heading={t("network_heading")}
        text={t("network_description")}
      ></TextSection>
      <Flex bg={"#fff"}>
        <SquareBackground>
          <SplitScreen>
            <Flex alignItems={"center"}>
              <Heading color={"orange.400"} fontSize={"3rem"}>Who trusted us</Heading>
            </Flex>
            <Flex
              justifyContent={"space-around"}
              gap={"30px"}
              width={"100%"}
              alignItems={"center"}
            >
              <Box sx={logoContainer}>
                <Image src={e4b} sx={logo}></Image>
              </Box>
              <Box sx={logoContainer}>
                <Image src={quartotempo} sx={logo}></Image>
              </Box>
              <Box sx={logoContainer}>
                <Image src={sis} sx={logo}></Image>
              </Box>
              <Box sx={logoContainer}>
                <Image src={zinev} sx={logo}></Image>
              </Box>
            </Flex>
          </SplitScreen>
        </SquareBackground>
      </Flex>
      <Flex bg={"#fff"}>
      <SquareBackground left={"true"}>
        <SplitScreen>
          <Flex>
            
          </Flex>
          <Flex>
            <Heading>Our colaborators</Heading>
          </Flex>
        </SplitScreen>
      </SquareBackground>
      </Flex>
      <Footer></Footer>
    </Flex>
  );
};
