import React from "react";
import { Integration_Items } from "@/data/integration";
import Tag from "@/components/ui/Tag";
import IntegrationColumns from "@/components/ui/IntegrationColumns";

export default function Integrations() {
  return (
    /* SECTION CONTAINER: The Outer Shell
      ----------------------------------
      - `overflow-hidden`: Essential to prevent the scrolling columns from creating a horizontal scrollbar if they jitter or move.
    */
    <section className="py-24 px-4 overflow-hidden">
      {/* GRID WRAPPER: Responsive Layout Logic
          -------------------------------------
          - `container mx-auto`: Standard centering.
          - `grid lg:grid-cols-2`: 
            * Mobile: Single column (Text on top, Ticker on bottom).
            * Desktop (LG): Two columns (Text on Left, Ticker on Right).
      */}
      <div className="container mx-auto grid lg:grid-cols-2">
        {/* COLUMN 1: Content Area
            - `px-8`: Adds internal padding for text readability.
        */}
        <div className="px-8">
          {/* RESPONSIVE ALIGNMENT:
              - `justify-center lg:justify-start`: Centers the Tag on mobile, but aligns it left on desktop to match the text flow.
          */}
          <div className="flex justify-center lg:justify-start">
            <Tag>Integrations</Tag>
          </div>

          {/* TYPOGRAPHY:
              - `text-center lg:text-start`: Centers text on mobile for focus, aligns left on desktop for a professional editorial look.
          */}
          <h2 className="text-6xl font-medium text-center lg:text-start mt-6">
            Plays well with <span className="text-lime-400">others</span>
          </h2>

          <p className="mt-4 text-lg text-center lg:text-start text-white/50 px-2">
            Layers seamlessly connects eith your favourite tools, making it easy
            to plug into any workflow and collaborate across platforms.
          </p>
        </div>

        {/* COLUMN 2: Visual Area (The Ticker)
            ----------------------------------
            - `h-100 lg:h-200`: (approx 400px to 800px) Sets a height to crop the scrolling columns.
            - `mt-8 lg:mt-0`: Spacing for mobile; removed on desktop because the  layout handles it.
            - `grid md:grid-cols-2 gap-4`: Splits the visual area into two mini-columns of logos.
            - `mask-[linear-gradient(...)]`: The "Visual Fog" effect. Fades the top and bottom edges into the background color.
        */}
        <div className="h-100 lg:h-200 mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          {/* Ticker Column 1: Forward Direction */}
          <IntegrationColumns integrationItems={Integration_Items} />

          {/* Ticker Column 2: Reverse Direction
              - `hidden md:flex`: On mobile, we only show ONE column of logos to keep the UI clean.
              - `slice().reverse()`: Reverses the array. 
                DESIGN WHY: Having two columns moving in the same pattern looks robotic. Reversing the data makes the layout feel more "alive" and complex.
          */}
          <IntegrationColumns
            integrationItems={Integration_Items.slice().reverse()}
            className="hidden md:flex"
          />
        </div>
      </div>
    </section>
  );
}
