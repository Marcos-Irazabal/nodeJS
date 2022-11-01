import axios from 'axios';
export {Busqueda};

class Busqueda{

    historial=["Buenos Aires","La Plata","Madrid"]
    constructor(){

    }

    async searchCity(city =""){
        const response =await axios.get("https://reqres.in/api/users?page=2")
        console.log(response.data)
    }
    
}