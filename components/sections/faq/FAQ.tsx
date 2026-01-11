"use client"; // REQUIRED: This component uses interactivity (onClick, useState), so it must be a Client Component.

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Tag from "@/components/ui/Tag";
import { FAQ_Items } from "@/data/faq";
/* LIBRARY: Framer Motion
  ----------------------
  - `motion`: Wrapper to make elements animatable.
  - `AnimatePresence`: Essential for "Exit Animations". It allows React to keep an element in the DOM *just long enough* to play its fade-out/collapse animation before removing it.
*/
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ() {
  /* CONCEPT: Accordion State Logic
    ------------------------------
    - We store the `index` of the currently open item.
    - `0`: The first item starts open.
    - `null`: If we wanted all closed initially.
    - Logic: Only ONE item can match `selectedIndex` at a time. This creates an "Exclusive Accordion" (opening one automatically closes the others).
  */
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* VIEW: Header Grouping
            Standardized layout pattern: Tag -> Headline.
            `flex justify-center`: Keeps the tag centered relative to the section.
        */}
        <div className="flex justify-center">
          <Tag>FAQ</Tag>
        </div>

        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>

        {/* VIEW: The Accordion List
            ------------------------
            - `mt-12`: High margin for visual separation.
            - `max-w-xl`: Restricts width. 
              *Design Rule*: Text lines shouldn't be too long (approx 60-75 chars) for optimal readability. This constraint enforces that.
        */}
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {FAQ_Items.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-6"
            >
              {/* INTERACTION: The Trigger
                  ------------------------
                  - The header row acts as the button. 
                  - `onClick`: Sets this item's index as the "Selected" one.
                    This triggers a re-render, causing the previously open item to close and this one to open.
                  - `cursor-pointer`: UX cue that this area is clickable.
              */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>

                {/* ANIMATION: Icon Rotation
                    ------------------------
                    - Instead of two icons (+ and -), we use one (+) and rotate it 45deg.
                    - `transition duration-300`: CSS transition is sufficient for simple rotation.
                    - Logic: If this is the selected index, apply the rotation class.
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
                  className={twMerge(
                    "feather feather-plus text-lime-400 shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1={12} y1={5} x2={12} y2={19}></line>
                  <line x1={5} y1={12} x2={19} y2={12}></line>
                </svg>
              </div>

              {/* ANIMATION: The Collapse Effect
                  ------------------------------
                  - `AnimatePresence`: Monitors the conditional rendering (`selectedIndex === faqIndex`). When the condition becomes false, it forces the `motion.div` to play its `exit` prop.
              */}
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    /* DYNAMICS: The "Auto" Height Problem
                      - CSS transitions cannot animate to `height: auto`.
                      - Framer Motion solves this by measuring the content and calculating the exact pixel height.
                      - `marginTop`: We animate the margin too! Otherwise, the text would vanish, but the gap between the title and text would snap instantly, looking jerky.
                    */
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24, // Matches the 'mt-6' (6 * 4px = 24px) spacing we want.
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    /* STYLING:
                      - `overflow-hidden`: CRITICAL. As the box shrinks, the text inside stays the same size. Without overflow-hidden, the text would "spill out" of the closing box.
                    */
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-white/50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
