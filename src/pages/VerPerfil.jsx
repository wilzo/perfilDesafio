import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function VerPerfil() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/usuario")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setUsuario(res.data[0]); // Exibe o primeiro perfil cadastrado
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar dados do usuário:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-100 text-indigo-700 font-semibold">
        Carregando perfil...
      </div>
    );
  }

  if (!usuario) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
        Nenhum perfil encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center py-10">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-indigo-700">
            Visualizar Perfil
          </h1>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6D28D9",
              "&:hover": { backgroundColor: "#5B21B6" },
              textTransform: "none",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
          >
            Voltar
          </Button>
        </div>

        {usuario.imagem && (
          <div className="flex justify-center">
            <img
              src={usuario.imagem}
              alt="Foto do Perfil"
              className="w-32 h-32 rounded-full border-4 border-indigo-300 shadow"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base">
          <div>
            <span className="font-semibold">Nome:</span> {usuario.nome}
          </div>
          <div>
            <span className="font-semibold">Idade:</span> {usuario.idade}
          </div>
          <div>
            <span className="font-semibold">Rua:</span> {usuario.rua}
          </div>
          <div>
            <span className="font-semibold">Bairro:</span> {usuario.bairro}
          </div>
          <div>
            <span className="font-semibold">Estado:</span> {usuario.estado}
          </div>
          <div className="sm:col-span-2">
            <span className="font-semibold">Biografia:</span>
            <p className="mt-1 bg-gray-100 p-3 rounded">{usuario.biografia}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
