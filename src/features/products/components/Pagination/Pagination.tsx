import React from "react";
import { useProductStore } from "../../../../store/product.store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITEMS_PER_PAGE } from "../Page/ProductsPage"; // Import constant

const Pagination: React.FC = () => {
    const { currentPage, setCurrentPage, getTotalPages } = useProductStore();
    const totalPages = getTotalPages(ITEMS_PER_PAGE);

    // Hide if only one page exists
    if (totalPages <= 1) return null;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="mt-32 flex items-center justify-center gap-8">
            <button
                onClick={() => {
                    setCurrentPage(Math.max(1, currentPage - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-[#3D1A12]/10 text-[#3D1A12] transition-all hover:bg-[#3D1A12] hover:text-white disabled:opacity-20"
                disabled={currentPage === 1}
                aria-label="Previous page"
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
                        className={`transition-all duration-500 rounded-full ${n === currentPage ? 'bg-[#3D1A12] w-8 h-2.5' : 'bg-[#3D1A12]/20 w-2.5 h-2.5'
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
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-[#3D1A12]/10 text-[#3D1A12] transition-all hover:bg-[#3D1A12] hover:text-white disabled:opacity-20"
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default Pagination;