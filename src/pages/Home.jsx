import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { NavigationButtons } from "../components/NavigationButtons";
import { Footer } from "../components/Footer";
import { TextSection } from "../components/TextSection";
import { CardsSection } from "../components/CardsSection";
//resource
import home from "../assets/images/Home/home.png";
import about from "../assets/images/Home/about.png";
import network from "../assets/images/Home/network.png";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Home = () => {
  const [menuBg, setMenuBg] = useContext(ThemeContext);
  const { t } = useTranslation();

  const container = {
    w: "100vw",
    height: "auto",
    flexDir: "column",
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
          <CardsSection section={"services"} heading={t("service_heading")}>
            <NavigationButtons path={"/services"} />
          </CardsSection>
        </section>
        <section>
          <TextSection
            src={about}
            h={"h2"}
            heading={"about_heading"}
            text={"about_description"}
            path={"/about"}
          >
          </TextSection>
        </section>
        <section>
          <CardsSection section={"projects"} heading={t("project_heading")}>
            <NavigationButtons path={"/projects"} />
          </CardsSection>
        </section>
        <section>
          <TextSection
            src={network}
            h={"h2"}
            heading={"network_heading"}
            text={"network_description"}
            path={"/network"}
          >
          </TextSection>
        </section>
       
      </main>
      <Footer />
    </Flex>
  );
};
