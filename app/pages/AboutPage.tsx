


"use client";

import Head from "next/head";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import { usePageStore } from "../store/pageStore";
import { useEffect } from "react";


export default function AboutPage({
  aboutText,
  missionText,
  team,
}: {
  aboutText: string;
  missionText: string;
  team: { name: string; desc: string; img: string }[];
}) {

  const { setSelectedPage } = usePageStore();  
  useEffect(()=>{
    setSelectedPage("about")
  },[])

  return (
    <>
      <Head>
        <title>About - Kyoto Ceramics</title>
      </Head>

      <div className="relative flex min-h-screen flex-col bg-[#fcfaf8] bg-white overflow-x-hidden">
        <TopLine />
        <Navbar />

        <div className="flex-grow flex flex-col items-center px-4 sm:px-10 lg:px-20 xl:px-40 py-8 mt-[20px]">
          <div className="w-full max-w-5xl flex flex-col gap-6">
            {/* Hero */}
            <div
              className="bg-cover bg-center flex flex-col justify-end rounded-lg min-h-[218px] sm:min-h-[300px]"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuMsNhi-HNXBDkLEnXQ8KdlsMvfgC-G6Q94G_lsS5WRU-tAkcBuux2B85GMXlDeA7mOiZp7lHeM2beptwdoalZrOkdZkXwYJJ6IPAotl5Wl7zXhFeQ3xNngSIE9PRBzBy2ruRrP8EtPR03HV2ZrXawoVsDMsf52Uc1tT_xYX9f9tKtLb5aafcYpUo-yTZyrCxqXqmKpfmn0Y5TDZKuLQEISYnlO4ulJkHAimkNgILHGGMk_2jhj3E-MWlADzkY7A1yUb6hV7mSBus")`,
              }}
            >
              <div className="p-4">
                <p className="text-white text-2xl sm:text-3xl font-bold">Our Story</p>
              </div>
            </div>

            <p className="text-[#1b130e] text-base leading-relaxed px-1">
              {aboutText}
            </p>

            {/* Team */}
            <div>
              <h2 className="text-[#1b130e] text-xl sm:text-2xl font-bold px-1 pb-3">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {team.map((artist, i) => (
                  <div className="flex flex-col gap-2" key={i}>
                    <div
                      className="aspect-square bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${artist.img})` }}
                    />
                    <p className="text-[#1b130e] font-medium">{artist.name}</p>
                    <p className="text-[#976b4e] text-sm">{artist.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-[#1b130e] text-xl sm:text-2xl font-bold px-1 pb-3 pt-4">Our Mission</h2>
              <p className="text-[#1b130e] text-base leading-relaxed px-1">{missionText}</p>
            </div>
          </div>
        </div>

        <Footer />
        <Copyright />
      </div>
    </>
  );
}
