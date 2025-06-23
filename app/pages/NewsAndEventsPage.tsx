"use client";

import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import NewsAndEventsContent from "../components/NewsAndEvents"; 
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import NewsAndEventsMiddleText from "../components/NewsAndEventsMiddle";
import NewsAndEventsBottomText from "../components/NewsAndEventBottom";
import { usePageStore } from "../store/pageStore";
import { useEffect } from "react";
import { useNewsStore } from "../store/newsandevents";

type NewsItem = {
  title: string;
  img: string;
  views: number;
  time: string;
  dis: string;
};

export default function NewsAndEventsPage({
  serverNewsData,
}: {
  serverNewsData: NewsItem[];
}) {
  const { news, setNews } = useNewsStore();


  useEffect(() => {
  setNews(serverNewsData);
}, [serverNewsData]);


  const { setSelectedPage } = usePageStore();  
  useEffect(()=>{
    setSelectedPage("newsandevents")
  },[])

  return (
    <div>
      <TopLine />
      <Navbar />

      <div className="bg-[#ffffff] px-6 md:px-20 py-16 pb-[10px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171717]">News And Events</h2>
      </div>

{Array.isArray(news) && news.map((item, i) => {
        if (i === 0) {
          return <NewsAndEventsContent item={item} key={i} index={i} />;
        } else if (i % 2 === 0) {
          return <NewsAndEventsBottomText item={item} key={i} index={i} />;
        } else {
          return <NewsAndEventsMiddleText item={item} key={i} index={i} />;
        }
      })}



      <Footer />
      <Copyright />
    </div>
  );
}
