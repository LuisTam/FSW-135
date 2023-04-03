const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        maxPrice: 25
    },
    description:{
        type: String,
        require: true,
        maxPrice: 56
    }
})

module.exports = mongoose.model('Items', itemSchema)