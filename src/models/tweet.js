const { default: mongoose } = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250,"Tweet cannot be more than 250 words."]
    },
    hashtags:[
    {        
        type:{
            
        }
    }
    ]
})



const Tweet  = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;