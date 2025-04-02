FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["sh", "-c", "NODE_ENV=production VUE_APP_API_URL=http://localhost:8081 npm run serve"]