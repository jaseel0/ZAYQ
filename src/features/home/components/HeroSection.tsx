import React from "react";
const HeroSection: React.FC = () => {
    return (
        <section className="bg-[#f4f4f4] pt-24 pb-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">
                    Make your phone feel like yours.
                </h1>
                <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    Minimal iPhone cases designed for people who choose with intention.
                </p>
                <button className="bg-[#1a1a1a] text-white px-10 py-3 rounded-lg font-medium hover:bg-[#333] transition-all">
                    Explore ZAYQ
                </button>
            </div>
        </section>
    );
};
export default HeroSection;