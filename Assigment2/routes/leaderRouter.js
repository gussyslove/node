const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const Leaders=require('../models/leaders')

const leaderRouter=express.Router()

leaderRouter.use(bodyparser.json())

leaderRouter.route('/')
.get((req,res,next)=>{
    Leaders.find({})
    .then((leader)=>{
        res.statusCode=200
        res.setHeader('Content-Type','application/json')
        res.json(leader)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    Leaders.create(req.body)
    .then((leader)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(leader)
    },(err)=> next(err))
    .catch((err)=>next(err))
})
.put((req,res,next)=>{
    res.statusCode=403
    res.end("The operation PUT is not supported in /leaders")
})
.delete((req,res,next)=>{
    Leaders.remove({})
    .then((resp)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(resp)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

leaderRouter.route('/:leaderid')
.get((req,res,next)=>{
    Leaders.findById(req.params.leaderid)
    .then((leader)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(leader)
    },(err)=> next(err))
    .catch((err)=> next(err))
})
.post((req,res,next)=>{
    res.statusCode=403
    res.end("The operation POST is not supported in /leaders"+req.params.leaderid)
})
.put((req,res,next)=>{
    Leaders.findOneAndUpdate(req.params.leaderid,{$set:req.body},{new:true})
    .then((leader)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(leader)
    },(err)=> next(err))
    .catch((err)=> next(err))
})
.delete((req,res,next)=>{
    Leaders.findByIdAndDelete(req.params.leaderid)
    .then((resp)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(resp)
    },(err)=> next(err))
    .catch((err)=> next(err))
})
module.exports=leaderRouter