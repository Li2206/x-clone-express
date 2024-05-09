import express from 'express'
import userRouter from './routes/user.route.js'
import tweetsRouter from './routes/tweets.route.js'
import usersRouter from './routes/users.route.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const host = 'localhost'

const {PORT} = process.env

app.use(express.json())
app.use("/user", userRouter)
app.use("/tweet", tweetsRouter)
app.use("/users", usersRouter)

app.listen(PORT, () => {
    console.log(`server is running on http://${host}:${PORT}`);
    
})