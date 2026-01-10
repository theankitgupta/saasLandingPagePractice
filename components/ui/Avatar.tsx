import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
  /* CONCEPT: Prop Spreading
    - We destructure 'className' and 'children' to use them specifically.
    - '...otherProps' captures things like 'onClick', 'id', or 'style' so the component behaves like a native <div>.
  */
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        /* BASE STYLES: 
          - 'size-20': Sets both width and height to 80px.
          - 'rounded-full': Makes it a perfect circle.
          - 'overflow-hidden': Ensures the child image is clipped to the circle.
          - 'border-4 p-1': Creates a "ring" effect around the image.
        */
        "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
        className // Allows parent to override size or border color (e.g., border-indigo-500)
      )}
      {...otherProps}
    >
      {/* LOGIC: By passing {children} here, we can put an <img>, a <NextImage>, or even just initials (e.g., "AG") inside this frame.
      */}
      {children}
    </div>
  );
}
