// getting-started.js
const mongoose = require('mongoose');

module.exports={
    dbConnect
}

const dbConnect=async()=> {

  try {

    await mongoose.connect(process.env.MONGODB_CNN);

  } catch (error) {
    console.log(error);
    throw new Error("error con la coneccion a la Base de Datos")
  }
}