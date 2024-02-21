import { Button, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const GetInTouchBtn = () => {
  const { t } = useTranslation("buttons");

  const getInTouchLink = {
    text: "none",
  };
  const getInTouchBtn = {
    
    cursor: "pointer",
    bg: "orange.400",
    display : "flex",
    justifyContent : "center",
    alignItems : 'center',
    justifyContent : 'center',
    padding : "0 10px",
    borderRadius : "5px",
    h: "50px",
    color: "#fff",
    margin: "20px 10px 20px 0px",
    ":hover": {
      bg: "orange.500",
      textDecoration : "none"
    },
  };
  return (
    
      <Link href="mailto:arrufabio93@gmail.com" sx={getInTouchBtn}>
        {t("get_in_touch_btn")}
      </Link>
    
  );
};
