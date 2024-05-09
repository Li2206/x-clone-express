import dataArray from "../data.js"
export const getUserInfo = function(req, res){
    res.status(200).json(dataArray["current-user"])
}