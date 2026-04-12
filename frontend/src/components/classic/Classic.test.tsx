import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Classic } from "./Classic";
import * as useDailyModule from '../../hooks/useDaily';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import type { Mock } from 'vitest';

vi.mock('../../hooks/useDaily');

const mockUseTodayDaily = useDailyModule.useTodayDaily as Mock;
const mockFetchProductsBySearch = useDailyModule.fetchProductsBySearch as Mock;
const mockFetchProductByName = useDailyModule.fetchProductByName as Mock;
const mockSaveGuess = useDailyModule.saveGuess as Mock;
const mockFetchUserGuesses = useDailyModule.fetchUserGuesses as Mock;

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
        {children}
    </QueryClientProvider>
);

describe('Classic', () => {
    const mockTarget = {
        id: 1,
        name: 'Target',
        brand: 'B',
        category: 'C',
        weight: '100g',
        price: 10,
        product_image: null
    };

    beforeEach(() => {
        vi.clearAllMocks();
        mockUseTodayDaily.mockReturnValue({
            data: mockTarget,
            isLoading: false,
            isError: false,
        });
        mockFetchProductsBySearch.mockResolvedValue([]);
        mockFetchProductByName.mockResolvedValue(mockTarget);
        mockSaveGuess.mockResolvedValue({});
        mockFetchUserGuesses.mockResolvedValue([]);
    });

    test('renderuje ekran ładowania', () => {
        mockUseTodayDaily.mockReturnValue({ isLoading: true, data: null, isError: false });
        render(<Classic />, { wrapper });
        expect(screen.getByText(/Ładowanie produktu dnia/i)).toBeInTheDocument();
    });

    test('renderuje błąd gdy brak produktu', () => {
        mockUseTodayDaily.mockReturnValue({ isLoading: false, data: null, isError: true });
        render(<Classic />, { wrapper });
        expect(screen.getByText(/Brak produktu dnia/i)).toBeInTheDocument();
    });

    test('wygrana po poprawnym zgadnięciu', async () => {
        render(<Classic />, { wrapper });

        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Wpisz nazwę/i)).toBeInTheDocument();
        });

        const input = screen.getByPlaceholderText(/Wpisz nazwę/i);
        fireEvent.change(input, { target: { value: 'Target' } });
        fireEvent.click(screen.getByText('Zgadnij'));

        await waitFor(() => {
            expect(screen.getByText(/Brawo!/i)).toBeInTheDocument();
        });
    });

    test('pokazuje podpowiedź po 5 próbach', async () => {
        const wrongProduct = {
            id: 2,
            name: 'Wrong',
            brand: 'X',
            category: 'X',
            weight: '1g',
            price: 1,
            product_image: null
        };

        mockFetchProductByName.mockResolvedValue(wrongProduct);

        render(<Classic />, { wrapper });

        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Wpisz nazwę/i)).toBeInTheDocument();
        });

        const input = screen.getByPlaceholderText(/Wpisz nazwę/i);
        const submitButton = screen.getByText('Zgadnij');

        for (let i = 0; i < 5; i++) {
            fireEvent.change(input, { target: { value: `Wrong${i + 1}` } });
            fireEvent.click(submitButton);
            await waitFor(() => {
                expect(mockFetchProductByName).toHaveBeenCalledTimes(i + 1);
            });
        }

        await waitFor(() => {
            const hintButton = screen.getByRole('button', { name: /podpowiedź/i });
            expect(hintButton).not.toBeDisabled();
        });
    });
});