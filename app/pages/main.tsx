import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import ImageSlider from "../components/ImageSlider"


export default function Main() {
  return (
    <div className="bg-white text-black pb-[1000px]">
     <TopLine/>
     <Navbar/>
     <ImageSlider/>
     <div className="flex items-center mt-24 flex-col">
      <div className="text-4xl font-bold text-[#444546] mb-16">About us</div>
        <AboutusComp text="Backed by Robust Tech Infrastructure & Scalable Supply Chain"/>

     </div>


    </div>
  )
}

function AboutusComp({text}:{text:string}){
return (
  <div className="flex flex-row justify-around">
            <div className="w-[300px] bg-[#E6E0D7] rounded relative h-[110px]" >
              <img src="/images/about1.png" alt="" />
              <div className="text-center text-[#123458] text-[16px] font-[600]">{text}</div>

            </div>
        </div> 
)
}