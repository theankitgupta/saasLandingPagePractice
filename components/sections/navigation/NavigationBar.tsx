"use client"; // REQUIRED: This directive is needed because we use hooks (useState) and browser interactions.

import React, { useState } from "react";
import Image from "next/image";
import { Nav_Items } from "@/data/navigationLink";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import { twMerge } from "tailwind-merge";
/* LIBRARY: Framer Motion
  We import 'motion' to create animated elements and 'AnimatePresence' to handle animations when an element is REMOVED from the DOM (like closing a menu).
*/
import { AnimatePresence, motion } from "framer-motion";

export default function NavigationBar() {
  /* STATE: Interaction Logic
    We need a boolean state (`true`/`false`) to track if the mobile menu is open.
    `isOpen` drives strictly the LOGIC. The VISUALS react to this variable.
  */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* LAYOUT: Fixed Positioning
          -------------------------
          - `fixed w-full top-0`: Removes the navbar from normal flow and pins it to the viewport top.
          - `z-50`: Ensures it floats ABOVE everything else (Hero images, text, etc).
      */}
      <section className="p-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container mx-auto max-w-5xl">
          {/* STYLE: Glassmorphism Container
              ------------------------------
              - `bg-neutral-950/70`: Sets a dark background with 70% opacity.
              - `backdrop-blur`: The browser blurs whatever is BEHIND this element.
              - Result: The navbar feels like "frosted glass" floating over the page content.
          */}
          <div className="border border-white/15 rounded-[27px] md:rounded-full overflow-hidden bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
              {/* 1. BRANDING */}
              <div className="">
                <Image
                  src={logoImage}
                  alt="Layers Logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>

              {/* 2. DESKTOP NAVIGATION (Hidden on Mobile) */}
              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-6 font-medium">
                  {Nav_Items.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      className="transition duration-200 hover:text-lime-400"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* 3. ACTIONS & HAMBURGER */}
              <div className="flex justify-end gap-4">
                {/* INTERACTION: The Animated Hamburger Icon
                    ----------------------------------------
                    This SVG acts as a button. It transforms from 3 lines (Burger) to an X (Close) based on `isOpen`.
                */}
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden cursor-pointer" // Added cursor-pointer for UX
                  onClick={() => setIsOpen(!isOpen)} // Toggle state on click
                >
                  {/* TOP LINE: Rotates down 45deg
                      - `origin-left`: Critical! Pivots the line from the left tip instead of the center.
                      - `-translate-y-1`: Tweaks position to line up the X perfectly.
                  */}
                  <line
                    x1={3}
                    y1={6}
                    x2={21}
                    y2={6}
                    className={twMerge(
                      "origin-left transition", // Use CSS transition for simple rotation
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>

                  {/* MIDDLE LINE: Fades out
                      - `opacity-0`: Disappears when menu is open.
                  */}
                  <line
                    x1={3}
                    y1={12}
                    x2={21}
                    y2={12}
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>

                  {/* BOTTOM LINE: Rotates up 45deg
                      - Also pivots from left to cross the top line.
                  */}
                  <line
                    x1={3}
                    y1={18}
                    x2={21}
                    y2={18}
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>

                {/* DESKTOP BUTTONS */}
                <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Sign Up
                </Button>
              </div>
            </div>

            {/* ANIMATION: The Dropdown Menu
                ----------------------------
                - `AnimatePresence`: React normally deletes components instantly when `isOpen` becomes false. This wrapper forces React to WAIT until the exit animation finishes before deleting it from the DOM.
            */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  /* FRAMER MOTION PROPS:
                    - `initial`: Starting state (height: 0, invisible).
                    - `animate`: Target state (height: "auto"). "auto" is powerful—it calculates the exact height needed for the content.
                    - `exit`: State to animate TO when unmounting (height: 0).
                  */
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  /* VISUAL CLEANUP:
                    - `overflow-hidden`: Essential during height animations. Without this, the text would be visible "spilling out" of the menu while the container shrinks.
                  */
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {Nav_Items.map((item) => (
                      <a key={item.label} href={item.href} className="">
                        {item.label}
                      </a>
                    ))}
                    <Button variant="secondary">Log In</Button>
                    <Button variant="primary">Sign Up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* LAYOUT: The "Ghost" Spacer
          --------------------------
          - Since the Navbar is `fixed` (taken out of flow), the Hero section 
            will slide underneath it and be hidden.
          - We place this empty `div` here with the SAME height as the navbar 
            (approx `pb-24`) to push the Hero down so it starts visible.
      */}
      <div className="pb-24 md:pb-28 lg:pb-32"></div>
    </>
  );
}
