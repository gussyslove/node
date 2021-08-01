const http=require('http')
const express=require('express')
const morgan=require('morgan')

const dishRouter=require('./routes/dishRouter')
const promoRouter=require('./routes/promoRouter')
const leaderRouter = require('./routes/leaderRouter')

const app=express()

app.use('/dishes',dishRouter)
app.use('/promotions',promoRouter)
app.use('/leaders',leaderRouter)

app.use(morgan('dev'))
app.use(express.static(__dirname+'/public'))

const server=http.createServer(app)

server.listen(5000,'localhost',()=>{
    console.log("Server is running on http://localhost:5000")
})