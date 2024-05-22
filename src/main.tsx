import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      white: "hsl(0, 0%, 100%)",
    },
    primary: {
      main: "hsl(234, 29%, 20%)",
      light: "hsl(231, 7%, 60%)",
    },

    background: {
      default: "hsl(235, 18%, 26%)",
    },
    warning: {
      main: "hsl(4, 100%, 67%)",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h2: {
      fontSize: "3.5rem",
    },
    subtitle1: {
      lineHeight: 1.5,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
