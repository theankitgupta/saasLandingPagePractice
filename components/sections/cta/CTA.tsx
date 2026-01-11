"use client";

import React, { useEffect, useRef, useState } from "react";
/* LIBRARY: Framer Motion Controls
  -------------------------------
  - `AnimationPlaybackControls`: TypeScript type for the object returned by `animate()`. It lets us pause, play, or change the speed of an active animation.
  - `useAnimate`: The hook that gives us the `scope` (ref) and `animate` (function).
*/
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";

export default function CTA() {
  /* STATE: Interaction Tracking
    - We need to know if the user is hovering to trigger the speed change.
  */
  const [isHovered, setIsHovered] = useState(false);

  /* REF: Storing the Animation Instance
    - `useRef`: We store the animation CONTROLLER here. 
    - Why not state? We don't want to re-render the component just because we stored the animation.
    - We need access to this *exact* running animation later to change its `.speed` property.
  */
  const animation = useRef<AnimationPlaybackControls>(null);

  /* HOOK: Scoped Animation
    - `scope`: Attaches to the HTML element we want to move.
    - `animate`: The function we call to start moving it.
  */
  const [scope, animate] = useAnimate();

  /* LOGIC: Start the Marquee (On Mount)
    -----------------------------------
    - This runs ONCE when the component loads.
    - We define the infinite loop here.
  */
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" }, // Move to the left by 50% of width
      {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    );
  }, [scope, animate]);

  /* LOGIC: Dynamic Speed Control
    ----------------------------
    - This runs every time `isHovered` changes (True <-> False).
    - CRITICAL TECHNIQUE: We do NOT stop and restart the animation. Restarting would make the text jump back to the beginning.
    - Instead, we modify the `speed` property of the RUNNING animation.
       * 1 = Normal Speed
       * 0.5 = Half Speed (Slow Motion)
       * 0 = Paused
  */
  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5; // Slow down on hover
      } else {
        animation.current.speed = 1; // Resume normal speed
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="container overflow-x-clip p-4 flex mx-auto">
        {/* ANIMATION TARGET
            ----------------
            - `ref={scope}`: Connects this div to the `useAnimate` hook.
            - `onMouseEnter`: Sets state to true -> Triggers the speed effect.
            - `group`: Allows children (the text) to change color when the PARENT is hovered.
            - `cursor-pointer`: UX cue that this is interactive.
        */}
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="flex items-center gap-8 md:gap-16" key={i}>
              <span className="text-lime-400 text-7xl">&#10038;</span>

              {/* INTERACTION: Color Transition
                  - `group-hover:text-lime-400`: When the parent marquee is hovered, turn this text green.
                  - Framer Motion handles the color transition smoothly automatically because it's inside a `motion.div` tree, or you can add a CSS transition class.
              */}
              <span className="group-hover:text-lime-400 transition duration-500">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
