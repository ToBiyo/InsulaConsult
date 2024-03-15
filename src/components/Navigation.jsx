import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./Menu";
import { LanguageSwitchBtn } from "./LanguageSwitchBtn";

//resources
import logo from "../assets/images/logo.svg";

export const Navigation = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const nav = {
    bg: { base: displayMenu ? "primary" : "none", md: "none" },
    w: "100%",
    h: { base: displayMenu ? "100%" : "60px", md: "60px" },
    justifyContent: "center",
    alignIems: "center",
    position: { base: displayMenu ? "fixed" : "absolute" },
    top: 0,
    zIndex: 3,
    fontFamily: "body",
  };
  const menuContainer = {
    w: "80%",
    justifyContent: "space-between",
    position: { base: "absolute", md: "relative" },
  };
  const linksContainer = {
    w: { base: "100%", md: "auto" },
    left: "0",
    h: "100%",
    flexDir: { base: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    position: { base: "fixed", md: "relative" },
    display: { base: displayMenu ? "flex" : "none", md: "flex" },
    zIndex: { base: -1, md: 3 },
  };

  const logoImg = {
    w: "60px",
    zIndex: "4",
  };
  const smartMenuBtn = {
    color: "#fff",
    alignItems: "center",
    fontSize: "2rem",
    cursor: "pointer",
    display: { base: "flex", md: "none" },
  };

  const clickHandler = (e) => {
    setDisplayMenu((prev) => !prev);
  };
  const hideMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <Flex sx={nav} as={"nav"}>
      <Flex sx={menuContainer}>
        <Flex>
          <NavLink to={"/"}>
            <Image src={logo} sx={logoImg} />
          </NavLink>
        </Flex>
        <Flex sx={linksContainer}>
          <Menu onHideMenu={hideMenu} />
          <LanguageSwitchBtn onClickHandler={hideMenu} />
        </Flex>
        <Flex onClick={clickHandler} sx={smartMenuBtn}>
          <FontAwesomeIcon icon={displayMenu ? faXmark : faBars} />
        </Flex>
      </Flex>
    </Flex>
  );
};
