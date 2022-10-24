const {multiplicar} = require("./helpers/multiplicacion");
const {argv}=require("./config/yargsConfig.js")
console.clear();

multiplicar(argv)
    .then(res => {console.log(res)})
    .catch(err =>{console.log(err)})
