const fs = require('fs');

multiplicar= async(argv) =>{
    base=argv.base;
    show=argv.listar;
    until=argv.hasta;
    try{
        let texto = "";
        for (i=1; i<=until; i++){
            texto= texto + (base+" x "+i+" = "+base*i)+ "\n";
        }
        if(show){
            console.log(texto)
        }
        fs.writeFileSync("./output/tabla-"+base+".txt" , texto);
        return("Tabla del "+base+" creada")
    }catch(err){
        throw(err);
    }
}

//de esta forma exporto
module.exports ={
//  nombre con el que quiero q se vea afuera : nombre de la funcion a exportar
    multiplicar:multiplicar
}