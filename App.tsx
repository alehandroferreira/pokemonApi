import { StatusBar } from "expo-status-bar";
import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { Discovery } from "./src/screens/Discovery/";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={"black"} />
      <Discovery />
    </ThemeProvider>
  );
}
