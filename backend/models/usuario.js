const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define(
  "Usuario",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biografia: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = Usuario;
