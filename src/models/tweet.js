const { default: mongoose } = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    comments: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
        default: []
    }
})

const Tweet  = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;