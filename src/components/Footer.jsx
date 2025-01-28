//chakra
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
//font awesome
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.svg";

export const Footer = () => {
  const { t } = useTranslation();
  const Footer = {
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
  const footerColumn = {
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
  const socialContainer = {
    flexDirection: "column",
    alignItems: "center",
  };
  const footerBox = {
    flexDir: { base: "column" },
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
  const contactsContainer = {
    fontSize: "1.3rem",
    gap: "3",
    alignItems: "center",
  };
  const contactsIcon = {
    cursor: "pointer",
    ":hover": {
      color: "orange.300",
    },
    fontSize: "1.6rem",
  };

  return (
    <Flex sx={Footer} as={"footer"}>
      <Flex sx={footerContainer}>
        <Flex sx={footerColumn}>
          <Heading sx={pageHeadings}>Quick Links</Heading>
          <Flex sx={linkContainer}>
            <Menu footerMenu={true} />
          </Flex>
        </Flex>
        <Flex sx={footerColumn}>
          <Heading sx={pageHeadings}>Socials</Heading>
          <Flex sx={footerBox}>
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
          </Flex>
        </Flex>
        <Flex sx={footerColumn}>
          <Heading sx={pageHeadings}>Contacts</Heading>
          <Flex sx={footerBox}>
            <Flex sx={contactsContainer}>
              <Flex sx={contactsIcon}>
                <a href="tel:+393479424527">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </Flex>
              <Text>+393479424527</Text>
            </Flex>
            <Flex sx={contactsContainer}>
              <Flex sx={contactsIcon}>
                <a
                  href="mailto:infoservice.insulac@gmail.com"
                  style={{ margin: 0, padding: "0" }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </Flex>
              <Text>infoservice.insulac@gmail.com</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={copyrightContainer}>
        <Image src={logo} width={"50px"}></Image>
        <p>
          Insula Consulting - Vico III Carbonia, 12, 09010, Narcao (SU), Italia
          - P.IVA IT03852740921
        </p>
      </Flex>
    </Flex>
  );
};
