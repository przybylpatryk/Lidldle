import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { DailyProductBody, DailyRandomBody } from '../types';

export const getAllDaily = async (req: Request, res: Response) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const todayEntry = await prisma.daily_product.findFirst({
            where: { product_date: today }
        });

        if (!todayEntry) {
            const usedProducts = await prisma.daily_product.findMany({ select: { product_id: true } });
            const usedIds = usedProducts.map(p => p.product_id);
            const available = await prisma.product.findMany({
                where: { id: { notIn: usedIds.length ? usedIds : [0] } }
            });
            if (available.length) {
                const randomIndex = Math.floor(Math.random() * available.length);
                await prisma.daily_product.create({
                    data: {
                        product_id: available[randomIndex].id,
                        product_date: today
                    }
                });
            }
        }

        const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        await prisma.daily_product.deleteMany({
            where: { product_date: { lt: firstDayCurrentMonth } }
        });

        const dailyProducts = await prisma.daily_product.findMany({
            include: {
                product: {
                    include: { product_image: true }
                }
            },
            orderBy: { product_date: 'desc' }
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

export const deleteGuesses = async (req: Request, res: Response) => {
    await prisma.product_guesses.deleteMany({})
}

export const deleteImageGuesses = async (req: Request, res: Response) => {
    await prisma.image_guesses.deleteMany({})
}

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

        const now = product_date ? new Date(product_date) : new Date();
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
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

export const getUserGuesses = async (req: Request, res: Response) => {
    const { id } = req.params;
    const idn = Number(id);
    const guesses = await prisma.product_guesses.findMany({
        where: { user_id: idn}
    })
    res.json(guesses);
}

export const addGuess = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const { userId } = parseInt(req.params.userId);
        const product = await prisma.product.findFirst({
            where: { name: name },
        })

        const guess = await prisma.product_guesses.create({
            data: {
                user_id: userId,
                product_id: product.id,
                name: product.name,
                brand: product.brand,
                category: product.category,
                weight: product.weight,
                price: product.price,
            }
        })
        res.json(guess);
    }
    catch (error) {
        console.error(error);
    }
}

export const getUserImageGuesses = async (req: Request, res: Response) => {
    const { id } = req.params;
    const idn = Number(id);
    const guesses = await prisma.image_guesses.findMany({
        where: { user_id: idn}
    })
    res.json(guesses);
}

export const addImageGuess = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const { userId } = parseInt(req.params.userId);
        const product = await prisma.product.findFirst({
            where: { name: name },
        })

        const guess = await prisma.image_guesses.create({
            data: {
                user_id: userId,
                product_id: product.id,
                name: product.name,
            }
        })
        res.json(guess);
    }
    catch (error) {
        console.error(error);
    }
}

export const cleanOldDaily = async () => {
    const now = new Date();
    const firstDayCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    await prisma.daily_product.deleteMany({
        where: { product_date: { lt: firstDayCurrentMonth } }
    });
};