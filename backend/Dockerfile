FROM node:19-alpine
COPY package*.json /usr/app/
COPY *.js /usr/app/
WORKDIR /usr/app
RUN npm install
CMD ["node", "index.js"]




