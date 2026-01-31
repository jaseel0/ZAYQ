import { create } from 'zustand'

// =====================
// Types
// =====================

export interface Product {
  id: number
  name: string
  price: number
  category: string
  colorHex: string
  type: 'matte' | 'clear' | 'leather'
}

type SortBy = 'featured' | 'price-asc' | 'price-desc'

interface ProductState {
  // data
  products: Product[]

  // ui state
  searchQuery: string
  sortBy: SortBy
  selectedCategory: string
  currentPage: number

  // actions
  setSearchQuery: (q: string) => void
  setSortBy: (s: SortBy) => void
  setSelectedCategory: (c: string) => void
  setCurrentPage: (p: number) => void
  setProducts: (products: Product[]) => void
}

// =====================
// Store
// =====================

export const useProductStore = create<ProductState>((set) => ({
  products: [],

  searchQuery: '',
  sortBy: 'featured',
  selectedCategory: 'All',
  currentPage: 1,

  setSearchQuery: (q) =>
    set({ searchQuery: q, currentPage: 1 }),

  setSortBy: (s) =>
    set({ sortBy: s }),

  setSelectedCategory: (c) =>
    set({ selectedCategory: c, currentPage: 1 }),

  setCurrentPage: (p) =>
    set({ currentPage: p }),

  setProducts: (products) =>
    set({ products }),
}))
