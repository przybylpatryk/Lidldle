import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { DailyProductBody, DailyRandomBody } from '../types';

export const getAllDaily = async (req: Request, res: Response) => {
    try {
        const dailyProducts = await prisma.daily_product.findMany({
            include: {
                product: {
                    include: {
                        product_image: true,
                    },
                },
            },
            orderBy: {
                product_date: 'desc',
            },
        });
        res.json(dailyProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się pobrać daily_product' });
    }
};

export const addToDaily = async (req: Request, res: Response) => {
    try {
        const { product_id, product_date } = req.body as DailyProductBody;

        if (!product_id) {
            return res.status(400).json({ error: 'Brakuje product_id' });
        }

        const product = await prisma.product.findUnique({
            where: { id: product_id },
        });

        if (!product) {
            return res.status(404).json({ error: 'Produkt nie istnieje' });
        }

        const existing = await prisma.daily_product.findUnique({
            where: { product_id },
        });

        if (existing) {
            return res.status(409).json({ error: 'Ten produkt już jest w daily_product' });
        }

        const date = product_date ? new Date(product_date) : new Date();
        date.setHours(0, 0, 0, 0);

        const dailyProduct = await prisma.daily_product.create({
            data: {
                product_id,
                product_date: date,
            },
            include: {
                product: true,
            },
        });

        res.status(201).json(dailyProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się dodać do daily_product' });
    }
};

export const deleteAllDaily = async (req: Request, res: Response) => {
    try {
        const result = await prisma.daily_product.deleteMany();
        res.json({ count: result.count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się usunąć daily_product' });
    }
};

export const deleteDailyById = async (req: Request, res: Response) => {
    try {
        const product_id = parseInt(req.params.product_id);
        if (isNaN(product_id)) {
            return res.status(400).json({ error: 'Nieprawidłowe ID produktu' });
        }

        const deleted = await prisma.daily_product.delete({
            where: { product_id },
        });

        res.json(deleted);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się usunąć daily_product' });
    }
};

export const addRandomDaily = async (req: Request, res: Response) => {
    try {
        const { product_date } = req.body as DailyRandomBody;

        const usedProducts = await prisma.daily_product.findMany({
            select: { product_id: true },
        });
        const usedIds = usedProducts.map((p) => p.product_id);

        const availableProducts = await prisma.product.findMany({
            where: {
                id: {
                    notIn: usedIds.length > 0 ? usedIds : [0],
                },
            },
            include: {
                product_image: true,
            },
        });

        if (availableProducts.length === 0) {
            return res.status(404).json({ error: 'Brak dostępnych produktów do wylosowania' });
        }

        const randomIndex = Math.floor(Math.random() * availableProducts.length);
        const selectedProduct = availableProducts[randomIndex];

        const date = product_date ? new Date(product_date) : new Date();
        date.setHours(0, 0, 0, 0);

        const dailyProduct = await prisma.daily_product.create({
            data: {
                product_id: selectedProduct.id,
                product_date: date,
            },
            include: {
                product: {
                    include: {
                        product_image: true,
                    },
                },
            },
        });

        res.status(201).json(dailyProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nie udało się wylosować produktu dnia' });
    }
};