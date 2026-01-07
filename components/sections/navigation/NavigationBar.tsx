import React from "react";
import Image from "next/image";
import { Nav_Items } from "@/data/navigationBar";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";

export default function NavigationBar() {
  return (
    <section className="p-4">
      {/* To push Content from the side of the screen */}
      <div className="container">
        {/* RESPONSIVE NOTE:
            - 'md:pr-2': On tablets and larger (md breakpoint), add padding-right.
            - 'grid-cols-2': Maintains a 2-column layout on all devices.
         */}
        <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
          {/* 1st Column: Logo */}
          <div className="">
            <Image
              src={logoImage}
              alt="Layers Logo"
              /* RESPONSIVE NOTE:
                - 'h-9': Sets a fixed height for Mobile.
                - 'md:h-auto': On Tablet/Desktop, lets the image size itself automatically.
              */
              className="h-9 md:h-auto w-auto"
            />
          </div>

          {/* 2nd Column: Actions (Menu + Buttons) */}
          <div className="flex justify-end gap-4">
            {/* HAMBURGER MENU ICON (Mobile Only)
                --------------------------------
                - This SVG is the "Menu" icon.
                - 'md:hidden': This is the key Tailwind class. It means "On Medium screens (Tablet) and larger, HIDE this element". 
                - Therefore, this icon is visible ONLY on Mobile.
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
              className="feather feather-menu md:hidden"
            >
              <line x1={3} y1={12} x2={21} y2={12}></line>
              <line x1={3} y1={6} x2={21} y2={6}></line>
              <line x1={3} y1={18} x2={21} y2={18}></line>
            </svg>

            {/* BUTTONS
                -------
                className="hidden md:block" 
                (Hidden by default, Block display on Medium screens and up).
            */}
            <Button variant="secondary" className="hidden md:block">Log In</Button>
            <Button variant="primary" className="hidden md:block">Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
