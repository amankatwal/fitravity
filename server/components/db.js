import pg from "pg";

const pool = new pg.Client({
user: "postgres",
  host: "localhost",
  database: "FItravity",
  password: "Katwal@2190",
  port: 5432,
});

pool.connect()

export default pool;