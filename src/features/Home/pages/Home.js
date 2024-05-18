import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import gradientOne from "../../..//assets/gradient1.png";
import gradientTwo from "../../..//assets/gradient2.png";
import kfupm from "../../../assets/kfupm-logo.png";
import { Trans, useTranslation } from "react-i18next";
import Calculator from "../components/Calculator";
import DataBlock from "../components/DataBlock";
import { IoGlobe } from "react-icons/io5";
import i18n from "../../../i18n";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        background: "linear-gradient(to top, #061D1B, #134E4A)",
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      p={2}
    >
      <img
        src={gradientOne}
        alt=""
        style={{ position: "absolute", top: 0, right: 0, width: "1000px" }}
      />
      <img
        src={gradientTwo}
        alt=""
        style={{ position: "absolute", bottom: 0, left: 0, width: "700px" }}
      />
      <Stack position={"fixed"} top={20} left={20} zIndex={99}>
        <IoGlobe
          fontSize={"1.5rem"}
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => {
            if (localStorage.getItem("i18nextLng")) {
              if (i18n.language === "ar") {
                i18n.changeLanguage("en");
                localStorage.setItem("i18nextLng", "en");
              } else {
                i18n.changeLanguage("ar");
                localStorage.setItem("i18nextLng", "ar");
              }
            } else {
              i18n.changeLanguage("en");
              localStorage.setItem("i18nextLng", "en");
            }
          }}
        />
      </Stack>
      <Stack
        zIndex={1}
        alignItems={"center"}
        color={"white"}
        width={"100%"}
        gap={6}
      >
        <Stack alignItems={"center"}>
          <img src={kfupm} alt="" style={{ width: "80px" }} />

          <Typography fontSize={"1.2rem"}>{t("home.hayyak")}</Typography>
          <Typography fontSize={"3rem"} fontWeight={"bold"}>
            {t("home.appName")}
          </Typography>
          <Trans t={t}>
            <Typography fontSize={"1.2rem"}>
              {t("home.offerYouService")}
            </Typography>
          </Trans>
          <Typography fontSize={"0.7rem"}>
            {t("home.weDontAcceptAliens")}
          </Typography>
        </Stack>
        <Grid container gap={1} maxWidth={{ xs: "100%", sm: "800px" }}>
          <Grid container item xs={12}>
            <Calculator />
          </Grid>
          <Grid container item>
            <DataBlock />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
