FROM node:10.15.3-alpine
RUN mkdir /usr/web
WORKDIR /usr/web
COPY package.json .
RUN npm install
COPY . .

EXPOSE 8080