import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
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
    </>
  );
}
