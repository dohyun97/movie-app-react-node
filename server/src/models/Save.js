const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saveSchema = mongoose.Schema({
    userForm: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    },
    movieDate: {
        type:String
    }
}, { timestamps: true })

const Save = mongoose.model('Save', saveSchema);

module.exports = { Save }