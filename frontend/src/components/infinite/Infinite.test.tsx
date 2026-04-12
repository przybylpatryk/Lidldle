import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Infinite } from './Infinite';
import * as useProductsModule from '../../hooks/useProducts';
import * as useDailyModule from '../../hooks/useDaily';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import type { Mock } from 'vitest';

vi.mock('../../hooks/useProducts');
vi.mock('../../hooks/useDaily');

const mockUseAllProducts = useProductsModule.useAllProducts as Mock;
const mockFetchProductsBySearch = useDailyModule.fetchProductsBySearch as Mock;

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
        {children}
    </QueryClientProvider>
);

describe('Infinite', () => {
    const singleProduct = [
        { id: 1, name: 'Product A', brand: 'BrandA', category: 'CatA', weight: '100g', price: 10, imageUrl: '' },
    ];

    beforeEach(() => {
        vi.clearAllMocks();
        mockUseAllProducts.mockReturnValue({ data: singleProduct, isLoading: false, isError: false });
        mockFetchProductsBySearch.mockResolvedValue([]);
    });

    test('renderuje ekran ładowania', () => {
        mockUseAllProducts.mockReturnValue({ isLoading: true, data: null, isError: false });
        render(<Infinite />, { wrapper });
        expect(screen.getByText(/Ładowanie produktów/i)).toBeInTheDocument();
    });

    test('renderuje błąd gdy brak produktów', () => {
        mockUseAllProducts.mockReturnValue({ isLoading: false, data: null, isError: true });
        render(<Infinite />, { wrapper });
        expect(screen.getByText(/Błąd połączenia z API/i)).toBeInTheDocument();
    });

    test('wyświetla statystyki (seria, rekord, zgadnięte)', () => {
        render(<Infinite />, { wrapper });
        expect(screen.getByText(/Seria/i)).toBeInTheDocument();
        expect(screen.getByText(/Rekord/i)).toBeInTheDocument();
        expect(screen.getByText(/Zgadnięte/i)).toBeInTheDocument();
    });

    test('poprawne odgadnięcie zwiększa serię i pokazuje banner sukcesu', async () => {
        render(<Infinite />, { wrapper });
        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Wpisz nazwę/i)).toBeInTheDocument();
        });
        fireEvent.change(screen.getByPlaceholderText(/Wpisz nazwę/i), { target: { value: 'Product A' } });
        fireEvent.click(screen.getByText('Zgadnij'));
        await waitFor(() => {
            expect(screen.getByText(/Zgadłeś!/i)).toBeInTheDocument();
            const statValue = screen.getByText(/Seria/i).parentElement?.querySelector('.StatValue');
            expect(statValue).toHaveTextContent('1');
        });
    });
});