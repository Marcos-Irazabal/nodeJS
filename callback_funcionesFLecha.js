/*una funcion flecha es otra forma de escribir una funcion
si tengo:

funcion(param1:number, param2:number){
    console.log(param1+param2);
}

es lo mismo que

const funcion = ( param1 , param2 ) => {console.log( param1 + param2 ) }

*/

//un callback es pasar por parametro una funcion que voy a utilizar

const imprimirNumeroConCallback=( id , callback ) => {
    callback(id);
} 

imprimirNumeroConCallback( 50 , (num) => {let num2=num+2 ; console.log(num2)})