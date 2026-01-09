import React from 'react';
import { Integration_Items } from '@/data/integration';
import Tag from '@/components/ui/Tag';
import Image from 'next/image';

export default function Integrations() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Tag>Integrations</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6">
          Plays well with <span className="text-lime-400">others</span>
        </h2>
        <p className="mt-4 text-lg text-center text-white/50">
          Layers seamlessly connects eith your favourite tools, making it easy
          to plug into any workflow and collaborate across platforms.
        </p>
        <div className="h-100 mt-8 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-col gap-4 pb-4">
            {Integration_Items.map((integration) => (
              <div
                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                key={integration.name}
              >
                <div className="flex justify-center">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    className="size-24"
                  />
                </div>
                <h3 className="text-3xl text-center mt-6">
                  {integration.name}
                </h3>
                <p className="text-center text-white/50 mt-2">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
