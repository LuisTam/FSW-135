const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017').then(
    console.log('MongoDB connected with the Server'))

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/users', require('./routes/userRouter'))
app.use('/api/comments', require('./routes/commentsRouter'))
app.use('/api/issues', require('./routes/issuesRouter'))

app.use((err, req, res, next) => {
        console.log(err)
        if(err.name === "UnauthorizedError"){
                res.status(err.status)
        }
        return res.send({errMsg: err.message})
})

app.listen(9000, () => {
        console.log("Server is ready")
 })