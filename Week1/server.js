const express= require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const Items = require('./models/items')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/items',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)
const items = new Items({
    title: "Soccer Ball",
    description: "Team Ball"
})


app.get('/', (req, res) =>{
    res.send(items)
})

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Sever is running")
})