const empleados = [
    { id:1, nombre:"Jose"}, 
    { id:2, nombre:"Tomas"},
    { id:3, nombre:"Maria"}
]
const salarios = [
    { id:1, sueldo:1000 }, 
    { id:2, sueldo:1200 }
]

const getEmpleado = (id, funcion_callback) => {
    const empleado = empleados.find( emple=>emple.id === id);
    //si existe un empleado que cumpla con la condicion anterior
    if (empleado){
    //aca le pasamos primero un parametro null xq el 1er param de la funcion callback es un error 
        funcion_callback(null,empleado); 
    }else{
        funcion_callback("no existe empleado con id: "+id);
    }
}

//un callback es pasar por parametro una funcion que voy a utilizar
//hacemos la llamada a getEmpleado y definimos que hace la funcion callback
getEmpleado( 4 , (error,empleadito)=> {
    if( error ){
        console.log(error)
    }else{
        console.log(empleadito);
    }
})