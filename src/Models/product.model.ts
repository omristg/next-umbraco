import type { Photo } from "@/Models/umbraco.model";

export type Product = {
	productName: string;
	price: number;
	category: string[];
	description: string;
	sku: string;
	photos: Photo[];
	features: null;
	bodyText: null;
};
