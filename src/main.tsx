import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuccessMessage from "./components/SuccessMessage.tsx";
import EmailSubscription from "./components/EmailSubscription";

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

const Main = () => {
  const [value, setValue] = useState<string>("ash@loremcompany.com");
  const router = createBrowserRouter([
    {
      path: "/social_links_profile/",
      element: <App />,
      children: [
        {
          path: "/social_links_profile/",
          element: <EmailSubscription setValue={setValue} value={value} />,
        },
        {
          path: "/social_links_profile/success",
          element: <SuccessMessage value={value} />,
        },
      ],
    },
  ]);
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
