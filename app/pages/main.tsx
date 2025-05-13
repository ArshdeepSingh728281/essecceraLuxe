import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import ImageSlider from "../components/ImageSlider"


export default function Main() {
  return (
    <div className="bg-white text-black pb-[1000px]">
      <TopLine />
      <Navbar />
      <ImageSlider />
      <div className="flex items-center mt-24 flex-col">
        <div className="text-4xl font-[600] text-[#444546] mb-16">About us</div>
        <div className="w-full flex flex-row justify-around px-[50px] h-[130px]">
          <AboutusComp img="about1.png" text="Backed by Robust Tech Infrastructure & Scalable Supply Chain" />
          <AboutusComp img="about2.png" text="Pioneering Sustainability With Clean & Conscious Products" />
          <AboutusComp img="about3.png" text="Purpose-Led, People-Centric Brand Philosophy" />
          <AboutusComp img="about4.png" text="India's Fastest-Growing Tech-Enabled Personal Care Brand" />
        </div>
      </div>


      <div className="flex items-center mt-26 flex-col">
        <div className="text-4xl font-[900] text-[#444546] mb-16">Essenceara Luxe <span className="gradfortext">Unveils</span></div>
        <div className="flex flex-row justify-center  bg-[#edd7b5] px-[150px] py-[50px]">
          <img src="/images/uamorelogo.png" className="w-[220px] h-[220px] mr-[35px] ml-[30px]" alt="" /> 
          <div className="">
            <div className="text-3xl mb-[15px] text-center font-[900]">UAMORE</div>
            <div className="text-center px-[45px] text-[17px]">
              Essenceara Luxe is a modern house of beauty brands, dedicated to crafting premium, purpose-driven experiences for today’s discerning consumer. Rooted in elegance and innovation, we believe beauty is more than a product—it’s a journey of self-expression and sensorial delight.
            <br></br>
            <br></br>
              Our vision comes to life through Uamore, our signature perfume brand that embodies luxury, individuality, and emotion. With Uamore, we’re redefining fragrance for the modern generation—crafted with precision, inspired by feeling.
            </div>
          </div>
        </div>
      </div>





      <div className="flex items-center mt-26 flex-col">
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
      </div>





      
      <div className="flex items-center mt-26 flex-col">
        <div className="text-4xl font-[900] text-[#444546]  mt-[20px] mb-[50px]">Our Brands & Businesses</div>
        <div className="flex flex-row justify-around align-center w-[100%]">

          <div className="relative w-[160px] flex items-center justify-center">
            <img src="images/bluroneleft.png" alt="" />
            <div className="top-50 absolute text-white font-[600] top-[45%] left-[15px]">Comming Soon</div>
          </div>

          <div className="relative w-[160px] flex items-center justify-center">
            <img src="images/uamorelogo.png" alt="" />
            {/* <div className="top-50 absolute text-white font-[600] top-[45%] left-[15px]">Comming Soon</div> */}
          </div>

          <div className="relative w-[160px] flex items-center justify-center">
            <img src="images/blurtworight.png" alt="" />
            <div className="top-50 absolute text-white font-[600] top-[45%] left-[15px] text-[#ffffffc7]">Comming Soon</div>
          </div>


        </div>
      </div>





    </div>
  )
}

function AboutusComp({ text, img }: { text: string, img: string }) {
  return (
    <div className=" flex items-center justify-center w-[290px] px-[30px] bg-[#e5dfd68c] rounded relative h-full" >
      <img src={`/images/${img}`} className="w-[80px] h-[80px] rounded-full absolute top-[-40px] left-[104px]" />
      <div className="text-center text-[#123458] text-[16px] font-[500] mt-[27px] leading-tight">{text}</div>


    </div>
  )
}