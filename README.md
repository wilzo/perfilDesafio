# 📋 Projeto de Listagem de Perfis

Este projeto é uma aplicação fullstack para cadastro, edição, visualização e listagem de perfis de usuários. Ele foi desenvolvido com React no frontend e Node.js com MySQL no backend, utilizando Axios para requisições e Sequelize para ORM.

---

## 🚀 Tecnologias Utilizadas

### 💻 Frontend (React):
- **React 18**
- **Material UI (MUI)**
- **Axios**
- **React Router DOM** 
- **Tailwind CSS** 

### 🛠 Backend (Node.js):
- **Node.js**
- **Express**
- **Sequelize** 
- **MySQL2** 
- **Dotenv** 
- **Cors**
- **Body-parser**

## 🎯 Funcionalidades

- Criar novo perfil com nome, imagem, biografia e informações pessoais
- Editar perfil existente
- Excluir perfis
- Visualizar dados completos de um perfil
- Listar todos os perfis cadastrados

---

## 🏁 Como executar o projeto

### Pré-requisitos

- Node.js (v18+)
- MySQL
- Git

---

## ⚙️ Configurando o Backend

1. **Clone o repositório:**

git clone https://github.com/wilzo/perfilDesafio.git
cd perfilDesafio


2. **Instale as depêndencias**

npm install
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install axios react-router-dom

3. **Configure o .env**

Crie um arquivo .env com:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=perfilusuario
DB_PORT=3306

4. **Crie o banco de dados no MYSQL**

CREATE DATABASE perfilusuario;

5. **Inicie o servidor no backend e no frontend**

node server.js
npm start

6.**Estrutura do projeto**

perfilDesafio/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
├── README.md
└── .gitignore
