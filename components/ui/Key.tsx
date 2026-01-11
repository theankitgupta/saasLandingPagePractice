import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        `
        size-14
        bg-neutral-500
        rounded-2xl
        border border-black/40
        shadow-[0_6px_0_0_rgba(0,0,0,0.6)]
        transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
        `,
        className
      )}
      {...props}
    >
      <div className="w-full h-full inline-flex items-center justify-center text-xl font-medium text-neutral-950">
        {children}
      </div>
    </div>
  );
}

