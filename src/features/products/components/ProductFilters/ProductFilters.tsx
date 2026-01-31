import React from "react";
import { useProductStore } from "../../../../store/product.store";
const ProductFilters: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useProductStore();
  const categories = ['All', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14'];
  
  return (
    <div className="hidden lg:flex flex-col gap-10 w-64 shrink-0 sticky top-12 h-fit">
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8F8F8F] mb-6">Device Model</h4>
        <div className="flex flex-col gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left text-sm font-bold transition-all ${
                selectedCategory === cat ? 'text-[#111111] translate-x-2' : 'text-[#8F8F8F] hover:text-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8F8F8F] mb-6">Availability</h4>
        <label className="flex items-center gap-3 text-sm font-bold text-[#111111] cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-[#111111] rounded border-[#E6E3DF]" defaultChecked />
          In Stock Only
        </label>
      </div>
    </div>
  );
};
export default ProductFilters;