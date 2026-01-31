import React from "react";
import SearchBar from "./SearchBar";
import SortSelect from "./SortSelect";
import {
    LayoutGrid,
    Menu,
    SlidersHorizontal
} from "lucide-react";
const ProductToolbar: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-20 pb-8 border-b border-[#E6E3DF]">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <SearchBar />
                <button className="p-4 bg-white rounded-2xl text-[#111111] hover:bg-[#EFECE8] transition-colors md:hidden" aria-label="Filter products">
                    <SlidersHorizontal size={18} />
                </button>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="hidden md:flex bg-white p-1 rounded-xl gap-1">
                    <button className="p-2 bg-[#F6F4F1] rounded-lg text-[#111111]" aria-label="Grid view"><LayoutGrid size={16} /></button>
                    <button className="p-2 text-[#8F8F8F] hover:text-[#111111]" aria-label="List view"><Menu size={16} /></button>
                </div>
                <SortSelect />
            </div>
        </div>
    );
};
export default ProductToolbar;