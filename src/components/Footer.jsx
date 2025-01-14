//chakra
import { Flex, Heading, Text } from "@chakra-ui/react";
//font awesome
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const Container = {
    w: "100%",
    minHeight: "auto",
    bg: "primary",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    fontFamily: "body",
    borderTop: "2px solid orange",
  };
  const footerContainer = {
    w: { base: "90vw", sm: "80vw" },
    color: "#fff",
    h: "auto",
    flexDir: { base: "column", md: "row" },
    justifyContent: { base: "center", md: "space-around" },
    alignItems: { base: "center", md: "flex-start" },
    borderBottom: "1px dotted",
    borderColor: "orange.400",
    padding: "100px 0",
    gap: { base: "40px" },
  };
  const quickLinksContainer = {
    maxWidth: { base: "100%", md: "30%" },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: { base: "0.9rem", md: "1rem" },
    /* textAlign: { base: "center" }, */
  };
  const linkContainer = {
    w: "100%",
    gap: "10px",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const pageHeadings = {
    color: "secondary",
    fontSize: { base: "1.6rem", md: "2rem" },
    marginBottom: "30px",
    fontFamily: "heading",
    fontWeight: "normal",
    textAlign: "center",
  };
  const contactsContainer = {
    flexDirection: "column",
    alignItems: "center",
  };
  const contacts_box = {
    flexDir: { base: "column", md: "row", lg: "column" },
    gap: "20px",
    alignItems: "center",
  };
  const copyrightContainer = {
    color: "#fff",
    marginTop: "20px",
    w: { base: "90vw", sm: "80vw", md: "70vw", lg: "50vw", xl: "40vw" },
    alignItems: "center",
    justifyContent: "center",
    padding: { base: "0px 0 20px 0" },
    textAlign: "center",
  };
  const iconContainer = {
    justifyContent: "center",
    margin: "0px 20px",
    fontSize: "40px",
    cursor: "pointer",
    ":hover": {
      color: "orange.300",
    },
  };

  return (
    <Flex sx={Container} as={"footer"}>
      <Flex sx={footerContainer}>
        <Flex sx={quickLinksContainer}>
          <Heading sx={pageHeadings}>{t("home_head_title")}</Heading>
          <Text>{t("home_head_description")}</Text>
        </Flex>
        <Flex sx={quickLinksContainer}>
          <Heading sx={pageHeadings}>Quick Links</Heading>
          <Flex sx={linkContainer}>
            <Menu footerMenu={true} />
          </Flex>
        </Flex>
        <Flex sx={contactsContainer}>
          <Heading sx={pageHeadings}>Contacts</Heading>
          <Flex sx={contacts_box}>
            <Flex sx={iconContainer}>
              <a
                href="https://www.linkedin.com/in/matteo-curreli-b15562153/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Flex>
            <Flex sx={iconContainer}>
              <a
                href="https://www.facebook.com/profile.php?id=61565885225885"
                target="blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Flex>
            <Flex sx={iconContainer}>
              <a
                href="https://www.instagram.com/insulaconsulting?igsh=MXdvenU5b3pneWtwag=="
                target="blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Flex>
            <Flex sx={iconContainer}>
              <a
                href="mailto:infoservice.insulac@gmail.com"
                style={{ margin: 0, padding: "0" }}
              >
                <Flex sx={iconContainer}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Flex>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={copyrightContainer}>
        Copyright © 2023 Insula Consult. Tutti i diritti riservati.
      </Flex>
    </Flex>
  );
};
