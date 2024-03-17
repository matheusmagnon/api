
# Use a imagem Node.js como base
FROM node:21

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do npm
RUN npm install

# Copie todo o código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta 3000, que é a porta em que o servidor NestJS será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
# CMD ["/bin/bash", "./entrypoint.sh"]
# CMD ["npm", "run", "dev"]