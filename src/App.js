import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PerfilUsuario from "./pages/PerfilUsuario";
import ListarPerfil from "./pages/ListarPerfil";
import VerPerfil from "./pages/VerPerfil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/lista" element={<ListarPerfil />} />
        <Route path="/ver-perfil" element={<VerPerfil />} />
      </Routes>
    </Router>
  );
}

export default App;
