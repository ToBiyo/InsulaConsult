//react
import { useState } from "react";
//chakra
import { Button, Flex } from "@chakra-ui/react";

//i18next
import i18next from "i18next";
//font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const LanguageSwitch = ({color}) => {
    const [displayed, setDisplayed] = useState("none");

    const AccordionBox = {
        display: 'block',
        position: "relative",
        zIndex : 4
      };
    
      const subMenuPanel = {
        flexDir: "column",
        position: "absolute",
        left: "-10px",
        display: displayed,
      };
      const languageButton = {
        bg : 'none',
        h : '45px',
        /* bg: "none", */
        color: "#fff",
        outline : 'none',
        border: 'none',
        ":hover": {
          bg: "none",
          color: "orange.300",
          border : 'none', outline : 'none'
        },
      };
      const MenuButton = {
        bg: "none",
        width: "auto",
        height: "45px",
        display: "inline-block",
        fontSize: "16px",
        borderRadius: "10px",
        color: color || "#fff",
        fontWeight: "normal",
        border : 'none',
        outline: "none",
        ":hover": {
          color: "#fff",
          bg: "orange.400",
        },
      };
  return (
    <Flex sx={AccordionBox}>
    <Button
      sx={languageButton}
      onClick={() => {
        if (displayed === "none") {
          setDisplayed("flex");
        } else {
          setDisplayed("none");
        }
      }}
    >
      <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "20px", marginRight : '5px' }} />
      <FontAwesomeIcon icon={faCaretDown} fontSize={"15px"}/>
    </Button>
    <Flex sx={subMenuPanel}>
      <Button
        sx={MenuButton}
        onClick={() => {
          i18next.changeLanguage("it");
          setDisplayed('none')
        }}
      >
        Italiano
      </Button>
      <Button
        sx={MenuButton}
        onClick={() => {
          i18next.changeLanguage("en");
          setDisplayed('none')
        }}
      >
        English
      </Button>
    </Flex>
  </Flex>
  )
}
