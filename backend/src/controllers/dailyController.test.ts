import { describe, test, expect, beforeEach, vi } from 'vitest';
import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';
import { addToDaily, addRandomDaily, addGuess } from './dailyController.js';

vi.mock('../../lib/prisma.js', () => ({
    prisma: {
        daily_product: {
            findUnique: vi.fn(),
            create: vi.fn(),
            delete: vi.fn(),
            findMany: vi.fn(),
        },
        product: {
            findUnique: vi.fn(),
            findMany: vi.fn(),
        },
        product_guesses: {
            create: vi.fn(),
        },
    },
}));

type MockFunction = ReturnType<typeof vi.fn>;

describe('Daily Controller', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let jsonMock: MockFunction;
    let statusMock: MockFunction;

    beforeEach(() => {
        jsonMock = vi.fn();
        statusMock = vi.fn().mockReturnValue({ json: jsonMock });
        req = {};
        res = { json: jsonMock, status: statusMock };
        vi.clearAllMocks();
    });

    test('addToDaily - brak product_id -> 400', async () => {
        req.body = {};
        await addToDaily(req as Request, res as Response);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: 'Brakuje product_id' });
    });

    test('addToDaily - produkt nie istnieje -> 404', async () => {
        req.body = { product_id: 999 };
        (prisma.product.findUnique as MockFunction).mockResolvedValue(null);
        await addToDaily(req as Request, res as Response);
        expect(statusMock).toHaveBeenCalledWith(404);
    });

    test('addToDaily - sukces', async () => {
        req.body = { product_id: 1 };
        (prisma.product.findUnique as MockFunction).mockResolvedValue({ id: 1 });
        (prisma.daily_product.findUnique as MockFunction).mockResolvedValue(null);
        (prisma.daily_product.create as MockFunction).mockResolvedValue({ product_id: 1 });
        await addToDaily(req as Request, res as Response);
        expect(statusMock).toHaveBeenCalledWith(201);
    });

    test('addRandomDaily - brak produktów -> 404', async () => {
        req.body = {};
        (prisma.daily_product.findMany as MockFunction).mockResolvedValue([]);
        (prisma.product.findMany as MockFunction).mockResolvedValue([]);

        await addRandomDaily(req as Request, res as Response);

        expect(statusMock).toHaveBeenCalledWith(404);
        expect(jsonMock).toHaveBeenCalledWith({ error: 'Brak dostępnych produktów do wylosowania' });
    });

    test('addGuess - brak userId -> 400', async () => {
        req.body = { productId: 1 };
        await addGuess(req as Request, res as Response);
        expect(statusMock).toHaveBeenCalledWith(400);
        expect(jsonMock).toHaveBeenCalledWith({ error: 'Brak userId lub productId' });
    });
});