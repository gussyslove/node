var rectangulo={
    perimetro:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
};

function resolver(x,y){
    console.log("Resolviendo rectangulo para x="+x+" y="+y)
    if (x<=0 || y<=0){
        console.log("Eso no tiene sentido x o y son menores a 0")
    }else{
        console.log("El perimetro del rectangulo es "+rectangulo.perimetro(x,y)+" y el area es "+rectangulo.area(x,y))
    }
}

resolver(0,5);
resolver(1,2);