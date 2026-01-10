import Image from "next/image";
import React from "react";
import logoImage from "@/assets/images/logo.svg";
import { Footer_Items } from "@/data/navigationLink";

export default function Footer() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:px-6">
          <div className="">
            <Image src={logoImage} alt="Logo Image" />
          </div>
          <div className="flex gap-6">
            {Footer_Items.map((item) => (
              <a href={item.href} key={item.label} className="text-white/50 text-sm">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
