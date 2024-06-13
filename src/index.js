const express  =require("express");
const connect  = require("./config/databases")
const app = express();
const Tweet = require('./models/tweet');

app.listen(3000,async ()=>{
    console.log("Server Started");
    await connect();
    const tweet  =await Tweet.create({
        content: "First Tweeet",
        email:  "a&b@gmail.com"
    })
    console.log("Mongoose Connected");
    console.log(tweet);
})