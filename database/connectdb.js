import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Conectado a la DB!!!");
} catch (error) {
  console.log("Error de conexión : " + error);
}
