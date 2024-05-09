import { Router } from "express";
import { getUsersTweets } from "../controllers/users.controller.js";
const usersRouter = Router()

usersRouter.get("/:userName", getUsersTweets)

export default usersRouter