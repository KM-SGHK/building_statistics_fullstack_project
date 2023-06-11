import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabComponentBuildings from "./TabComponentBuildings";
import TabComponentEUI from "./TabComponentEUI";

export default function TabSelector() {
  const [tabValue, setTabValue] = useState("one");
  const tabSelectorShelfStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "left",
    marginTop: 3
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  function selectTabComponent() {
    if (tabValue === "one") return <TabComponentBuildings />;
    if (tabValue === "two") return <TabComponentEUI />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={tabSelectorShelfStyle}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="yellow"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="OverView" />
          <Tab value="two" label="EUI" />
        </Tabs>
      </Box>
      <Box sx={{ paddingTop: 3 }}>{selectTabComponent()}</Box>
    </Box>
  );
}
