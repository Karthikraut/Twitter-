const { default: mongoose } = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    email: {
        type: String,
    }
})

const Tweet  = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;