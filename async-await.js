const empleados = [
    { id:1, nombre:"Jose"}, 
    { id:2, nombre:"Tomas"},
    { id:3, nombre:"Maria"}
]
const salarios = [
    { id:1, sueldo:1000 }, 
    { id:2, sueldo:1200 }
]
const getEmpleado=async(id) =>{
    const empleado = empleados.find( emple=>emple.id === id);
    if (empleado){ return empleado.nombre}
    else{ throw ("no existe empleado con id: "+id)}
}

const getSalario = async(id) => {
    const salario = salarios.find( salario => salario.id === id);
    if (salario){ return (salario.sueldo) }
    else {throw ("no existe sueldo para id: "+id)}
}

const id =3;

//el async transforma una funcion en una funcion que devuelve una promesa
//es una forma mas facil de hacer promesas, por lo q es una forma mas facil de hacer callbacks
const getInfoEmpleado = async(id) =>{
    try{
//el await se usa para esperar el resultado de una promesa (solo dentro de una funcion async se puede usar)
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return ("empleado: "+empleado+" cobra: "+salario);
    }catch(err) {
        throw err;
    }
}

getInfoEmpleado(id)
    .then(mensaje => console.log(mensaje))
    .catch(msj=>console.log(msj))

