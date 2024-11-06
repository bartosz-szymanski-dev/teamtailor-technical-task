FROM node:lts AS build

WORKDIR /app

COPY *.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
