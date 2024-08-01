import "@fontsource/inter";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import { theme } from "./theme/tokens/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider
      defaultMode="light"
      disableTransitionOnChange
      theme={theme}
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
