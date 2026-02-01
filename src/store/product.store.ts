import { create } from 'zustand'

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  status: 'in-stock' | 'out-of-stock' | 'coming-soon';
  type: 'matte' | 'clear' | 'leather';
  isFeatured?: boolean;
  description?: string;
}

type SortBy = 'featured' | 'price-asc' | 'price-desc'

interface ProductState {
  products: Product[];
  searchQuery: string;
  sortBy: SortBy;
  selectedCategory: string;
  currentPage: number;

  // Actions
  setProducts: (products: Product[]) => void;
  setSearchQuery: (q: string) => void;
  setSortBy: (s: SortBy) => void;
  setSelectedCategory: (c: string) => void;
  setCurrentPage: (p: number) => void;
  
  // Logic Getters
  getFilteredProducts: () => Product[];
  getTotalPages: (itemsPerPage: number) => number;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  searchQuery: '',
  sortBy: 'featured',
  selectedCategory: 'All',
  currentPage: 1,

  setProducts: (products) => set({ products }),
  setSearchQuery: (q) => set({ searchQuery: q, currentPage: 1 }),
  setSortBy: (s) => set({ sortBy: s }),
  setSelectedCategory: (c) => set({ selectedCategory: c, currentPage: 1 }),
  setCurrentPage: (p) => set({ currentPage: p }),

  getFilteredProducts: () => {
    const { products, searchQuery, selectedCategory, sortBy } = get();
    
    return products
      .filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'featured') return a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1;
        return 0;
      });
  },

  getTotalPages: (itemsPerPage) => {
    const filteredCount = get().getFilteredProducts().length;
    return Math.ceil(filteredCount / itemsPerPage) || 1;
  },
}))