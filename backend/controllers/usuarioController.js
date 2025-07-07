const Usuario = require("../models/usuario");

exports.salvarUsuario = async (req, res) => {
  console.log("Dados recebidos no POST:", req.body);
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json({ mensagem: "Usuário salvo com sucesso!", usuario });
  } catch (err) {
    console.error("Erro ao salvar usuário:", err);
    res.status(500).json({ erro: err.message });
  }
};

exports.getUsuario = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    console.error("Erro ao buscar usuários:", err);
    res.status(500).json({ erro: err.message });
  }
};

exports.atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ erro: "Não encontrado" });
    await usuario.update(req.body);
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.deletarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ erro: "Não encontrado" });
    await usuario.destroy();
    res.status(204).send(); // sucesso sem conteúdo
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
