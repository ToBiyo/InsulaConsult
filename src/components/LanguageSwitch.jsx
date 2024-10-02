//react
import { useState } from "react";
//i18n
import { useTranslation } from "react-i18next";
//chakra
import { Button, Flex } from "@chakra-ui/react";

//i18next
import i18next from "i18next";
//font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export function LanguageSwitch({ color, onClickHandler }) {
  const [displayed, setDisplayed] = useState("none");
  const { t } = useTranslation("menu");
  const AccordionBox = {
    display: "block",
    position: "relative",
    zIndex: 4,
  };

  const subMenuPanel = {
    flexDir: "column",
    position: "absolute",
    display: displayed,
    fontFamily: "body",
  };
  const languageButton = {
    bg: "none",
    h: "45px",
    color: "#fff",
    outline: "none",
    border: "none",
    fontFamily: "title",
    fontWeight: "400",
    display: "flex",
    gap: "5px",
    ":hover": {
      bg: "orange.400",
      border: "none",
    },
  };
  const MenuButton = {
    bg: "none",
    width: "auto",
    height: "45px",
    display: "inline-block",
    fontFamily: "text",
    fontSize: "16px",
    borderRadius: "10px",
    color: color || "#fff",
    fontWeight: "400",
    border: "none",
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
        {t("link_5")}

        <FontAwesomeIcon icon={faCaretDown} fontSize={"15px"} />
      </Button>
      <Flex sx={subMenuPanel}>
        <Button
          sx={MenuButton}
          onClick={() => {
            i18next.changeLanguage("it");
            setDisplayed("none");
            onClickHandler();
          }}
        >
          Italiano
        </Button>
        <Button
          sx={MenuButton}
          onClick={() => {
            i18next.changeLanguage("en");
            setDisplayed("none");
            onClickHandler();
          }}
        >
          English
        </Button>
      </Flex>
    </Flex>
  );
}
