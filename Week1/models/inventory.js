const mongoose = require('mongoose')

//InventoryDB

const inventorySchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        maxLenght: 20
    },
    description:{
        type: String,
        require: true,
        maxLenght: 100
    },
    value:{
        type: Number,
        require:true,
        min: 0
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)