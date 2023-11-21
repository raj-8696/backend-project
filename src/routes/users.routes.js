import { Router } from "express";
import { loginUser, registerUser } from "../controllers/users.controllers.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export const usersRouter = router;
