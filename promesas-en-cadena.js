const empleados = [
    { id:1, nombre:"Jose"}, 
    { id:2, nombre:"Tomas"},
    { id:3, nombre:"Maria"}
]
const salarios = [
    { id:1, sueldo:1000 }, 
    { id:2, sueldo:1200 }
]

const id =5;

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

//de esta forma encadeno promesas, con un return y la llamada a otra promesa
//pero no puedo mandar "empleado" al then de la 2da promesa, por eso creo la variable emple
let emple
getEmpleado(id)
    .then(empleado => {
        emple=empleado
        return getSalario(id)})
    .then(salario =>{ console.log("el empleado",emple,"tiene un sueldo de",salario)})
    .catch(e=>console.log(e));