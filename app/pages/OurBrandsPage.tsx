import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";

export default function OurBrandsPage() {
  return (
    <div>
      <TopLine/>
      <Navbar/>
            <div className="mx-20 mt-16 font-[900] text-4xl"> Our Brands</div>

      <Brands name="UAMORE" img="/images/uamorelogo.png" 
        paraone = "Uamore is a modern house of beauty brands, dedicated to crafting premium, purpose-driven experiences for today’s discerning consumer. Rooted in elegance and innovation, we believe beauty is more than a product—it’s a journey of self-expression and sensorial delight."
        paratwo = "Our vision comes to life through Uamore, our signature perfume brand that embodies luxury, individuality, and emotion. With Uamore, we’re redefining fragrance for the modern generation—crafted with precision, inspired by feeling."
      />
 
      <Footer/>
      <Copyright/>


      


    </div>
  );
}



function Brands ({name,img,paraone,paratwo}:{name:string,img:string,paraone:string,paratwo:string}){
    return (
      <div className="flex items-center mt-8 flex-col  mb-10">

        <div className="flex flex-row  items-center justify-center flex-wrap bg-[#edd7b5] px-[5px] xl:px-[150px]  py-[10px] xl:py-[50px] w-[90%] rounded-[5px]  ">

          <img src={img} className="xl:w-[200px] xl:h-[220px] w-[140px]   h-[150px]  mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px]" alt="" /> 

          <div className="max-w-[739px] ">
            <div className="text-3xl mb-[15px] text-center font-[900]">{name}</div>
            <div className="text-center px-[15px] xl:px-[45px] text-[17px]">
                {paraone}
            <br></br>
            <br></br>
            {paratwo}
            </div>
          </div>

        </div>

    </div>
    )
}