import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TextSection } from "../layout/TextSection";
import TextContent from "../components/TextContent";
import { ServicesDetails } from "../components/ServicesDetails";
//asstes
import banner3 from "../assets/images/Servizi/banner3.webp";

export default function Services() {
  const { t } = useTranslation(["services", "buttons"]);

  const servicesData = [
    {
      title: t("srvc_heading_0"),
      subservices: [
        {
          heading: t("subsrvc_00_h"),
          description: t("subsrvc_00_desc"),
        },
        {
          heading: t("subsrvc_01_h"),
          description: t("subsrvc_01_desc"),
        },
      ],
    },
    {
      title: t("srvc_heading_1"),
      subservices: [
        {
          heading: t("subsrvc_10_h"),
          description: t("subsrvc_10_desc"),
        },
        {
          heading: t("subsrvc_11_h"),
          description: t("subsrvc_11_desc"),
        },
        {
          heading: t("subsrvc_12_h"),
          description: t("subsrvc_12_desc"),
        },
      ],
    },
    {
      title: t("srvc_heading_2"),
      subservices: [
        {
          heading: t("subsrvc_21_h"),
          description: t("subsrvc_21_desc"),
        },
        {
          heading: t("subsrvc_22_h"),
          description: t("subsrvc_22_desc"),
        },
        {
          heading: t("subsrvc_23_h"),
          description: t("subsrvc_23_desc"),
        },
      ],
    },
    {
      title: t("srvc_heading_3"),
      subservices: [
        {
          heading: t("subsrvc_30_h"),
          description: t("subsrvc_11_desc"),
        },
        {
          heading: t("subsrvc_31_h"),
          description: t("subsrvc_31_desc"),
        },
      ],
    },
  ];

  const container = {
    flexDir: "column",
    bgImage: `url(${banner3})`,
    bgSize: "cover",
    bgAttachment: "fixed",
  };

  //counter to react router that remembers current scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex sx={container}>
      <TextSection>
        <TextContent
          heading={t("services:service_head_title")}
          text={t("services:service_head_description")}
        />
      </TextSection>
      {servicesData.map((data, index) => {
        if (index % 2 === 0) {
          return (
            <TextSection inverted={true}>
              <ServicesDetails data={data} inverted={true} />
            </TextSection>
          );
        } else {
          return (
            <TextSection>
              <ServicesDetails data={data} />
            </TextSection>
          );
        }
      })}
    </Flex>
  );
}
