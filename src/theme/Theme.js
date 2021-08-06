import { createTheme } from "@material-ui/core/styles";

const Red = "#ff6347";
const Blue = "#33ccff ";
const White = "#f8f6f6";
const Grey = "#1f1f1f";

export default createTheme({
  palette: {
    common: {
      red: Red,
      blue: Blue,
      white: White,
      grey: Grey,
    },
    primary: {
      main: Blue,
    },
    secondary: {
      main: Red,
    },
  },
  typography: {
    h4: {
      fontSize: "1.5rem",
      color: White,
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.75rem",
      color: Grey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: Grey,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: Red,
          overflowX: "hidden",
        },
      },
    },
  },
});
