# -----------------------------------------------------------
# 📦 Projeto: Sistema de Gestão de Inventário e Pedidos
# -----------------------------------------------------------
# Este é um sistema para gerenciar inventário e pedidos, construído com:
# - Frontend e backend em Next.js
# - Prisma ORM e banco de dados SQLite
# - Bibliotecas adicionais como react-hook-form, TailwindCSS e outras
# -----------------------------------------------------------

# 🌐 Configuração do Ambiente

NEXT_PUBLIC_BASE_URL=http://localhost:3000     # URL do Frontend
API_BASE_URL=http://localhost:3001             # URL do Backend

# 🗄️ Banco de Dados
DATABASE_URL="file:./database.sqlite"          # Caminho do SQLite

# 🔐 Autenticação com JWT
JWT_SECRET="sua-chave-secreta-aqui"            # Chave secreta para JWT

# 🌍 CORS (Cross-Origin Resource Sharing)
CORS_ORIGIN=http://localhost:3000              # Origem permitida
CORS_METHODS=GET,POST,PUT,DELETE               # Métodos permitidos

# -----------------------------------------------------------
# 🔧 Comandos do Prisma
# -----------------------------------------------------------
# Aqui estão os principais comandos para configurar e gerenciar o Prisma:

| Comando                         | Descrição                                                     |
|---------------------------------|---------------------------------------------------------------|
| `npx prisma init`               | Inicializa o Prisma no projeto, criando o `schema.prisma`     |
| `npx prisma migrate dev --name <nome>` | Aplica migrações ao banco de dados                      |
| `npx prisma studio`             | Abre o Prisma Studio, interface para visualizar e manipular dados |
| `npx prisma generate`           | Gera o cliente Prisma após alterações no schema               |
| `npx prisma migrate reset`      | Reseta o banco de dados e reaplica migrações                 |
| `npx prisma validate`           | Valida a integridade do schema e do banco de dados            |
| `npx prisma db push`            | Sincroniza o schema com o banco, sem criar migrações (apenas para dev) |

# -----------------------------------------------------------
# ⚠️ Notas Importantes
# -----------------------------------------------------------
# 1️⃣ SQLite funciona sem instalação extra.
# 2️⃣ Mantenha este arquivo `.env` privado para proteger dados sensíveis.
# 3️⃣ Rode `npm install` para instalar todas as dependências.
# 4️⃣ Sempre execute `npx prisma generate` após modificar o schema do Prisma.

# -----------------------------------------------------------
