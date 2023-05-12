const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    issueId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issues",
        require: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    description:{
        type: String
    }
})


module.exports = mongoose.model('Comments', commentSchema)