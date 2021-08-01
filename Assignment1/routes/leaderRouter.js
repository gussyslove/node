const express=require('express')
const bodyparser=require('body-parser')

const leaderRouter=express.Router()

leaderRouter.use(bodyparser.json())

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end("Will send all the leaders to you")
})
.post((req,res,next)=>{
    res.end("Will add the leaders: "+req.body.name
    +" with ditails: "+req.body.description)
})
.put((req,res,next)=>{
    res.statusCode=403
    res.end("The operation PUT is not supported in /leaders")
})
.delete((req,res,next)=>{
    res.end("Deleting all leaders")
})

leaderRouter.route('/:leaderid')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end("Will GET the leader "+req.params.leaderid+" to you")
})
.post((req,res,next)=>{
    res.statusCode=403
    res.end("The operation POST is not supported in /leaders"+req.params.leaderid)
})
.put((req,res,next)=>{
    res.write("updating the leader"+req.params.leaderid)
    res.end("Will update the leader: "+req.params.name+ " with description: "+req.params.description)
})
.delete((req,res,next)=>{
    res.end("Deleting the leader: "+req.params.leaderid)
})
module.exports=leaderRouter