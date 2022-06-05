// me conecto a mongo a traves de mongoose
// mongoose tiene un metodo asincronico connect que recibe la uri de la base en mongo.

// El objeto mongoose trae metodos para realizar las distintas acciones contra la base

import mongoose from "mongoose";

/*
// puedo usar await dentro de node sin estar dentro de una funcion async
try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Conectado a la DB!!!");
  } catch (error) {
    console.log("Error de conexión : " + error);
  }
*/

export const conectarBase = async (uriMongo) => {
  try {
    await mongoose.connect(uriMongo);
    console.log("Conectado a la DB!!!");
  } catch (error) {
    console.log("Error de conexión : " + error);
  }
};

//export { conectarBase };
