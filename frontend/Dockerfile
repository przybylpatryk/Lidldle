FROM node:22-bullseye

WORKDIR /app

COPY package.json ./

ENV npm_config_optional=true
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]