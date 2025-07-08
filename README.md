📋 Projeto de Listagem de Perfis
Este projeto é uma aplicação Fullstack para cadastro, edição, visualização e listagem de perfis de usuários.
Ele foi desenvolvido com React no frontend e Node.js + MySQL no backend, utilizando Axios para requisições HTTP e Sequelize como ORM.

🔗 Acesse o projeto online:
👉 https://perfil-desafio.vercel.app/

🚀 O frontend está hospedado na Vercel, enquanto o backend (Node.js + MySQL) está hospedado na Railway.

🚀 Tecnologias Utilizadas
💻 Frontend (React):
React 18

Material UI (MUI)

Axios

React Router DOM

Tailwind CSS

🛠 Backend (Node.js):
Node.js

Express

Sequelize

MySQL2

Dotenv

CORS

Body-parser

🎯 Funcionalidades
✅ Criar novo perfil com nome, imagem, biografia e informações pessoais

✅ Editar perfil existente

✅ Excluir perfis

✅ Visualizar dados completos de um perfil

✅ Listar todos os perfis cadastrados

🏁 Como executar o projeto localmente
✅ Pré-requisitos
Node.js (v18+)

MySQL

Git

⚙️ Configurando o Backend
Clone o repositório:

git clone https://github.com/wilzo/perfilDesafio.git
cd perfilDesafio

Instale as dependências:


npm install
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install axios react-router-dom
Configure o arquivo .env:


Crie o banco de dados no MySQL:

CREATE DATABASE perfilusuario;

Inicie os servidores:

# Backend
cd backend
node server.js

# Frontend
cd..
cd frontend
npm start
