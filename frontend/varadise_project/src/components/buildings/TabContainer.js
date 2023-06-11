import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import TabSelector from "./TabSelector";
import HeaderBar from "./AppBar";

export default function TabContainer() {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    width: "100%"
  };
  return (
    <>
     <HeaderBar />
      <CssBaseline />
      <Container maxWidth="100%" sx={containerStyle}>
        <TabSelector />
      </Container>
    </>
  );
}
