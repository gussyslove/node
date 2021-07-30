const express=require('express');
const http=require('http');
const morgan=require('morgan')

const app=express();
app.use(morgan('dev'));

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