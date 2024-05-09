import { Router } from "express"
import { getUserInfo } from "../controllers/user.controller.js"
const userRouter= Router()


userRouter.get("/", getUserInfo)




export default userRouter
 