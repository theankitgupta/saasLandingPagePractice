import CTA from "@/components/sections/cta/CTA";
import FAQ from "@/components/sections/faq/FAQ";
import Features from "@/components/sections/features/Features";
import Footer from "@/components/sections/footer/Footer";
import Hero from "@/components/sections/hero/Hero";
import Integrations from "@/components/sections/integrations/Integrations";
import Introduction from "@/components/sections/introduction/Introduction";
import LogoTicker from "@/components/sections/logoTicker/LogoTicker";
import NavigationBar from "@/components/sections/navigation/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
