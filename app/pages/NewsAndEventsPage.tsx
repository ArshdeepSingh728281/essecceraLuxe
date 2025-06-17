"use client"

import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import NewsAndEventsContent from "../components/NewsAndEvents"; 
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import NewsAndEventsMiddleText from "../components/NewsAndEventsMiddle";
import NewsAndEventsBottomText from "../components/NewsAndEventBottom";
import { useState } from "react";




export default function NewsAndEventsPage() {
    
    type NewsItem = {
    title: string;
    img:string;
    views: number;
    time: string;
    dis:string;
    };


    const [newsdata,setnewsdata] = useState<NewsItem[]>([
    {  
        title:"Completed Seed Round this week",
        views:23,
        time:"5 Days Ago",
        img:" ",
        dis:"We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."
      },
    {  
        title:"Completed Seed Round this week",
        views:23,
        time:"5 Days Ago",
        img:" ",
        dis:"We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."
        
      },
    {  
        title:"Completed Seed Round this week",
        views:23,
        time:"5 Days Ago",
        img:" ",
        dis:"We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."

    },


    ])


  return (
    <div>
      <TopLine />
      <Navbar />

    <div className="bg-[#ffffff] px-6 md:px-20 py-16 pb-[10px]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#171717] ">News And Events</h2>
    </div>

 {newsdata.map((item, i) => {
  if (i === 0) {
    return <NewsAndEventsContent item={item} key={i} index={i} />;
  } else if (i % 2 === 0) {
    return <NewsAndEventsBottomText item={item} key={i} index={i} />;
  } else {
    return <NewsAndEventsMiddleText item={item} key={i} index={i} />;
  }
})}


      <Footer/>
      <Copyright/>
    </div>
  );
}
