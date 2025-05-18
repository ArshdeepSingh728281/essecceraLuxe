'use client';

import Image from 'next/image';

export default function NewsAndEvents() {
  return (
    <section className="bg-[#ffffff] px-6 md:px-20 -my-15">
    {/* Line divider */}
      <div className="lineDiv mt-16" />

      <style jsx>{`
        .lineDiv {
          width: 100%;
          position: relative;
          border-top: 1px solid rgba(0, 0, 0, 0.7);
          box-sizing: border-box;
          height: 1px;
        }

        :global(body) {
          margin: 0;
          line-height: normal;
        }
      `}</style>

      <div className="flex flex-col-reverse md:flex-row items-start gap-6 md:gap-12 py-15">
        {/* Left side - Text Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2 text-[#171717]">
            Completed Seed Round this week
          </h3>

          <div className="flex items-center gap-2 text-sm text-[#6A5D5D] mb-4">
            <span>23k views</span>
            <span className="text-xl font-bold">·</span>
            <span>5 Days Ago</span>
            <div className="relative w-5 h-5">
              <Image src="/Frame.svg" alt="icon" fill />
            </div>
          </div>

          <p className="text-[#171717] text-base leading-relaxed max-w-3xl">
              We&apos;re thrilled to announce that we&apos;ve successfully completed our Seed Round this week!
          This milestone marks a significant step forward for our perfume brand, empowering us to scale
          production, enhance our signature scents, and bring our vision of luxury and authenticity to
          even more fragrance lovers around the world. A heartfelt thank you to our early investors for
          believing in our journey — the best is yet to come.
          </p>
        </div>

        {/* Right side - Placeholder for image */}
        <div className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0" />
      </div>
    </section>
  );
}
