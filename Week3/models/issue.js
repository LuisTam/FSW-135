const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Issues', issueSchema)