const express = require('express')
const issueRouter = express.Router()
const Issues = require('../models/issue.js')


issueRouter.get("/", (req, res, next) => {
        Issues.find((err, allIssues) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allIssues)
        })
    })


issueRouter.get('/:issuesId', (req, res, next) => {
        Issues.findOne(
            {_id: req.params.issuesId},
            (err, foundIssue) => {
                if(err){
                    const err = new Error('NOT FOUND')
                    return next(err)
                }
                return res.status(200).send(foundIssue)
            }
        )
    })

issueRouter.post("/", (req, res, next) => {
        const newIssue = new Issues(req.body)
        newIssue.save((err, savedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedIssue)
        })
    })
issueRouter.put("/:issuesId", (req, res, next) => {
        Issues.findOneAndUpdate(
            {_id: req.params.issuesId},
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

issueRouter.delete("/:issuesId", (req, res, next) => {
        Issues.findOneAndDelete(
            {_id: req.params.issuesId},
            (err, deletedIssue) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(deletedIssue)
            }
        )
    })


module.exports = issueRouter