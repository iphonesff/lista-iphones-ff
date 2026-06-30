# 📱 FF Imports - Backend API

Backend oficial do catálogo da FF Imports, integrado ao iGest Pro.

## 🚀 Tecnologias

- Node.js
- Express
- Axios
- Dotenv
- Morgan
- CORS

## 📦 Funcionalidades

- ✅ Integração com a API do iGest Pro
- ✅ Listagem de produtos
- ✅ Consulta de produto por ID
- ✅ Busca de produtos
- ✅ Listagem de categorias
- ✅ Dados da empresa
- ✅ Cache em memória
- ✅ Tratamento global de erros
- ✅ API REST

---

## 📂 Estrutura

```
src/
│
├── cache/
├── config/
├── controllers/
├── helpers/
├── mappers/
├── middlewares/
├── routes/
├── services/
├── utils/
│
├── app.js
└── server.js
```

---

## 📌 Endpoints

### Produtos

```
GET /api/produtos
GET /api/produtos/:id
```

### Categorias

```
GET /api/categorias
```

### Empresa

```
GET /api/empresa
```

### Busca

```
GET /api/busca?search=iphone
```

### Health Check

```
GET /api/health
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

IGEST_API_URL=https://backendapp.igestpro.com.br/api/external/v1

IGEST_TOKEN=SEU_TOKEN

IGEST_COMPANY_ID=SEU_COMPANY_ID
```

---

## ▶️ Instalação

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Servidor:

```
http://localhost:3000
```

---

## 📄 Licença

Projeto desenvolvido para uso da FF Imports.

© FF Imports