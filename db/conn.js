//Connection details
import pg from "pg";
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect()
  .then(() => {
    console.log('Connected to the database');
    // Create blogs table if it does not exist
    createTable();
  })
  .catch(err => console.error('Error connecting to the database', err));

async function check() {
  // Your check logic here
}

async function createTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS blogs (
      id serial PRIMARY KEY,
      title varchar(500),
      image varchar(500),
      post text,
      createdon timestamp DEFAULT CURRENT_TIMESTAMP,
      category varchar(500)
    );
  `;

  try {
    await pool.query(query);
    console.log('Blogs table created or already exists');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

check();

export { pool, check };
