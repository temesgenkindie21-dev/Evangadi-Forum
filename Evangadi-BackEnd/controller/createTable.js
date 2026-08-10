import { StatusCodes } from "http-status-codes";
import dbConnection from "../db/dbConection.js";

export const createTable = async (req, res) => {
  try {
    const users = `
      CREATE TABLE IF NOT EXISTS users (
        userId INT(20) NOT NULL AUTO_INCREMENT,
        userName VARCHAR(20) NOT NULL UNIQUE,
        firstName VARCHAR(20) NOT NULL,
        lastName VARCHAR(20) NOT NULL,
        email VARCHAR(40) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,

        PRIMARY KEY (userId)
      )
    `;

    const questions = `
      CREATE TABLE IF NOT EXISTS questions (
        id INT(20) NOT NULL AUTO_INCREMENT,
        questionId VARCHAR(100) NOT NULL,
        userId INT(20) NOT NULL,
        title VARCHAR(50) NOT NULL,
        description VARCHAR(200) NOT NULL,
        tag VARCHAR(20) NOT NULL,

        PRIMARY KEY (id),
    UNIQUE (questionId),
        FOREIGN KEY (userId) REFERENCES users(userId)
      )
    `;

    const answers = `
      CREATE TABLE IF NOT EXISTS answers (
        answerId VARCHAR(100) NOT NULL,
        userId INT(20) NOT NULL,
        questionId VARCHAR(100) NOT NULL,
        answer VARCHAR(200) NOT NULL,

        PRIMARY KEY (answerId),
        FOREIGN KEY (questionId) REFERENCES questions(questionId),
        FOREIGN KEY (userId) REFERENCES users(userId)
      )
    `;

    // Create users first
    await dbConnection.query(users);

    // Create questions second
    await dbConnection.query(questions);

    // Create answers third
    await dbConnection.query(answers);

    return res.status(StatusCodes.CREATED).json({
      msg: "Tables created successfully",
    });
  } catch (error) {
    console.error("Create table error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      msg: "Failed to create tables",
      error: error.message,
    });
  }
};
