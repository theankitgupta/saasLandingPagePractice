import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";
import Tag from "@/components/ui/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/ui/Avatar";
import Key from "@/components/ui/Key";
import { keyMotion, avatarMotion } from "@/lib/motion";
import { avatarStagger } from "@/lib/motion";
import StackedAvatar from "@/components/ui/StackedAvatar";

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
            className="md:col-span-2 lg:col-span-1 group"
          >
            {/* ASPECT RATIO: 'aspect-video' ensures the decorative area remains a consistent 16:9 rectangle regardless of card width. */}
            <div className="aspect-video flex items-center justify-center group">
              <StackedAvatar
                src={avatar1}
                alt="Avatar 1"
                className={`z-40 ${avatarStagger[0]}`}
              />
              <StackedAvatar
                src={avatar2}
                alt="Avatar 2"
                className={`-ml-6 z-30 border-amber-500 ${avatarStagger[1]}`}
              />
              <StackedAvatar
                src={avatar3}
                alt="Avatar 3"
                className={`-ml-6 z-20 border-indigo-500 ${avatarStagger[2]}`}
              />

              {/* Special case avatar stays inline */}
              <Avatar
                className={`-ml-6 border-transparent transition-all duration-300 ease-out group-hover:border-green-500 ${avatarStagger[3]} ${avatarMotion}`}
              >
                <div className="relative size-full rounded-full overflow-hidden bg-neutral-700 flex items-center justify-center">
                  {/* Dots */}
                  <div className="flex gap-1 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span
                        key={i}
                        className="size-1.5 rounded-full bg-white"
                      />
                    ))}
                  </div>

                  {/* Avatar reveal */}
                  <Image
                    src={avatar4}
                    alt="Avatar 4"
                    className="
                      absolute inset-0
                      rounded-full
                      opacity-0
                      scale-105
                      transition-all
                      duration-300
                      ease-out
                      group-hover:opacity-100
                      group-hover:scale-100
                    "
                  />
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
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              {/* 'text-white/20': Low contrast text acts as a background element. */}
              <p className="relative text-4xl font-extrabold text-white/20 group-hover:text-white transition-all duration-500 ease-out text-center">
                We&apos;ve achieved{" "}
                {/* 'bg-clip-text': The standard way to apply a gradient to text. */}
                <span>
                  <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    incredible
                  </span>
                  {/* Hover video */}
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="
                      absolute
                      bottom-full
                      left-1/2
                      -translate-x-1/2
                      mb-4
                      w-48
                      rounded-2xl
                      shadow-xl
                      opacity-0
                      scale-95
                      transition-all
                      duration-500
                      ease-out
                      pointer-events-none
                      group-hover:opacity-100
                      group-hover:scale-100
                    "
                  />
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
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className={`w-28 ${keyMotion}`}>Shift</Key>
              <Key className={`${keyMotion} $delay-75`}>alt</Key>
              <Key className={`${keyMotion} delay-150`}>C</Key>
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
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-6 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
              key={feature}
            >
              {/* The Star Symbol: Using a custom hex code symbol as a bullet point. */}
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl group-hover:rotate-45 transition duration-500">
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
