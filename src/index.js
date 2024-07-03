const express = require("express");
const connect = require("./config/databases");
const app = express();
const Comment = require('./models/comment');
const Tweet = require('./models/tweet'); // Assuming you import your Tweet model

const TweetRepository = require("./repository/tweet-repository");

app.listen(3000, async () => {
    console.log("Server Started");

    try {
        // Connect to MongoDB
        await connect();
        console.log("Mongoose Connected");

        // Create a new tweet using TweetRepository
        const repo = new TweetRepository();
        const tweet = await repo.create({ content: "First Tweet" });
        console.log("Tweet created:", tweet);

        // Create a new comment using Comment model
        const comment = await Comment.create({ content: "Tweets after Comment" });
        console.log("Comment created:", comment);

        // Associate the comment with the tweet
        if (tweet) {
            tweet.comments.push(comment);
            repo.getWithComments("66857940ed46696daf26b77b")
            await tweet.save();
            console.log("Tweet after adding comment:", tweet);
        } else {
            console.error("Tweet not found or undefined.");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
});
