const express = require('express')
const issuesRouter = express.Router()
const Issue = require('../models/issue')


issuesRouter.get("/", (req, res, next) => {
    Issue.find((err, issue) => {
        if (err){
             res.status(500)
             return next(err)
         }
         return res.status(200).send(issue)
     })
})
issuesRouter.get("/:issueId", (req, res, next) => {
    Issue.findOne({_id: req.params.issueId},
        (err, pickedIssue) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(pickedIssue)
        }
        )
})

issuesRouter.post("/", (req, res, next) => {
    const newIssue = new Issue(req.body)
    newIssue.save ((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

issuesRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.issueId },(err, deletedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("succesfully deleted!!")
    })
})

issuesRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate({_id: req.params.issueId}, 
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }

    )
})

module.exports = issuesRouter