import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e43a3a",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          width: 500,
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
      },
      styleOverrides: {
        root: {
          padding: "0px 30px",
        },
      },
    },
  },
});

export default theme;
