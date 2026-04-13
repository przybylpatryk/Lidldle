import { prisma } from "../lib/prisma";
import * as path from "path";
import * as fs from "fs";

async function main() {
    await prisma.product_image.deleteMany();
    await prisma.daily_product.deleteMany();
    await prisma.daily_image.deleteMany();

    await prisma.product.deleteMany();

    const fixturesPath = path.join(process.cwd(), "fixtures", "products.json");
    const products = JSON.parse(fs.readFileSync(fixturesPath, "utf-8"));

    for (const p of products) {
        const createdProduct = await prisma.product.create({
            data: {
                name: p.name,
                brand: p.brand,
                category: p.category,
                weight: p.weight,
                price: p.price,
            },
        });

        await prisma.product_image.create({
            data: {
                product_id: createdProduct.id,
                image_url: p.imageUrl,
            },
        });
    }

    console.log("Seed done");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());