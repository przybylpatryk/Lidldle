import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTodayImageDaily, fetchTodayImageDaily } from './useImageDaily';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import type { Mock } from 'vitest';

globalThis.fetch = vi.fn();

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    });
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return Wrapper;
};

describe('useImageDaily', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('fetchTodayImageDaily - pobiera produkt dnia z obrazkiem', async () => {
        const mockData = [
            {
                product_id: 1,
                image_date: '2026-04-12',
                product: { id: 1, name: 'Jabłko', price: 2.39, product_image: { image_url: '/apple.jpg' } },
            },
        ];
        (globalThis.fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => mockData,
        });

        const result = await fetchTodayImageDaily();
        expect(result.name).toBe('Jabłko');
        expect(result.price).toBe(2.39);
    });

    test('useTodayImageDaily - pobiera produkt dnia z obrazkiem przez hook', async () => {
        const mockData = [
            {
                product_id: 1,
                image_date: '2026-04-12',
                product: { id: 1, name: 'Jabłko', price: 2.39, product_image: { image_url: '/apple.jpg' } },
            },
        ];
        (globalThis.fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => mockData,
        });

        const { result } = renderHook(() => useTodayImageDaily(), {
            wrapper: createWrapper(),
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true);
        });
        expect(result.current.data?.name).toBe('Jabłko');
    });
});