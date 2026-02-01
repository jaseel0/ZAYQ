import { MapPin, Mail, MessageCircle, Instagram, Twitter, Globe } from "lucide-react";
const ContactInfo: React.FC = () => (
    <div className="space-y-10">
        <div className="space-y-6">
            <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={24} />
                </div>
                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8F8F8F]">WhatsApp</h4>
                    <p className="font-bold text-[#111111]">+91 00000 00000</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#111111]/5 rounded-xl flex items-center justify-center text-[#111111]">
                    <Mail size={20} />
                </div>
                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8F8F8F]">Email</h4>
                    <p className="font-bold text-[#111111]">hello@luxecase.com</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#111111]/5 rounded-xl flex items-center justify-center text-[#111111]">
                    <MapPin size={20} />
                </div>
                <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8F8F8F]">Studio</h4>
                    <p className="font-bold text-[#111111]">Noida, Sector 62</p>
                </div>
            </div>
        </div>

        <div className="flex gap-4 pt-6 border-t border-[#E6E3DF]">
            {[Instagram, Twitter, Globe].map((Icon, i) => (
                <button key={i} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-all" aria-label="button">
                    <Icon size={16} />
                </button>
            ))}
        </div>
    </div>
);
export default ContactInfo;