import Tag from "@/components/ui/Tag";
import React from "react";

export default function Introduction() {
  // CONCEPT: Content Separation
  // Storing long strings in a constant keeps the JSX clean and makes it easier
  // to manage translations or text updates later.
  const Intro_Text =
    "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.";

  return (
    /* LAYOUT: Adaptive Spacing
      -------------------------
      - `py-28 lg:py-40`: We use extra large vertical padding. 
        DESIGN WHY: This section acts as a "buffer." High whitespace (breathing room) signals to the user that they are entering a new part of the story.
      - `px-4`: Standard mobile safety gutter.
    */
    <section className="py-28 lg:py-40 px-4">
      <div className="container mx-auto">
        {/* VIEW: The Lead-In
            Uses the flex-center pattern we discussed to anchor the section.
        */}
        <div className="flex justify-center">
          <Tag>Introduction Layers</Tag>
        </div>

        {/* VIEW: The Typography Block
            ---------------------------
            - `text-4xl md:text-6xl lg:text-7xl`: Progressive font scaling. On desktop, this text is massive to ensure it's the only thing the user focuses on.
            - `mt-10`: Significant margin to separate the Tag from the main text.
        */}
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          {/* DESIGN PIECE 1: The Hook 
              Fully opaque text to grab immediate attention.
          */}
          <span>Your creative process deserves better.</span>{" "}
          {/* DESIGN PIECE 2: The Context (Low Emphasis)
              - `text-white/15`: By using very low opacity, we create a "muted" effect.
              TEMPLATE NOTE: This is a perfect setup for "Scroll-Triggered Reveals" where this text lights up as you scroll down.
          */}
          <span className="text-white/15">{Intro_Text}</span>
          {/* DESIGN PIECE 3: The Solution (High Emphasis)
              - `text-lime-400`: Uses the brand's primary action color.
              - `block`: Forces this onto a new line to act as a "punchline."
              - `md:px-4`: Adds slight horizontal padding on larger screens to prevent the text from hitting the very edges of its container.
          */}
          <span className="text-lime-400 block md:px-4">
            That&apos;s why we built Layers
          </span>
        </div>
      </div>
    </section>
  );
}
