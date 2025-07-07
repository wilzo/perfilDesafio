const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("perfilusuario", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Conectado ao MySQL com Sequelize!"))
  .catch((err) => console.error("Erro na conexão com Sequelize:", err));

module.exports = sequelize;
 