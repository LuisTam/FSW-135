const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt  = require('express-jwt')
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/climate')
.then(console.log('MongoDB connected with the Server'))

app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/auth', require('./routes/authRouter.js'))
app.use("/api/issues", require("./routes/issueRouter"))
app.use("/api/comments", require("./routes/commentRouter"))

app.listen(9000, () => {
    console.log("Server started on port 9000")
})