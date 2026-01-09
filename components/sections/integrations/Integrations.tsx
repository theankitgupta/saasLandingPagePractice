import React from "react";
import { Integration_Items } from "@/data/integration";
import Tag from "@/components/ui/Tag";
import IntegrationColumns from "@/components/ui/IntegrationColumns";

export default function Integrations() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2">
        <div className="px-8">
          <div className="flex justify-center lg:justify-start">
            <Tag>Integrations</Tag>
          </div>
          <h2 className="text-6xl font-medium text-center lg:text-start mt-6">
            Plays well with <span className="text-lime-400">others</span>
          </h2>
          <p className="mt-4 text-lg text-center lg:text-start text-white/50 px-2">
            Layers seamlessly connects eith your favourite tools, making it easy
            to plug into any workflow and collaborate across platforms.
          </p>
        </div>
        <div className="h-100 lg:h-200 mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <IntegrationColumns integrationItems={Integration_Items} />
          <IntegrationColumns
            integrationItems={Integration_Items.slice().reverse()}
            className="hidden md:flex"
          />
        </div>
      </div>
    </section>
  );
}
