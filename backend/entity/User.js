import { EntitySchema } from "typeorm";

export const SystemUser = new EntitySchema({
  name: "system_user",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    username: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    }
  },
});
