import { Link } from "react-router-dom"
import { Smartphone, Shield, Sparkles, Award, ChevronRight, Check, Zap, Camera, Palette, Radio, Volume2, Hand, Droplets, Leaf, Star } from "lucide-react"

function About() {
  return (
    <div className="bg-white">
      <section className="relative h-[700px] flex items-center overflow-hidden bg-black">
      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-50"
>
  <source
    src="https://pikkme.com/cdn/shop/videos/c/vp/8bd6813624eb4be19540154a990ac332/8bd6813624eb4be19540154a990ac332.HD-720p-4.5Mbps-39202667.mp4?v=0"
    type="video/mp4"
  />
</video>

<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-6xl md:text-8xl font-semibold mb-6 text-white tracking-tight">
            Crafted for iPhone
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light max-w-3xl mx-auto">
            Premium protection designed exclusively for your iPhone. 
            Where innovation meets elegance.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-all"
          >
            Shop iPhone Cases
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Perfect Fit for Every iPhone
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            From the latest iPhone 16 Pro Max to classic models, we've got you covered
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "iPhone 16 Pro Max",
              "iPhone 16 Pro",
              "iPhone 16 Plus",
              "iPhone 16",
              "iPhone 15 Pro Max",
              "iPhone 15 Pro",
              "iPhone 15 Plus",
              "iPhone 15",
              "iPhone 14 Pro Max",
              "iPhone 14 Pro",
              "iPhone 14 Plus",
              "iPhone 14"
            ].map((model, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Smartphone className="text-blue-600 mx-auto mb-3" size={32} />
                <div className="text-sm font-medium text-gray-900">{model}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
              <div className="w-120 h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <Smartphone className="text-white opacity-30" size={150} />
                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGFF4_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Y01nUlJVNy9ZdHZDc1p5K2d3UndCRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUUV4N25mN091OHlyTTc3bnpLWHlnN1E" alt="iPhone Cases" className="w-full h-full object-cover" />
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

      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
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
                icon: <Shield size={36} />,
                title: "MagSafe Compatible",
                description: "Perfectly aligned magnets work seamlessly with all MagSafe accessories and wireless chargers. Snap on, charge up, no compromises.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Sparkles size={36} />,
                title: "Premium Materials",
                description: "Aircraft-grade aluminum buttons, anti-yellowing polycarbonate, and soft-touch silicone. Materials worthy of your iPhone.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Award size={36} />,
                title: "Military Drop Protection",
                description: "12ft drop tested and MIL-STD-810G certified. Advanced air cushion technology protects your iPhone from life's accidents.",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                The iPhone Case Promise
              </h2>
              <div className="space-y-6">
                {[
                  "Precision-cut for your exact iPhone model",
                  "100% MagSafe and wireless charging compatible",
                  "Military-grade drop protection tested",
                  "Premium materials that won't yellow or fade",
                  "Lifetime warranty against defects",
                  "Free returns within 30 days"
                ].map((promise, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-gray-300">{promise}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Shield className="text-white opacity-40" size={140} />
                <img src="https://cdn.thewirecutter.com/wp-content/media/2024/10/BEST-IPHONE-16-CASES-2048px-4833-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" alt="Quality" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">
            Ready to Protect Your iPhone?
          </h2>
          <p className="text-2xl mb-12 text-blue-100">
            Shop our collection of premium iPhone cases designed for every model
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Shop iPhone Cases
              <ChevronRight size={22} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About