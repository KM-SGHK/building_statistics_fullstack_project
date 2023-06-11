import React from "react";
import { Box } from "@mui/material";
import ReactECharts from "echarts-for-react";
import {
  restructureEUIValues,
  extractEUIValues,
  extractPrimaryPropertyTypes,
} from "../../util/buildings/chartDataManipulation.js";
import { useSelector } from "react-redux";

export default function TabComponentEUI() {
  const buildingsEUIDataset = useSelector((state) => state.buildings.euiData);
  const primaryPropertyTypeValues = extractPrimaryPropertyTypes(buildingsEUIDataset);
  const averageEuiValues = extractEUIValues(buildingsEUIDataset);
  const editedAverageEuiValues = restructureEUIValues(averageEuiValues)
  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      top: 12,
    },
    xAxis: [
      {
        type: "category",
        data: primaryPropertyTypeValues,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Average Energy Use Intensity",
        type: "bar",
        barWidth: "60%",
        data: editedAverageEuiValues,
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", marginTop: 25 }}>
      <ReactECharts option={options} />
    </Box>
  );
}
