import productsData from '../json/products.json';

export interface Product {
    id: string;
    name: string;
    image: string;
    shortDescription: string;
    features: string[];
    description: string;
    additionalFeatures?: string[];
    reviews?: { user: string; rating: number; comment: string; date: string }[];
}

export const products = productsData as Product[];
