import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

let dbF;
try {
  const data = fs.readFileSync("./dbF.json", "utf8");
  dbF = JSON.parse(data);
} catch (error) {
  console.error("Error al leer el archivo JSON:", error);
}

app.get("/", (req, res) => {
  res.send("¡Hola, este es un servidor de prueba!");
});

app.get("/api/menu", (req, res) => {
  res.json(dbF);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
