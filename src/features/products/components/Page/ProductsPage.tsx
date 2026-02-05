import React, { useEffect } from "react";
import { useProductStore, type Product } from "../../../../store/product.store";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import ProductToolbar from "../ProductToolbar/ProductToolbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductFilters from "../ProductFilters/ProductFilters";
import Pagination from "../Pagination/Pagination";

// Centralized Constant
export const ITEMS_PER_PAGE = 6;

const ProductsPage: React.FC = () => {
  const { setProducts, getFilteredProducts, currentPage } = useProductStore();

  // 1. Sync with Firebase
  useEffect(() => {
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

  // 2. Pagination Logic
  const filteredData = getFilteredProducts();
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#F6F4F1] px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black text-[#111111] tracking-tight">
            ZAYQ<span className="text-[#8F8F8F]">CASE</span>
          </h1>
          <p className="mt-4 text-[#8F8F8F] font-bold uppercase tracking-[0.4em] text-xs">
            Essential Protection Series
          </p>
        </div>

        <ProductToolbar />

        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="w-full md:w-64">
            <ProductFilters />
          </div>
          <div className="flex-1">
            {filteredData.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-xl font-bold text-[#111111]">No cases found</p>
                <p className="text-[#8F8F8F]">Try adjusting your filters or search.</p>
              </div>
            ) : (
              <>
                <ProductGrid products={currentItems} />
                <Pagination />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;