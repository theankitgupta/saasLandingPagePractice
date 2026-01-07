import React from "react";
import Image from "next/image";
import { Nav_Items } from "@/data/navigationBar";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";

export default function NavigationBar() {
  return (
    <section className="p-4 lg:py-8">
      {/* DESIGN PRINCIPLE: "Constrained Width"
        -------------------------------------
        - `container mx-auto max-w-5xl`: We limit the width to `5xl` (approx 1024px).
        - WHY? If a navbar stretches too wide on a huge monitor, the user has to physically turn their head to see the logo on the left and the buttons on the right. 
          Constraining width keeps the UI "tight" and readable.
      */}
      <div className="container mx-auto max-w-5xl">
        {/* DESIGN PRINCIPLE: "The Floating Island" & "Visual Balance"
          ----------------------------------------------------------
          - `rounded-full`: Creates a "pill" shape. This feels more modern and organic than a sharp rectangular bar stuck to the top of the screen.
          - `border-white/15`: A subtle 15% opacity border adds "definition" without being harsh. 
            This mimics glassmorphism trends.
            - `grid-cols-2 lg:grid-cols-3`: 
            - On Mobile (2 cols): Left = Logo, Right = Hamburger Menu.
            - On Desktop (3 cols): Left = Logo, Center = Links, Right = Buttons.
            This Grid ensures the center links are mathematically centered, regardless of logo width.
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
          {/* 1. BRANDING (Visual Anchor)
            The top-left is the first place a user scans. It anchors the layout.
          */}
          <div className="">
            <Image
              src={logoImage}
              alt="Layers Logo"
              className="h-9 md:h-auto w-auto"
            />
          </div>

          {/* 2. NAVIGATION (The "Wayfinding")
            --------------------------------
            - `hidden lg:flex`: We use "Progressive Disclosure". 
              Mobile screens are too small for 5-6 links, so we hide them.
              Desktop screens have room, so we show them.
            - `font-medium`: Using a medium font weight improves readability against complex backgrounds compared to `font-normal`.
          */}
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
              {Nav_Items.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  /* DESIGN TIP: Always give feedback on hover. */
                  className="transition duration-200 hover:text-lime-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* 3. ACTIONS (The "Goal")
            ------------------------
            The bottom-right (or top-right) is the "terminal" area of the scan pattern. 
            This is where we place the actions we want users to take (Log In / Sign Up).
          */}
          <div className="flex justify-end gap-4">
            {/* MOBILE TRIGGER (Touch Targets)
              On mobile, space is premium. We replace text buttons with a recognizable icon.
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

          {/* DESIGN PRINCIPLE: "Visual Hierarchy"
              ------------------------------------
              Notice we have two buttons, but they look different.
              1. `secondary` (Log In): Less visual weight. For existing users.
              2. `primary` (Sign Up): High contrast, solid color. This draws the eye.
              
              If both were "Primary", the user would have to stop and read to decide. 
              By making one dominant, we guide the user to the most important action.
          */}
            <Button
              type="button"
              variant="secondary"
              className="hidden md:inline-flex items-center"
            >
              Log In
            </Button>
            <Button
              type="button"
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
