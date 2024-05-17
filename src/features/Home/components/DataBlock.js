import { useTheme } from "@emotion/react";
import {
  Stack,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Button,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  TableContainer,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const DataBlock = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [data, setData] = useState([]);

  const getBMIbyRest = () => {
    fetch("https://restapi2-ji6zmiyasq-uc.a.run.app/getBMI")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch BMI data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching BMI data:", error);
      });
  };

  const getBMIbyGraphQL = () => {
    fetch("https://graphapi-ji6zmiyasq-uc.a.run.app/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "{ getBMI }",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch BMI data");
        }
        return response.json();
      })
      .then((jsonData) => {
        const parsedData = JSON.parse(jsonData.data.getBMI);
        setData(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching BMI data:", error);
      });
  };

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
            getBMIbyGraphQL();
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
            getBMIbyRest();
          }}
        >
          {t("home.fetchREST")}
        </Button>
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="BMI data table">
          <TableHead>
            <TableRow>
              <TableCell>{t("Dessert (100g serving)")}</TableCell>
              <TableCell align="right">{t("id")}</TableCell>
              <TableCell align="right">{t("home.height")}</TableCell>
              <TableCell align="right">{t("home.weight)")}</TableCell>
              <TableCell align="right">{t("bmi")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.bmi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DataBlock;
