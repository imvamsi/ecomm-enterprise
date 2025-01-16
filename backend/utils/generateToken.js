import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "365d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "None", // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //domain: "http://localhost:5173", // 30 days
  });
};

export default generateToken;
