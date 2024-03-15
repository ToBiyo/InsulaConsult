import { useTranslation } from "react-i18next";
import { Flex, Heading } from "@chakra-ui/react";
import { TextSection } from "../components/TextSection";
import { BgImageContainer } from "../components/BgImageContainer";
import { Footer } from "../components/Footer";
import { CardsSection } from "../components/CardsSection";
import { CompanyCard } from "../components/cards/CompanyCard";
import { CollaboratorCard } from "../components/cards/CollaboratorCard";

//data structure
import { companiesCardsData, collaboratorsCardsData } from "../data/data";

//asstets
import banner from "../assets/images/Network/banner.jpg";
import background from "../assets/images/Network/background.jpg";
import euro4business from "../assets/images/Network/e4b.png";
import quartoTempo from "../assets/images/Network/Quartotempo.webp";
import sis from "../assets/images/Network/sis.png";
import zinev from "../assets/images/Network/zinev.jpg";
import cubufo from "../assets/images/Network/Cubufo.png";
import coll1 from "../assets/images/Network/coll1.jpg";
import coll2 from "../assets/images/Network/coll2.jpg";

export const Network = () => {
  const { t } = useTranslation("network");
  const companiesData = [
    new companiesCardsData(
      euro4business,
      t("e_for_business_description"),
      "https://www.e4business.eu/"
    ),
    new companiesCardsData(
      quartoTempo,
      t("4tempo_description"),
      "https://www.quartotempofirenze.it/"
    ),
    new companiesCardsData(
      sis,
      t("sis_description"),
      "https://sinnovations.org/"
    ),
    new companiesCardsData(zinev, t("zinev_description"), "https://zatbg.org/"),
    //new companiesCardsData(cubufo, t("cubufo_description"), "https://cubufo.cubufoundation.com/")
  ];

  const collaboratorsData = [
    new collaboratorsCardsData(
      coll1,
      "Aevin Eslami",
      t("arvin_role"),
      t("arvin_story"),
      t("arvin_interests"),
      "https://www.linkedin.com/in/arvin-eslami/?locale=en_US "
    ),
    new collaboratorsCardsData(
      coll2,
      "Alessandro Biscione",
      t("biscione_role"),
      t("biscione_story"),
      t("biscione_interests"),
      "https://www.linkedin.com/in/alessandro-biscione/"
    )
  ];

  const container = {
    w: "100%",
    h: "auto",
    flexDir: "column",
    bgImage: `url(${banner})`,
    bgPosition: "bottom",
    bgSize: "cover",
    bgAttachment: "fixed",
  };

  return (
    <Flex sx={container}>
      <TextSection
        heading={t("network_heading")}
        text={t("network_description")}
      ></TextSection>
      <CardsSection
        heading={t("companies_section_heading")}
        data={companiesData}
        Component={CompanyCard}
      />
      <BgImageContainer src={background} inverted={true}>
        <CardsSection
          heading={t("collaborators_heading")}
          data={collaboratorsData}
          Component={CollaboratorCard}
          emptyBg={true}
        />
      </BgImageContainer>
      <Footer />
    </Flex>
  );
};
