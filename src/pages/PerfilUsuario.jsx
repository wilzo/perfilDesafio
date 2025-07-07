import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PerfilUsuario() {
  const [usuario, setUsuario] = useState({
    nome: "",
    idade: "",
    rua: "",
    bairro: "",
    estado: "",
    biografia: "",
    imagem: "",
  });

  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/usuario")
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  function handleChange(e) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    axios
      .post("http://localhost:3001/api/usuario", usuario)
      .then(() => setMsg("✅ Dados salvos com sucesso!"))
      .catch(() => setMsg("❌ Erro ao salvar dados."));
  }

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-100 text-indigo-700 font-semibold">
        Carregando...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center py-10">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-indigo-700 text-center">
          Perfil do Usuário
        </h1>

        {usuario.imagem && (
          <div className="flex justify-center">
            <img
              src={usuario.imagem}
              alt="Perfil"
              className="w-32 h-32 rounded-full border-4 border-indigo-300 shadow"
            />
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-sm md:text-base"
        >
          <input
            name="nome"
            placeholder="Nome completo"
            value={usuario.nome}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="number"
            name="idade"
            placeholder="Idade"
            value={usuario.idade}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="rua"
            placeholder="Rua"
            value={usuario.rua}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="bairro"
            placeholder="Bairro"
            value={usuario.bairro}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="estado"
            placeholder="Estado"
            value={usuario.estado}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            name="biografia"
            placeholder="Biografia"
            value={usuario.biografia}
            onChange={handleChange}
            rows={4}
            required
            className="p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            name="imagem"
            placeholder="URL da imagem de perfil"
            value={usuario.imagem}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="p-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Salvar
          </button>
        </form>

        {msg && (
          <p
            className={`text-center font-medium ${
              msg.includes("sucesso") ? "text-green-600" : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}
      </div>
    </div>
  );
}
