import React, { useEffect, useState } from "react";
import { api } from "../services/api";

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
    api
      .get("/api/usuario")
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "idade") {
      const idadeNum = Number(value);
      // Se idade for negativa ou maior que 130, não atualiza o estado
      if (idadeNum < 0 || idadeNum > 130) {
        return;
      }
    }

    setUsuario({ ...usuario, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    api
      .post("/api/usuario", usuario)
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

          <select
            name="estado"
            value={usuario.estado}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Selecione um estado</option>
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Distrito Federal">Distrito Federal</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piauí</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
          </select>

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
