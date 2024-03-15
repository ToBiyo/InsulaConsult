import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TextSection } from "../components/TextSection";
import { DetailsPageContainer } from "../components/DetailsPageContainer";
import { ServiceSectionContent } from "../components/ServiceSectionContent";
//assets
import banner from "../assets/images/Servizi/banner3.jpg";
export const Services = () => {
  const { t } = useTranslation("services");

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
          description: t("subsrvc_12_desc"),
        },
      ],
    },
  ];

  const container = {
    width: "100%",
    h: "auto",
    flexDir: "column",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
  };

  return (
    <Flex sx={container}>
      <TextSection
        h={"h2"}
        heading={t("service_head_title")}
        text={t("service_head_description")}
      ></TextSection>
      <DetailsPageContainer
        data={servicesData}
        Component={ServiceSectionContent}
      />
    </Flex>
  );
};
