const express = require('express')
const commentRouter = express.Router()
const Comments = require('../models/comment.js')



commentRouter.get("/", (req, res, next) => {
        Comments.find((err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        })
    })

commentRouter.get('/:commentsId', (req, res, next) => {
        Comments.findOne(
            {_id: req.params.commentsId},
            (err, foundComment) => {
                if(err){
                    const err = new Error('NOT FOUND')
                    return next(err)
                }
                return res.status(200).send(foundComment)
            }
        )
    })

commentRouter.post("/", (req, res, next) => {
    const newComment = new Comments(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

commentRouter.put("/:commentsId", (req, res, next) => {
    Comments.findOneAndUpdate(
        {_id: req.params.commentsId},
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

commentRouter.delete("/:commentsId", (req, res, next) => {
    Comments.findOneAndDelete(
        {_id: req.params.commentsId},
        (err, deletedcomment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(deletedcomment)
        }
    )
})

commentRouter.put('/like/:commentId', (req, res, next) => {
    Comment.findOneAndUpdate(
        { _id: req.params.commentId },
        { $inc: { likes: 1 }},
        { new: true },
        (err, updatedComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
        )
    })
    
    commentRouter.get('/search/bylikes/:btm/:top', (req, res, next) => {
        Comment.where('likes').gte(req.params.btm).lte(req.params.top).exec((err, comment)=> {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comment)
        })
    })
    
 module.exports = commentRouter
