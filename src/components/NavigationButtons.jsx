import { useTranslation } from "react-i18next";
import { Flex, Button, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  disable : "mobile"
})

export const NavigationButtons = ({ path }) => {
  const { t } = useTranslation("buttons");

  const navButton = {
    cursor: "pointer",
    bg: "orange.400",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10px",
    borderRadius: "5px",
    h: "50px",
    color: "#fff",
    margin: "20px 10px 20px 0px",
    ":hover": {
      bg: "orange.500",
      textDecoration: "none",
    },
  };
  return (
    <Flex gap={"20px"} data-aos="fade-down" data-aos-delay={100} data-aos-duration={300}>
      <Link href="mailto:arrufabio93@gmail.com" sx={navButton}>
        {t("get_in_touch_btn")}
      </Link>{" "}
      <NavLink to={path}>
        <Button sx={navButton}>{t("see_more_btn")}</Button>
      </NavLink>
    </Flex>
  );
};
