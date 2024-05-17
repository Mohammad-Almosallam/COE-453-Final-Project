import { useTheme } from "@emotion/react";
import {
  Stack,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DataBlock = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Stack
      sx={{
        border: `1px solid ${theme.palette.gray.g200}`,
        padding: 2,
        backgroundColor: theme.palette.gray.g50,
        borderRadius: "10px",
        overflow: "hidden",
        width: "100%",
      }}
      color={"black"}
      gap={1}
    >
      <Stack direction={"row"} gap={1}>
        <Button
          variant="text"
          sx={{
            borderRadius: theme.borderRadius.r10,
          }}
          onClick={() => {
            // console.warn("hhh", formData);
          }}
        >
          {t("home.fetchGraphql")}
        </Button>
        <Button
          variant="text"
          sx={{
            borderRadius: theme.borderRadius.r10,
          }}
          onClick={() => {
            // console.warn("hhh", formData);
          }}
        >
          {t("home.fetchREST")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default DataBlock;
