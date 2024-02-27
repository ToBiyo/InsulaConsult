import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Button, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {LanguageSwitch} from './LanguageSwitch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//resources
import logo from "../assets/images/logo.svg";





export const Menu = () => {
  //translation resource
  const { t } = useTranslation("menu");

  const [displayMenu, setDisplayMenu] = useState(false);

  //clean menu display on new rander
  useEffect(()=>{
    setDisplayMenu(false);
  }, [])

  //routes
  const routes = [
    { path: "/InsulaConsult/", name: t("link_0") },
    { path: "/InsulaConsult/about", name: t("link_1") },
    { path: "/InsulaConsult/services", name: t("link_2") },
    { path: "/InsulaConsult/projects", name: t("link_3") },
    { path: "/InsulaConsult/network", name: t("link_4") },
  ];

  const nav = {
    bg : {base : displayMenu ? "primary" : "none", md : "none"},
    w: "100%",
    h: {base : displayMenu ? "100%" : "60px", md : "60px"},
    justifyContent: "center",
    alignIems: "center",
    position :{base : displayMenu ? "fixed" : "absolute"},
    top : 0,
    zIndex : 3,
   
  };
  const menuContainer = {
    w : "80%",
    justifyContent : 'space-between',
    position : {base : "absolute", md : "relative"},
  }
  const linksContainer = {
    w : {base : "100%", md : "auto"},
    left : "0",
    h: "100%",
    flexDir : {base : "column", md : "row"},
    justifyContent : "center",
    alignItems: "center",
    gap: "10px",
    position  :{base : "fixed", md : "relative"},
    display : {base : displayMenu ? "flex" : "none", md : "flex"},
    zIndex : {base : -1, md : 3}
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
    zIndex : "4",
  };
  const smartMenuBtn = {
    color : "#fff",
    alignItems : "center",
    fontSize : "2rem",
    cursor : "pointer",
    display : {base : "flex", md : "none"}
  }

  const clickHandler = (e) =>{
    setDisplayMenu((prev) => !prev);
  }
  const hideMenu = () =>{
    setDisplayMenu(false)
  }
 

  const MenuLinks = routes.map((link) => (
    <NavLink to={link.path} key={link.name}>
      <Button sx={MenuButton} onClick={hideMenu}>
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
            <LanguageSwitch onClickHandler={hideMenu}/>
        </Flex>
        <Flex onClick={clickHandler} sx={smartMenuBtn}>
          <FontAwesomeIcon icon={displayMenu ? faXmark : faBars} />
        </Flex>
      </Flex>
    </Flex>
  );
};
