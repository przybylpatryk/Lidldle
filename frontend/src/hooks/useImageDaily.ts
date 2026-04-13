import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export interface ImageDailyProduct {
    id: number;
    name: string;
    brand: string;
    category: string;
    weight: string;
    price: number;
    product_image?: { image_url: string } | null;
}

export interface ImageDailyEntry {
    product_id: number;
    image_date: string;
    product: ImageDailyProduct;
}

export const fetchTodayImageDaily = async (): Promise<ImageDailyProduct> => {
    const res = await fetch(`${API_URL}/daily/image`);
    if (!res.ok) throw new Error('Błąd pobierania');
    const data: ImageDailyEntry[] = await res.json();
    if (!data.length) throw new Error('Brak produktów');
    const latest = data[0];
    return {
        ...latest.product,
        price: Number(latest.product.price),
    };
};

export const fetchImageUserGuesses = async (userId: number): Promise<any[]> => {
    const res = await fetch(`${API_URL}/daily/imageGuesses/${userId}`);
    if (!res.ok) throw new Error('Błąd pobierania zgadywań obrazkowych');
    return res.json();
};

export const saveImageGuess = async (userId: number, product: ImageDailyProduct) => {
    const res = await fetch(`${API_URL}/daily/imageGuesses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId,
            productId: product.id,
            name: product.name,
        })
    });
    if (!res.ok) throw new Error('Błąd zapisu zgadywania obrazkowego');
    return res.json();
};

export const useTodayImageDaily = () =>
    useQuery<ImageDailyProduct>({
        queryKey: ['daily', 'image'],
        queryFn: fetchTodayImageDaily,
        staleTime: 1000 * 60 * 10,
        retry: 1,
    });