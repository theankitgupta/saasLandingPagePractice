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
        /* CONCEPT: React Fragments (<> ... </>)
        - React components must return a single parent element.
        - We use a Fragment so we don't add an unnecessary <div> to the DOM, keeping the HTML structure clean and helping with SEO.
        */
        <>
        {/* 1. NAVIGATION: The Utility Layer
            Always placed at the top. Even if it's 'fixed' or 'sticky', its logical position in the code is first for accessibility (screen readers).
        */}
        <NavigationBar />

        {/* 2. HERO: The Hook
            The most important section. It establishes the "Above the Fold" visuals and the primary value proposition.
        */}
        <Hero />

        {/* 3. LOGO TICKER: Social Proof (Immediate)
            Placed immediately after the Hero to build trust. 
            It tells the user: "Big companies already trust us, so you should too."
        */}
        <LogoTicker />

        {/* 4. INTRODUCTION: The Narrative Shift
            Slows down the pace with large, meaningful typography. 
            It transitions the user from "looking" to "reading."
        */}
        <Introduction />

        {/* 5. FEATURES: The Value (Detailed)
            The "Bento Grid" layout here explains the 'How' and 'What' of the product.
        */}
        <Features />

        {/* 6. INTEGRATIONS: The Ecosystem
            Showcases compatibility. In modern SaaS, "playing well with others" is a major selling point.
        */}
        <Integrations />

        {/* 7. FAQ: Objection Handling
            Strategic placement. After seeing features and integrations, users usually have specific questions. We answer them here to keep them in the "funnel."
        */}
        <FAQ />

        {/* 8. CTA: The Final Push
            The high-energy infinite marquee. This is the last thing the user sees before the page ends, designed to drive a click.
        */}
        <CTA />

        {/* 9. FOOTER: The Safety Net
            Provides "Wayfinding" (links) for users who scrolled all the way to the bottom and need to find specific pages.
        */}
        <Footer />
        </>
    );
}
