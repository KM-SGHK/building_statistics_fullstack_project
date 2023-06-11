import { EntitySchema } from "typeorm";

export const Buildings = new EntitySchema({
  name: "buildings",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: false
    },
    location: {
      type: "varchar",
    },
    building_year: {
      type: "varchar",
    },
    primary_property_type: {
      type: "varchar",
    },
  },
});
