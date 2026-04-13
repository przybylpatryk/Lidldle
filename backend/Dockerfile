FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "\
  npx prisma db push && \
  npx tsx fixtures/seed.ts && \
  npx tsx src/index.ts \
"]