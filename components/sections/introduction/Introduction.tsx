import Tag from "@/components/ui/Tag";
import React from "react";

export default function Introduction() {
  const Intro_Text =
    "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.";
  return (
    // Extra vertical padding so that navbar does not cover our text while scroll animation works
    <section className="py-28 px-4">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introduction Layers</Tag>
        </div>
        <div className="text-4xl text-center font-medium mt-10">
          <span>Your creative process deserves better.</span>{" "}
          <span className="text-white/15">{Intro_Text}</span>
          <span className="text-lime-400 block">That&apos;s why we built Layers</span>
        </div>
      </div>
    </section>
  );
}
