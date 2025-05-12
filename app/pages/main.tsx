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
        <div className="text-4xl font-bold text-[#444546] mb-16">About us</div>
        <div className="w-full flex flex-row justify-around px-[50px] h-[130px]">
          <AboutusComp img="about1.png" text="Backed by Robust Tech Infrastructure & Scalable Supply Chain" />
          <AboutusComp img="about2.png" text="Pioneering Sustainability With Clean & Conscious Products" />
          <AboutusComp img="about3.png" text="Purpose-Led, People-Centric Brand Philosophy" />
          <AboutusComp img="about4.png" text="India's Fastest-Growing Tech-Enabled Personal Care Brand" />
        </div>


      </div>


    </div>
  )
}

function AboutusComp({ text,img }: { text: string, img: string }) {
  return (
    <div className=" flex items-center justify-center w-[290px] px-[30px] bg-[#e5dfd68c] rounded relative h-full" >
      <img src={`/images/${img}`} className="w-[80px] h-[80px] rounded-full absolute top-[-40px] left-[104px]" />
      <div className="text-center text-[#123458] text-[16px] font-[500] mt-[27px] leading-tight">{text}</div>


    </div>
  )
}