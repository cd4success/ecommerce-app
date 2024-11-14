FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY pages/ pages/

EXPOSE 9003
CMD ["node", "order_service.js"]
