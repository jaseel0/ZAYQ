import { Zap, Camera, Palette, Radio, Volume2, Hand, Droplets, Leaf } from "lucide-react";
const FeatureGrid = () => (
    <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold mb-16 text-center text-gray-900">
                Everything Your iPhone Case Should Be
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Zap, title: "Wireless Charging", desc: "Works with MagSafe & Qi chargers", color: "text-blue-600" },
                    { icon: Camera, title: "Camera Protection", desc: "Raised bezels protect your lenses", color: "text-purple-600" },
                    { icon: Palette, title: "Premium Finish", desc: "Scratch-resistant coating", color: "text-indigo-600" },
                    { icon: Radio, title: "MagSafe Ready", desc: "Built-in magnetic ring", color: "text-blue-600" },
                    { icon: Volume2, title: "Crystal Clear Audio", desc: "Precision-cut speaker holes", color: "text-purple-600" },
                    { icon: Hand, title: "Grip & Comfort", desc: "Non-slip textured sides", color: "text-indigo-600" },
                    { icon: Droplets, title: "Color Options", desc: "Match your iPhone style", color: "text-blue-600" },
                    { icon: Leaf, title: "Eco-Friendly", desc: "Recyclable packaging", color: "text-green-600" }
                ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                        <item.icon className={`${item.color} mb-4`} size={32} />
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default FeatureGrid;