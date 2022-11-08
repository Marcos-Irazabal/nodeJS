const mongoose = require('mongoose');

const dbConnect=async()=> {

  try {

    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("database online");
  } catch (error) {
    console.log(error);
    throw new Error("error con la coneccion a la Base de Datos")
  }
}

module.exports={
  dbConnect
}