import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Workspace from "./Workspace.jsx";
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={createTheme({ palette: { primary: { main: "#319b82" }, background: { default: "#f6f8f7" } }, typography: { fontFamily: "Inter, Roboto, Arial, sans-serif" } })}>
    <CssBaseline /><Workspace />
  </ThemeProvider>
);
