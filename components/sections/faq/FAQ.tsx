"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Tag from "@/components/ui/Tag";
import { FAQ_Items } from "@/data/faq";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ() {
  /* CONCEPT: State Logic
    -------------------
    Currently, `selectedIndex` is a static constant (0), which means the first FAQ item is permanently open. In a real-world project, you would replace this with `useState` to allow users to click and toggle items.
  */
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* VIEW: Header Grouping
            We use a consistent pattern: Tag -> Headline -> Description (if any).
            `flex justify-center` ensures the Tag component stays centered regardless of width.
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
            - `mt-12`: High margin creates a clear separation between the "Heading" and the "Content".
            - `flex flex-col gap-6`: Vertical stack with consistent spacing between question boxes.
            - `max-w-xl mx-auto`: Keeps the FAQ list narrow and centered. 
              DESIGN TIP: Reading long lines of text is tiring; keeping FAQs narrow improves focus.
        */}
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {FAQ_Items.map((faq, faqIndex) => (
            <div
              className="bg-neutral-900 border border-white/10 rounded-2xl p-6"
              key={faq.question}
            >
              {/* LAYOUT: Question Row
                  `flex justify-between`: Pushes the text to the left and the icon to the right.
                  `items-center`: Ensures the plus icon is vertically centered with the text.
              */}
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>

                {/* SVG: The Interactive Icon
                    -------------------------
                    - `shrink-0`: Prevents the icon from getting squashed if the question text is very long.
                    - `rotate-45`: A clever design trick. Instead of swapping icons, we just rotate 
                      the "plus" 45 degrees to turn it into an "X". 
                    - This is handled conditionally: `selectedIndex === faqIndex && "rotate-45"`.
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

              {/* VIEW: The Answer (Conditional Content)
                  ------------------------------------
                  - Logic: If this item isn't the selected one, we add the `hidden` class.
                  - `mt-6`: Spacing between the question and the revealed answer.
                  - `text-white/50`: Dulls the answer text to emphasize the question.
              */}
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: 'auto',
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
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
