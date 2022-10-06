const {multiplicar} = require("./helpers/multiplicacion");
console.clear();
const base = 10
multiplicar(base)
    .then(res => {console.log(res)})
    .catch(err =>{console.log(err)})
