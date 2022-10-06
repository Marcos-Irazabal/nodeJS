const fs = require('fs');

multiplicar= async(n) =>{
    try{
        let texto = "";
        for (i=1; i<=10; i++){
            texto= texto + (n+" x "+i+" = "+n*i)+ "\n";
        }
        console.log(texto)
        fs.writeFileSync("tabla-"+n+".txt" , texto);
        return("Tabla del "+n+" creada")
    }catch(err){
        throw(err);
    }
}

//de esta forma exporto
module.exports ={
//  nombre con el que quiero q se vea afuera : nombre de la funcion a exportar
    multiplicar:multiplicar
}