import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { Discovery } from "./src/screens/Discovery/";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Discovery />
    </ThemeProvider>
  );
}
