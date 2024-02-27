import { useTranslation } from "react-i18next";
import { Flex, Heading } from "@chakra-ui/react";
import { TextSection } from "../components/TextSection";
import { BackgroundImage } from "../components/BackgroundImage";
import { Footer } from "../components/Footer";
import { CardsSection } from "../components/CardsSection";
import { CompanyCard } from "../components/cards/CompanyCard";
import { CollaboratorCard } from "../components/cards/CollaboratorCard";
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
    {
      src: euro4business,
      description: t("e_for_business_description"),
      link: "https://www.e4business.eu/",
    },
    {
      src: quartoTempo,
      description: t("4tempo_description"),
      link: "https://www.quartotempofirenze.it/",
    },
    {
      src: sis,
      description: t("sis_description"),
      link: "https://sinnovations.org/",
    },
    {
      src: zinev,
      description: t("zinev_description"),
      link: "https://zatbg.org/",
    },
    {
      src: cubufo,
      description: t("cubufo_description"),
      link: "https://cubufo.cubufoundation.com/",
    },
  ];

  const collaboratorsData = [
    {
      image: coll1,
      name: "Arvin Eslami",
      role: "Progettista sociale",
      story:
        "Laureato in Psicologia Sociale all'università di Firenze con competenze avanzate in europrogettazione, comunicazione digitale, informatica, lingue e mediazione culturale.",
      interests:
        "Interessato ai temi di emarginazione ed empowerment sociale, fenomeni migratori, cittadinanza europea e pensiero creativo",
      linkedin: "https://www.linkedin.com/in/arvin-eslami/?locale=en_US ",
    },
    {
      image: coll2,
      name: "Alessandro Biscione",
      role: "Consulente per le imprese",
      story:
        "Laureato in econmia dell'ambiente e sviluppo con competenze in finanza agevolata, studio bandi di finanziamento Nazionali e Regionali, e sviluppo d’impresa",
      interests:
        "Appassionato all’economia circolare e a modelli d’impresa sostenibile e digitale",
      linkedin: "https://www.linkedin.com/in/alessandro-biscione/ ",
    },
  ];;

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
      <BackgroundImage src={background} inverted={true}>
        <CardsSection
          heading={"Collaboratori"}
          data={collaboratorsData}
          Component={CollaboratorCard}
          emptyBg={true}
        />
      </BackgroundImage>
      <Footer />
    </Flex>
  );
};
