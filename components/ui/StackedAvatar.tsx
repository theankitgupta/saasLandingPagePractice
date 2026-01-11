import Image, { type StaticImageData } from "next/image";
import Avatar from "./Avatar";
import { avatarMotion } from "@/lib/motion";
import { twMerge } from "tailwind-merge";

/* PROPS INTERFACE
  - Supports both string URLs and Next.js StaticImageData imports.
*/
export default function StackedAvatar({
  src,
  alt,
  className,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    /* COMPOSITION
      - Merges the `avatarMotion` (hover jump effect) with any custom styles (z-index, margins).
    */
    <Avatar className={twMerge(avatarMotion, className)}>
      <Image src={src} alt={alt} className="rounded-full" />
    </Avatar>
  );
}
