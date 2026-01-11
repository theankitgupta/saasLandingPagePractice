import React from "react";
import { Integration_Items } from "@/data/integration";
import Tag from "@/components/ui/Tag";
import IntegrationColumns from "@/components/ui/IntegrationColumns";

export default function Integrations() {
  return (
    /* SECTION CONTAINER: The Outer Shell
      ----------------------------------
      - `overflow-hidden`: Essential. Because the internal columns are scrolling infinitely, we must crop them strictly to this box. Without this, the page might jitter or show content bleeding into other sections.
    */
    <section className="py-24 px-4 overflow-hidden">
      {/* GRID WRAPPER: Responsive Layout Logic
          -------------------------------------
          - `container mx-auto`: Standard centering.
          - `grid lg:grid-cols-2`: The Split-Screen Pattern.
            * Mobile (< lg): Single column stack. Text on top, visuals on bottom.
            * Desktop (>= lg): Two columns side-by-side. Text on Left, Visuals on Right.
      */}
      <div className="container mx-auto grid lg:grid-cols-2">
        {/* COLUMN 1: Content Area (Static Context)
            ---------------------------------------
            - `px-8`: Adds internal padding so text doesn't hit the screen edge on mobile or the visuals on desktop.
        */}
        <div className="px-8">
          {/* RESPONSIVE ALIGNMENT:
              - `justify-center`: On mobile, everything is centered for a "Poster" look.
              - `lg:justify-start`: On desktop, we align left to create a clean "Editorial" look that leads the eye from left to right.
          */}
          <div className="flex justify-center lg:justify-start">
            <Tag>Integrations</Tag>
          </div>

          {/* TYPOGRAPHY:
              - `text-6xl`: Massive scale to match the Hero section's impact.
              - `lg:text-start`: Overrides the mobile `text-center`.
          */}
          <h2 className="text-6xl font-medium text-center lg:text-start mt-6">
            Plays well with <span className="text-lime-400">others</span>
          </h2>

          <p className="mt-4 text-lg text-center lg:text-start text-white/50 px-2">
            Layers seamlessly connects with your favourite tools, making it easy
            to plug into any workflow and collaborate across platforms.
          </p>
        </div>

        {/* COLUMN 2: Visual Area (The Ticker Container)
            --------------------------------------------
            - `h-100 lg:h-200`: (approx 400px to 800px). We MUST set a fixed height here.
              Infinite scrolling requires a "Window" to scroll through. If height is `auto`, it would just stretch to show all cards at once.
            - `mt-8 lg:mt-0`: Spacing management. Mobile needs margin-top; Desktop uses the grid gap.
            - `grid md:grid-cols-2 gap-4`: We split the visual area itself into 2 sub-columns.
            - `mask-[linear-gradient(...)]`: The "Vertical Fog".
               * `to_bottom`: Gradient runs vertically.
               * `transparent` at start/end: Fades the cards out as they leave the view.
        */}
        <div className="h-100 lg:h-200 mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          {/* Ticker Column 1: Forward Direction (Standard) */}
          <IntegrationColumns integrationItems={Integration_Items} />

          {/* Ticker Column 2: Reverse Direction (Contrast)
              - `hidden md:flex`: On mobile, screen space is precious. Showing 2 columns makes cards tiny or cut off. We hide one column to prioritize clarity.
              - `slice().reverse()`: Data Variation.
                * If both columns had the exact same order (Figma -> Notion -> Slack), the user would see a repeating pattern.
                * Reversing the data array makes the motion feel chaotic and organic (Alive).
              - `reverse`: We pass a prop to tell this column to scroll UP instead of DOWN.
          */}
          <IntegrationColumns
            integrationItems={Integration_Items.slice().reverse()}
            className="hidden md:flex"
            reverse
          />
        </div>
      </div>
    </section>
  );
}
