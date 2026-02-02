import { Star } from "lucide-react";
const Testimonials = () => (
    <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
                    Loved by iPhone Users
                </h2>
                <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        review: "Finally, a case that doesn't hide my iPhone's beautiful design. The MagSafe works flawlessly and it's survived multiple drops!",
                        name: "Sarah M.",
                        model: "iPhone 15 Pro Max",
                        rating: 5
                    },
                    {
                        review: "Best case I've owned. The camera protection is excellent and wireless charging works perfectly. Worth every penny.",
                        name: "Michael C.",
                        model: "iPhone 16 Pro",
                        rating: 5
                    },
                    {
                        review: "Sleek, protective, and the buttons feel amazing. This is what an iPhone case should be. Highly recommend!",
                        name: "Emily R.",
                        model: "iPhone 15",
                        rating: 5
                    }
                ].map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.review}"</p>
                        <div className="border-t border-gray-100 pt-4">
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.model} Owner</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default Testimonials;