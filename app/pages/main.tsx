/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect } from "react";
import { useHomePageStore } from "../store/homePageStore";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import ImageSlider from "../components/ImageSlider";
import { usePageStore } from "../store/pageStore";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";


export default function Main({ pageData }: { pageData: any }) {

  const {  setSelectedPage } = usePageStore();  
  useEffect(()=>{
    setSelectedPage("/")
  },[])


  const {
    setfrontimages,
    setAboutusHeading,
    setaboutusdata,
    setbrandimages,
    setessheading,
    setessheadingend,
    setOurbrands,
    setourbrandsndbuisnesses,
    setourstorytext,



    frontimages,
    aboutusheading,
    aboutusdata,
    brandimages,
    essheading,
    essheadingend,
    ourbrands,
    ourbrandsndbuisnesses,
    ourstorytext,
  } = useHomePageStore();

  useEffect(() => {
    if (!pageData) return;

    setfrontimages(pageData.frontimages);
    setAboutusHeading(pageData.aboutusheading);
    setaboutusdata(pageData.aboutusdata);
    setbrandimages(pageData.brandimages);
    setessheading(pageData.essheading);
    setessheadingend(pageData.essheadingend);
    setOurbrands(pageData.ourbrands);
    setourbrandsndbuisnesses(pageData.ourbrandsndbuisnesses);
    setourstorytext(pageData.ourstorytext);
  }, [pageData]);



  return (
    <div className="bg-white text-black">
      <TopLine />
      <Navbar />
      <ImageSlider allimages={frontimages} />

      <div className="flex items-center mt-24 flex-col h-full flex-wrap">
        <div className="text-4xl font-[600] text-[#444546] mb-16">{aboutusheading}</div>
        <div className="w-full flex flex-row justify-around px-[50px] flex-wrap">
          
        {aboutusdata?.map((item: any, i: number) => (
          <AboutusComp key={i} img={item.img} text={item.text} />
        ))}

          {/* <AboutusComp img="about1.png" text="Backed by Robust Tech Infrastructure & Scalable Supply Chain" />
          <AboutusComp img="about2.png" text="Pioneering Sustainability With Clean & Conscious Products" />
          <AboutusComp img="about3.png" text="Purpose-Led, People-Centric Brand Philosophy" />
          <AboutusComp img="about4.png" text="India's Fastest-Growing Tech-Enabled Personal Care Brand" /> */}

        </div>
      </div>

      <div className="flex items-center mt-26 flex-col">
        <div className="text-4xl font-[900] text-[#444546] mb-16">
          {essheading} <span className="gradfortext">{essheadingend}</span>
        </div>
      {ourbrands.map((item,i)=>(
          <div key={i} style={{backgroundColor:item.color}} className="flex flex-row items-center justify-center flex-wrap bg-[#edd7b5] px-[5px] xl:px-[150px] py-[40px] xl:py-[50px] w-[90%] rounded-[10px] mb-20 ">
          <img src={item.img} className="xl:w-[200px] w-[140px] mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px]" alt="" />
          <div className="max-w-[739px]">
            <div className="text-3xl mb-[15px] text-center font-[900]">{item.brandname}</div>
            <div className="text-center px-[15px] xl:px-[45px] text-[17px]">
              {item.paraone}
              <br /><br />
              {item.paratwo}
            </div>
          </div>
        </div>
      ))}
  
      </div>

      <div className="flex items-center flex-row relative w-full justify-between xl:px-30 px-10 mt-[60px] mb-[60px] pt-[80px] pb-[100px] flex-wrap">
        <div className="z-10 flex justify-left flex-col">
          <div className="text-5xl font-[900] text-[#444546] mt-[20px]">Our
            <div className="gradintext">Story</div>
          </div>
          <div className="borderbtm"></div>
          <div className="z-10 mt-8 text-[18px] max-w-[780px]">
            {ourstorytext}
          </div>
          <span className="z-10 readmorebtnclass">Read More</span>
        </div>
        <img src="/images/rocket.png" className="z-10 w-[380px] mr-[20px] ml-[5px] px-[30px] rounded-tl-[0px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[0px]" alt="" />
        <img src="/randomsvg.png" className="xl:h-[600px] w-full h-[1000px] opacity-70 absolute top-[0px] left-[0px]" alt="" />
      </div>

      <div className="flex items-center mt-26 flex-col flex-wrap">
        <div className="text-4xl font-[900] text-[#444546] mt-[20px] mb-[50px] text-center">{ourbrandsndbuisnesses}</div>
        <div className="flex flex-row justify-around align-center w-full flex-wrap">
          {brandimages.map((item, idx) => (
            <div key={idx} className="flex justify-center items-center min-w-[300px] my-8 xl:my-0">
              <div className="relative w-[160px] flex items-center justify-center mx-4 my-4">
                <img src={`${item.img}`} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

function AboutusComp({ text, img }: { text: string; img: string }) {
  return (
    <div className="flex items-center h-[130px] justify-center w-[290px] px-[30px] bg-[#e5dfd68c] rounded relative mt-[50px]">
      <img src={`${img}`} className="w-[80px] h-[80px] rounded-full absolute top-[-40px] left-[104px]" />
      <div className="text-center text-[#123458] text-[16px] font-[500] mt-[27px] leading-tight">{text}</div>
    </div>
  );
}
