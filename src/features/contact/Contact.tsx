import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F4F1] p-6 md:p-12 lg:p-24 selection:bg-[#111111] selection:text-white">
      <div className="max-w-6xl mx-auto">

        <ContactHero />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="space-y-12">
            <ContactInfo />
            {/* Minimal Map Placeholder */}
            <div className="w-full h-32 bg-[#E6E3DF] rounded-2xl flex items-center justify-center">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#8F8F8F]">Our Location</span>
            </div>
          </div>

          <div className="bg-[#EFECE8] p-8 md:p-10 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-[#111111] tracking-tight mb-8">Direct Message</h3>
            <ContactForm />
          </div>

        </div>

        <footer className="mt-24 pt-8 border-t border-[#E6E3DF] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black uppercase tracking-widest text-[#8F8F8F]">© 2024 LuxeCase Studio</p>
          <div className="flex gap-6">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#8F8F8F]">Privacy</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-[#8F8F8F]">Terms</span>
          </div>
        </footer>

      </div>
    </div>
  );
};
export default ContactPage;