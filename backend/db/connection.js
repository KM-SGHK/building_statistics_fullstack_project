import { DataSource } from "typeorm";

export function dbConnection() {
  return new DataSource({
    type: "postgres",
    host: "varadise-dev-2.cluster-cieuwt1nvjel.ap-southeast-1.rds.amazonaws.com",
    port: 5432,
    username: "km_dev_2",
    password: "helloWorld2023DB",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: ["../entity/**/*.js"],
    autoLoadEntities: true,
    extra: {
        poolSize: 20,
        connectionTimeoutMillis: 5000,
        query_timeout: 5000,
        statement_timeout: 5000
      }
  });
}
