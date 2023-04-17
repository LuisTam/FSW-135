const express = require('express')
const commentsRouter = express.Router()
const Comments = require('../models/comments')


commentsRouter.get("/", (req, res, next) => {
    Comments.find((err, comments) => {
        if (err){
             res.status(500)
             return next(err)
         }
         return res.status(200).send(comments)
     })
})

commentsRouter.post("/", (req, res, next) => {
    const newComment = new Comments(req.body)
    newComment.save ((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

commentsRouter.delete("/:commentId", (req, res, next) => {
    Comments.findOneAndDelete({ _id: req.params.commentId },(err, deletedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("succesfully deleted!!")
    })
})

commentsRouter.put("/:commentId", (req, res, next) => {
    Comments.findOneAndUpdate({_id: req.params.commentId}, 
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }

    )
})

module.exports = commentsRouter