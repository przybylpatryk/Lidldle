import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { ProductBody } from '../types';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany();
        const images = await prisma.product_image.findMany();

        const imageMap = new Map(
            images.map(img => [img.product_id, img.image_url])
        );

        const productsWithImages = products.map(p => ({
            ...p,
            imageUrl: imageMap.get(p.id) || null
        }));

        res.json(productsWithImages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się pobrać produktów' });
    }
};

export const getProductsBySearch = async (req: Request, res: Response) => {
    try{
        const {search} = req.query;

        if (!search ||typeof search !== 'string') {
            return res.status(400).json({ error: 'Wyszukanie jest wymagane typu string' });
        }

        const products = await prisma.product.findMany({
            where: {
                name:{
                    startsWith: search,
                },
            },
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: 'asc',
            }
        });

        res.json(products);
    }catch(error) {
        console.error(error);
        res.status(500).json({error:'Nie udało się pobrać produktów'});
    }

}

export const getRandomProduct = async (req: Request, res: Response) => {
    const { _min, _max } = await prisma.product.aggregate({
        _min: { id: true },
        _max: { id: true },
    });

    if (_min.id === null || _max.id === null) {
        return null;
    }

    const randomId = Math.floor(Math.random() * (Number(_max.id) - Number(_min.id) + 1)) + Number(_min.id);
    const product = await prisma.product.findUnique({
        where: { id: randomId }
    });

    res.json(product);
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Nieprawidłowe ID' });
        }

        const product = await prisma.product.findUnique({
            where: { id },
        });

        if (!product) {
            return res.status(404).json({ error: 'Produkt nie istnieje' });
        }

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się pobrać produktu' });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, brand, category, weight, price, imageUrl } = req.body as ProductBody;

        if (!name || !brand || !category || !weight || !price || !imageUrl) {
            return res.status(400).json({ error: 'Brakuje wymaganych pól' });
        }

        const result = await prisma.$transaction(async (tx) => {
            const newProduct = await tx.product.create({
                data: {
                    name,
                    brand,
                    category,
                    weight,
                    price,
                },
            });

            await tx.product_image.create({
                data: {
                    product_id: newProduct.id,
                    image_url: imageUrl,
                },
            });

            return newProduct;
        });

        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się dodać produktu' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Nieprawidłowe ID' });
        }

        const { name, brand, category, weight, price, imageUrl } = req.body as Partial<ProductBody>;

        const existingProduct = await prisma.product.findUnique({
            where: { id },
            include: { product_image: true },
        });

        if (!existingProduct) {
            return res.status(404).json({ error: 'Produkt nie istnieje' });
        }

        const result = await prisma.$transaction(async (tx) => {
            const updatedProduct = await tx.product.update({
                where: { id },
                data: {
                    name,
                    brand,
                    category,
                    weight,
                    price,
                },
            });

            if (imageUrl && existingProduct.product_image) {
                await tx.product_image.update({
                    where: { product_id: id },
                    data: { image_url: imageUrl },
                });
            }

            return updatedProduct;
        });

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się zaktualizować produktu' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Nieprawidłowe ID' });
        }

        const existingProduct = await prisma.product.findUnique({
            where: { id },
        });

        if (!existingProduct) {
            return res.status(404).json({ error: 'Produkt nie istnieje' });
        }

        await prisma.product.delete({
            where: { id },
        });

        res.json({ message: 'Produkt usunięty' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się usunąć produktu' });
    }
};