const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/usuario"); // importa a instancia Sequelize configuradaco
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

app.use(cors());
app.use(express.json());

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/api", usuarioRoutes);

// Sincroniza o banco e só depois inicia o servidor
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
