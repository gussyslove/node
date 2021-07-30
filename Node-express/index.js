const express=require('express');
const http=require('http');
const morgan=require('morgan')
const bodyparser=require('body-parser')
const dishRouter=require("./routes/dishRouter")
const app=express();
app.use(morgan('dev'));
app.use(bodyparser.json);

app.use('/dishes',dishRouter)
app.get('/dishes/:dishid',(req,res,next)=>{
    res.end('will send the dish '+req.params.dishid)
});
app.post('/dishes/:dishid',(req,res,next)=>{
    statusCode=403;
    res.end('this operation is not supported '+req.params.dishid);
});
app.put('/dishes/:dishid',(req,res,next)=>{
    res.end('will update the dish '+req.params.dishid);
});
app.delete('/dishes/:dishid',(req,res,next)=>{
    res.end("will delete the dish "+req.params.dishid);
});
app.use(express.static(__dirname+'/public'));
/*app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h1>Hellow World</h1></body></html>");
});*/

const server=http.createServer(app);

server.listen("3000","localhost",()=>{
    console.log("Server is on http://localhost:3000")
});