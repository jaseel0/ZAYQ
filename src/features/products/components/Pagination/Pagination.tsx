import React from "react";
import { useProductStore } from "../../../../store/product.store";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination: React.FC = () => {
    const { currentPage, setCurrentPage, getTotalPages } = useProductStore();

    const ITEMS_PER_PAGE = 8;
    const totalPages = getTotalPages(ITEMS_PER_PAGE);

    if (totalPages <= 1) return null;

    return (
        <div className="mt-32 flex items-center justify-center gap-8">
            <button
                onClick={() => {
                    setCurrentPage(Math.max(1, currentPage - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-[#E6E3DF] text-[#111111] transition-all hover:bg-[#111111] hover:text-white disabled:opacity-20"
                disabled={currentPage === 1}
                aria-label="left"
            >
                <ChevronLeft size={20} />
            </button>

            <div className="flex gap-3 items-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                    <button
                        key={n}
                        onClick={() => {
                            setCurrentPage(n);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`transition-all duration-500 rounded-full ${n === currentPage ? 'bg-[#111111] w-8 h-2.5' : 'bg-[#E6E3DF] w-2.5 h-2.5'
                            }`}
                        aria-label="button"
                    />
                ))}
            </div>

            <button
                onClick={() => {
                    setCurrentPage(Math.min(totalPages, currentPage + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-[#E6E3DF] text-[#111111] transition-all hover:bg-[#111111] hover:text-white disabled:opacity-20"
                disabled={currentPage === totalPages}
                aria-label="rigth"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default Pagination;