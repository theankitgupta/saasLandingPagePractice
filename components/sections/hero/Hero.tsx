import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Pointer from "@/components/ui/Pointer";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";

export default function Hero() {
  return (
    /* LAYOUT CONTAINER (The Canvas)
      -----------------------------
      - `overflow-x-clip`: Crucial when using absolute positioning. 
        If your floating images/pointers accidentally go outside the screen width,
        this prevents the browser from showing a horizontal scrollbar.
      - `py-24`: Vertical breathing room (96px). 
      - `px-4`: Horizontal safety gutter for mobile devices.
    */
    <section className="py-24 px-4 overflow-x-clip">
      {/* CENTERING WRAPPER (The Reference Point)
          ---------------------------------------
          - `container mx-auto`: Centers the content block on the screen.
          - `relative`: This is the Anchor. Any child with `absolute` position 
            will position itself relative to THIS box, not the whole page.
      */}
      <div className="container mx-auto relative">
        {/* FLOATING IMAGES (Desktop Only)
          -------------------------------
          - `hidden lg:block`: Design choice to HIDE complex floating elements on mobile.
            Mobile screens are too cluttered for background decorations.
          - `absolute left-1/2`: Position anchors to the exact horizontal center.
          - `-ml-208`: "Margin Left -208". This is the "Magic Offset". 
            Instead of using `left-0`, we start at the center and move left by a fixed pixel amount.
            This keeps the image perfectly distant from the central text, regardless of screen width.
        */}
        <div className="hidden lg:block absolute top-16 left-1/2 -ml-208">
          <Image
            src={designExample1}
            alt="Design Example 1 Image"
            className="max-w-xs h-auto"
          />
        </div>
        <div className="hidden lg:block absolute -top-16 left-1/2 ml-120">
          <Image
            src={designExample2}
            alt="Design Example 2 Image"
            className="max-w-md h-auto"
          />
        </div>

        {/* POINTERS (Visual Flair)
          ------------------------
          - Same logic as images: Anchored to center (`left-1/2`), offset by margin (`ml-90`).
          - We pass props `name` and `color` to our custom Pointer component to reuse logic.
        */}
        <div className="hidden lg:block absolute left-1/2 top-100 -ml-100">
          <Pointer name="Vegeta" />
        </div>
        <div className="hidden lg:block absolute left-1/2 top-2 ml-90">
          <Pointer name="Goku" color="red" />
        </div>

        {/* BADGE SECTION (Flexbox Centering) */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨$7.5M seed round raised.
          </div>
        </div>

        {/* HEADLINE SECTION (Typography Scale) */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 max-w-4xl mx-auto">
          Impactful design, created effortlessly
        </h1>

        {/* SUBHEADING (Visual Hierarchy) */}
        <p className="text-center text-xl text-white/50 mt-8 px-2 max-w-166 mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>

        {/* FORM SECTION (Interactive State Styling)
          ----------------------------------------
          - `has-autofill:border-lime-400`:
            - `has-`: Checks children elements.
            - `:autofill`: CSS pseudo-class triggered by browser password managers.
            - Result: "If my child input is autofilled, make MY border Lime."
        */}
        <form className="flex justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto gap-2 has-autofill:border-lime-400 transition-colors">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 bg-transparent outline-none md:flex-1 rounded-full w-full"
            style={{
              /* SHADOW HACK: Overrides browser white background on autofill by painting an inset shadow */
              WebkitBoxShadow: "0 0 0 30px #0a0a0a inset",
              WebkitTextFillColor: "white",
            }}
          />
          <Button
            type="button"
            variant="primary"
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
