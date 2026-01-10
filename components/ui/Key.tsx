import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  /* CONCEPT: Primitive Component
    - This component extends standard HTMLDivElement attributes.
    - By using '...otherProps', we ensure this "Key" can accept standard React props like 'onClick' or 'onMouseEnter'.
  */
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        /* DESIGN: The Keyboard Aesthetic
          - 'size-14': Creates a square 56px base.
          - 'bg-neutral-300': A light gray that mimics plastic keycaps.
          - 'inline-flex items-center justify-center': Centers the text (like "C" or "Shift") both horizontally and vertically.
          - 'rounded-2xl': Soft, deep corners that fit the "Pill" design language of the site.
          - 'text-neutral-950': High-contrast black text for maximum readability.
        */
        "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium",
        className // Allows parent to pass 'w-28' for wider keys like "Shift"
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
