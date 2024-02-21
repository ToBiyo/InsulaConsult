import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const RouterBtn = ({ path }) => {
  const { t } = useTranslation("buttons");
  const routerBtn = {
    cursor: "pointer",
    bg : 'orange.400',
    h : "50px",
    color : "#fff",
    margin : '20px 10px',
    ":hover" : {
        bg : 'orange.500'
    }
  };
  return (
    <NavLink to={path}>
      <Button sx={routerBtn}>{t("see_more_btn")}</Button>
    </NavLink>
  );
};
