const http=require('http')
const fs=require('fs')
const path=require('path')
const server=http.createServer((req,res)=>{
    console.log(req.headers);
    if(req.method=='GET'){
        var fileurl;
        if (req.url=="/") filepath="/index.html";
        else filepath=req.url;
    }else{
        res.statusCode=404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<html><body><h1>Error 404 no supported</h1></body></html>');
    }
    var filepath=path.resolve('./'+fileurl);
    const fileext=path.extname(filepath);
    if (fileext=='.html'){
        fs.exist(filepath,(exist)=>{
            if (!exist){
                res.statusCode=404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<html><body><h1>Error 404</h1></body></html>');
            }
            res.statusCode=200;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filepath).pipe(res);
        });
    }else{
        res.statusCode=404;
                res.setHeader('Content-Type', 'text/html');
                res.end('<html><body><h1>Error 404 it isnt a html</h1></body></html>');
    }

});

server.listen(3000,'localhost',()=>{
    console.log("Server on port 3000");
});