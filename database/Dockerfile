FROM node:21.5.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD [ "npm", "start" ]