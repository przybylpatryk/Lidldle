import { useQuery } from '@tanstack/react-query';

export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export interface Product {
    id: number;
    name: string;
    brand: string;
    category: string;
    weight: string;
    price: number;
    imageUrl: string;
}

export interface ProductSearchResult {
    id: number;
    name: string;
}

const fetchAllProducts = async (): Promise<Product[]> => {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error('Błąd pobierania produktów');
    return res.json();
};

const fetchRandomProduct = async (): Promise<Product> => {
    const res = await fetch(`${API_URL}/products/randomProduct`);
    if (!res.ok) throw new Error('Błąd pobierania losowego produktu');
    return res.json();
};

export const fetchProductsBySearch = async (search: string): Promise<ProductSearchResult[]> => {
    const res = await fetch(`${API_URL}/products/search?search=${encodeURIComponent(search)}`);
    if (!res.ok) throw new Error('Błąd wyszukiwania');
    return res.json();
};

export const useAllProducts = () =>
    useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchAllProducts,
        staleTime: 1000 * 60 * 5,
    });

export const useRandomProduct = (enabled = true) =>
    useQuery<Product>({
        queryKey: ['randomProduct', Math.random()],
        queryFn: fetchRandomProduct,
        enabled,
        staleTime: 0,
    });
