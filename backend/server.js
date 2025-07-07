const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/usuario");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

console.log(process.env.PORT);

app.use(cors());
app.use(express.json());

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/api", usuarioRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Banco sincronizado com sucesso.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao sincronizar o banco:", err);
  });
