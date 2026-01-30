import React from "react";
const ComingSoonSection: React.FC = () => {
    return (
        <section className="pb-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-center mb-12 text-[#1a1a1a]">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="relative aspect-4/3 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
                        <span className="relative z-10 text-gray-500 font-medium tracking-wide">Coming Soon</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default ComingSoonSection;