"use client";

import Link from "next/link";
import { usePageStore , Pages} from "../store/pageStore";
import { useState } from "react";
// import styles from "../styles/style.module.css";




export default function Navbar(){

    const [menustate,setmenustate] = useState(false);



    return (
        <div className="flex xl:justify-between items-center w-full  h-10 xl:h-16 bg-white px-4 xl:px-14 xl:pt-10 pt-8">
            <div className="hidden justify-between items-center h-full w-1/3 xl:flex"> 
                <NavbarItem to="about" text="About Us" />
                <NavbarItem to="/" text="Home"/>
                <NavbarItem to="newsandevents" text="News & Events"/>
            </div>

            <div onClick={()=>{setmenustate(true)}}  className="flex justify-center items-center h-[60px] w-[30px] xl:hidden z-10">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </div>

            <div className="w-full  justify-center ml-[-30px]  items-center h-full flex xl:hidden">
            <img  src="mainlogo.png" className={`xl:w-60 ml-4 z-10 w-50 `}/>   
            </div>

            <img  src="mainlogo.png" className={`w-60 ml-4 z-10  hidden xl:block `}/>    

            <div className="hidden justify-between items-center h-full w-1/3 xl:flex">
                <NavbarItem minwidth="135px" to="ourbrands" text="Our Brands"/>
                <NavbarItem to="investorrelations" text="Investors"/>
                <NavbarItem to="careers" text="Careers"/>
            </div>


            <div className={`${menustate ? "translate-x-0" : "translate-x-[-100%]"} transform transition-all fixed top-0 left-0 bottom-0 bg-black opacity-50 h-full w-[280px] z-20 flex flex-col  pt-[100px]  pl-[30px]`}> 
            {/* content */}
            <Navitemphone to="/" title="Home"/>
            <Navitemphone to="about" title="About Us"/>
            <Navitemphone to="newsandevents" title="News & Events"/>
            <Navitemphone to="ourbrands" title="Our Brands"/>
            <Navitemphone to="investorrelations" title="Investors"/>
            <Navitemphone to="careers" title="Careers"/>
            </div>

            <div onClick={()=>{setmenustate(false)}} className={` ${menustate ? "block" : "hidden"} fixed top-0 left-0 right-0 bottom-0 w-full h-full z-11`}></div> 
            

        </div>
    )
}




type NavItemPhoneProps = {
  to: Pages;
  title: string;
};

function Navitemphone({ to, title }: NavItemPhoneProps) {

      const { selectedPage, setSelectedPage } = usePageStore();  

  return (
    <Link href={to}>
        {selectedPage == to ?(
    <div onClick={() => setSelectedPage(to)} className="text-[30px]  mb-[20px] text-slate-50 z-30 font-[900]">
      {title}
    </div>
    ):(
    <div onClick={() => setSelectedPage(to)} className="text-[30px] text-white mb-[20px] z-30">
      {title}
    </div>
    )
    }
    </Link>
  );
}



function NavbarItem({to,text,minwidth}:{to:Pages,text:string,minwidth?:string}){

    const { selectedPage, setSelectedPage } = usePageStore();  




    return (
        <Link href={to}>
            {selectedPage == to ?(
                <div style={{minWidth:minwidth}} className="text-xl font-medium text-black bg-[#D4C9BE] px-4 py-0.5 text-sm rounded" onClick={() => setSelectedPage(to)}>{text}</div>
            ):(
                <div style={{minWidth:minwidth}} className="text-black text-xl font-medium navtextcolor  px-4 py-0.5 text-sm  hover:bg-[#ece9e9] rounded" onClick={() => setSelectedPage(to)}>{text}</div>
            )}

        </Link>
    );    
}