import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
  title: string;
  description: string;
  children?: ReactNode; // This allows us to pass complex visuals (Avatars, Keys, Text)
  className?: string;
}) {
  const { title, description, children, className } = props;

  return (
    <div
      className={twMerge(
        /* DESIGN: The "Card" Look
          - 'bg-neutral-900': Creates a dark, modern surface.
          - 'border-white/10': A very subtle 10% white border makes it look premium on dark backgrounds.
          - 'rounded-3xl': Large, soft corners common in modern SaaS design.
        */
        "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      {/* LAYOUT: Visual Slot
          - 'aspect-video': Forces this container into a 16:9 ratio. 
          - WHY? This ensures all feature cards have the exact same height for their visual content, making the grid look perfectly aligned.
      */}
      <div className="aspect-video">{children}</div>

      {/* LAYOUT: Text Content
          - Separating Text from Visuals allows for clean vertical spacing ('mt-6').
      */}
      <div className="">
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
}
