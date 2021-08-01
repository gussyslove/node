const express=require('express')
const bodyparser=require('body-parser')

const promoRouter=express.Router()

promoRouter.use(bodyparser.json())

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end("Will send all the promotions to you")
})
.post((req,res,next)=>{
    res.end("Will add the promotions: "+req.body.name
    +" with ditails: "+req.body.description)
})
.put((req,res,next)=>{
    res.statusCode=403
    res.end("The operation PUT is not supported in /promotions")
})
.delete((req,res,next)=>{
    res.end("Deleting all promotions")
})

promoRouter.route('/:promoid')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end("Will GET the promotion "+req.params.promoid+" to you")
})
.post((req,res,next)=>{
    res.statusCode=403
    res.end("The operation POST is not supported in /promotions"+req.params.promoid)
})
.put((req,res,next)=>{
    res.write("updating the promotion "+req.params.promoid)
    res.end("Will update the promotion: "+req.params.name+ " with description: "+req.params.description)
})
.delete((req,res,next)=>{
    res.end("Deleting the promotion: "+req.params.promoid)
})
module.exports=promoRouter