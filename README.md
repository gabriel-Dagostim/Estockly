# 📦 Sistema de Gestão de Inventário e Pedidos

Um sistema completo para gerenciar produtos, pedidos, clientes e fornecedores, com um painel administrativo robusto e interfaces modernas.

---

## ✨ Landing Pages

A Landing Page foi desenvolvida utilizando **Next.js** com rotas dinâmicas para navegação fluida. Ela possui as seguintes seções:

- 🏠 **Home**
- 💡 **Funcionalidades**
- 💵 **Preços**
- 📖 **Sobre**
- 📞 **Contato**

### Visualização das Telas da Landing Page:

#### Tela Inicial Completa:
![Landing Page](https://i.imgur.com/4wjXZ7H.png)
![Landing Page 2](https://i.imgur.com/ERHieq7.png)
![Landing Page 3](https://i.imgur.com/5qaDVWo.png)

#### Página de Preços:
![Página de Preços](https://i.imgur.com/1y8sERB.png)

#### Página de Contato:
![Página de Contato](https://i.imgur.com/22ToxVz.png)

---

## 🔐 Sistema de Login

### Tela de Login do Administrador
![Login de Admin](https://i.imgur.com/lOFe6kJ.png)

O sistema de login utiliza **middleware** para autenticação de rotas e **JWT** (JSON Web Tokens) para proteger as credenciais dos usuários.

---

## ⚙️ Painel de Administração

### Página Principal do Painel
![Painel de Admin](https://i.imgur.com/7RkFvkd.png)

O painel inclui **CRUDs completos** para gerenciamento de:

- Produtos
- Clientes
- Fornecedores
- Pedidos
- Relatórios

### CRUD de Clientes
#### Listagem de Clientes
![Lista de Clientes](https://i.imgur.com/T68vCVu.png)

#### Adicionar Cliente
![Adicionar Cliente](https://i.imgur.com/T4VgNZL.png)

CRUD completo disponível para todas as opções no painel!

---

## 🛠️ Tecnologias Usadas

### Tecnologias Principais

| Tecnologia                                                                 | Descrição                                                      |
|---------------------------------------------------------------------------|----------------------------------------------------------------|
| ![JavaScript](https://img.icons8.com/color/48/000000/javascript.png) **JavaScript** | Linguagem principal para toda a aplicação.                   |
| ![CSS](https://img.icons8.com/color/48/000000/css3.png) **CSS**            | Estilização de páginas para uma experiência visual moderna.   |
| ![HTML](https://img.icons8.com/color/48/000000/html-5.png) **HTML**       | Estruturação das páginas da aplicação.                        |
| ![React](https://img.icons8.com/color/48/000000/react-native.png) **React**| Biblioteca para criação de interfaces dinâmicas e responsivas.|
| ![SQLite](https://img.icons8.com/color/48/000000/sql.png) **SQLite**       | Banco de dados leve e rápido para persistência de dados.      |
| ![Next.js](https://img.icons8.com/color/48/000000/nextjs.png) **Next.js** | Framework utilizado para o frontend e backend da aplicação.   |

---

### ⚙️ **Node.js** com os seguintes módulos importantes:

| Módulo              | Descrição                                          |
|---------------------|--------------------------------------------------|
| **Prisma**          | ORM para interação com o banco de dados SQLite. |
| **React Hook Form** | Gerenciamento de formulários eficiente.         |
| **TailwindCSS**     | Framework para estilização rápida e moderna.    |
| **JWT**             | Autenticação segura utilizando tokens.          |
| **Lottie React**    | Animações para páginas e interações.            |
| **HTML2Canvas**     | Captura de elementos HTML como imagens.         |
| **JS PDF**          | Geração de relatórios e exportação em PDF.      |

---

## ⚡️ Instalação e Configuração

### Pré-requisitos:
- Node.js (versão mais recente).
- Gerenciador de pacotes (`npm` ou `yarn`).

---

### 📥 Clonando o Repositório:
Para clonar o repositório, execute os comandos abaixo:

**`git clone https://github.com/gabriel-Dagostim/Estockly`**

**`cd seu-repositorio`**

---

### 📦 Instalando as Dependências:
Instale todas as dependências necessárias com o comando:

**`npm install`**

---

## ⚙️ Configurando as Variáveis de Ambiente:
Crie um arquivo `.env` na raiz do projeto e adicione as variáveis abaixo:

```env
DATABASE_URL="file:./database.sqlite"
JWT_SECRET="sua-chave-secreta-aqui"

```

---

## ⚙️ Configurando o Prisma

Siga os passos abaixo para configurar o banco de dados e preparar as tabelas:

1. **Realize a migração do banco de dados**:  
   Este comando criará as tabelas no banco com base no esquema definido:  
   **`npx prisma migrate dev --name init`**

2. **Gere os arquivos do cliente Prisma**:  
   Isto irá gerar o cliente Prisma para ser usado na aplicação:  
   **`npx prisma generate`**

3. **Confirme a configuração do banco de dados**:  
   Este comando sincroniza o esquema com o banco de dados:  
   **`npx prisma db push`**

4. **Acesse os dados em uma interface visual (opcional)**:  
   Para visualizar e editar os dados do banco de forma gráfica, use:  
   **`npx prisma studio`**

---

## 🚀 Rodando o Servidor

Para iniciar o servidor de desenvolvimento e testar o sistema localmente, execute:

**`npm run dev`**

Após iniciar o servidor, acesse a aplicação no navegador em:  
[http://localhost:3000](http://localhost:3000)

---


## 📜 Licença
Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 📞 Dúvidas ou Sugestões?

Entre em contato através dos seguintes canais:

[![Site](https://img.icons8.com/ios/50/000000/domain.png)](https://www.gabrieldagostim.com) **[Site Oficial](https://www.gabrieldagostim.com)**  
[![Instagram](https://img.icons8.com/color/48/000000/instagram-new--v1.png)](https://instagram.com/gabriel_dagostim) **[Instagram](https://instagram.com/gabriel_dagostim)**
