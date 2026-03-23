export interface ProductBody {
    name: string;
    brand: string;
    category: string;
    weight: string;
    price: number;
    imageUrl: string;
}

export interface DailyProductBody {
    product_id: number;
    product_date?: string;
}

export interface DailyRandomBody {
    product_date?: string;
}