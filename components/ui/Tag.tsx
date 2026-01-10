import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        /* DESIGN: Brand Accent
          - 'inline-flex': Ensures the border wraps tightly around the content only.
          - 'gap-2': Spacing between the icon dot and the text.
          - 'border-lime-400': Uses the site's signature "Action" color.
          - 'uppercase': Standard design practice for tags to differentiate them from body text.
        */
        "inline-flex gap-2 text-lime-400 border border-lime-400 rounded-full px-3 py-1 uppercase items-center",
        className
      )}
      {...otherProps}
    >
      {/* CONCEPT: HTML Entities for Icons
          - '&#10687;': This is the "Circled Bullet" (⦿). 
          - Using an entity code instead of an SVG keeps the component lightweight and ensures it inherits the color 'text-lime-400' perfectly.
      */}
      <span>&#10687;</span>
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}
