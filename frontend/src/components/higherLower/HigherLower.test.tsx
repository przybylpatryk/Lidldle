import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HigherLower } from './HigherLower';
import * as useProductsModule from '../../hooks/useProducts';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import type { Mock } from 'vitest';

vi.mock('../../hooks/useProducts');

const mockUseAllProducts = useProductsModule.useAllProducts as Mock;

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
        {children}
    </QueryClientProvider>
);

describe('HigherLower', () => {
    const mockProducts = [
        { id: 1, name: 'Produkt A', price: 10, imageUrl: '', brand: '', category: '', weight: '' },
        { id: 2, name: 'Produkt B', price: 20, imageUrl: '', brand: '', category: '', weight: '' },
    ];

    beforeEach(() => {
        vi.clearAllMocks();
        mockUseAllProducts.mockReturnValue({ data: mockProducts, isLoading: false, isError: false });
    });

    test('renderuje ekran ładowania', () => {
        mockUseAllProducts.mockReturnValue({ isLoading: true, data: null, isError: false });
        render(<HigherLower />, { wrapper });
        expect(screen.getByText(/Ładowanie produktów/i)).toBeInTheDocument();
    });

    test('kliknięcie Wyżej pokazuje werdykt', async () => {
        render(<HigherLower />, { wrapper });

        // Poczekaj na VS
        const vsElement = await screen.findByText('VS');
        expect(vsElement).toBeInTheDocument();

        // Sprawdź czy przyciski są
        const higherBtn = screen.getByText('▲ Wyżej');
        const lowerBtn = screen.getByText('▼ Niżej');
        expect(higherBtn).toBeInTheDocument();
        expect(lowerBtn).toBeInTheDocument();

        // Kliknij Wyżej
        fireEvent.click(higherBtn);

        // Sprawdź czy pojawił się JAKIKOLWIEK werdykt
        const verdict = await screen.findByText(/Dobrze|Błąd/i, {}, { timeout: 2000 });
        expect(verdict).toBeInTheDocument();
    });
});