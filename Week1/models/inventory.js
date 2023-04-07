const mongoose = require("mongoose")
const Schema = mongoose.Schema

//InventoryDB
const inventorySchema = new Schema({
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

module.exports = mongoose.model("Inventory", inventorySchema)