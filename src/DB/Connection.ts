import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Tickets } from "./entities/Tickets";
import { Mig1705829102784 } from "./migrations/1705829102784-mig";
import { Mig1705832730988 } from "./migrations/1705832730988-mig";
import { Mig1705833887071 } from "./migrations/1705833887071-mig";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Abcd",
  database: "Tambola_DB",
  migrationsRun: true,
  // logging: true,
  entities: [User, Tickets],
  migrations: [Mig1705829102784, Mig1705832730988, Mig1705833887071],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
