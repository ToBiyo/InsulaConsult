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
import network from "../assets/images/Home/network.png";
import background from "../assets/images/Network/background.jpg";
import euro4business from "../assets/images/Network/e4b.png";
import quartoTempo from "../assets/images/Network/Quartotempo.webp";
import sis from "../assets/images/Network/sis.png";
import zinev from "../assets/images/Network/zinev.jpg";
import cubufo from "../assets/images/Network/Cubufo.png";
import coll1 from "../assets/images/Network/coll1.jpg";
import coll2 from "../assets/images/Network/coll2.jpg";

export function Network() {
  const { t } = useTranslation("network");

  const companiesData = [
    { src: euro4business, link: "https://www.e4business.eu/" },
    { src: quartoTempo, link: "https://www.quartotempofirenze.it/" },
    { src: sis, link: "https://sinnovations.org/" },
    { src: zinev, link: "https://zatbg.org/" },
    { src: cubufo, link: "https://cubufo.cubufoundation.com/" },
  ];

  const collaboratorsData = [
    {
      image: coll1,
      name: "Aevin Eslami",
      role: t("arvin_role"),
      story: t("arvin_story"),
      interests: t("arvin_interests"),
      linkedin: "https://www.linkedin.com/in/arvin-eslami/?locale=en_US",
    },
    {
      image: coll2,
      name: "Alessandro Biscione",
      role: t("biscione_role"),
      story: t("biscione_story"),
      interests: t("biscione_interests"),
      linkedin: "https://www.linkedin.com/in/alessandro-biscione/",
    },
  ];

  const container = {
    flexDir: "column",
  };
  const collabContainer = {
    margin: "0 auto",
    w: "80%",
    justifyContent: "space-between",
  };
  const title = {
    fontSize: "4rem",
    alignSelf: "center",
    color: "orange.400",
    fontFamily: "title",
    marginBottom: "50px",
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
      <CardSection heading={t("companies_section_heading")}>
        <CardsContainer>
          {companiesData.map((data, index) => (
            <CompanyCard data={data} i={index} />
          ))}
        </CardsContainer>
      </CardSection>
      <TextSection img={background} heading>
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
