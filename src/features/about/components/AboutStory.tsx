import { Smartphone } from "lucide-react";
const AboutStory = () => (
    <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative h-125 rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
                    <div className="w-120 h-full bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <Smartphone className="text-white opacity-30" size={150} />
                        <img
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGFF4_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Y01nUlJVNy9ZdHZDc1p5K2d3UndCRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUUV4N25mN091OHlyTTc3bnpLWHlnN1E"
                            alt="iPhone Cases"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-6">
                        <span className="text-blue-700 font-semibold text-sm">OUR STORY</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 leading-tight">
                        Protecting iPhones Since 2014
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <p>
                            We started with a simple mission: create the perfect iPhone case. One that protects
                            without adding bulk, showcases Apple's beautiful design, and feels premium in your hand.
                        </p>
                        <p>
                            Today, we're trusted by over 500,000 iPhone users worldwide. Our cases combine
                            military-grade protection with sleek aesthetics that complement your iPhone's design language.
                        </p>
                        <p className="font-semibold text-gray-900">
                            Every case is precision-engineered for your specific iPhone model, ensuring perfect
                            alignment with buttons, cameras, and wireless charging.
                        </p>
                    </div>

                    <div className="flex gap-8 mt-8">
                        {[
                            { number: "500K+", label: "iPhone Users" },
                            { number: "4.9★", label: "App Store Rating" },
                            { number: "10+", label: "Years" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default AboutStory;