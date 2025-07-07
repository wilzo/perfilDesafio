import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Edit, Delete, ArrowBack, Refresh } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListarPerfil = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuario, setEditandoUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/usuario");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }
  };

  const deletarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/usuario/${id}`);
      buscarUsuarios();
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
    }
  };

  const salvarEdicao = async () => {
    try {
      await axios.put(
        `http://localhost:3001/api/usuario/${editandoUsuario.id}`,
        editandoUsuario
      );
      setEditandoUsuario(null);
      buscarUsuarios();
    } catch (err) {
      console.error("Erro ao salvar edição:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
      {/* Título e Ações */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-100 go-900 shadow-sm">
          👥 Lista de Perfis
        </h1>
        <div className="space-x-4">
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
      </div>

      {/* Tabela */}
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 4, overflow: "hidden" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#C7D2FE" }}>
              {["Nome", "Idade", "Rua", "Bairro", "Estado", "Ações"].map(
                (col) => (
                  <TableCell
                    key={col}
                    sx={{ fontWeight: "bold", color: "#1E3A8A" }}
                  >
                    {col}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((usuario, index) => (
              <TableRow
                key={usuario.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#EEF2FF" : "#FFFFFF",
                  transition: "0.2s",
                  "&:hover": { backgroundColor: "#E0E7FF" },
                }}
              >
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.idade}</TableCell>
                <TableCell>{usuario.rua}</TableCell>
                <TableCell>{usuario.bairro}</TableCell>
                <TableCell>{usuario.estado}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        borderRadius: "10px",
                        textTransform: "none",
                        backgroundColor: "#6366F1",
                        "&:hover": { backgroundColor: "#4F46E5" },
                      }}
                      startIcon={<Edit />}
                      onClick={() => setEditandoUsuario(usuario)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      sx={{ borderRadius: "10px", textTransform: "none" }}
                      startIcon={<Delete />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Tem certeza que deseja deletar este usuário?"
                          )
                        ) {
                          deletarUsuario(usuario.id);
                        }
                      }}
                    >
                      Deletar
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: "10px",
                        textTransform: "none",
                        backgroundColor: "#818CF8",
                        "&:hover": { backgroundColor: "#6366F1" },
                      }}
                      startIcon={<VisibilityIcon />}
                      onClick={() => navigate("/ver-perfil")}
                    >
                      Visualizar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={!!editandoUsuario}
        onClose={() => setEditandoUsuario(null)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "16px",
            backgroundColor: "#F3F4F6",
            paddingY: 2,
            paddingX: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#4F46E5",
            textAlign: "center",
          }}
        >
          ✏️ Editar Perfil
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {["nome", "idade", "rua", "bairro", "estado"].map((campo) => (
            <TextField
              key={campo}
              label={campo.charAt(0).toUpperCase() + campo.slice(1)}
              type={campo === "idade" ? "number" : "text"}
              value={editandoUsuario?.[campo] || ""}
              onChange={(e) =>
                setEditandoUsuario({
                  ...editandoUsuario,
                  [campo]: e.target.value,
                })
              }
              fullWidth
              variant="outlined"
            />
          ))}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between", paddingX: 3 }}>
          <Button
            onClick={() => setEditandoUsuario(null)}
            sx={{ textTransform: "none" }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4F46E5",
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#4338CA" },
            }}
            onClick={salvarEdicao}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListarPerfil;
