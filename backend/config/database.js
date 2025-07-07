const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: "mysql",
  }
);
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.PORT);
sequelize
  .authenticate()
  .then(() => console.log("Conectado ao MySQL com Sequelize!"))
  .catch((err) => console.error("Erro na conexão com Sequelize:", err));

module.exports = sequelize;
