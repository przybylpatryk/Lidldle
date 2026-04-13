import { describe, test, expect, beforeEach, vi } from 'vitest';
import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';
import { getProductById, createProduct, deleteProduct, getProductsBySearch } from './productController.js';

vi.mock('../../lib/prisma.js', () => ({
    prisma: {
        product: {
            findUnique: vi.fn(),
            findMany: vi.fn(),
            create: vi.fn(),
            delete: vi.fn(),
        },
        product_image: {
            findMany: vi.fn(),
            create: vi.fn(),
        },
        $transaction: vi.fn((cb) => cb({
            product: { create: vi.fn(), update: vi.fn() },
            product_image: { update: vi.fn() },
        })),
    },
}));

type MockFunction = ReturnType<typeof vi.fn>;

describe('Product Controller', () => {
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

    test('getProductById - nieprawidłowe ID -> 400', async () => {
        req.params = { id: 'abc' };
        await getProductById(req as Request, res as Response);
        expect(statusMock).toHaveBeenCalledWith(400);
    });

    test('getProductById - produkt znaleziony', async () => {
        req.params = { id: '1' };
        (prisma.product.findUnique as MockFunction).mockResolvedValue({ id: 1, name: 'Test' });
        await getProductById(req as Request, res as Response);
        expect(jsonMock).toHaveBeenCalledWith({ id: 1, name: 'Test' });
    });

    test('createProduct - brak wymaganych pól -> 400', async () => {
        req.body = { name: 'test' };
        await createProduct(req as Request, res as Response);
        expect(statusMock).toHaveBeenCalledWith(400);
    });

    test('getProductsBySearch - brak search -> 400', async () => {
        req.query = {};
        await getProductsBySearch(req as Request, res as Response);
        expect(statusMock).toHaveBeenCalledWith(400);
    });
});