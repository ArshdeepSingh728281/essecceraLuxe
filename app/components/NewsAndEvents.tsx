'use client';
import type { NextPage } from 'next';
import Image from 'next/image';


const Group: NextPage = () => {
  return (
    <section className="bg-[#ffffff] px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-12">News And Events</h2>

      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
        {/* Placeholder image */}
        <div className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative">
          {/* <Image src="/news.jpg" alt="News" fill className="rounded-md object-cover" /> */}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2 text-[#171717]">Completed Seed Round this week</h3>
          <div className="flex items-center gap-2 text-sm text-[#6A5D5D] mb-4">
            <span>23k views</span>
            <div className="relative w-4 h-4">
              <Image src="/Frame.svg" alt="icon" fill />
            </div>
            <span className="text-xl font-bold">·</span>
            <span>5 Days Ago</span>
          </div>
          <p className="text-[#171717] text-base leading-relaxed max-w-3xl">
            We&apos;re thrilled to announce that we&apos;ve successfully completed our Seed Round this week!
            This milestone marks a significant step forward for our perfume brand, empowering us to scale
            production, enhance our signature scents, and bring our vision of luxury and authenticity to
            even more fragrance lovers around the world. A heartfelt thank you to our early investors for
            believing in our journey — the best is yet to come.

          </p>
        </div>
      </div>

      
    </section>
  );
};

export default Group;
