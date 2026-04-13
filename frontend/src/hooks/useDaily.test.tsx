import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTodayDaily, fetchProductsBySearch } from './useDaily';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import type { Mock } from 'vitest';

globalThis.fetch = vi.fn();

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    });

    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

    return Wrapper;
};

describe('useDaily', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('fetchProductsBySearch - pobiera produkty', async () => {
        (globalThis.fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => [{ id: 1, name: 'Product' }],
        });

        const result = await fetchProductsBySearch('test');
        expect(result).toEqual([{ id: 1, name: 'Product' }]);
    });

    test('useTodayDaily - pobiera produkt dnia', async () => {
        (globalThis.fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => [{ product_id: 1, product: { id: 1, name: 'Daily', price: 10 } }],
        });

        const { result } = renderHook(() => useTodayDaily(), {
            wrapper: createWrapper()
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });

        expect(result.current.data?.name).toBe('Daily');
    });
});