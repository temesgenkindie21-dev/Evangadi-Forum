import dbConnection from "../db/dbConection.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, password } = req.body;
    if (!userName || !firstName || !lastName || !email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ msg: "please provide all required fields" });
    }
    const [user] = await dbConnection.query(
      "SELECT userName,userId FROM users WHERE userName=? OR email=?",
      [userName, email],
    );
    if (user.length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "User already registered",
      });
    }
    if (password.length < 8 || password.length > 16) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "password must be at least min 8 and max 16 characters" });
    }
    // encript password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // for email verfication part
    const normalizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Invalid email input",
      });
    }

    await dbConnection.query(
      "INSERT INTO users (userName,firstName,lastName,email,password) VALUE (?,?,?,?,?)",
      [userName, firstName, lastName, normalizedEmail, hashedPassword],
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "register successfully" });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      msg: "Something went wrong, try again later!",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please all enter required fields" });
  }
  try {
    const [rows] = await dbConnection.query(
      "SELECT userId, userName, password FROM users WHERE email = ?",
      [email],
    );

    const user = rows[0];
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        msg: "Invalid email",
      });
    }

    // password checking method
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        msg: "Invalid password",
      });
    }
    const userId = user.userId;
    const userName = user.userName;
    const token = jwt.sign({ userId, userName }, process.env.JWT_SIGN, {
      expiresIn: "30d",
    });

    return res.status(StatusCodes.OK).json({
      msg: "Successfully logged in",
      token,
      userName,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      msg: "Something went wrong, try again later!",
    });
  }
};

export const checkUser = async (req, res) => {
  const userName = req.user.userName;
  const userId = req.user.userId;
  res.status(200).json({ msg: "valid user", userName, userId });
};
