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
          <AboutusComp text="Backed by Robust Tech Infrastructure & Scalable Supply Chain" />
          <AboutusComp text="Pioneering Sustainability With Clean & Conscious Products" />
          <AboutusComp text="Purpose-Led, People-Centric Brand Philosophy2" />
          <AboutusComp text="India's Fastest-Growing Tech-Enabled Personal Care Brand" />
        </div>


      </div>


    </div>
  )
}

function AboutusComp({ text }: { text: string }) {
  return (
    <div className=" flex items-center justify-center w-[270px] px-[30px] bg-[#E6E0D7] rounded relative h-full" >
      <img src="/images/about1.png" alt="" className="w-[80px] absolute top-[-40px] left-[97px]" />
      <div className="text-center text-[#123458] text-[16px] font-[600] mt-[27px]">{text}</div>


    </div>
  )
}