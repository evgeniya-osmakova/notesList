FROM node:13

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . ./

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
