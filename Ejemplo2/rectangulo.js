module.exports=(x,y,callback)=>{
    if (x<=0 || y<=0){
        setTimeout(()=>callback(new Error("Eso no tiene sentido x o y son menores a 0"),null)
        ,2000)
    }else{
        setTimeout(()=>callback(null,{
            perimetro:()=>(2*(x+y)),
            area:()=>(x*y)
        }),2000)
    }
}

