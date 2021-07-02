import { Knex } from "knex";
import { Pool, Client } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "movie_theater",
  password: "tung",
  port: 5432,
});

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "movie_theater",
  password: "tung",
  port: 5432,
});

export const knex: Knex = require("knex")({
  client: "pg",
  connection: {
    user: "postgres",
    host: "localhost",
    database: "movie_theater",
    password: "tung",
    port: 5432,
  },
});
