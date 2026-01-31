// src/features/product/mock/products.ts
import type { Product } from "../../../store/product.store";

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Matte Black Case", price: 1099, category: "iPhone 15 Pro", colorHex: "#2B2B2B", type: "matte" },
  { id: 2, name: "Frost Clear Case", price: 1099, category: "iPhone 15 Pro", colorHex: "#DADADA", type: "clear" },
  { id: 3, name: "Leather Brown Case", price: 1299, category: "iPhone 15 Pro", colorHex: "#8B5A3C", type: "leather" },
  { id: 4, name: "Midnight Matte", price: 1099, category: "iPhone 15", colorHex: "#1C1C1C", type: "matte" },
  { id: 5, name: "Crystal Clear", price: 1099, category: "iPhone 14", colorHex: "#DADADA", type: "clear" },
  { id: 6, name: "Saddle Leather", price: 1399, category: "iPhone 15 Pro Max", colorHex: "#6D442A", type: "leather" },
];
