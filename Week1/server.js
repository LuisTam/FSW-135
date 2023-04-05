const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const Inventory = require('./models/inventory')
 

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017').then(
    console.log('MongoDB is connected')
)

const inventory = new Inventory({
    title: "Soccer Ball",
    description:"Team ball",
    value: 25.00,

})

app.get('/', (req, res) => {
    res.send(inventory)
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is ready")
})

