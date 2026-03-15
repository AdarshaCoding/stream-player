import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1f2937",
      contrastText: "#fff",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2937",
      secondary: "#545e6f",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f4f6f8",
        },
      },
    },

    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          maxWidth: 520,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "10px 14px",
          lineHeight: "1.2",
        },
        notchedOutline: {
          borderRadius: 10,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 10px rgba(0,0,0,0.08)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#f4f6f8",
          fontWeight: 700,
        },
        root: {
          borderBottomColor: "#e0e0e0",
        },
      },
    },
  },
});

export default theme;
