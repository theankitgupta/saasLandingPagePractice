"use client";

import React, { Fragment } from "react";
import { Logo_Items } from "@/data/logoTicker";
import Image from "next/image";
/* LIBRARY: Framer Motion
  ----------------------
  - `motion`: A library that supercharges standard HTML elements with animation capabilities.
  - It handles the complex math of moving elements frame-by-frame (60fps).
*/
import { motion } from "framer-motion";

export default function LogoTicker() {
  return (
    <section className="py-24 px-4 overflow-x-clip">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>

        {/* LAYOUT: The Masking Container
          -----------------------------
          - `flex`: Sets up the context for the scrolling track inside.
          - `overflow-hidden`: CRITICAL. This acts as the "Crop Window". 
            Without this, the logos would scroll off the side of the page and create a scrollbar.
          - `mask-[...]`: This is a CSS Mask.
              - Logic: It makes the left and right edges transparent so logos appear to "fade in" from nothing and "fade out" into nothing.
              - Syntax: `transparent` (edge) -> `black` (visible area) -> `transparent` (edge).
        */}
        <div className="flex overflow-hidden mt-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mx-auto">
          {/* ANIMATION: The Infinite Track
            ------------------------------
            - `motion.div`: Replaces a standard `div`.
            - `flex-none`: This is VITAL. By default, flex children try to shrink to fit the parent.
                `flex-none` forces this div to remain massive (width of all logos combined) so it can scroll properly.
            - `gap-24`: Adds spacing between individual logos.
            - `pr-24`: Adds padding at the very end of the track.
                *Logic*: This padding mimics the `gap` so that when the loop resets, there isn't a jarring jump between the last logo of Set 1 and the first logo of Set 2.
          */}
          <motion.div
            /* THE PHYSICS OF INFINITE SCROLL
              ------------------------------
              1. `x: "-50%"`: We have duplicated the logos into 2 sets. 
                  - The total width is [Set 1] + [Set 2].
                  - We move the track to the left until [Set 1] is completely off-screen.
                  - At exactly -50% (the end of Set 1), the animation loops back to 0%.
                  - Because Set 2 is identical to Set 1, the user's eye can't tell that the loop reset.
            */
            animate={{ x: "-50%" }}
            /* THE TIMING CONFIGURATION
              ------------------------
              - `duration: 25`: Takes 25 seconds to complete one full loop. Lower = Faster.
              - `ease: "linear"`: IMPORTANT. Default easing has "slow start/slow end". 
                For a ticker, we want constant, robot-like speed so it doesn't pulse.
              - `repeat: Infinity`: Tells the animation to restart instantly forever.
            */
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24 mx-auto"
          >
            {/* LOGIC: The "Conveyor Belt" Array
              --------------------------------
              - `Array.from({ length: 2 })`: This creates an array [0, 1].
              - Logic: We render the entire list of logos TWICE.
              - Why? For an infinite loop, you always need at least two copies:
                1. The copy currently on screen.
                2. The copy waiting just off-screen to slide in seamlessly.
            */}
            {Array.from({ length: 2 }).map((_, i) => (
              /* COMPONENT: React Fragment
                -------------------------
                - We use `<Fragment>` (or `<>`) because we don't want to add an extra `<div>` here.
                - If we added a `<div>`, it would become a flex-child and mess up the `gap-24` spacing.
                - Fragment lets us "ghost" these elements directly into the parent flex container.
              */
              <Fragment key={i}>
                {Logo_Items.map((logo) => (
                  <Image
                    src={logo.image}
                    key={logo.name}
                    alt={logo.name}
                    className="h-8 w-auto"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
