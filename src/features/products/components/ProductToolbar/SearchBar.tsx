import React from "react";
import { Search } from "lucide-react";
import { useProductStore } from "../../../../store/product.store";
const SearchBar: React.FC = () => {
    const { searchQuery, setSearchQuery } = useProductStore();
    return (
        <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8F8F8F] group-focus-within:text-[#111111] transition-colors" size={16} />
            <input
                type="text"
                placeholder="Find your model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FFFFFF] border-none rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-1 focus:ring-[#E6E3DF] outline-none transition-all placeholder:text-[#8F8F8F]"
            />
        </div>
    );
};
export default SearchBar;