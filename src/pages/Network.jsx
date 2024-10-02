import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Flex, Heading } from "@chakra-ui/react";
import { TextSection } from "../layout/TextSection";
import TextContent from "../components/TextContent";
import { CardSection } from "../layout/CardSection";
import { CardsContainer } from "../components/CardsContainer";
import { CompanyCard } from "../components/cards/CompanyCard";
import { CollaboratorsCard } from "../components/cards/CollaboratorsCard";
//assets
import network from "../assets/images/Home/network.webP";
import background from "../assets/images/Network/background.webP";
import euro4business from "../assets/images/Network/e4b.webP";
import quartoTempo from "../assets/images/Network/Quartotempo.webp";
import sis from "../assets/images/Network/sis.webP";
import zinev from "../assets/images/Network/zinev.webP";
import cubufo from "../assets/images/Network/Cubufo.webP";
import coll1 from "../assets/images/Network/coll1.webP";
import coll2 from "../assets/images/Network/coll2.webP";

export default function Network() {
  const { t } = useTranslation("network");

  const companiesData = [
    {
      src: euro4business,
      link: "https://www.e4business.eu/",
      alt: "Europe For Business logo",
    },
    {
      src: quartoTempo,
      link: "https://www.quartotempofirenze.it/",
      alt: "Quarto Tempo logo",
    },
    { src: sis, link: "https://sinnovations.org/", alt: "SITES logo" },
    {
      src: zinev,
      link: "https://zatbg.org/",
      alt: "ZINEV ART TECHNOLOGIES logo",
    },
    {
      src: cubufo,
      link: "https://cubufo.cubufoundation.com/",
      alt: "CUBUFO logo",
    },
  ];

  const collaboratorsData = [
    {
      image: coll1,
      name: "Arvin Eslami",
      role: t("arvin_role"),
      story: t("arvin_story"),
      interests: t("arvin_interests"),
      linkedin: "https://www.linkedin.com/in/arvin-eslami/?locale=en_US",
      alt: "Fotod el collaboratore Aevin Eslami",
    },
    {
      image: coll2,
      name: "Alessandro Biscione",
      role: t("biscione_role"),
      story: t("biscione_story"),
      interests: t("biscione_interests"),
      linkedin: "https://www.linkedin.com/in/alessandro-biscione/",
      alt: "Fotod el collaboratore Alessandro Biscione",
    },
  ];

  const container = {
    flexDir: "column",
  };
  const collabContainer = {
    margin: "0 auto",
    w: "80%",
    justifyContent: { base: "center" },
    flexWrap: "wrap",
    gap: { base: "50px" },
  };
  const title = {
    fontSize: { base: "3.5rem", md: "4.5rem" },
    alignSelf: "center",
    color: "orange.400",
    fontFamily: "title",
    marginBottom: "50px",
    fontWeight: "normal",
  };

  //counter to react router that remembers current scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex sx={container}>
      <TextSection img={network}>
        <TextContent
          heading={t("network_heading")}
          text={t("network_description")}
        />
      </TextSection>
      <CardSection heading={t("companies_section_heading")} primary={true}>
        <CardsContainer>
          {companiesData.map((data, index) => (
            <CompanyCard data={data} i={index} />
          ))}
        </CardsContainer>
      </CardSection>
      <TextSection img={background}>
        <Heading sx={title}>{t("collaborators_heading")}</Heading>
        <Flex sx={collabContainer}>
          {collaboratorsData.map((data, index) => (
            <CollaboratorsCard data={data} i={index} />
          ))}
        </Flex>
      </TextSection>
    </Flex>
  );
}
