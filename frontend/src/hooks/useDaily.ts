import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export interface ProductImage {
    image_url: string;
}

export interface DailyProduct {
    id: number;
    name: string;
    brand: string;
    category: string;
    weight: string;
    price: number;
    product_image?: ProductImage[];
}

export interface DailyEntry {
    product_id: number;
    product_date: string;
    product: DailyProduct;
}

const fetchTodayDaily = async (): Promise<DailyProduct> => {
    const res = await fetch(`${API_URL}/daily`);
    if (!res.ok) throw new Error('Błąd pobierania produktu dnia');
    const data: DailyEntry[] = await res.json();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayEntry = data.find((entry) => {
        const entryDate = new Date(entry.product_date);
        entryDate.setHours(0, 0, 0, 0);
        return entryDate.getTime() === today.getTime();
    });

    if (!todayEntry) throw new Error('Brak produktu dnia na dziś');

    return {
        ...todayEntry.product,
        price: Number(todayEntry.product.price),
    };
};

export const fetchProductsBySearch = async (search: string) => {
    const res = await fetch(`${API_URL}/products/search?search=${encodeURIComponent(search)}`);
    if (!res.ok) throw new Error('Błąd wyszukiwania');
    const data = await res.json();
    return data as { id: number; name: string }[];
};

export const fetchProductByName = async (name: string): Promise<DailyProduct> => {
    console.log('Szukam:', name);
    const res = await fetch(`${API_URL}/products/search?search=${encodeURIComponent(name)}`);
    const results = await res.json();
    console.log('Wyniki search:', results);

    if (!results.length) throw new Error('Nie znaleziono produktu');

    const exact = results.find((p: { name: string }) =>
        p.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    console.log('Exact match:', exact);
    const id = exact?.id ?? results[0].id;

    const detailRes = await fetch(`${API_URL}/products/${id}`);
    const product = await detailRes.json();
    console.log('Produkt szczegóły:', product);
    return { ...product, price: Number(product.price) };
};

export const useTodayDaily = () =>
    useQuery<DailyProduct>({
        queryKey: ['daily', 'today'],
        queryFn: fetchTodayDaily,
        staleTime: 1000 * 60 * 10,
        retry: 1,
    });
