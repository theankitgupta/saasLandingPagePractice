import React from "react";

export default function CTA() {
  return (
    /* SECTION WRAPPER: Vertical Spacing
      ---------------------------------
      - `py-24`: Provides large vertical padding to separate the marquee from the content above and below it.
    */
    <section className="py-24">
      {/* THE VIEWPORT: Cropping the Content
          ----------------------------------
          - `container`: Centers the section within the standard site width.
          - `overflow-x-clip`: Essential. This "clips" the repeating text so it doesn't create a horizontal scrollbar on the webpage.
          - `p-4`: Standard padding safety.
          - `flex`: Sets up the layout for the internal track.
      */}
      <div className="container overflow-x-clip p-4 flex mx-auto">
        {/* THE TRACK: The Container of Repeating Text
            -----------------------------------------
            - `flex-none`: Prevents the track from shrinking to fit the container. It allows the content to expand as wide as it needs to be.
            - `gap-16`: High spacing between the repeated phrases.
            - `text-7xl md:text-8xl`: Massive typography for a bold, "loud" brand statement.
        */}
        <div className="flex flex-none gap-16 text-7xl md:text-8xl font-medium">
          {/* LOGIC: Content Repetition
              -------------------------
              - `Array.from({ length: 10 })`: Instead of typing "Try it for free" ten times, we use a JavaScript loop to generate the content. This makes it easier to change the text later in just one place.
          */}
          {Array.from({ length: 10 }).map((_, i) => (
            /* INDIVIDUAL ITEM: Phrase + Icon 
              `flex items-center`: Ensures the star icon and the text are perfectly aligned on their horizontal center line.
            */
            <div className="flex items-center gap-8 md:gap-16" key={i}>
              {/* THE DECORATIVE SYMBOL
                  - `&#10038;`: The six-pointed star we discussed earlier.
                  - `text-lime-400`: Uses the brand's accent color to break up the white text and catch the user's eye.
              */}
              <span className="text-lime-400 text-7xl">&#10038;</span>

              <span>Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
