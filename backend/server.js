const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/usuario"); // importa a instancia Sequelize configurada

const app = express();
const PORT = 3001;

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
