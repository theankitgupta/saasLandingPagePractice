import Image, { type StaticImageData } from "next/image";
import Avatar from "./Avatar";
import { avatarMotion } from "@/lib/motion";
import { twMerge } from "tailwind-merge";

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
    <Avatar className={twMerge(avatarMotion, className)}>
      <Image src={src} alt={alt} className="rounded-full" />
    </Avatar>
  );
}
