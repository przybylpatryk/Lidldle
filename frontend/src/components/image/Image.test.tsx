import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Image } from './Image';
import * as useImageDailyModule from '../../hooks/useImageDaily';
import * as useDailyModule from '../../hooks/useDaily';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import type { Mock } from 'vitest';

vi.mock('../../hooks/useImageDaily');
vi.mock('../../hooks/useDaily');

const mockUseTodayImageDaily = useImageDailyModule.useTodayImageDaily as Mock;
const mockFetchImageUserGuesses = useImageDailyModule.fetchImageUserGuesses as Mock;
const mockSaveImageGuess = useImageDailyModule.saveImageGuess as Mock;
const mockFetchProductsBySearch = useDailyModule.fetchProductsBySearch as Mock;
const mockFetchProductByName = useDailyModule.fetchProductByName as Mock;

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
        {children}
    </QueryClientProvider>
);

describe('Image', () => {
    const mockTarget = {
        id: 1,
        name: 'Target',
        brand: 'B',
        category: 'C',
        weight: '100g',
        price: 10,
        product_image: { image_url: '/test.jpg' }
    };

    beforeEach(() => {
        vi.clearAllMocks();
        mockUseTodayImageDaily.mockReturnValue({ data: mockTarget, isLoading: false, isError: false });
        mockFetchImageUserGuesses.mockResolvedValue([]);
        mockSaveImageGuess.mockResolvedValue({});
        mockFetchProductsBySearch.mockResolvedValue([]);
        mockFetchProductByName.mockResolvedValue(mockTarget);
    });

    test('renderuje ekran ładowania', () => {
        mockUseTodayImageDaily.mockReturnValue({ isLoading: true, data: null, isError: false });
        render(<Image />, { wrapper });
        expect(screen.getByText(/Ładowanie produktu dnia/i)).toBeInTheDocument();
    });

    test('renderuje błąd gdy brak produktu', () => {
        mockUseTodayImageDaily.mockReturnValue({ isLoading: false, data: null, isError: true });
        render(<Image />, { wrapper });
        expect(screen.getByText(/Brak produktu dnia/i)).toBeInTheDocument();
    });

    test('renderuje obrazek z odpowiednim blur', async () => {
        await act(async () => {
            render(<Image />, { wrapper });
        });
        const img = screen.getByAltText(/Produkt do zgadnięcia/i);
        expect(img).toHaveStyle('filter: blur(20px)');
    });

    test('wygrana po poprawnym zgadnięciu', async () => {
        await act(async () => {
            render(<Image />, { wrapper });
        });
        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Wpisz nazwę/i)).toBeInTheDocument();
        });
        await act(async () => {
            fireEvent.change(screen.getByPlaceholderText(/Wpisz nazwę/i), { target: { value: 'Target' } });
            fireEvent.click(screen.getByText('Zgadnij'));
        });
        await waitFor(() => {
            expect(screen.getByText(/Brawo! Zgadłeś!/i)).toBeInTheDocument();
        });
    });

    test('nie pokazuje inputa po wygranej', async () => {
        await act(async () => {
            render(<Image />, { wrapper });
        });
        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Wpisz nazwę/i)).toBeInTheDocument();
        });
        await act(async () => {
            fireEvent.change(screen.getByPlaceholderText(/Wpisz nazwę/i), { target: { value: 'Target' } });
            fireEvent.click(screen.getByText('Zgadnij'));
        });
        await waitFor(() => {
            expect(screen.queryByPlaceholderText(/Wpisz nazwę/i)).not.toBeInTheDocument();
        });
    });
});