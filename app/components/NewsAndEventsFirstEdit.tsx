'use client';
// import type { NextPage } from 'next';
import Image from 'next/image';
import { useState ,useEffect, useRef } from 'react';


    type NewsItem = {
      title: string;
      img:string;
      views: number;
      time: string;
      dis:string;
    };

    type NewsContentProps = {
      item: NewsItem;
      index: number;
      setnewsdata:React.Dispatch<React.SetStateAction<NewsItem[]>>;
    };


const Group:  React.FC<NewsContentProps> = ({ item, index,setnewsdata }) => {

    const [showimg,setshowimg] = useState(true);
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
}, [item.dis]); // run whenever item.dis changes




  return (
    <section key={index} className="bg-[#ffffff] px-6 md:px-20 py-16">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-12">News And Events</h2> */}

      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 cursor-pointer">
        {/* Placeholder image */}
        <div 
                     onMouseEnter={()=>{setshowimg(false)}}
              onMouseLeave={()=>{setshowimg(true)}}
              className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center">

              {item.img?(
                showimg?(
                // <img src={item.img}  className='w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative'/>
                <div style={{backgroundImage:`url(${item.img})`}} className='w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative bg-cover bg-no-repeat bg-center'></div>
            ):(
                <div 
              onClick={() => {
                console.log("hello world")
                setnewsdata((prevData) =>
                    prevData.map((data, i) =>
                    i === index ? { ...data, img: "" } : data
                    )
                );
                }}

                className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
                )
              ):(
                // <div className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center ">
                //   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                //     <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                // </svg>
                // </div>

                <>
                <label htmlFor={`file-input-${index}`} className="w-full md:w-[400px] h-[250px] rounded-md bg-[#CFC5C5] flex-shrink-0 relative flex items-center justify-center cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
</label>

<input
  id={`file-input-${index}`}
  type="file"
  accept="image/*"
  className="hidden"
  onChange={async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await fileToBase64(file);

    setnewsdata((prev) =>
      prev.map((data, i) =>
        i === index ? { ...data, img: base64 } : data
      )
    );
  }}
/>



                </>
                )}

        </div>

        <div className="flex-1">
            <input
  className="text-2xl font-semibold mb-2 text-[#171717] w-full"
  value={item.title}
  onChange={(e) => {
    const newTitle = e.target.value;

    setnewsdata((prev) =>
      prev.map((data, i) =>
        i === index ? { ...data, title: newTitle } : data
      )
    );
  }}
/>

          <div className="flex items-center gap-2 text-sm text-[#6A5D5D] mb-4">
            <span>{item.views}k views</span>


            <div 
            className="relative w-4 h-4">
              
                                <Image src="/Frame.svg" alt="icon" fill />
              
            </div>
            <span className="text-xl font-bold">·</span>
            <span>{item.time}</span>
          </div>
<textarea
  ref={textareaRef}
  className="text-[#171717] text-base leading-relaxed max-w-3xl w-full bg-transparent outline-none overflow-hidden resize-none"
  value={item.dis}
  rows={1}
  onChange={(e) => {
    const newDis = e.target.value;

    // Resize dynamically
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    // Update state
    setnewsdata((prev) =>
      prev.map((data, i) =>
        i === index ? { ...data, dis: newDis } : data
      )
    );
  }}
/>

              <button onClick={() => { setnewsdata((prevData) => prevData.filter((_, i) => i !== index) ) }} className="w-full py-[13px] rounded-md bg-black mt-8 text-white cursor-pointer hover:bg-[#212121e6] active:bg-[#1e1e1ec4]" >
              Delete
      </button>

        </div>
      </div>

      
    </section>
  );
};

export default Group;
