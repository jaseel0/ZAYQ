import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, limit, } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useProductStore } from '../../../store/product.store';
import type { Product } from '../../../store/product.store';
import ProductCard from '../../products/components/ProductGrid/ProductCard';
const CasesSection: React.FC = () => {
    const { setProducts, products } = useProductStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(
            collection(db, "products"),
            limit(3)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const liveData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Product[];

            setProducts(liveData);
            setLoading(false);
        }, (error) => {
            console.error("Firebase subscription error:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [setProducts]);

    if (loading) {
        return (
            <div className="bg-[#f9f9f9] py-24 flex justify-center items-center">
                <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-.3s]" />
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
            </div>
        );
    }

    return (
        <section className="bg-[#f9f9f9] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter">
                            LATEST <span className="text-[#8F8F8F]">DROPS</span>
                        </h2>
                        <p className="mt-2 text-[#8F8F8F] font-bold uppercase tracking-[0.3em] text-[10px]">
                            Curated Selection
                        </p>
                    </div>
                    <a
                        href="/shop"
                        className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#8F8F8F] hover:border-[#8F8F8F] transition-colors"
                    >
                        View All Collections
                    </a>
                </div>

                {/* Product Display */}
                {products.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                        <p className="text-gray-400 font-medium">No products available at the moment.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.slice(0, 3).map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CasesSection;