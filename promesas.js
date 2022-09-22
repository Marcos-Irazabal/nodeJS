const empleados = [
    { id:1, nombre:"Jose"}, 
    { id:2, nombre:"Tomas"},
    { id:3, nombre:"Maria"}
]
const salarios = [
    { id:1, sueldo:1000 }, 
    { id:2, sueldo:1200 }
]

const id =1;

const getEmpleado = (id) => {
    return new Promise( (resolve,reject) =>{
        const empleado = empleados.find( emple=>emple.id === id);
        (empleado) ? resolve(empleado.nombre) : reject ("no existe empleado con id: "+id);
    })
}

const getSalario = (id) => {
    return new Promise( (resolve,reject) =>{
        const salario = salarios.find( salario => salario.id === id);
        (salario) ? resolve(salario.sueldo) : reject ("no existe sueldo para id: "+id);
    })
}

getEmpleado(id)
    .then(e => console.log(e))
    .catch(err=>console.log(err));

console.log("-------------------------")

getSalario(id)
    .then(e => console.log(e))
    .catch(err=>console.log(err));

