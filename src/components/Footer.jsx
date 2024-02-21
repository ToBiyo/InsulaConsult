//chakra
import { Flex, Heading, Text } from "@chakra-ui/react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";



export const Footer = ({bg}) => {
    const {t} = useTranslation()
  const Container = {
    w: "100vw",
    h: "100vh",
    bg: "primary",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position : 'relative'
  };
  const footerContainer = {
    w: {base : '90vw', sm : '80vw', },
    color: "#fff",
    h: "auto",
    justifyContent: "space-around",
    alignItems: "flex-start",
    borderBottom: "1px dotted",
    borderColor: "orange.400",
    padding: "100px 0",
  };
  const quickLinksContainer = {
    maxWidth : "30%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize : '1.2rem'
  };
  const pageHeadings = {
    color: "orange.400",
    fontSize : {base : '1.6rem', md : '2rem'},
    marginBottom: "30px",
  };
  const contactsContainer = {
    flexDirection: "column",
    alignItems : 'center'
  };
  const contacts_box = {
    justifyContent : "space-around",
    alignItems : "center"
  }
  const copyrightContainer = {
    color : '#fff',
    padding : '0 10px',
    marginTop : '20px',
    w: {base : '90vw', sm : '80vw', md : '70vw', lg : '50vw', xl : '40vw'},
    alignItems : 'center',
    justifyContent : 'center'
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
        <Flex sx={contactsContainer}>
          <Heading sx={pageHeadings}>Contacts</Heading>
          <Flex sx={contacts_box}>
            <Flex sx={iconContainer}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Flex>
            <Flex sx={iconContainer}>
              <FontAwesomeIcon icon={faFacebook} />
            </Flex>
            <Flex sx={iconContainer}>
              <FontAwesomeIcon icon={faInstagram} />
            </Flex>
            <Flex sx={iconContainer}>
              <a href="mailto:fabio.web.arru@gmail.com" style={{margin : 0, padding : '0'}}>
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
