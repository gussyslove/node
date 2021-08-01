const express=require('express')
const bodyparser=require('body-parser')

const dishRouter=express.Router()

dishRouter.use(bodyparser.json())

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end("Will send all the dishes to you")
})
.post((req,res,next)=>{
    res.end("Will add the dish: "+req.body.name
    +" with ditails: "+req.body.description)
})
.put((req,res,next)=>{
    res.statusCode=403
    res.end("The operation PUT is not supported in /dishes")
})
.delete((req,res,next)=>{
    res.end("Deleting all dishes")
})

dishRouter.route('/:dishid')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end("Will GET the dish "+req.params.dishid+" to you")
})
.post((req,res,next)=>{
    res.statusCode=403
    res.end("The operation POST is not supported in /dishes"+req.params.dishid)
})
.put((req,res,next)=>{
    res.write("updating the dish "+req.params.dishid)
    res.end("Will update the dish: "+req.params.name+ " with description: "+req.params.description)
})
.delete((req,res,next)=>{
    res.end("Deleting the dish: "+req.params.dishid)
})
module.exports=dishRouter