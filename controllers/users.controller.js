import dataArray from "../data.js"
export const getUsersTweets = function(req, res){
    const userName = req.params.userName
    const arrayFiltered = dataArray.tweets.filter((l)=> l.user.userName == userName)
    res.status(200).json(arrayFiltered)
}