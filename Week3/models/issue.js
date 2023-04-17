const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newIssueSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    person:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model('Issue', newIssueSchema)