import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IntegrationType } from "@/data/integration";

export default function IntegrationColumns(props: {
  className?: string;
  integrationItems: IntegrationType;
}) {
  const { className, integrationItems } = props;

  return (
    /* LAYOUT: The Column Track
      - 'flex-col': Stacks items vertically.
      - 'gap-4': Consistent spacing between integration blocks.
      - 'pb-4': Extra padding at the bottom for smooth scrolling/masking.
    */
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {/* MAP LOGIC:
          We loop through the array. This keeps the JSX small even if you have 100 logos.
      */}
      {integrationItems.map((integration) => (
        <div
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
          key={integration.name} // Key is essential for React performance during list updates
        >
          {/* ICON SECTION
              - 'flex justify-center': Icons are rarely the same width. Wrapping them in a centered flex container ensures they look visually balanced.
          */}
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={integration.name}
              className="size-24" // Fixed size for logo consistency
            />
          </div>

          {/* TEXT SECTION
              - 'text-center': Since the icon is centered, the text should be too.
          */}
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}
