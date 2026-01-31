import React, { useMemo, useEffect } from "react";
import { useProductStore } from "../../../../store/product.store";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import ProductToolbar from "../ProductToolbar/ProductToolbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductFilters from "../ProductFilters/ProductFilters";
import type{ Product } from "../../../../store/product.store";

const ProductsPage: React.FC = () => {
  const { products, setProducts, searchQuery, sortBy, selectedCategory } = useProductStore();

  useEffect(() => {
    // Listen to Firebase "products" collection
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(liveData);
    });
    return () => unsubscribe();
  }, [setProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (searchQuery) result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (selectedCategory !== 'All') result = result.filter(p => p.category === selectedCategory);
    
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    return result;
  }, [products, searchQuery, sortBy, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F6F4F1] px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black text-[#111111] tracking-tight">
            ZAYQ<span className="text-[#8F8F8F]">CASE</span>
          </h1>
          <p className="mt-4 text-[#8F8F8F] font-bold uppercase tracking-[0.4em] text-xs">Essential Protection Series</p>
        </div>

        <ProductToolbar />

        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="w-full md:w-64">
            <ProductFilters />
          </div>
          <div className="flex-1">
            {products.length === 0 ? (
                <div className="flex justify-center py-20 animate-pulse text-gray-400">Loading live collection...</div>
            ) : (
                <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;