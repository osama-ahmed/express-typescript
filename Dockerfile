FROM node:alpine
WORKDIR /src
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npx tsc
CMD ["node", "./dist/index.js"]
