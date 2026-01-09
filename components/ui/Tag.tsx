import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex gap-2 text-lime-400 border border-lime-400 rounded-full px-3 py-1 uppercase items-center",
        className
      )}
      {...otherProps}
    >
      <span>&#10687;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
