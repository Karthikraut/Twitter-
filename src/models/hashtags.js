const moongose =require('mongoose');
const hashtagSchema = new moongose.Schema({
    title: {
        type:String,
        required : true
    },
    tweets: [
        {
            type:moongose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    ]
})