import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import gradientOne from "./assets/gradient1.png";
import gradientTwo from "./assets/gradient2.png";
import kfupm from "./assets/kfupm-logo.png";
import { Trans, useTranslation } from "react-i18next";
import Home from "./features/Home/pages/Home";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  //SECTION - useEffect
  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      localStorage.setItem("i18nextLng", "ar");
    }
  }, []);

  return <Home />;
}

export default App;
