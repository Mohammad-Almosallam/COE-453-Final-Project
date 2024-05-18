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
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getBMIbyGraphQL } from "../../../apis/GraphQL";
import { getBMIbyRest } from "../../../apis/REST";

const DataBlock = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (fetchFunction) => {
    setLoading(true);
    try {
      const data = await fetchFunction();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
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
          onClick={() => fetchData(getBMIbyGraphQL)}
        >
          {t("home.fetchGraphql")}
        </Button>
        <Button
          variant="text"
          sx={{
            borderRadius: theme.borderRadius.r10,
          }}
          onClick={() => fetchData(getBMIbyRest)}
        >
          {t("home.fetchREST")}
        </Button>
        {isLoading && <CircularProgress size={20} />}
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="BMI data table">
          <TableHead>
            <TableRow>
              <TableCell align="right">{t("home.id")}</TableCell>
              <TableCell align="right">{t("home.height")}</TableCell>
              <TableCell align="right">{t("home.weight")}</TableCell>
              <TableCell align="right">{t("home.bmi")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.bmi.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DataBlock;
