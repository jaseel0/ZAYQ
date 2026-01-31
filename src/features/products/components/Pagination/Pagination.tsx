import React from "react";
import { useProductStore } from "../../../../store/product.store";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Pagination: React.FC = () => {
    const { currentPage, setCurrentPage } = useProductStore();
    return (
        <div className="mt-32 flex items-center justify-center gap-8">
            <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-[#E6E3DF] text-[#111111] transition-all hover:bg-[#111111] hover:text-white disabled:opacity-20"
                aria-label="Previous page"
                disabled={currentPage === 1}
            >
                <ChevronLeft size={20} />
            </button>
            <div className="flex gap-3">
                {[1, 2, 3].map(n => (
                    <span
                        key={n}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${n === currentPage ? 'bg-[#111111] w-8' : 'bg-[#E6E3DF]'}`}
                    ></span>
                ))}
            </div>
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-[#E6E3DF] text-[#111111] transition-all hover:bg-[#111111] hover:text-white"
                aria-label="Next page">
                <ChevronRight size={20} />
            </button>
        </div>
    );
};
export default Pagination;