const empleados = [
    { id:1, nombre:"Jose"}, 
    { id:2, nombre:"Tomas"},
    { id:3, nombre:"Maria"}
]
const salarios = [
    { id:1, sueldo:1000 }, 
    { id:2, sueldo:1200 }
]

const id =2;

const getEmpleado = (id, funcion_callback) => {
    const empleado = empleados.find( emple=>emple.id === id);
    if (empleado){
        funcion_callback(null,empleado.nombre); 
    }else{
        funcion_callback("no existe empleado con id: "+id);
    }
}

const getSalario = (id, funcion_callback) => {
    const salario = salarios.find( salario=>salario.id === id);
    if (salario){
        funcion_callback(null,salario.sueldo); 
    }else{
        funcion_callback("no existe salario  para persona con id: "+id);
    }
}

getEmpleado( id , (error,empleadito)=> {
    if( error ){
        console.log(error)
    }else{ //si existe el empleado
        getSalario( id,(e,sueldo) => {
            if (e){
                console.log(e)
            }else{
                console.log("el empleado",empleadito,"tiene un sueldo de",sueldo);
            }
        })
    }
})