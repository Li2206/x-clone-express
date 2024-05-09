
import { Router } from 'express'
import { getAllTweets, postAllTweets } from '../controllers/tweets.controller.js'

 const commentRouter = Router()

commentRouter.get("/", getAllTweets)

commentRouter.post("/", postAllTweets)


 export default commentRouter
 