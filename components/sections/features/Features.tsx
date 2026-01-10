import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";
import Tag from "@/components/ui/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/ui/Avatar";
import Key from "@/components/ui/Key";

export default function Features() {
  // CONCEPT: Feature List
  // Using an array allows us to map through simple strings to create a "tag cloud"
  // at the bottom, ensuring consistent styling without repeating code.
  const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* HEADER: Standardized Alignment
            The 'flex justify-center' wrapper for the Tag is a reusable pattern for maintaining a centered vertical axis across all site sections.
        */}
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>

        {/* BENTO GRID: Responsive Logic
            ----------------------------
            - `grid-cols-1`: Vertical stack on mobile.
            - `md:grid-cols-4`: A 4-column base for tablet to allow for 2-column wide cards.
            - `lg:grid-cols-3`: A 3-column layout for desktop for a balanced "tri-card" look.
            - `gap-8`: Generous spacing helps individual features stand out.
        */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 p-1">
          {/* CARD 1: Avatar Stacking
              - `md:col-span-2`: Takes up half the tablet width.
              - `lg:col-span-1`: Returns to a single slot on desktop.
          */}
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing"
            className="md:col-span-2 lg:col-span-1"
          >
            {/* ASPECT RATIO: 'aspect-video' ensures the decorative area remains a consistent 16:9 rectangle regardless of card width. */}
            <div className="aspect-video flex items-center justify-center">
              {/* Negative Margin Trick: 
                  - Using `-ml-6` on stacked elements creates the "Overlapping Avatars" look commonly seen in collaborative UI.
                  - `z-[x]` is used to ensure the left-most avatar stays on top. 
              */}
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              {/* Decorative "More" Avatar: 
                  Instead of an image, we use an array map to create the "..." loading/more dots. 
              */}
              <Avatar className="-ml-6 border-transparent z-10">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white inline-flex"
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          {/* CARD 2: Typography & Gradients
              Demonstrates a "Feature Preview" using stylized text rather than an icon.
          */}
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center">
              {/* 'text-white/20': Low contrast text acts as a background element. */}
              <p className="text-4xl font-extrabold text-white/20 text-center justify-center">
                We&apos;ve achieved{" "}
                {/* 'bg-clip-text': The standard way to apply a gradient to text. */}
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  incredible
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>

          {/* CARD 3: UI Components as Visuals
              - `md:col-start-2`: On tablet (4 columns), this centers the third card by starting it in the second column slot.
          */}
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              {/* Custom 'Key' components simulate a physical keyboard. */}
              <Key className="w-28">Shift</Key>
              <Key className="">alt</Key>
              <Key className="">C</Key>
            </div>
          </FeatureCard>
        </div>

        {/* PILL CLOUD: Secondary Features
            ------------------------------
            - `flex-wrap`: Vital for mobile so tags flow to the next line.
            - `gap-3`: Tighter spacing than the grid to show these are "minor" items.
        */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-6 py-1.5 md:py-2 rounded-2xl gap-3 items-center"
              key={feature}
            >
              {/* The Star Symbol: Using a custom hex code symbol as a bullet point. */}
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
