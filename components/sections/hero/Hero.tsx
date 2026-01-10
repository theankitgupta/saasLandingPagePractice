"use client";

import React, { useEffect } from "react";
import Image from "next/image";
/* LIBRARY: Framer Motion
  ----------------------
  - `motion`: The core component wrapper. It turns standard HTML tags (div, span) into animated ones (motion.div, motion.span).
  - `useAnimate`: A hook for "Imperative Animations". *Concept*: Instead of just saying "animate to X", this allows us to build a complex TIMELINE (Step 1 -> Step 2 -> Step 3) using code.
*/
import { motion, useAnimate } from "framer-motion";
import Button from "@/components/ui/Button";
import Pointer from "@/components/ui/Pointer";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  /* ANIMATION: Scoped References
    ---------------------------
    - `useAnimate` gives us a `scope` (a Ref to the HTML element) and an `animate` function (to control that specific element).
    - We create separate scopes for the Images and the Pointers so we can control them individually but coordinate their timing.
  */
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  /* LOGIC: The Animation Sequence (The "Director")
    --------------------------------------------
    - `useEffect`: Triggers this logic as soon as the component "mounts" (loads on screen).
    - The arrays inside `animate([])` define a KEYFRAME SEQUENCE.
  */
  useEffect(() => {
    // SCENE 1: The Left Side (Vegeta)

    // 1. Image appears (but is hidden initially via opacity)
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    // 2. Pointer enters and "clicks" the image
    leftPointerAnimate([
      // Step A: Cursor fades in
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      // Step B: Cursor moves to the "Click Position" (x: -200)
      [leftPointerScope.current, { y: 0, x: -200 }, { duration: 0.5 }],
      // Step C: The "Click" Effect (Cursor moves down and up quickly on Y-axis)
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] }, // Keyframes: Start(0) -> Down(16px) -> Back(0)
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    // SCENE 2: The Right Side (Goku) - Delayed

    // 1. Image appears later (delay: 1.5s)
    rightDesignAnimate([
      // Note the `delay: 1.5`: This waits for the left side to finish before starting.
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    // 2. Pointer enters later
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 }, // Syncs with the right image
      ],
      [rightPointerScope.current, { y: 0, x: 150 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] }, // The "Click" bounce
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, [
    // Dependency Array: Ensures animation only runs once all refs are ready.
    leftDesignScope,
    leftDesignAnimate,
    leftPointerScope,
    leftPointerAnimate,
    rightDesignScope,
    rightDesignAnimate,
    rightPointerScope,
    rightPointerAnimate,
  ]);

  return (
    /* LAYOUT CONTAINER (The Canvas)
      -----------------------------
      - `overflow-x-clip`: Crucial when using absolute positioning. If your floating images/pointers accidentally go outside the screen width, this prevents the browser from showing a horizontal scrollbar.
      - `style={{ cursor: ... }}`: CUSTOM CURSOR We override the default mouse arrow with our own SVG (`cursor-you.svg`). `auto` is the fallback if the SVG fails to load.
    */
    <section
      className="py-24 px-4 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      {/* CENTERING WRAPPER (The Reference Point)
          - `relative`: This is the Anchor. Any child with `absolute` position will position itself relative to THIS box, not the whole page.
      */}
      <div className="container mx-auto relative">
        {/* ANIMATED ELEMENT: Left Design Image
          ------------------------------------
          - `motion.div`: Must use `motion` tag to animate.
          - `ref={leftDesignScope}`: Connects this div to our `useAnimate` hook logic above.
          - `initial`: The starting state BEFORE animation runs. Important! We hide it (opacity: 0) and offset it (x/y) so it doesn't flash on screen before the animation starts.
          - `drag`: MAGIC PROP. Just adding this word makes the element draggable by the user.
        */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="hidden lg:block absolute top-16 left-1/2 -ml-208"
        >
          <Image
            src={designExample1}
            alt="Design Example 1 Image"
            className="max-w-xs h-auto"
            draggable="false" // Prevents the native browser "ghost image" drag behavior
          />
        </motion.div>

        {/* ANIMATED ELEMENT: Left Pointer (Vegeta)
          ---------------------------------------
          - Note: This is a separate div from the image. 
          - Why? We want the pointer to move INDEPENDENTLY of the image (e.g., fly in from a different angle) before it "clicks" the image.
        */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -300 }}
          className="hidden lg:block absolute left-1/2 top-100 -ml-100"
        >
          <Pointer name="Vegeta" />
        </motion.div>

        {/* ANIMATED ELEMENT: Right Design Image
          -------------------------------------
          - `drag`: Enabled for interaction.
          - `initial`: Starts hidden and offset to the right.
        */}
        <motion.div
          ref={rightDesignScope}
          drag
          initial={{ opacity: 0, x: 100, y: 100 }}
          className="hidden lg:block absolute -top-16 left-1/2 ml-120"
        >
          <Image
            src={designExample2}
            alt="Design Example 2 Image"
            className="max-w-md h-auto"
            draggable="false"
          />
        </motion.div>

        {/* ANIMATED ELEMENT: Right Pointer (Goku) */}
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 250, y: 100 }}
          className="hidden lg:block absolute left-1/2 top-2 ml-90"
        >
          <Pointer name="Goku" color="red" />
        </motion.div>

        {/* STATIC CONTENT: Badge Standard Flexbox centering (explained in previous lessons).
        */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨$7.5M seed round raised.
          </div>
        </div>

        {/* STATIC CONTENT: Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 max-w-4xl mx-auto">
          Impactful design, created effortlessly
        </h1>

        {/* STATIC CONTENT: Subheading */}
        <p className="text-center text-xl text-white/50 mt-8 px-2 max-w-166 mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>

        {/* STATIC CONTENT: Interactive Form `has-autofill`: Reacts to browser auto-completion.
        */}
        <form className="flex justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto gap-2 has-autofill:border-lime-400 transition-colors">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 bg-transparent outline-none md:flex-1 rounded-full w-full"
            style={{
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
