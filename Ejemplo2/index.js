var rectangulo=require("./rectangulo");
function resolver(x,y){
    console.log("Resolviendo rectangulo para x="+x+" y="+y)
    rectangulo(x,y,(err,rect)=>{
        if(err){
            console.log("ERROR:",err.message);
        }else{
            console.log("El perimetro del rectangulo es "+rect.perimetro()+" y el area es "+rect.area());
        }
    });
    console.log("ejecucion despues de taka");
}
resolver(4,5);