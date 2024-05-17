import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import gradientOne from "../../..//assets/gradient1.png";
import gradientTwo from "../../..//assets/gradient2.png";
import kfupm from "../../../assets/kfupm-logo.png";
import { Trans, useTranslation } from "react-i18next";
import Calculator from "../components/Calculator";
import DataBlock from "../components/DataBlock";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        height: "100vh",
        background: "linear-gradient(to top, #061D1B, #134E4A)",
        display: "flex",
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
