const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    userForm: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        
        type: String

    },
    content: {
        type: String
    }
   
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment }