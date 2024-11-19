# ============================================
# 🔧 CONFIGURAÇÕES DO PROJETO DE INVENTÁRIO
# ============================================

# Descrição do Projeto:
# Este projeto é um sistema de gestão de inventário e pedidos,
# desenvolvido utilizando Next.js para o frontend e backend,
# Prisma ORM para gerenciar o banco de dados SQLite,
# e diversas bibliotecas como react-hook-form, TailwindCSS, e mais.

# ============================================
# 🚀 AMBIENTE DE DESENVOLVIMENTO
# ============================================

# URL base do frontend (Next.js em desenvolvimento)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# URL base do backend
API_BASE_URL=http://localhost:3001

# Banco de dados SQLite
DATABASE_URL="file:./database.sqlite"

# Chave secreta para autenticação com JWT
JWT_SECRET="sua-chave-secreta-aqui"

# ============================================
# 🌐 CONFIGURAÇÕES DE CORS
# ============================================
CORS_ORIGIN=http://localhost:3000
CORS_METHODS=GET,POST,PUT,DELETE

# ============================================
# 🗄️ CONFIGURAÇÃO DO PRISMA
# ============================================
# Comandos do Prisma para configurar o ambiente:

# 1. Inicializar o Prisma (caso ainda não tenha o esquema):
#    npx prisma init

# 2. Aplicar migrações no banco de dados:
#    npx prisma migrate dev --name init
#    (Substitua 'init' pelo nome da migração, se necessário)

# 3. Rodar o Prisma Studio (Interface para visualização e manipulação dos dados):
#    npx prisma studio

# 4. Gerar o cliente Prisma após alteração no schema:
#    npx prisma generate

# 5. Resetar o banco de dados (cuidado, isso apaga tudo!):
#    npx prisma migrate reset

# 6. Verificar a integridade do schema e do banco:
#    npx prisma validate

# 7. Sincronizar sem migrações (apenas em casos específicos):
#    npx prisma db push

# ============================================
# ✅ NOTAS IMPORTANTES
# ============================================
# 1. SQLite não requer instalação adicional no sistema.
# 2. Este arquivo `.env` deve ser mantido em sigilo para evitar
#    exposição de chaves de autenticação e configurações sensíveis.
# 3. Lembre-se de rodar `npm install` para instalar todas as dependências.
# 4. Sempre use `npx prisma generate` após alterar o schema do Prisma.