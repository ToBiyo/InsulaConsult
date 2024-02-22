import { useTranslation } from "react-i18next";
import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";
import { NavigationButtons } from "../components/NavigationButtons";
import { Footer } from "../components/Footer";
import { TextSection } from "../components/TextSection";
import { CardsSection } from "../components/CardsSection";
import { useContext, useEffect } from "react";
//resource
import home from "../assets/images/Home/home.png";
import about from "../assets/images/Home/about.png";
import network from "../assets/images/Home/network.png";
import fourmLogo from "../assets/images/Progetti/logo1.png";
import fasterLogo from "../assets/images/Progetti/logo2.png";
import gTeachLogo from "../assets/images/Progetti/logo3.png";
import cTourLogo from "../assets/images/Progetti/logo4.png";
import { ThemeContext } from "../context/ThemeContext";

export const Home = () => {
  const [menuBg, setMenuBg] = useContext(ThemeContext);
  const { t } = useTranslation();

  const container = {
    w: "100vw",
    height: "auto",
    flexDir: "column",
  };
  const background = {
    bgImage: `url(${home})`,
    bgAttachment: "fixed",
  };

  const stacco = {
    w: "100%",
    h: "auto",
    padding: "100px 0",
    bg: "primary",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
    borderBottom: "1px dotted #fff",
  };
  const cardContainer = {
    w: "80%",
    justifyContent: "space-around",
  };
  const card = {
    width: "20%",
    flexDir: "column",
    alignItems: "center",
    textAlign: "center",
  };
  const logoContainer = {
    w: "170px",
    h: "170px",
    bg: "#fff",
    alignItems: "center",
    position: "relative",
    borderRadius: "50%",
    marginBottom: "30px",
    border : "3px solid orange"
  };
  const logo = {
    width: "150px",
    position: "absolute",
    display: "block",
    top: "50%" /* position the top  edge of the element at the middle of the parent */,
    left: "50%" /* position the left edge of the element at the middle of the parent */,
    transform: "translate(-50%, -50%)",
  };
  const backgroundImg = {
    bgImage: `url(${network})`,
    bgAttachment : "fixed"
  };
  const staccoTransparent = {
    w: "100%",
    h: "100vh",
    padding: "100px 0",
    bg: `linear-gradient(to left, #012d5e, rgba(255, 255, 255, 0))`,
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
    borderBottom: "1px dotted #fff",
  };

  useEffect(() => {
    setMenuBg("none");
    return;
  }, []);

  return (
    <Flex sx={container}>
      <header>
        <TextSection
          src={home}
          h={"h1"}
          heading={"home_head_title"}
          text={"home_head_description"}
        >
          <NavigationButtons />
        </TextSection>
      </header>
      <main>
        <section>
          {/* <CardsSection section={"services"} heading={t("service_heading")}>
            <NavigationButtons path={"/services"} />
          </CardsSection> */}
          <Flex sx={backgroundImg}>
            <Flex sx={staccoTransparent}>
              <Heading fontSize={"4rem"} color={"orange.400"}>
                Progetti
              </Heading>
              <Flex sx={cardContainer}>
                <Flex sx={card}>
                  <Box sx={logoContainer}>
                    <Image src={fourmLogo} sx={logo}></Image>
                  </Box>
                  <Text color={"#fff"} fontSize={"1.1rem"}>
                    L'obbiettivo è promuovere l'inclusione dei giovani
                    ipovedenti attraverso metodologie e attività sportive
                  </Text>
                </Flex>
                <Flex sx={card}>
                  <Flex sx={logoContainer} /* marginBottom={"40px"} */>
                    <Image src={fasterLogo} sx={logo}></Image>
                  </Flex>
                  <Text color={"#fff"} fontSize={"1.1rem"}>
                    L'obbiettivo è promuovere l'inclusione dei giovani
                    ipovedenti attraverso metodologie e attività sportive
                  </Text>
                </Flex>
                <Flex sx={card}>
                  <Flex sx={logoContainer}>
                    <Image src={gTeachLogo} sx={logo}></Image>
                  </Flex>
                  <Text color={"#fff"} fontSize={"1.1rem"}>
                    L'obbiettivo è promuovere l'inclusione dei giovani
                    ipovedenti attraverso metodologie e attività sportive
                  </Text>
                </Flex>
                <Flex sx={card}>
                  <Flex sx={logoContainer}>
                    <Image src={cTourLogo} sx={logo}></Image>
                  </Flex>
                  <Text color={"#fff"} fontSize={"1.1rem"}>
                    L'obbiettivo è promuovere l'inclusione dei giovani
                    ipovedenti attraverso metodologie e attività sportive
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </section>
        <section>
          <TextSection
            src={about}
            h={"h2"}
            heading={"about_heading"}
            text={"about_description"}
            path={"/about"}
          ></TextSection>
        </section>
        <Flex as={"section"} sx={background}>
          <Flex sx={stacco}>
            <Heading fontSize={"4rem"} color={"orange.400"}>
              Progetti
            </Heading>
            <Flex sx={cardContainer}>
              <Flex sx={card}>
                <Flex sx={logoContainer}>
                  <Image src={fourmLogo} sx={logo}></Image>
                </Flex>
                <Text color={"#fff"} fontSize={"1.1rem"}>
                  L'obbiettivo è promuovere l'inclusione dei giovani ipovedenti
                  attraverso metodologie e attività sportive
                </Text>
              </Flex>
              <Flex sx={card}>
                <Flex sx={logoContainer} /* marginBottom={"40px"} */>
                  <Image src={fasterLogo} sx={logo}></Image>
                </Flex>
                <Text color={"#fff"} fontSize={"1.1rem"}>
                  L'obbiettivo è promuovere l'inclusione dei giovani ipovedenti
                  attraverso metodologie e attività sportive
                </Text>
              </Flex>
              <Flex sx={card}>
                <Flex sx={logoContainer}>
                  <Image src={gTeachLogo} sx={logo}></Image>
                </Flex>
                <Text color={"#fff"} fontSize={"1.1rem"}>
                  L'obbiettivo è promuovere l'inclusione dei giovani ipovedenti
                  attraverso metodologie e attività sportive
                </Text>
              </Flex>
              <Flex sx={card}>
                <Flex sx={logoContainer}>
                  <Image src={cTourLogo} sx={logo}></Image>
                </Flex>
                <Text color={"#fff"} fontSize={"1.1rem"}>
                  L'obbiettivo è promuovere l'inclusione dei giovani ipovedenti
                  attraverso metodologie e attività sportive
                </Text>
              </Flex>
            </Flex>
            <NavigationButtons path={"/Insula/projects"}></NavigationButtons>
          </Flex>
          {/* <CardsSection section={"projects"} heading={t("project_heading")}>
            <NavigationButtons path={"/projects"} />
          </CardsSection> */}
        </Flex>
        <section>
          <TextSection
            src={network}
            h={"h2"}
            heading={"network_heading"}
            text={"network_description"}
            path={"/network"}
          ></TextSection>
        </section>
      </main>
      <Footer />
    </Flex>
  );
};
