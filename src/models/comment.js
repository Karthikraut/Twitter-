const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    }
})

const Comment = mongoose.model("Comment",commentSchema);
module.exports = Comment;