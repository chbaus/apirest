import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
const app = express();
const PORT = process.env.PORT ||  3000;



app.get("/", (req, res) => {
  res.send({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
