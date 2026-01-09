import Hero from "@/components/sections/hero/Hero";
import LogoTicker from "@/components/sections/logoTicker/LogoTicker";
import NavigationBar from "@/components/sections/navigation/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <LogoTicker />
    </>
  );
}
