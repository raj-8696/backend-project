import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
  return res.status(201).json({ message: "Register" });
});

const loginUser = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ message: "Login" });
});

export { registerUser, loginUser };
