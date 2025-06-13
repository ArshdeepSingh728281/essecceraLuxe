import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";

export default function AboutPage() {

    const team = [
    {
      name: "Kartik Goel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/Frame.png",
    },
    {
      name: "Priya Garg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/Frame.png",
    },
  ];




  return (
    <div>
      <TopLine />
      <Navbar />
      <h2 className="xl:ml-26 ml-[10px]  mt-15 xl:text-[35px] text-[25px] font-semibold text-black mb-6">
        Work At <span className="gradfortext" >Essenceara Luxe</span>
      </h2>

      <div className="flex items-center justify-center flex-col">
        {/* <div className="mt-4 text-3xl font-medium">Join Now</div> */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-1 text-[#171717]">
          Join Now
        </h2>
        <p className="text-sm sm:text-base text-center text-[#888] mb-10">
          {"Leave your message and we'll get back to you shortly."}
        </p>


    {/* old form */}
        {/* <input type="text" placeholder="Full name*" className=" ease-linear placeholder:text-[black] text-[18px] w-[41%] rounded-[5px] px-[20px] py-[15px]  bg-[#D9D9D9] mt-6 focus:border-[2px] focus:border-[#6b400047] focus:py-[13px] focus:px-[18px]" /> */}

        {/* <div className="flex flex-row flex-wrap items-center justify-center w-[100%]">
          <input type="text" placeholder="Email*" className=" ease-linear placeholder:text-[black] text-[18px] mr-2 w-[20%] rounded-[5px] px-[20px] py-[15px]  bg-[#D9D9D9] mt-4 focus:border-[2px] focus:border-[#6b400047] focus:py-[13px] focus:px-[18px]" />

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

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </div>
          </div>



        </div> */}
        {/* <div className="w-[41%]">
          <div className="mt-4 text-[14px] font-medium  ml-[10px] mr-auto">Upload Your*</div>
        </div> */}




{/* 
        <div className="w-full flex items-center justify-center relative">
          <img src="inputbox.png" className="w-[41%] mt-2 absolute z-10 top-0" alt="" />
          <input id="fileInput" type="file" className="hidden" />


          <label
            htmlFor="fileInput"
            className="w-[41%] mt-2 aspect-[48/14] flex items-center justify-center bg-transparent text-center  rounded-md cursor-pointer z-20"
          >
            Choose File
          </label>


        </div>



        <div className="tran mt-6 w-[41%] text-[18px] text-center bg-[#D4C9BE] font-[900] rounded-[5px] px-[20px] py-[16px]  cursor-pointer hover:bg-[#b8a898] active:bg-[#887b6f] active:translate-y-1 select-none mb-[130px]">
          Sumbit
        </div> */}



      </div>





       <div className="max-w-[700px] mx-auto grid gap-8 px-[10px] xl:px-[0px]">
        {/* Name */}
        <div className="relative ">
          <input
            type="text"
            id="name"
            name="name"
            required
            className="peer w-full border border-gray-300 rounded-md px-4 pt-6 pb-2 text-sm text-black outline-none focus:border-black focus:ring-0 bg-[#e5e5e5]"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600 "
          >
            Name
          </label>
        </div>

        {/* Email + Dropdown (Side by side on larger screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-0">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="peer w-full border border-gray-300 rounded-md px-4 pt-6 pb-2 text-sm text-black outline-none focus:border-black focus:ring-0 bg-[#e5e5e5]"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Email
            </label>
          </div>

          {/* Dropdown */}
          {/* Dropdown */}
<div className="relative w-full">
  <select
    id="department"
    name="department"
    required
    defaultValue=""
    className="peer w-full border border-gray-300 rounded-md px-4 pt-6 pb-2 text-sm text-black outline-none focus:border-black focus:ring-0 bg-[#e5e5e5] appearance-none pr-10"
  >
    <option value="" disabled hidden></option>
    <option value="marketing">Marketing</option>
    <option value="product">Product Development</option>
    <option value="sales">Sales</option>
    <option value="design">Design</option>
    <option value="operations">Operations</option>
  </select>
  <label
    htmlFor="department"
    className="absolute left-4 top-2 text-gray-600 text-sm transition-all 
    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
    peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600 
    truncate w-[calc(100%-2rem)]"
  >
    Function/Department
  </label>

  {/* Custom arrow icon */}
  <svg
    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4 text-gray-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>


        </div>
      </div>









 
    
     <div className="max-w-[700px] mx-auto grid gap-8 ">
        {/* Name */}
        <div className="relative w-full">
                    <div className="mt-4 text-[14px] font-medium  ml-[10px] mr-auto">Upload Your CV*</div>

        </div>

      </div>


      
        <div className="w-full flex items-center justify-center relative ">
          <img src="inputbox.png" className="maxwithtoimginput mt-2 absolute z-10 top-0" alt="" />
          <input id="fileInput" type="file" className="hidden" />


          <label
            htmlFor="fileInput"
            className="w-[41%] mt-2 aspect-[48/14] flex items-center justify-center bg-transparent text-center  rounded-md cursor-pointer z-20"
          >
            Choose File
          </label>


        </div>

{/* 

      <div className="flex items-center justify-center mt-[30px]">
        <div className="tran mt-6 xl:w-[46%] w-[100%]  mx-[30px] xl:mx-0 mt-[163px] xl:mt-[30px] text-[18px] text-center  bg-[#D4C9BE] font-[900] rounded-[5px] px-[20px] py-[16px]  cursor-pointer hover:bg-[#b8a898] active:bg-[#887b6f] active:translate-y-1 select-none ">
          Sumbit
        </div>
      </div> */}




       <div className="max-w-[700px] mx-auto grid gap-8 responsivemargintobtn px-[10px] xl:px-[0px]">
        {/* Name */}
        <div className="relative w-full">
          <div className=" peer w-full tran mt-6  text-[18px] text-center  bg-[#D4C9BE] font-[900] rounded-[5px] px-[20px] py-[16px]  cursor-pointer hover:bg-[#b8a898] active:bg-[#887b6f] active:translate-y-1 select-none">
            Submit
          </div>
        </div>

      </div>















  <section className="mt-24 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10 mt-20 text-[#000000]">Meet Us</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-6 text-center w-full sm:w-[350px] min-h-[400px] shadow-sm"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#000000]">{member.name}</h3>
            <p className="text-[#767373] text-sm break-words">{member.description}</p>
          </div>
        ))}
      </div>
    </section>





      <Footer />
      <Copyright />

    </div>
  );
}