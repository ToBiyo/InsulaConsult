import { NavLink } from "react-router-dom";
import { Flex, Button, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {LanguageSwitch} from './LanguageSwitch';
//resources
import logo from "../assets/images/logo.svg";
import { useContext } from "react";


export const Menu = () => {
  //translation resource
  const { t } = useTranslation("menu");

  //routes
  const routes = [
    { path: "/InsulaConsult/", name: t("link_0") },
    { path: "/InsulaConsult/about", name: t("link_1") },
    { path: "/InsulaConsult/services", name: t("link_2") },
    { path: "/InsulaConsult/projects", name: t("link_3") },
    { path: "/InsulaConsult/network", name: t("link_4") },
  ];

  const nav = {
    w: "100%",
    h: "60px",
    justifyContent: "center",
    alignIems: "center",
    position : 'absolute',
    top : 0,
    zIndex : 2, 
  };
  const menuContainer = {
    w : "80%",
    justifyContent : 'space-between',

  }
  const linksContainer = {
    h: "100%",
    alignItems: "center",
    gap: "10px",
  };
  const MenuButton = {
    bg : "none",
    color: "#fff",
    h: "45px",
    fontWeight: "normal",
    borderRadius: "10px",
    border: "none",
    margin: { base: "10px 0", md: 0 },
    outline: "none",
    ":hover": {
      bg: "orange.400",
    },
  };

  const logoImg = {
    w: "60px",
  };

  const MenuLinks = routes.map((link) => (
    <NavLink to={link.path} key={link.name}>
      <Button sx={MenuButton}>
        {link.name}
      </Button>
    </NavLink>
  ));

  return (
    <Flex sx={nav} as={"nav"}>
      <Flex sx={menuContainer}>
        <Flex>
          <NavLink to={"/"}>
            <Image src={logo} sx={logoImg} />
          </NavLink>
        </Flex>
        <Flex sx={linksContainer}>
            {MenuLinks}
            <LanguageSwitch />
        </Flex>
      </Flex>
    </Flex>
  );
};
