import { ShieldCheck,Zap,Smartphone } from "lucide-react";
import { motion } from "framer-motion";
const TaglineSection = () => {
  return (
    <section className="py-32 bg-white flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-medium text-[#111111] leading-tight text-center max-w-4xl mx-auto"
        >
          Form meets function. <span className="text-[#8F8F8F]">Our cases aren't just covers, they are an extension of your device's soul.</span> Minimal design, maximum durability.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          {[
            { icon: <ShieldCheck strokeWidth={1} />, title: "Military Grade", desc: "Rigorous drop testing standards for every ZAYQ product." },
            { icon: <Zap strokeWidth={1} />, title: "MagSafe Ready", desc: "Seamless magnetic integration with your favorite accessories." },
            { icon: <Smartphone strokeWidth={1} />, title: "Feather Light", desc: "Premium protection adding only 1.2mm to your device profile." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#F6F4F1]"
            >
              <div className="mb-6 text-[#111111]">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
              <p className="text-[#8F8F8F] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TaglineSection;