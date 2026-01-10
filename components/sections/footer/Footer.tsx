import Image from "next/image";
import React from "react";
import logoImage from "@/assets/images/logo.svg";
import { Footer_Items } from "@/data/navigationLink";

export default function Footer() {
  return (
    /* SECTION WRAPPER: Final Breathing Room
      -------------------------------------
      - `py-16`: Slightly less vertical padding than the Hero or CTA sections. 
        FOOTER TIP: Reducing the vertical padding here makes the site feel like it is "concluding" rather than starting a new major chapter.
      - `px-4`: Standard horizontal safety gutter for mobile.
    */
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* LAYOUT: Adaptive Direction
            ---------------------------
            - `flex flex-col`: On mobile, stack the Logo on top of the Links for better vertical flow.
            - `md:flex-row`: On tablets/desktop, switch to a horizontal row.
            - `items-center`: Ensures that both the logo and the links are centered along the horizontal axis when stacked (mobile).
            - `md:justify-between`: On desktop, pushes the Logo to the left and the Links to the far right to create a balanced "bracket" look.
            - `gap-6`: Prevents the elements from touching when they are stacked.
        */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:px-6">
          {/* LOGO CONTAINER
              Wrapping the Image in a div allows for easier positioning or adding a 'hover' effect to the brand logo later.
          */}
          <div className="">
            <Image src={logoImage} alt="Logo Image" />
          </div>

          {/* LINK GROUPING
              - `flex gap-6`: Horizontal row for links on all screen sizes.
              - DESIGN TIP: Using a standard gap (6) across the site creates consistency in your "visual rhythm."
          */}
          <div className="flex gap-6">
            {Footer_Items.map((item) => (
              /* THE LINK ELEMENT
                - `text-white/50`: Muted color. Footer links are secondary; they shouldn't fight with your main Call to Action for attention.
                - `text-sm`: Smaller font size further establishes the "secondary" hierarchy of the information.
              */
              <a
                href={item.href}
                key={item.label}
                className="text-white/50 text-sm hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
