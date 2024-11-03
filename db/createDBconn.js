import pg from "pg";
const { Client } = pg;
import dotenv from "dotenv";
dotenv.config();

export const createDBconn = async () => {
  try {
    const client = new Client({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DATABASE,
    });

    await client.connect();

    return client;
  } catch (error) {
    console.log(`Error while connecting to database ==> ${error}`);
  }
};
