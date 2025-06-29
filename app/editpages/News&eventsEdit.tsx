"use client"

import Navbar from "../components/NavbarEdit";
import TopLine from "../components/TopLine";
import NewsAndEventsContent from "../components/NewsAndEventsFirstEdit";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import NewsAndEventsMiddleText from "../components/NewsAndEventsMiddleEdit";
import NewsAndEventsBottomText from "../components/NewsAndEventsBtmEdit";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';




export default function NewsAndEventsPageEdit() {

  const [loading,setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [otp, setOtp] = useState('');

  type NewsItem = {
    title: string;
    img: string;
    views: number;
    time: string;
    dis: string;
  };


  const [newsdata, setnewsdata] = useState<NewsItem[]>([
    {
      title: "Completed Seed Round this week",
      views: 23,
      time: "5 Days Ago",
      img: "https://live.staticflickr.com/5163/5228589013_0a1095fdd8_h.jpg",
      dis: "We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."
    },
    {
      title: "Completed Seed Round this week",
      views: 23,
      time: "5 Days Ago",
      img: "https://live.staticflickr.com/5163/5228589013_0a1095fdd8_h.jpg",
      dis: "We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."

    },
    {
      title: "Completed Seed Round this week",
      views: 23,
      time: "5 Days Ago",
      img: "https://live.staticflickr.com/5163/5228589013_0a1095fdd8_h.jpg",
      dis: "We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."

    },


  ])



  const [addnews, setaddnews] = useState<NewsItem>({
    title: "Completed Seed Round this week",
    views: 23,
    time: "5 Days Ago",
    img: "https://live.staticflickr.com/5163/5228589013_0a1095fdd8_h.jpg",
    dis: "We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."

  })




  const [showimg, setshowimg] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  async function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          resolve(reader.result); // includes data:image/...;base64,...
        } else {
          reject("Failed to convert to base64");
        }
      };
      reader.onerror = () => reject("FileReader error");
      reader.readAsDataURL(file);
    });
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // adjust
    }
  }, [addnews.dis]);








  

  
      async function getInitialdata(){
  
      try {
  
        const response = await fetch('/api/getpage', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({pagename:"newsandevents"})
        })
         if ( response.status == 200) {
             const result = await response.json()
             console.log(result)
             if(result.success==true){
              setnewsdata(result.page.data.newsdata)

  
                
            }
        if(result.success=="false"){
            alert(result.msg);
        }
        } else if (response.status==400) {
         console.log("error")
        }
  
    }catch (e) {
        console.log(e)
    }}
  
  
  
  
    useEffect(()=>{
  
      getInitialdata();
  
    },[])
  
  



  async function postProp(){
    setLoading(true)

    try {

      const response = await fetch('/api/postpage', {
          method:'POST',
          headers:{"Content_Type":"application/json"},
          body: JSON.stringify({pagename:"newsandevents",otp,savedata:{newsdata}})
      })
       if ( response.status == 200) {
           const result = await response.json()
          //  console.log(result)
           if(result.data.success=="true"){
            window.location.reload();

          }
      if(result.data.success=="false"){
          alert(result.msg);
              setLoading(false)

      }
      } else if (response.status==400) {
       console.log("error")
      }

  }catch (e) {
      console.log(e)
  }}








  async function sendotp(){
    console.log(newsdata)
    try {
      const response = await fetch('/api/postpage', {
          method:'GET',
      })
       if (response.status == 200) {
          //  const result = await response.json()
          //  console.log(result)
          //  if(result.data.success=="true"){
          // }
      } else if (response.status==400) {
       console.log("error")
      }

  }catch (e) {
      console.log(e)
  }}









  return (
    <div>
      <TopLine />
      <Navbar />

      <div className="bg-[#ffffff] px-6 md:px-20 py-16 pb-[10px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171717] ">News And Events</h2>
      </div>





      <section className="bg-[#ffffff] px-6 md:px-20 -my-15 mt-4">


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
            <input
              className="text-2xl font-semibold mb-2 text-[#171717] w-full"
              value={addnews.title}
              onChange={(e) => {
                const newTitle = e.target.value;
                setaddnews((prev) => ({
                  ...prev,
                  title: newTitle
                }));
              }}
            />

            <div className="flex items-center gap-2 text-sm text-[#6A5D5D] mb-4">
              <span>{addnews.views}k views</span>
              <div className="relative w-4 h-4">

                <Image src="/Frame.svg" alt="icon" fill />

              </div>
              <span className="text-xl font-bold">·</span>
              <span>{addnews.time}</span>
            </div>


            <textarea
              ref={textareaRef}
              className="text-[#171717] text-base leading-relaxed max-w-3xl w-full bg-transparent outline-none overflow-hidden resize-none"
              value={addnews.dis}
              rows={1}
              onChange={(e) => {

                // Resize dynamically
                const textarea = e.target;
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;

                setaddnews((prev) => ({
                  ...prev,
                  dis: textarea.value
                }));
              }}
            />


            <button
              onClick={() => {
                setnewsdata((prevNews) => [addnews, ...prevNews]);
                setaddnews(

                  {
                    title: "Completed Seed Round this week",
                    views: 23,
                    time: "5 Days Ago",
                    img: "https://live.staticflickr.com/5163/5228589013_0a1095fdd8_h.jpg",
                    dis: "We're thrilled to announce that we've successfully completed our Seed Round this week! This milestone marks a significant step forward for our perfume brand, empowering us to scale production, enhance our signature scents, and bring our vision of luxury and authenticity to even more fragrance lovers around the world. A heartfelt thank you to our early investors for believing in our journey — the best is yet to come."

                  }

                )
              }}


              className="w-full py-[13px] rounded-md bg-black mt-8 text-white cursor-pointer hover:bg-[#212121e6] active:bg-[#1e1e1ec4]"



            >
              Add
            </button>


          </div>

          {/* Right side - Placeholder for image */}

          <div
            onMouseEnter={() => { setshowimg(false) }}
            onMouseLeave={() => { setshowimg(true) }}
            className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center cursor-pointer">

            {addnews.img ? (
              showimg ? (
                // <img src={item.img}  className='w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative'/>
                <div style={{ backgroundImage: `url(${addnews.img})` }} className='w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative bg-cover bg-no-repeat bg-center'></div>
              ) : (
                <div
                  onClick={() => { setaddnews((prev) => ({ ...prev, img: "" })) }}

                  className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
              )
            ) : (
              // <div className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center ">
              //   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              //     <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              // </svg>
              // </div>

              <>
                <label htmlFor={`file-input-${456}`} className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                </label>

                <input
                  id={`file-input-${456}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    const base64 = await fileToBase64(file);

                    setaddnews((prev) => ({ ...prev, img: base64 }));
                  }}
                />



              </>
            )}

          </div>



          {/* Line divider */}
        </div>
        <div className="lineDiv mt-0 mb-20" />


      </section>








      {newsdata.map((item, i) => {
        if (i === 0) {
          return <NewsAndEventsContent item={item} key={i} index={i} setnewsdata={setnewsdata} />;
        } else if (i % 2 === 0) {
          return <NewsAndEventsBottomText item={item} key={i} index={i} setnewsdata={setnewsdata} />;
        } else {
          return <NewsAndEventsMiddleText item={item} key={i} index={i} setnewsdata={setnewsdata} />;
        }
      })}


      <div onClick={() => {setShowModal(true);sendotp()}} className="w-full flex items-center justify-center">
      <div className="w-[90%] text-center py-[13px] text-[20px] mt-[100px] rounded-md bg-black mt-8 text-white cursor-pointer hover:bg-[#212121e6] active:bg-[#1e1e1ec4] " >
              Save
      </div>
      </div>


        <div className="flex flex-col items-center justify-center ">
     

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-center">Enter OTP</h2>
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 text-center text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123456"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              >
                Close
              </button>
              <button
                onClick={()=>{postProp()}}
                className="px-4 py-2  bg-[#bfb1a1] cursor-pointer text-white rounded hover:bg-gray text-sm flex items-center justify-center"
              >
                {loading?<div className="spinnercareer"></div>:<div className="flex items-center justify-center">Submit</div>}

              </button>
            </div>
          </div>
        </div>
      )}
    </div>





      <Footer />
      <Copyright />
    </div>
  );
}
