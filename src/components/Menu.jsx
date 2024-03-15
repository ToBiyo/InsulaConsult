import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex, Button } from "@chakra-ui/react";

export const Menu = ({ onHideMenu, footerMenu }) => {
  const { t } = useTranslation("menu");
  //routes

  const routes = [
    { path: "/InsulaConsult/", name: t("link_0") },
    { path: "/InsulaConsult/about", name: t("link_1") },
    { path: "/InsulaConsult/services", name: t("link_2") },
    { path: "/InsulaConsult/projects", name: t("link_3") },
    { path: "/InsulaConsult/network", name: t("link_4") },
  ];

  const MenuButton = {
    bg: "none",
    color: "#fff",
    h: "45px",
    fontWeight: "normal",
    borderRadius: "10px",
    border: "none",
    margin: { base: "0px 0", md: 0 },
    outline: "none",
    ":hover": {
      bg: !footerMenu ? "orange.400" : "none",
      color: !footerMenu ? "#fff" : "orange.400",
    },
  };
  const MenuLinks = routes.map((link) => (
    <NavLink to={link.path} key={link.name}>
      <Button sx={MenuButton} onClick={onHideMenu ? onHideMenu : () => ""}>
        {link.name}
      </Button>
    </NavLink>
  ));

  return <>{MenuLinks}</>;
};
