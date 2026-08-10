import express from "express";
import cors from "cors";
import userRoute from "./router/userRouter.js";
import dbConection from "./db/dbConection.js";
import { authMiddleware } from "./authMiddleware/authMiddleware.js";

const app = express();
const port = 4567;
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
async function start() {
  try {
    const result = await dbConection.execute("SELECT 1");
    console.log("database is connected");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
}
start();
