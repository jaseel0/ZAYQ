import { Shield, Sparkles, Award } from "lucide-react";
const CoreFeatures = () => (
    <section className="py-20 px-4 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
                    Designed for iPhone, Built to Last
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Premium materials and precision engineering that honor Apple's design philosophy
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: Shield,
                        title: "MagSafe Compatible",
                        description: "Perfectly aligned magnets work seamlessly with all MagSafe accessories and wireless chargers. Snap on, charge up, no compromises.",
                        color: "from-blue-500 to-blue-600"
                    },
                    {
                        icon: Sparkles,
                        title: "Premium Materials",
                        description: "Aircraft-grade aluminum buttons, anti-yellowing polycarbonate, and soft-touch silicone. Materials worthy of your iPhone.",
                        color: "from-purple-500 to-purple-600"
                    },
                    {
                        icon: Award,
                        title: "Military Drop Protection",
                        description: "12ft drop tested and MIL-STD-810G certified. Advanced air cushion technology protects your iPhone from life's accidents.",
                        color: "from-indigo-500 to-indigo-600"
                    }
                ].map((feature, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                        <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${feature.color} text-white mb-6`}>
                            <feature.icon size={36} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default CoreFeatures;