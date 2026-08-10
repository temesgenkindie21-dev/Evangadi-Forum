import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const dbConection = mysql2.createPool({
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT || 3306,
  connectionLimit: 10,
});

export default dbConection.promise();
