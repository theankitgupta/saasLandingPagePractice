import React from "react";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
  name: string;
  color?: "red" | "blue";
}) {
  const { name, color } = props;
  return (
    /* WRAPPER: RELATIVE
      We need `relative` here so the badge (absolute) knows where to position itself
      relative to the icon.
    */
    <div className="relative">
      {/* SVG ICON (The Graphics)
        -----------------------
        - `stroke="currentColor"`: Allows the icon color to be controlled by text-color classes (e.g. text-white).
        - `viewBox="0 0 24 24"`: The "camera frame" of the SVG. 
        - `path`: The mathematical commands drawing the lines.
      */}
      <svg
        xmlns="https://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-mouse-pointer text-white size-5"
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
        <path d="M13 13l6 6"></path>
      </svg>

      {/* THE LABEL BADGE
        ----------------
        - `absolute top-full left-full`: Pushes the badge to the bottom-right of the cursor icon.
        - `twMerge`: Used to intelligently handle color conflicts.
      */}
      <div className="absolute top-full left-full">
        <div
          className={twMerge(
            // 1. BASE CLASSES (Default look)
            "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",

            // 2. CONDITIONAL CLASSES
            // If color is 'red', `bg-red-500` is added.
            // twMerge ensures `bg-blue-500` is REMOVED so they don't fight.
            color === "red" && "bg-red-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
