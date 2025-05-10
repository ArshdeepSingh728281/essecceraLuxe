import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import ImageSlider from "../components/ImageSlider"


export default function Main() {
  return (
    <div className="bg-white text-black pb-[1000px]">
     <TopLine/>
     <Navbar/>
     <ImageSlider/>
    </div>
  )
}