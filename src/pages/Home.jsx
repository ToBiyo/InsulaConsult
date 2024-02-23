import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { NavigationButtons } from "../components/NavigationButtons";
import { Footer } from "../components/Footer";
import { TextSection } from "../components/TextSection";
import { CardsSectionContainer } from "../components/CardsSectionContainer";

//resource
import home from "../assets/images/Home/home.png";
import about from "../assets/images/Home/about.png";
import network from "../assets/images/Home/network.png";
import fourmLogo from "../assets/images/Progetti/logo1.png";
import fasterLogo from "../assets/images/Progetti/logo2.png";
import gTeachLogo from "../assets/images/Progetti/logo3.png";
import cTourLogo from "../assets/images/Progetti/logo4.png";

export const Home = () => {
  const { t } = useTranslation();

  const container = {
    w: "100vw",
    height: "auto",
    flexDir: "column",
    bgImage: `url(${home})`,
    bgAttachment: "fixed",
  };
  const background = {
    bgImage: `url(${home})`,
    bgAttachment: "fixed",
  };

  const cardContainer = {
    w: "100%",
    minHeight: "80vh",
    bg: "primary",
    borderBottom: "1px solid #fff",
  };

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
        <CardsSectionContainer
          heading={t("service_heading")}
          path={"/InsulaConsult/services"}
          section={"services"}
        />
        <section>
          <TextSection
            src={about}
            h={"h2"}
            heading={"about_heading"}
            text={"about_description"}
            path={"/about"}
          ></TextSection>
        </section>
        <CardsSectionContainer
          heading={t("project_heading")}
          path={"/InsulaConsult/projects"}
          section={"projects"}
        />
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
