FROM node:14.19.0 AS development

WORKDIR /app
COPY package.json .
RUN npm install 

COPY ./dist ./src
CMD ["node", "src/main.js"]