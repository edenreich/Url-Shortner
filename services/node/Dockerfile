FROM node:alpine

LABEL maintainer="Eden Reich <eden.reich@gmail.com>"

WORKDIR /app

COPY package.json .
COPY config ./config
COPY src ./src

RUN npm install --silent

VOLUME /app/src

EXPOSE 3000

CMD [ "npm", "run", "watch" ]