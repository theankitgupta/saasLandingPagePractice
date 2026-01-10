"use client";

import Tag from "@/components/ui/Tag";
import React, { useEffect, useRef, useState } from "react";
/* LIBRARY: Framer Motion Hooks
  ----------------------------
  - `useScroll`: Detects scroll position.
  - `useTransform`: The mathematical engine. It maps one range of numbers to another (e.g., Map "0% to 100% scroll" -> "0 to 30 words").
*/
import { useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function Introduction() {
  const Intro_Text =
    "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.";

  // LOGIC: Data Preparation
  // We split the paragraph into an array of individual words so we can style them one by one.
  const words = Intro_Text.split(" ");

  /* ANIMATION LOGIC: The Scroll Trigger
    -----------------------------------
    1. `scrollTarget`: We need a reference to a specific HTML element to track.
    2. `useScroll`: Monitors how far the user has scrolled past that target.
        - `offset: ["start end", "end end"]`: 
          * Start animation when the TOP of the target hits the BOTTOM of the screen.
          * End animation when the BOTTOM of the target hits the BOTTOM of the screen.
  */
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  /* ANIMATION LOGIC: Mapping Scroll to Content
    ------------------------------------------
    - Input: `scrollYProgress` goes from 0 (start) to 1 (end).
    - Output: We transform that 0-1 decimal into a whole number from 0 to `words.length`.
    - Example: If scrolled halfway (0.5), the index becomes 15 (half the words).
  */
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  /* INTERACTION: Bridging Motion to React State
    -------------------------------------------
    - Framer Motion values live outside React's render cycle for performance.
    - However, to change Tailwind classes (`text-white/15` vs `text-white`), we need a re-render.
    - This `useEffect` listens to the motion value and updates React state.
  */
  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40 px-4">
      <div className="container mx-auto">
        {/* LAYOUT CONCEPT: Sticky Scrolling
            --------------------------------
            - `sticky top-20`: This element effectively "pins" itself to the top area of the viewport.
            - Why? We want the text to stay perfectly visible in the center while the user scrolls through the "invisible scroll track" (defined below).
        */}
        <div className="sticky top-24 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introduction Layers</Tag>
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>{" "}
            {/* ANIMATION VIEW: The Text Reveal
              --------------------------------
              - We allow the container to wrap naturally.
              - We iterate through the words array.
            */}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    /* BASE STATE:
                      - `transition duration-500`: Smooths the color change so it doesn't flicker.
                      - `text-white/15`: The default "inactive" state (dimmed).
                    */
                    "transition duration-500 text-white/15",

                    /* ACTIVE STATE:
                      - If the scroll index is higher than this word's index, turn it bright white.
                    */
                    wordIndex < currentWord && "text-white"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-lime-400 block md:px-4">
              That&apos;s why we built Layers
            </span>
          </div>
        </div>

        {/* LAYOUT CONCEPT: The Ghost Scroll Track
            --------------------------------------
            - `h-[150vh]`: This empty div is 150% the height of the screen.
            - Purpose: It takes up physical space to force the browser to scroll.
            - Interaction: As the user scrolls past this invisible empty space, the `sticky` content above stays pinned, and the `useScroll` hook calculates the progress to light up the words.
        */}
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
