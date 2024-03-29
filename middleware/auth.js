import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  console.log("authenticate user-> the middleware is working");
  // const headers = req.headers;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //console.log(payload);
    req.user = { userId: payload.userId };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export default auth;
