import React from "react";
import type { Product } from "../../../../store/product.store"

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const isComingSoon = product.status === 'coming-soon';
    const isOutOfStock = product.status === 'out-of-stock';

    const handleBuyNow = () => {
        if (isComingSoon || isOutOfStock) return;
        const message = encodeURIComponent(`Hi ZAYQ! I'm interested in the ${product.name} (₹${product.price}). Is it in stock?`);
        window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank'); // Replace with your WhatsApp number
    };

    return (
        <div className="flex flex-col group">
            {/* Image Wrapper */}
            <div className="relative aspect-4/5 rounded-2xl bg-[#E6E3DF] overflow-hidden transition-all duration-500 group-hover:bg-[#EFECE8]">
                
                {/* Status Badge */}
                {(isComingSoon || isOutOfStock) && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                        <p className="text-[9px] font-black uppercase tracking-widest text-black">
                            {isComingSoon ? 'Coming Soon' : 'Sold Out'}
                        </p>
                    </div>
                )}

                {/* Actual Product Image */}
                <div className={`w-full h-full transition-all duration-700 ease-in-out ${!isComingSoon && 'group-hover:scale-110'} ${isComingSoon ? 'blur-xl opacity-50' : 'opacity-100'}`}>
                    {product.imageUrl ? (
                        <img 
                            src={product.imageUrl} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                            No Image Available
                        </div>
                    )}
                </div>

                {/* Hover Overlay for In-Stock items */}
                {!isComingSoon && !isOutOfStock && (
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
            </div>

            {/* Details Section */}
            <div className="mt-5 flex flex-col items-center text-center">
                <h3 className="text-base font-bold text-[#111111] tracking-tight">{product.name}</h3>
                <p className="text-[#8F8F8F] text-xs font-medium uppercase tracking-wider mt-1">{product.category}</p>
                <p className="text-[#111111] font-semibold mt-2">₹{product.price.toLocaleString()}</p>
                
                <button 
                    onClick={handleBuyNow}
                    disabled={isComingSoon || isOutOfStock}
                    className={`mt-4 w-full py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 
                        ${isComingSoon || isOutOfStock 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-[#111111] text-white hover:bg-black active:scale-95'}`}
                >
                    {isComingSoon ? 'Coming Soon' : isOutOfStock ? 'Sold Out' : 'Order via WhatsApp'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;