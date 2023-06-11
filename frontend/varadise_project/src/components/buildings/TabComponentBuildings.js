import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "Building ID", flex: 1 },
  { field: "location", headerName: "Location", flex: 1 },
  { field: "building_year", headerName: "Year Built", flex: 1 },
  {
    field: "primary_property_type",
    headerName: "Primary Property Type",
    flex: 1,
  },
];

export default function TabComponentBuildings() {
  const buildings = useSelector((state) => state.buildings.buildingsData);
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={buildings}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
