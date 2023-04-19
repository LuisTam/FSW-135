const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017').then(
    console.log('MongoDB connected with the Server'))

app.use('/users', require('./routes/userRouter'))
app.use('/comments', require('./routes/commentsRouter'))
app.use('/issues', require('./routes/issuesRouter'))

app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg: err.message})
})

app.listen(9000, () => {
        console.log("Server is ready")
 })