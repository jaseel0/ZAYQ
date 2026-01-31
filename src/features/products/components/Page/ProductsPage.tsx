import React, {useMemo} from "react";
import { useProductStore } from "../../../../store/product.store";
import ProductToolbar from "../ProductToolbar/ProductToolbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import Pagination from "../Pagination/Pagination";
import ProductFilters from "../ProductFilters/ProductFilters";
import{ MOCK_PRODUCTS} from "../../services/MockProduct"
const ProductsPage: React.FC = () => {
  const { searchQuery, sortBy, selectedCategory } = useProductStore();

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];
    if (searchQuery) result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (selectedCategory !== 'All') result = result.filter(p => p.category === selectedCategory);
    if (sortBy === 'low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'high') result.sort((a, b) => b.price - a.price);
    return result;
  }, [searchQuery, sortBy, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F6F4F1] selection:bg-[#111111] selection:text-white px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Page Heading */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black text-[#111111] tracking-tight leading-none">
            LUXE<span className="text-[#8F8F8F]">CASE</span>
          </h1>
          <p className="mt-4 text-[#8F8F8F] font-bold uppercase tracking-[0.4em] text-xs">Essential Protection Series</p>
        </div>

        <ProductToolbar />

        <div className="flex gap-20">
          <ProductFilters />
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
            <Pagination />
          </div>
        </div>

      </div>
    </div>
  );
};
export default ProductsPage;