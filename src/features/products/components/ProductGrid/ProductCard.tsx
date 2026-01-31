import React from "react";
import { Apple } from "lucide-react"
import type { Product } from "../../../../store/product.store"
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-4/5 rounded-3xl bg-[#E6E3DF] flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out group-hover:bg-[#EFECE8]">
                <div
                    className="relative w-32 h-64 sm:w-40 sm:h-80 rounded-[2.8rem] shadow-2xl border-[6px] border-[#1C1C1C] flex flex-col items-center p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{
                        backgroundColor: product.colorHex,
                        backgroundImage: product.type === 'clear' ? 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)' : 'none',
                    }}
                >
                    <div className="absolute top-5 left-5 w-14 h-14 bg-black/10 rounded-xl p-1.5 grid grid-cols-2 gap-1">
                        <div className="w-5 h-5 rounded-full bg-black/30"></div>
                        <div className="w-5 h-5 rounded-full bg-black/30"></div>
                        <div className="w-5 h-5 rounded-full bg-black/30 col-span-2 mx-auto"></div>
                    </div>
                    {product.type === 'clear' && <div className="mt-32 opacity-10"><Apple size={40} /></div>}
                </div>
                <div className="absolute bottom-8 w-32 h-4 bg-black/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="mt-6 flex flex-col items-center text-center">
                <h3 className="text-lg font-bold text-[#111111]">{product.name}</h3>
                <p className="text-[#8F8F8F] text-sm font-medium">{product.category}</p>
                <p className="text-[#111111] font-semibold mt-1">₹{product.price.toLocaleString()}</p>
                <button className="mt-5 w-full max-w-40 py-3 bg-[#111111] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:bg-[#2A2A2A] hover:scale-[1.02]">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
export default ProductCard;