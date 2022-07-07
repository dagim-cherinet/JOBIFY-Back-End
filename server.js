import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
//db and authenticateUser
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//middleware
import notFound_middleware from "./middleware/not-found.js";
import errorHandler_middleware from "./middleware/error-handler.js";

//express.json() will make json available to all controllers
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.get("/", (req, res) => {
  //throw new Error("my error");
  console.log("someone is checking the server");
  res.send("<h1>Welcome to the server</h1>");
});
app.use(notFound_middleware);
app.use(errorHandler_middleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();