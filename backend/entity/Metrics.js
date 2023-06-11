import { EntitySchema } from "typeorm";

export const Metrics = new EntitySchema({
  name: "metrics",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    ose_building_id: {
      type: "int",
    },
    metric: {
      type: "varchar",
    },
    value: {
      type: "float",
    },
  },
});
