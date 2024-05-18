import { useTheme } from "@emotion/react";
import {
  Stack,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { calculateBMIusingGraphQL } from "../../../apis/GraphQL";
import { calculateBMIusingREST } from "../../../apis/REST";

const Calculator = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    selectedOption: "graphql", // Default option
  });

  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleErrorMessage = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionChange = (event) => {
    setFormData({
      ...formData,
      selectedOption: event.target.value,
    });
  };

  const handleSubmitForm = async () => {
    const { height, weight, selectedOption } = formData;

    // Validate inputs
    if (!height || !weight) {
      handleErrorMessage();
      return;
    }

    setLoading(true);

    try {
      if (selectedOption === "graphql") {
        const query = `{
          calculateBMI(weight: ${weight}, height: ${height})
        }`;
        const data = await calculateBMIusingGraphQL(query);
        console.log("GraphQL Response:", data);
      } else if (selectedOption === "rest") {
        const payload = { weight, height };
        const data = await calculateBMIusingREST(payload);
        console.log("REST Response:", data);
      }
    } catch (error) {
      console.error("Error fetching BMI data:", error);
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
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {t("home.fillAllFields")}
        </Alert>
      </Snackbar>
      <Stack direction={"row"} gap={1}>
        <Stack sx={{ width: "100%" }}>
          <Typography
            fontSize={"0.8rem"}
            color={theme.palette.gray.g600}
            fontWeight={"bold"}
          >
            {t("home.height")}
          </Typography>
          <TextField
            color="primary"
            fullWidth
            name="height"
            size="small"
            placeholder={t("home.height")}
            value={formData.height}
            onChange={handleChange}
            InputProps={{
              sx: {
                borderRadius: "10px",
                overflow: "hidden",
                height: "40px",
                backgroundColor: theme.palette.white,
              },
            }}
          />
        </Stack>

        <Stack sx={{ width: "100%" }}>
          <Typography
            fontSize={"0.8rem"}
            color={theme.palette.gray.g600}
            fontWeight={"bold"}
          >
            {t("home.weight")}
          </Typography>
          <TextField
            color="primary"
            fullWidth
            name="weight"
            size="small"
            placeholder={t("home.weight")}
            value={formData.weight}
            onChange={handleChange}
            InputProps={{
              sx: {
                borderRadius: "10px",
                overflow: "hidden",
                height: "40px",
                backgroundColor: theme.palette.white,
              },
            }}
          />
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        gap={1}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <RadioGroup
          row
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleOptionChange}
        >
          <FormControlLabel
            value="graphql"
            control={<Radio />}
            label={t("home.graphql")}
          />
          <FormControlLabel
            value="rest"
            control={<Radio />}
            label={t("home.rest")}
          />
        </RadioGroup>
        <Button
          variant="contained"
          sx={{
            borderRadius: theme.borderRadius.r10,
          }}
          disabled={isLoading}
          onClick={handleSubmitForm}
        >
          {isLoading ? <CircularProgress size={20} /> : t("home.submit")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Calculator;
