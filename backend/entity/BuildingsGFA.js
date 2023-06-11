import { EntitySchema } from "typeorm";

export const BuildingsGFA = new EntitySchema({
  name: "buildings_gfa",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    ose_building_id: {
      type: "int",
    },
    gross_floor_area: {
      type: "float",
    },
  },
});
