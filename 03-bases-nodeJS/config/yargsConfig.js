//en argv tengo los parametros que me llegan por consola
const argv = require("yargs")
                    .option("base",{
                        alias: "b",
                        type: "number",
                        demandOption: true
                    })
                    .option("hasta",{
                        alias: "h",
                        type: "number",
                        demandOption: false,
                        default: 10
                    })
                    .option("listar",{
                        alias:"l",
                        type: "boolean",
                        demandOption: false,
                        default: false
                    })
                    .check( argv =>{
                        if (isNaN(argv.base) || (isNaN(argv.hasta))){
                            throw "la base debe ser un numero"
                        }else{
                            return true;
                        }
                    })
                    .argv;

//de esta forma exporto
module.exports ={
    //  nombre con el que quiero q se vea afuera : nombre de la funcion a exportar
    argv:argv
    }