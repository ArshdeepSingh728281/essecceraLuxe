"use client"
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import ImageSlider from "../components/ImageSlider"
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { useEffect, useState, useRef } from "react";


export default function Main() {

  const [aboutusheading, setAboutusHeading] = useState("About us")
  const [essheading, setessheading] = useState("Essenceara Luxe")
  const [essheadingend, setessheadingend] = useState("Unveils")

  const mystorytxt = "Essenceara Luxe began not in a boardroom, but in a college dorm room—fueled by passion, curiosity, and an unapologetic love for beauty. Founded by two third-year college students with big dreams and even bigger ambitions, Essenceara Luxe was born out of a simple question: Why should luxury beauty feel so out of reach, especially for the generation redefining it?";
  const [ourstorytext, setourstorytext] = useState(mystorytxt)

    // eslint-disable-next-line react-hooks/rules-of-hooks
  const textareaRefforadd = useRef<HTMLTextAreaElement|null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const textareaRefforaddtwo = useRef<HTMLTextAreaElement|null>(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
  const ourstorytextRef = useRef<HTMLTextAreaElement|null>(null);


  useEffect(()=>{
            if (textareaRefforadd.current) {
              textareaRefforadd.current.style.height = "auto";
              textareaRefforadd.current.style.height = `${textareaRefforadd.current.scrollHeight}px`;
            }
            if (textareaRefforaddtwo.current) {
              textareaRefforaddtwo.current.style.height = "auto";
              textareaRefforaddtwo.current.style.height = `${textareaRefforaddtwo.current.scrollHeight}px`;
            }
            if (ourstorytextRef.current) {
              ourstorytextRef.current.style.height = "auto";
              ourstorytextRef.current.style.height = `${ourstorytextRef.current.scrollHeight}px`;
            }
  },[])



  const [ourbrands, setOurbrands] = useState([
    {
      brandname: "UAMORE",
      img: "/images/uamorelogo.png",
      // img:"",
      showdelimg: true,
      color: "#edd7b5",
      paraone: "Essenceara Luxe is a modern house of beauty brands, dedicated to crafting premium, purpose-driven experiences for today’s discerning consumer. Rooted in elegance and innovation, we believe beauty is more than a product—it’s a journey of self-expression and sensorial delight.",
      paratwo: "Our vision comes to life through Uamore, our signature perfume brand that embodies luxury, individuality, and emotion. With Uamore, we’re redefining fragrance for the modern generation—crafted with precision, inspired by feeling."

    }
  ]);

  const [addoutrbrand, setaddoutrbrand] = useState(
    {
      brandname: "Name",
      img:"",
      showdelimg: true,
      color: "#edd7b5",
      paraone: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum a hic molestiae nostrum eum deserunt sunt aliquid laborum nemo odit eos illo, quasi reiciendis quidem in vero velit sit.",
      paratwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reprehenderit ex aliquam amet. Veritatis, cumque illum laborum voluptate earum tempora obcaecati provident officiis iste sed enim doloremque non excepturi ad voluptas praesentium alias unde incidunt sunt possimus dolor et dolorem."

    }
  );



  const toggleShowDelImg = (index: number, value: boolean) => {
    setOurbrands(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, showdelimg: value } : item
      )
    );
  };


              // eslint-disable-next-line react-hooks/rules-of-hooks
          const textareaRef = useRef<HTMLTextAreaElement|null>(null);
            // eslint-disable-next-line react-hooks/rules-of-hooks
          const textareaReftwo = useRef<HTMLTextAreaElement|null>(null);

          useEffect(() => {
            if (textareaRef.current) {
              textareaRef.current.style.height = "auto";
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
            if (textareaReftwo.current) {
              textareaReftwo.current.style.height = "auto";
              textareaReftwo.current.style.height = `${textareaReftwo.current.scrollHeight}px`;
            }
          }, []);


  return (
    <div className="bg-white text-black ">
      <TopLine />
      <Navbar />
      <ImageSlider />
      <div className="flex flex-row items-center px-[20px] mt-[10px]">

        <div style={{ border: "2px solid #d0d0d0" }} className=" mr-[10px] w-[200px] h-[100px] bg-black rounded bg-[url('https://live.staticflickr.com/5163/5228589013_0a1095fdd8_h.jpg')] bg-cover bg-no-repeat bg-center">
          <div className=" p-2   cursor-pointer w-[40px] flex items-center justify-center rounded-[30px] bg-[#e8c1c187] m-[3px] ml-[auto] text-[white]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>
        </div>

        <div style={{ border: "2px solid #d0d0d0" }} className=" mr-[10px] w-[200px] h-[100px] bg-white rounded flex items-center justify-center">
          <div className=" p-2   cursor-pointer w-[40px] flex items-center justify-center rounded-[30px] bg-[#6a6a6a87] m-[3px]  text-[white]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>


      </div>
      <div className="flex items-center mt-24 flex-col h-full flex-wrap  ">
        <input onChange={(e) => { setAboutusHeading(e.target.value) }} type="text" className="text-4xl font-[600] text-[#444546] mb-16 text-center" value={aboutusheading} />
        <div className="w-full flex flex-row justify-around px-[50px] height-[100%] flex-wrap">
          <AboutusComp text="Backed by Robust Tech Infrastructure & Scalable Supply Chain" />
          <AboutusComp img="about2.png" text="Pioneering Sustainability With Clean & Conscious Products" />
          <AboutusComp img="about3.png" text="Purpose-Led, People-Centric Brand Philosophy" />
          <AboutusComp img="about4.png" text="India's Fastest-Growing Tech-Enabled Personal Care Brand" />
        </div>
      </div>


      <div className="flex items-center mt-26 flex-col ">
        <div className="text-4xl font-[900] text-[#444546] mb-16 flex items-center justify-center"><input onChange={(e) => { setessheading(e.target.value) }} type="text" value={essheading} className="text-center w-[34%]" /> <input onChange={(e) => { setessheadingend(e.target.value) }} type="text" className="gradfortext w-[15%] text-center" value={essheadingend} /></div>



        {ourbrands.map((item, i) => {


          return (
            <div
              key={i}
              className={`flex flex-row items-center justify-center flex-row flex-wrap bg-[#edd7b5] px-[5px] xl:px-[150px] py-[40px] xl:py-[50px] w-[90%] rounded-[10px] mb-20 `}
              style={{ backgroundColor: item.color }}
            >


              {item.img.trim() !== "" ? (
                <div
                  key={i}
                  onMouseEnter={() => toggleShowDelImg(i, false)}
                  onMouseLeave={() => toggleShowDelImg(i, true)}
                  className="flex items-center justify-center"
                >

                  {item.showdelimg ? (
                    <img
                      src={item.img}
                      className="xl:w-[200px] xl:h-[220px] w-[140px] h-[150px] mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px]"
                      alt=""
                    />
                  ) : (
                    <div className="xl:w-[200px] xl:h-[220px] w-[140px] h-[150px] mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px] rounded flex items-center justify-center bg-[#6a6a6a87] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-10 z-20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  )}


                </div>
              ) : (
                <div className="w-[240px] h-[300px] rounded flex items-center justify-center bg-[#6a6a6a87] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </div>
              )}





              <div className="max-w-[739px] flex items-center justify-center flex-col w-full">
                <input
                  onChange={(e) => {
                    const updatedBrands = [...ourbrands];
                    updatedBrands[i].brandname = e.target.value;
                    setOurbrands(updatedBrands);
                  }}
                  className="text-3xl mb-[15px] text-center font-[900]"
                  value={item.brandname}
                />

                <div className="text-center px-[15px] xl:px-[45px] text-[17px] w-full">
                  <textarea
                    ref={textareaRef}
                    onChange={(e) => {
                      const updatedBrands = [...ourbrands];
                      updatedBrands[i].paraone = e.target.value;
                      setOurbrands(updatedBrands);

                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    value={item.paraone}
                    className="w-full text-[17px] px-[10px] py-[8px] rounded resize-none overflow-hidden text-center"
                    rows={1}
                  />

                  <br />
                  <br />
                  {item.paratwo ?
                    (
                      <textarea
                        ref={textareaReftwo}
                        onChange={(e) => {
                          const updatedBrands = [...ourbrands];
                          updatedBrands[i].paratwo = e.target.value;
                          setOurbrands(updatedBrands);

                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                        value={item.paratwo}
                        className="w-full text-[17px] px-[10px] py-[8px] rounded resize-none overflow-hidden text-center"
                        rows={1}
                      />
                    )
                    : null
                  }

                  <input
                    type="color"
                    className="mt-[10px]"
                    value={item.color}
                    onChange={(e) => {
                      const updatedBrands = [...ourbrands];
                      updatedBrands[i].color = e.target.value;
                      setOurbrands(updatedBrands);
                    }}
                  />

                </div>
              </div>
            </div>
          );
        })}



        <div style={{ backgroundColor: addoutrbrand.color }} className="flex flex-row  items-center justify-center flex-wrap bg-[#edd7b5] px-[5px] xl:px-[10px]  py-[10px] xl:py-[60px] w-[90%] rounded-[10px]  mb-10 cursor-pointer    ">

 {addoutrbrand.img.trim() !== "" ? (
                <div
                  onMouseEnter={() => setaddoutrbrand({...addoutrbrand,showdelimg:false})}
                  onMouseLeave={() => setaddoutrbrand({...addoutrbrand,showdelimg:true})}
                  className="flex items-center justify-center"
                >

                  {addoutrbrand.showdelimg ? (
                    <img
                      src={addoutrbrand.img}
                      className="xl:w-[200px] xl:h-[220px] w-[140px] h-[150px] mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px]"
                      alt=""
                    />
                  ) : (
                    <div className="xl:w-[200px] xl:h-[220px] w-[140px] h-[150px] mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px] rounded flex items-center justify-center bg-[#6a6a6a87] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-10 z-20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  )}


                </div>
              ) : (
                <div className="xl:w-[200px] xl:h-[220px] w-[140px] h-[150px] mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px] rounded flex items-center justify-center bg-[#6a6a6a87] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </div>
              )}


          <div className="max-w-[739px] flex items-center justify-center flex-col w-full">
            <input type="text" value={addoutrbrand.brandname} onChange={(e)=>{setaddoutrbrand({...addoutrbrand,brandname:e.target.value})}} className="text-3xl mb-[15px] text-center font-[900]"/>
            <div className="text-center px-[15px] xl:px-[45px] text-[17px] w-full">
               <textarea
                    ref={textareaRefforadd}
                    onChange={(e) => {
                      setaddoutrbrand({...addoutrbrand,paratwo:e.target.value})

                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    value={addoutrbrand.paraone}
                    className="w-full text-[17px] px-[10px] py-[8px] rounded resize-none overflow-hidden text-center"
                    rows={1}
                  />
              <br></br>
              <br></br>
                  {addoutrbrand.paratwo ?
                    (
                      <textarea
                        ref={textareaRefforaddtwo}
                        onChange={(e) => {
                          setaddoutrbrand({...addoutrbrand,paratwo:e.target.value})

                          e.target.style.height = "auto";
                          e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                        value={addoutrbrand.paratwo}
                        className="w-full text-[17px] px-[10px] py-[8px] rounded resize-none overflow-hidden text-center"
                        rows={1}
                      />
                    )
                    : null
                  }

            </div>
          <input type="color" className="mt-[20px]" value={addoutrbrand.color} onChange={(e) => { setaddoutrbrand({ ...addoutrbrand, color: e.target.value }) }} />

          <div className="text-[20px] mt-10 bg-black w-full py-2 rounded text-white text-center active:translate-y-[2px] hover:bg-gray-600" style={{border: "2px solid white"}}>Add</div>


          </div>


          
         



        </div>


      </div>






      {/* <div className="flex items-center mt-26 flex-col">
        <div className="text-4xl font-[900] text-[#444546]  mt-[20px]">Our <span className="gradintext">
          Story
          <div className="borderbtm"></div>
          </span></div>
        <div className="px-[20px] mt-[30px] flex flex-row justify-center ">
          <div className="bg-[#51538c26] px-[30px] py-[10px] rounded-tl-[5px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[5px]  flex items-center  ">
            {"Essenceara Luxe began not in a boardroom, but in a college dorm room—fueled by passion, curiosity, and an unapologetic love for beauty. Founded by two third-year college students with big dreams and even bigger ambitions, Essenceara Luxe was born out of a simple question: Why should luxury beauty feel so out of reach, especially for the generation redefining it?"}
            <br />
            <br />
            {"We started with Uamore, our debut perfume brand—crafted to evoke emotion, celebrate individuality, and make luxury fragrance accessible yet unforgettable. Every scent tells a story, and Uamore is ours: bold, driven, and made with intention.Essenceara Luxe isn't just a brand; it's the beginning of a legacy. With a commitment to quality, craftsmanship, and consumer-first innovation, we’re laying the foundation for a house of beauty brands built for the modern world.And this? This is just the start."}
          </div>
          <img src="/images/rocket.png"  className="w-[380px] h-[280px] bg-[#51538c26] ml-[5px] px-[30px] rounded-tl-[0px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[0px]" alt="" />

        </div>
      </div> */}



      <div className="flex items-center flex-row relative  w-[full] justify-between xl:px-30 px-10 mt-[60px] mb-[60px] pt-[80px] pb-[100px] flex-wrap">
        <div className="z-10 flex  justify-left flex-col w-[53%]">
          <div className="text-5xl font-[900] text-[#444546]  mt-[20px]">Our
            <div className="gradintext">
              Story
            </div>
          </div>
          <div className="borderbtm"></div>

          <div className="z-10 mt-8 text-[18px]  max-w-[780px] w-full`">
            <textarea 
            
          ref={ourstorytextRef}
          onChange={(e) => {
            setourstorytext(e.target.value)

            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}

                              
            value={ourstorytext} 
            className="w-full"
            />
          </div>

          <span className="z-10 readmorebtnclass">Read More</span>

        </div>
        <img src="/images/rocket.png" className="z-10 w-[380px] mr-[20px]   ml-[5px] px-[30px] rounded-tl-[0px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[0px]" alt="" />
        <img src="/randomsvg.png" className=" xl:h-[600px] w-[100%] h-[1000px] opacity-70 absolute top-[0px] left-[0px]" alt="" />
      </div>





      <div className="flex items-center mt-26 flex-col flex-wrap">
        <div className="text-4xl font-[900] text-[#444546]  mt-[20px] mb-[50px] text-center">Our Brands & Businesses</div>
        <div className="flex flex-row justify-around align-center w-[100%] flex-wrap ">

          <div className=" flex justify-center items-center min-w-[300px] my-8 xl:my-0 mt-0">
            <div className="relative w-[160px] flex items-center justify-center mx-4 my-4 w-[33%] ">
              <img src="images/bluroneleft.png" alt="" />
              <div className="top-50 absolute text-white font-[600] top-[45%] left-[15px]">Comming Soon</div>
            </div>
          </div>

          <div className="flex justify-center items-center  min-w-[300px] my-8 xl:my-0">
            <div className="relative w-[160px] flex items-center justify-center w-[33%] ">
              <img src="images/uamorelogo.png" alt="" />
              {/* <div className="top-50 absolute text-white font-[600] top-[45%] left-[15px]">Comming Soon</div> */}
            </div>
          </div>

          <div className=" flex justify-center items-center min-w-[300px] my-8 xl:my-0">
            <div className="relative w-[160px] flex items-center justify-center">
              <img src="images/blurtworight.png" alt="" />
              <div className="top-50 absolute text-white font-[600] top-[45%] left-[15px] text-[#ffffffc7]">Comming Soon</div>
            </div>
          </div>


        </div>
      </div>


      <Footer />
      <Copyright />





    </div>
  )
}

function AboutusComp({ text, img }: { text: string, img?: string }) {

  const [dis, setdis] = useState("")
  const [showimg, setshowimg] = useState(false)

  useEffect(() => {
    setdis(text)
  }, [])

  return (
    <div className=" flex  items-center h-[100%] justify-center w-[290px] px-[30px] bg-[#e5dfd68c] rounded relative  mt-[50px]" >

      {
        img ? (
          <div
            onMouseEnter={() => setshowimg(true)}
            onMouseLeave={() => setshowimg(false)}
            className="w-[80px] h-[80px] rounded-full absolute top-[-40px] left-[104px] flex items-center justify-center bg-[#c1c1c187] cursor-pointer"
          >
            {showimg ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 z-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>

            ) : (
              <img src={`/images/${img}`} className="w-[80px] h-[80px] rounded-full absolute  cursor-pointer" />

            )}

          </div>

        ) :
          (
            <div className="w-[80px] h-[80px] rounded-full absolute top-[-40px] left-[104px] flex items-center justify-center bg-[#c1c1c187] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>

            </div>
          )
      }
      {/* <div  className="text-center text-[#123458] text-[16px] font-[500] mt-[27px] leading-tight">

      </div> */}

      <textarea
        onChange={(e) => {
          setdis(e.target.value);

          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        className="text-center text-[#123458] text-[16px] font-[500] mt-[27px] leading-tight resize-none p-2 rounded w-full overflow-hidden mt-[45px] pb-10"
        value={dis}
      />




    </div>
  )
}