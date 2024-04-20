//Connection details
import pg from "pg";
import pkg from "pg";
import { sql } from "@vercel/postgres";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

pool.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Error connecting to the database', err));

async function check(){
   
};

check();

export { pool, check }; 