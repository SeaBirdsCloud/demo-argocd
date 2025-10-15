# Etapa 1 - Build da aplicação (com Tailwind)
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# instala o framer-motion (usado no QuoteCard)
RUN npm install framer-motion
RUN npm install -D tailwindcss postcss autoprefixer

# Copia o restante do código
COPY . .

# Cria os arquivos de configuração do Tailwind automaticamente, caso não existam
RUN npx tailwindcss init -p || true

# Build de produção
RUN npm run build

# Etapa 2 - Servir com Nginx
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
