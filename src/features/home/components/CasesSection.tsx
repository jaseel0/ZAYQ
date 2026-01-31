import clsx from "clsx";

interface CaseProduct {
    id: number;
    name: string;
    price: string;
    imageColor: string;
    type: 'matte' | 'clear' | 'leather';
}

const CasesSection = () => {
    const cases: CaseProduct[] = [
        {
            id: 1,
            name: "Matte Black Case",
            price: "1,099",
            imageColor: "#1a1a1a",
            type: "matte"
        },
        {
            id: 2,
            name: "Frost Clear Case",
            price: "1,099",
            imageColor: "#f3f4f6",
            type: "clear"
        },
        {
            id: 3,
            name: "Leather Brown Case",
            price: "1,299",
            imageColor: "#8b5a2b",
            type: "leather"
        }
    ];

    return (
        <div className="bg-[#f9f9f9] min-h-screen py-16 px-4 font-sans text-[#1d1d1f]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-tight">
                    Our Cases
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {cases.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            {/* Product Image Container */}
                            <div className="w-full aspect-4/5 bg-[#ececec] rounded-xl flex items-center justify-center mb-8 overflow-hidden relative group transition-all duration-500">

                                {/* Visual Phone Case Representation */}
                                <div
                                    className={clsx(
                                        `relative w-44 h-88 rounded-[2.75rem] shadow-2xl border-[6px] border-[#2a2a2c] flex flex-col bg-[${item.imageColor}] items-center p-2 transition-transform duration-500 group-hover:scale-105`,
                                        item.type === 'clear' ? 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)' : 'none',
                                        
                                    )}
                                    // style={{
                                        // boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                                    // }}
                                >
                                    {/* Camera Module - Precise layout as per the image */}
                                    <div className="absolute top-5 left-5 w-18 h-18 bg-black/15 rounded-2xl p-1.5 grid grid-cols-2 gap-1.5">
                                        <div className="w-6 h-6 rounded-full bg-black/40 shadow-inner"></div>
                                        <div className="w-6 h-6 rounded-full bg-black/40 shadow-inner"></div>
                                        <div className="w-6 h-6 rounded-full bg-black/40 shadow-inner col-span-2 mx-auto"></div>
                                    </div>

                                    {/* Apple Logo Shadow for Clear Case */}
                                    {item.type === 'clear' && (
                                        <div className="mt-32 opacity-20 text-black">
                                            <svg viewBox="0 0 24 24" width="44" height="44" fill="currentColor">
                                                <path d="M17.05,20.28c-.96,.78-2.1,1.24-3.38,1.24-3.41,0-5.49-2.61-5.49-5.11,0-2.45,1.96-4.11,4.28-4.11,1.15,0,2.16,.4,2.94,.99l.13,.11,.24-.31c.42-.56,.97-.88,1.66-.88,.9,0,1.72,.57,2.22,1.38l.12,.2-.18,.15c-.45,.37-.69,.89-.69,1.49,0,.76,.37,1.36,.96,1.86l.22,.18-.13,.2c-.22,.33-.51,.6-.85,.79l-.21,.12,.13,.23c.31,.53,.47,1.1,.47,1.71,0,1.52-.96,2.83-2.44,3.56l-.18,.09Zm-.37-9.5c-.32-.42-.51-.95-.51-1.54,0-.24,.03-.47,.09-.69l.04-.15,.16,.04c1.1,.31,1.85,1.29,1.85,2.44,0,.08,0,.15-.01,.23l-.01,.14-.15-.02c-.52-.08-.98-.26-1.46-.45Z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Ground Shadow */}
                                <div className="absolute bottom-6 w-36 h-3 bg-black/10 blur-xl rounded-[100%]"></div>
                            </div>

                            {/* Product Info Labels */}
                            <div className="text-center space-y-1">
                                <h3 className="text-[1.35rem] font-medium text-[#1d1d1f]">
                                    {item.name}
                                </h3>
                                <p className="text-lg text-[#515154] font-normal">
                                    ₹{item.price}
                                </p>
                            </div>

                            {/* Buy Now Button - Exact styling from image */}
                            <button className="mt-6 w-45 bg-[#1d1d1f] text-white py-3.5 px-6 rounded-lg font-medium text-sm transition-all hover:bg-[#323234] active:scale-[0.98]">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CasesSection;