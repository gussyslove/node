const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const Promotions=require('../models/promotions')

const promoRouter=express.Router()

promoRouter.use(bodyparser.json())

promoRouter.route('/')
.get((req,res,next)=>{
    Promotions.find({})
    .then((promotions)=>{
        res.statusCode=200
        res.setHeader('Content-Type','application/json')
        res.json(promotions)
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    Promotions.create(req.body)
    .then((promotion)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(promotion)
    },(err)=> next(err))
    .catch((err)=>next(err))
})
.put((req,res,next)=>{
    res.statusCode=403
    res.end("The operation PUT is not supported in /promotions")
})
.delete((req,res,next)=>{
    Promotions.remove({})
    .then((resp)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(resp)
    },(err)=>next(err))
    .catch((err)=>next(err))
})

promoRouter.route('/:promoid')
.get((req,res,next)=>{
    Promotions.findById(req.params.promoid)
    .then((promotion)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(promotion)
    },(err)=> next(err))
    .catch((err)=> next(err))
})
.post((req,res,next)=>{
    res.statusCode=403
    res.end("The operation POST is not supported in /promotions"+req.params.promoid)
})
.put((req,res,next)=>{
    Promotions.findOneAndUpdate(req.params.promoid,{$set:req.body},{new:true})
    .then((promotion)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(promotion)
    },(err)=> next(err))
    .catch((err)=> next(err))
})
.delete((req,res,next)=>{
    Promotions.findByIdAndDelete(req.params.promoid)
    .then((resp)=>{
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.json(resp)
    },(err)=> next(err))
    .catch((err)=> next(err))
})
module.exports=promoRouter