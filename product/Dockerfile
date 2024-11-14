FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY pages/ pages/
COPY static/ static/

EXPOSE 9001
CMD ["node", "product_service.js"]
