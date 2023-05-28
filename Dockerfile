FROM node:16-alpine

#instalamos ts-node de forma global para correr nuestra app
RUN npm install -g ts-node

# definimos el directorio donde va a existir nuestra app
WORKDIR /usr/src/app

# copiamos nuestros packages hacia el directorio de trabajo
COPY package*.json .

# COPIAMOS TODO EL PROYECTO hacia el directorio de trabajo
COPY . .

RUN npm install

ENV NODE_ENV=production

EXPOSE 6000

CMD [ "npm", "run", "start:prod" ]