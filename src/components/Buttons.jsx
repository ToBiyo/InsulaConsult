import { Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Buttons({ path, contact, primary }) {
  const { t } = useTranslation("buttons");

  const buttonsContainer = {
    gap: "30px",
  };
  const button = {
    bg: primary ? "primary" : "secondary",
    color: "#fff",
    fontSize: "1.1rem",
    h: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "10px",
    textDecoration: "none",
    cursor: "pointer",
    ":hover": {
      textDecoration: "none",
      bg: primary ? "blue.800" : "orange.500",
    },
  };
  return (
    <Flex sx={buttonsContainer}>
      {!contact && (
        <Link sx={button} href={"mailto:infoservice.insulac@gmail.com"}>
          {t("get_in_touch_btn")}
        </Link>
      )}
      {path && (
        <NavLink to={"/" + path}>
          <Button sx={button}>{t("see_more_btn")}</Button>
        </NavLink>
      )}
    </Flex>
  );
}
