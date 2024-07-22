import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";
import Menu from "./Menu";
import { LanguageSwitch } from "./LanguageSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//assets
import logo from "../assets/images/logo.svg";
export default function Navigation() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const clickHandler = (e) => {
    setDisplayMenu((prev) => !prev);
  };

  const hideMenu = () => {
    setDisplayMenu(false);
  };

  const navigationContainer = {
    bg: { base: displayMenu ? "primary" : "none", md: "none" },
    w: { base: "100%", md: "80%" },
    h: { base: displayMenu ? "100%" : "60px", md: "60px" },
    justifyContent: "space-between",
    alignIems: "center",
    position: { base: displayMenu ? "fixed" : "absolute" },
    top: 0,
    zIndex: 3,
    fontFamily: "body",
  };
  const logoImage = {
    w: "60px",
    marginLeft: { base: "30%", md: "0" },
  };
  const smartMenuBtn = {
    color: "#fff",
    h: "100%",
    marginRight: "10%",
    marginTop: { base: displayMenu ? "15px" : "0" },
    alignItems: { base: displayMenu ? "flex-start" : "center", md: "center" },
    fontSize: "2rem",
    cursor: "pointer",
    display: { base: "flex", md: "none" },
  };

  const menuContainer = {
    minW: "40%",
    display: { base: displayMenu ? "flex" : "none", md: "flex" },
    flexDir: { base: "column", md: "row" },
    justifyContent: { base: "center", md: "space-around" },
    alignItems: { base: "center", md: "center" },
  };

  return (
    <Flex as={"nav"} sx={navigationContainer}>
      <NavLink to="/InsulaConsult/">
        <Image src={logo} sx={logoImage} />
      </NavLink>
      <Flex sx={menuContainer}>
        <Menu onHideMenu={hideMenu} />
        <LanguageSwitch onClickHandler={hideMenu} />
      </Flex>
      <Flex onClick={clickHandler} sx={smartMenuBtn}>
        <FontAwesomeIcon icon={displayMenu ? faXmark : faBars} />
      </Flex>
    </Flex>
  );
}
