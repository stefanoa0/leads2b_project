FROM node:10.15.3-alpine
RUN mkdir /usr/app
WORKDIR  /usr/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]