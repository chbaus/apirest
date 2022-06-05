import "dotenv/config";
//import "./database/connectdb.js";
import { conectarBase } from "./database/connectdb.js";
import authRoute from "./routes/auth.route.js";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

//conectarBase(process.env.URI_MONGO);

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
