import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";

export default function AboutPage() {
  return (
    <div>
      <TopLine/>
      <Navbar/>
        <h2 className="ml-26  mt-15 text-[35px] font-semibold text-black mb-6">
          Work At <span className="gradfortext" >Esscnceara Luxe</span>
        </h2>

      <div className="flex items-center justify-center flex-col">
          <div className="mt-4 text-3xl font-medium">Join Now</div>
          <div className="mt-4 text-xl font-[10] text-[#252525cc]">Leave your message and we'll get back to you shortly.</div>
          <input type="text" placeholder="Full name*" className=" ease-linear placeholder:text-[black] text-[18px] w-[41%] rounded-[5px] px-[20px] py-[15px]  bg-[#D9D9D9] mt-6 focus:border-[2px] focus:border-[#6b400047] focus:py-[13px] focus:px-[18px]" />
          <div className="flex flex-row flex-wrap items-center justify-center w-[100%]">
          <input type="text" placeholder="Email*" className=" ease-linear placeholder:text-[black] text-[18px] mr-2 w-[20%] rounded-[5px] px-[20px] py-[15px]  bg-[#D9D9D9] mt-4 focus:border-[2px] focus:border-[#6b400047] focus:py-[13px] focus:px-[18px]" />
          {/* <select id="dropdown" name="dropdown" className=" ease-linear placeholder:text-[black] text-[18px] ml-2 w-[20%] rounded-[5px] px-[20px] py-[16px]  bg-[#D9D9D9] mt-4 focus:border-[2px] focus:border-[#6b400047] focus:py-[13px] focus:px-[18px]">
            <option value="option1">Function/Department*</option>
            <option value="option2">Marketting</option>
            <option value="option3">Content Creation</option>
          </select> */}


          <div className="relative w-[20%] ml-2 mt-4">
  <select
    id="dropdown"
    name="dropdown"
    className="appearance-none ease-linear placeholder:text-black text-[18px] w-full rounded-[5px] px-[20px] py-[16px] bg-[#D9D9D9] focus:border-[2px] focus:border-[#6b400047] focus:py-[13px] focus:px-[18px]"
  >
    <option value="option1">Function/Department*</option>
    <option value="option2">Marketing</option>
    <option value="option3">Content Creation</option>
  </select>

  <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-black">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

  </div>
</div>



          </div>
          <div className="w-[41%]"> 
            <div className="mt-4 text-[14px] font-medium  ml-[10px] mr-auto">Upload Your*</div>
          </div>

          {/* <div className="w-[100%] flex items-center justify-center relative">
          <img src="inputbox.png"  className="w-[41%] mt-2 abso" alt="" />

          <input type="file" className=" min-h-[30px] apratio flex items-center justify-center" />
          </div> */}

          

          <div className="w-full flex items-center justify-center relative">
              <img src="inputbox.png" className="w-[41%] mt-2 absolute z-10 top-0" alt=""/>
              <input id="fileInput" type="file" className="hidden"/>

            
            <label
              htmlFor="fileInput"
              className="w-[41%] mt-2 aspect-[48/14] flex items-center justify-center bg-transparent text-center  rounded-md cursor-pointer z-20"
            >
              Choose File
            </label>


          </div>



        <div className="mt-6 w-[41%] text-[18px] text-center bg-[#D4C9BE] font-[900] rounded-[5px] px-[20px] py-[16px] tran cursor-pointer hover:bg-[#b8a898] active:bg-[#887b6f] active:translate-y-1 select-none mb-[130px]">
            Sumbit
        </div>

            


      </div>

      <Footer/>
      <Copyright/>
        
    </div>
  );
}