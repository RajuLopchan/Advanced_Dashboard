import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

// 🔧 Extend MUI Theme types
declare module "@mui/material/styles" {
  interface Palette {
    customBackgrounds: {
      neutral: string;
      background: string;
      background2: string;
      border: string;
    };
  }

  interface PaletteOptions {
    customBackgrounds?: {
      neutral: string;
      background: string;
      background2: string;
      border: string;
    };
  }

  interface Theme {
    gradients: {
      primary: string;
      secondary: string;
    };
  }
  interface ThemeOptions {
    gradients?: {
      primary?: string;
    };
  }
}

// ✅ Define your base theme tokens
const baseTheme = {
  palette: {
    primary: { main: "#6E39CB" },
    text: {
      primary: "#6E39CB",
      secondary: "#89868D",
      disabled: "#B4B2B7",
    },
    background: {
      default: "#FFFFFF",
      paper: "#E7E7F4",
    },
    grey: {
      100: "#F7F7F7",
      400: "#DBDCDE",
    },
    customBackgrounds: {
      neutral: "#F7F7F7",
      background: "#F4F5F9",
      background2: "#E7E7F4",
      border: "#DBDCDE",
    },
  },
  gradients: {
    primary: "linear-gradient(#D6C8FE 0%)",
    secondary: "linear-gradient(#C2A1FD 0%, #9154FD 100%)",
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: { fontSize: "32px", fontWeight: "bold" },
    h2: { fontSize: "30px", fontWeight: "bold" },
    h3: { fontSize: "28px", fontWeight: "bold" },
    h4: { fontSize: "26px", fontWeight: "bold" },
    h5: { fontSize: "24px", fontWeight: "bold" },
    h6: { fontSize: "22px", fontWeight: "bold" },
    subtitle1: { fontSize: "20px", fontWeight: 500 },
    subtitle2: { fontSize: "18px", fontWeight: 500 },
    body1: { fontSize: "16px", fontWeight: 400 },
    body2: { fontSize: "14px", fontWeight: 300 },
    caption: { fontSize: "12px", fontWeight: 200 },
  },
};

// ✅ Create theme with component customizations
const theme = createTheme(baseTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 500,
          height: "46px",
          // width: "330px",
          fontSize: theme.typography.body1.fontSize,
        }),
        sizeSmall: {
          fontSize: "12.64px",
          height: "32px",
          width: "100px",
          borderRadius: "4px",
        },
        sizeMedium: ({ theme }: { theme: Theme }) => ({
          fontSize: theme.typography.body1.fontSize,
          height: "46px",
          width: "169px",
        }),
        sizeLarge: {
          fontWeight: 500,
          height: "46px",
          // width: "330px",
        },
        containedPrimary: ({ theme }: { theme: Theme }) => ({
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }),
        outlinedPrimary: ({ theme }: { theme: Theme }) => ({
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.customBackgrounds.background2,
            borderColor: theme.palette.primary.main,
          },
        }),
        textPrimary: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.customBackgrounds.background2,
          },
        }),
      },
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        color: "primary",
        size: "medium",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderRadius: "10px",
          height: "48px",
          // width: "330px",
         
          backgroundColor: theme.palette.background.default,
          "& fieldset": {
            borderColor: theme.palette.customBackgrounds.border,
          },
          "&:hover fieldset": {
            borderColor: "#A6A6F2",
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
            borderWidth: "2px",
          },
        }),
        input: ({ theme }: { theme: Theme }) => ({
          padding: "12px 14px",
          fontSize: theme.typography.body2.fontSize,
          color: theme.palette.text.primary,
          "&::placeholder": {
            color: "#A0A0A0",
            opacity: 1,
          },
        }),
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
});

export default theme;
