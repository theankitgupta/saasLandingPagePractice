import Button from "@/components/ui/Button";
import React from "react";

export default function Hero() {
  return (
    /* LAYOUT CONTAINER (The Canvas)
      -----------------------------
      - `py-24`: Adds significant vertical breathing room (96px). 
        Essential for Hero sections to look premium and not cramped.
      - `px-12`: Adds horizontal padding.
          *TEMPLATE NOTE*: This ensures content never hits the very edge of the screen. 
          For mobile specifically, `px-4` is often safer.
    */
    <section className="py-24 px-4">
      {/* CENTERING WRAPPER
        - `container mx-auto`: Standard Tailwind pattern. 
          1. `container` sets a max-width based on the screen size (breakpoints).
          2. `mx-auto` sets margin-left and margin-right to auto, effectively centering the container.
      */}
      <div className="container mx-auto">
        {/* ELEMENT 1: The Badge (Flexbox Centering)
          -----------------------------------------
          - We wrap the badge in a `div` with `flex justify-center`.
          - WHY? The badge itself is `inline-flex`. If we didn't wrap it, it would sit on the left. This wrapper forces it to the middle.
        */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨$7.5M seed round raised.
          </div>
        </div>

        {/* ELEMENT 2: The Headline (Typography)
          ------------------------------------
          - `text-6xl`: Large scale for impact.
          - `text-center`: Aligns the text itself to the center.
          - `mt-6`: Spacing. A consistent "margin-top" scale (mt-6, mt-8) creates vertical rhythm.
        */}
        <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>

        {/* ELEMENT 3: The Subheading (Visual Hierarchy)
          ---------------------------------------------
          - `text-white/50`: This is crucial for design.
            By reducing opacity to 50%, we lower the "contrast". 
            This tells the user's eye: "Read the big white text first (H1), then read this secondary text."
          - `px-8`: Adds internal padding to this paragraph, preventing it from getting too wide visually 
            compared to the headline.
        */}
        <p className="text-center text-xl text-white/50 mt-8 px-2 max-w-166 mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>

        {/* ELEMENT 4: The Input Group (Component Composition)
          ---------------------------------------------------
          - `flex justify-between`: The layout engine for this form.
            It places the items (Input + Button) on the same line.
            `justify-between` pushes them apart if there is extra space, though here they are tightly packed by the border.
          - `border border-white/15`: Subtle boundary.
          - `rounded-full`: Fully rounded corners (Pill shape) are a modern UI trend.
        */}
        <form className="flex justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            /* `bg-transparent`: Removes default white background so it blends with the dark theme. */
            // flex-1 at medium and above screen sizes so that the input field take all the right side available empty spaces
            className="px-4 bg-transparent outline-none md:flex-1"
          />
          <Button
            type="button"
            variant="primary"
            /* `whitespace-nowrap`: Prevents "Sign Up" from breaking into two lines 
               if the screen gets too small. */
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
