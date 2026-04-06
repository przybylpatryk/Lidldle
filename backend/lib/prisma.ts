import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST ?? 'db',
    port: Number(process.env.DATABASE_PORT) || 3306,
    user: process.env.DATABASE_USER ?? 'root',
    password: process.env.DATABASE_PASSWORD ?? '',
    database: process.env.DATABASE_NAME ?? 'lidldle',
    connectionLimit: 5,
    allowPublicKeyRetrieval: true,
});

const prisma = new PrismaClient({ adapter });

export { prisma };