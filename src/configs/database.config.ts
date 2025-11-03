import { Pool } from 'pg';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./env";

const dbConfig = async () => {
  try {
    const pool = new Pool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: 5432, // default PostgreSQL port
    });

    // Test the connection
    const client = await pool.connect();
    client.release();

    console.log("DATABASE CONNECTED SUCCESSFULLY");
    return pool;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

export default dbConfig;
