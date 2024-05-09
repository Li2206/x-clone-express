import dataArray from "../data.js"
export const getAllTweets = function(req, res){
    res.status(200).json(dataArray.tweets)
    
}
export const postAllTweets = function(req, res){
    const id = Math.floor(Math.random()*1000).toString()
    const userInfo = {id, ...req.body}
    dataArray.tweets.push(userInfo)
    res.status(201).json(dataArray.tweets)
}