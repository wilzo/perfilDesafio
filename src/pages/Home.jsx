import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Desafio Perfil
        </h1>

        <button
          onClick={() => navigate("/perfil")}
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl mb-4 transition"
        >
          Criar Perfil
        </button>

        <button
          onClick={() => navigate("/lista")}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Listar Perfis
        </button>
      </div>
    </div>
  );
};

export default Home;
