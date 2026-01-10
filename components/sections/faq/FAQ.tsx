import Tag from "@/components/ui/Tag";
import { FAQ_Items } from "@/data/faq";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function FAQ() {
  const selectedIndex = 0;
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Tag>FAQ</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {FAQ_Items.map((faq, faqIndex) => (
            <div
              className="bg-neutral-900 border border-white/10 rounded-2xl p-6"
              key={faq.question}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{faq.question}</h3>
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
                    "feather feather-plus text-lime-400 shrink-0",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1={12} y1={5} x2={12} y2={19}></line>
                  <line x1={5} y1={12} x2={19} y2={12}></line>
                </svg>
              </div>
              <div
                className={twMerge(
                  "mt-6",
                  selectedIndex !== faqIndex && "hidden"
                )}
              >
                <p className="text-white/50">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
