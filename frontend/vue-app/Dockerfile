FROM node:lts-alpine
WORKDIR /app
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "http-server", "dist", "-p", "5173" ]


