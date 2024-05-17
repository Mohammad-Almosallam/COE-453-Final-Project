import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      semiSm: 425,
      sm: 600,
      semiMd: 700,
      md: 900,
      semiLg: 1024,
      lg: 1200,
      xl: 1536,
      xxl: 1750,
    },
  },
  palette: {
    primary: {
      //Autboia Orange
      p900: "#864102",
      dark: "#115e59",
      main: "#0d9488",
      p600: "#FFAE63",
      p500: "#FFBF85",
      p400: "#FFD0A5",
      p300: "#FFDFC2",
      p200: "#FFECDB",
      light: "#a7f3d0",
      p50: "#FFF9F3",
      p25: "#FFFCFA",
      contrastText: "white",
    },
    secondary: {
      //Autboia Blue
      s900: "#0F29DC",
      dark: "#314AF3",
      main: "#4A60F4",
      s600: "#6679F5",
      s500: "#7C8CF9",
      s400: "#8897FD",
      s300: "#9CA9FF",
      s200: "#B9C2FF",
      light: "#E5E8FF",
      s50: "#F0F2FF",
      s25: "#F9FAFF",
      contrastText: "white",
    },
    tertiary: {
      //Autboia Black
      light: "#EAECF0",
      main: "#000000",
      dark: "#333232",
      contrastText: "white",
    },
    success: {
      //Autboia Green
      s900: "#054F31",
      s800: "#05603A",
      dark: "#027A48",
      s600: "#039855",
      main: "#12B76A",
      s400: "#32D583",
      s300: "#6CE9A6",
      s200: "#A6F4C5",
      light: "#D1FADF",
      s50: "#ECFDF3",
      s25: "#F6FEF9",
      contrastText: "white",
    },
    error: {
      e900: "#7A271A",
      e800: "#912018",
      dark: "#B42318",
      e600: "#D92D20",
      main: "#F04438",
      e400: "#F97066",
      e300: "#FDA29B",
      e200: "#FECDCA",
      light: "#FEE4E2",
      e50: "#FEF3F2",
      e25: "#FFFBFA",
      contrastText: "white",
    },
    gray: {
      g25: "#F9FAFF",
      g50: "#F9FAFB",
      g75: "#F4F5FA",
      g100: "#F2F4F7",
      g200: "#EAECF0",
      g300: "#D0D5DD",
      g400: "#98A2B3",
      g500: "#667085",
      g600: "#475467",
      g700: "#344054",
      g800: "#1D2939",
      g900: "#101828",
    },
    green: {
      light: "#D0FEA0",
      main: "#A5FE46",
      dark: "#76E401",
    },
    yellow: {
      light: "#FFFBEB",
      main: "#FACC15",
      dark: "#EAB308",
    },
    blue: {
      light: "#C7FFFE",
      main: "#0BF4F0",
      dark: "#08AFAD",
    },
    purple: {
      light: "#E5C7FF",
      main: "#CF98FF",
      dark: "#9924FF",
    },
    red: {
      light: "#FFC7C7",
      main: "#FF5E5E",
      dark: "#FF1818",
    },
  },
  borderRadius: {
    r5: "5px",
    r10: "10px",
    r15: "15px",
    r20: "20px",
    r25: "25px",
  },

  typography: {
    // Add "Almarai" as the first option
    fontFamily: "IBM Plex Sans Arabic",
    regular: 400, // Default font weight (regular)
    medium: 500, // Medium font weight
    bold: 700, // Bold font weight
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(173,174,176,0.2),0px 1px 1px 0px rgba(173,174,176,0.14),0px 1px 3px 0px rgba(173,174,176,0.12)",
    "0px 3px 1px -2px rgba(173,174,176,0.2),0px 2px 2px 0px rgba(173,174,176,0.14),0px 1px 5px 0px rgba(173,174,176,0.12)",
    "0px 3px 3px -2px rgba(173,174,176,0.2),0px 3px 4px 0px rgba(173,174,176,0.14),0px 1px 8px 0px rgba(173,174,176,0.12)",
    "0px 2px 4px -1px rgba(173,174,176,0.2),0px 4px 5px 0px rgba(173,174,176,0.14),0px 1px 10px 0px rgba(173,174,176,0.12)",
    "0px 3px 5px -1px rgba(173,174,176,0.2),0px 5px 8px 0px rgba(173,174,176,0.14),0px 1px 14px 0px rgba(173,174,176,0.12)",
    "0px 3px 5px -1px rgba(173,174,176,0.2),0px 6px 10px 0px rgba(173,174,176,0.14),0px 1px 18px 0px rgba(173,174,176,0.12)",
    "0px 4px 5px -2px rgba(173,174,176,0.2),0px 7px 10px 1px rgba(173,174,176,0.14),0px 2px 16px 1px rgba(173,174,176,0.12)",
    "0px 5px 5px -3px rgba(173,174,176,0.2),0px 8px 10px 1px rgba(173,174,176,0.14),0px 3px 14px 2px rgba(173,174,176,0.12)",
    "0px 5px 6px -3px rgba(173,174,176,0.2),0px 9px 12px 1px rgba(173,174,176,0.14),0px 3px 16px 2px rgba(173,174,176,0.12)",
    "0px 6px 6px -3px rgba(173,174,176,0.2),0px 10px 14px 1px rgba(173,174,176,0.14),0px 4px 18px 3px rgba(173,174,176,0.12)",
    "0px 6px 7px -4px rgba(173,174,176,0.2),0px 11px 15px 1px rgba(173,174,176,0.14),0px 4px 20px 3px rgba(173,174,176,0.12)",
    "0px 7px 8px -4px rgba(173,174,176,0.2),0px 12px 17px 2px rgba(173,174,176,0.14),0px 5px 22px 4px rgba(173,174,176,0.12)",
    "0px 7px 8px -4px rgba(173,174,176,0.2),0px 13px 19px 2px rgba(173,174,176,0.14),0px 5px 24px 4px rgba(173,174,176,0.12)",
    "0px 7px 9px -4px rgba(173,174,176,0.2),0px 14px 21px 2px rgba(173,174,176,0.14),0px 5px 26px 4px rgba(173,174,176,0.12)",
    "0px 8px 9px -5px rgba(173,174,176,0.2),0px 15px 22px 2px rgba(173,174,176,0.14),0px 6px 28px 5px rgba(173,174,176,0.12)",
    "0px 8px 10px -5px rgba(173,174,176,0.2),0px 16px 24px 2px rgba(173,174,176,0.14),0px 6px 30px 5px rgba(173,174,176,0.12)",
    "0px 8px 11px -5px rgba(173,174,176,0.2),0px 17px 26px 2px rgba(173,174,176,0.14),0px 6px 32px 5px rgba(173,174,176,0.12)",
    "0px 9px 11px -5px rgba(173,174,176,0.2),0px 18px 28px 2px rgba(173,174,176,0.14),0px 7px 34px 6px rgba(173,174,176,0.12)",
    "0px 9px 12px -6px rgba(173,174,176,0.2),0px 19px 29px 2px rgba(173,174,176,0.14),0px 7px 36px 6px rgba(173,174,176,0.12)",
    "0px 10px 13px -6px rgba(173,174,176,0.2),0px 20px 31px 3px rgba(173,174,176,0.14),0px 8px 38px 7px rgba(173,174,176,0.12)",
    "0px 10px 13px -6px rgba(173,174,176,0.2),0px 21px 33px 3px rgba(173,174,176,0.14),0px 8px 40px 7px rgba(173,174,176,0.12)",
    "0px 10px 14px -6px rgba(173,174,176,0.2),0px 22px 35px 3px rgba(173,174,176,0.14),0px 8px 42px 7px rgba(173,174,176,0.12)",
    "0px 11px 14px -7px rgba(173,174,176,0.2),0px 23px 36px 3px rgba(173,174,176,0.14),0px 9px 44px 8px rgba(173,174,176,0.12)",
    "0px 11px 15px -7px rgba(173,174,176,0.2),0px 24px 38px 3px rgba(173,174,176,0.14),0px 9px 46px 8px rgba(173,174,176,0.12)",
  ],
});

export default responsiveFontSizes(theme);
