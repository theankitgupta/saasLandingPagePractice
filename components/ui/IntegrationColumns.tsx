"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
/* LIBRARY: Framer Motion
  ----------------------
  - `motion.div`: Replaces standard <div> to allow hardware-accelerated animations.
*/
import { motion } from "framer-motion";
import { IntegrationType } from "@/data/integration";

export default function IntegrationColumns(props: {
  className?: string;
  integrationItems: IntegrationType;
  reverse?: boolean; // Prop to control scroll direction (Up vs Down)
}) {
  const { className, integrationItems, reverse } = props;

  return (
    /* ANIMATION: The Infinite Loop Logic
      ----------------------------------
      - We are moving the entire column on the Y-axis.
      
      SCENARIO A: Standard (Scroll UP / Move content UP)
      - `initial`: y: 0 (Start at normal position)
      - `animate`: y: "-50%" (Move up until the first set of items is gone)
      
      SCENARIO B: Reverse (Scroll DOWN / Move content DOWN)
      - `initial`: y: "-50%" (Start "pre-scrolled" halfway up)
      - `animate`: y: 0 (Move down until we are back at the start)
      
      - Why -50%?
        We render TWO copies of the list. When the first copy moves completely out of view (at 50% of total height), we snap back to the start. The user can't see the snap because Copy 2 looks identical to Copy 1.
    */
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 15, // Speed of the scroll (seconds per loop)
        repeat: Infinity, // Never stop
        ease: "linear", // Constant speed (no acceleration/braking)
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {/* DATA PREPARATION: Double Rendering
        -----------------------------------
        - `Array.from({ length: 2 })`: Creates loop [0, 1].
        - We map over this loop to render our list of items TWICE stacked vertically.
        - This is the secret to "Infinite" scrolling.
      */}
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrationItems.map((integration) => (
            <div
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
              key={integration.name}
            >
              {/* ICON CENTERING
                  - `flex justify-center`: Ensures icon is perfectly middle-aligned.
                  - `size-24`: Enforces strict dimensions so the grid doesn't break 
                    if one logo is weirdly shaped.
              */}
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="size-24"
                />
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
