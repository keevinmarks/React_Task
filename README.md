# 📝 React Task List com Next.js + Docker

Este é um projeto simples de **Lista de Tarefas (ToDo List)** desenvolvido com **Next.js 14 (App Router)**, React e Typescript. A aplicação permite adicionar, marcar como concluída e excluir tarefas, com uma interface moderna e responsiva.

> 🚀 O projeto está preparado para ser executado em **containers Docker** em ambiente de produção.

---

## 🧩 Funcionalidades

- ✅ Adicionar nova tarefa
- ✅ Marcar/desmarcar tarefa como concluída
- ✅ Excluir tarefa
- ✅ Separação em componentes e tipos
- ✅ Uso de **React Hooks (useState)** e **Tipagem com TypeScript**
- ✅ Estilização com Tailwind CSS
- ✅ Deploy via Docker (com multi-stage build para produção)

---

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── Components/
│   │   │   └── TodoItem.tsx
│   │   └── Types/
│   │       └── Types.ts
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Instalação Local (sem Docker)

### 1. Clonar o repositório

```bash
git clone https://github.com/keevinmarks/React_Task.git
cd React_Task
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o projeto

```bash
npm run dev
```

> Acesse em: `http://localhost:3000`

---

## 🐳 Rodando com Docker

### 1. Construir e subir os containers

```bash
docker-compose up --build
```

> Após isso, o app estará disponível em: `http://localhost:3000`

### 2. Parar os containers

```bash
docker-compose down
```

---

## 📦 Scripts úteis

| Comando              | Descrição                           |
|----------------------|--------------------------------------|
| `npm run dev`        | Inicia o servidor em modo dev        |
| `npm run build`      | Compila o projeto para produção      |
| `npm start`          | Inicia o servidor em modo produção   |

---

## 🛠 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 🙋‍♂️ Autor

**Kevin Marques**  
📫 [@keevinmarks](https://github.com/keevinmarks)
