import React from "react";
import { Logo_Items } from "@/data/logoTicker";
import Image from "next/image";

export default function LogoTicker() {
  return (
    <section className="py-24 px-4 overflow-x-clip">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>

        {/* MASKING CONTAINER (The "Fading Edges" Effect)
          ---------------------------------------------
          - `overflow-hidden`: This is ESSENTIAL. It crops any logos that scroll outside this box. Without it, your page would scroll horizontally.
          - `mt-12`: Top margin for spacing.
          - `mask-[...]`: This creates the soft fade-out effect on the left and right edges.
        */}
        <div className="overflow-hidden mt-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mx-auto">
          {/* LOGO TRACK (The Moving Part)
            ----------------------------
            - `flex`: Arranges logos in a horizontal row.
            - `gap-24`: Adds significant space (96px) between each logo so they breathe.
            - `pr-24`: Adds padding at the end. 
               *TIP*: When animating (scrolling), this ensures the last logo doesn't get cut off instantly; it maintains the gap rhythm.
          */}
          <div className="flex gap-24 pr-24 mx-auto">
            {Logo_Items.map((logo) => (
              <Image
                src={logo.image}
                key={logo.name}
                alt={logo.name}
                className="h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
