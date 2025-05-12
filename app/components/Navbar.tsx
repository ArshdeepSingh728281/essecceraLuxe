"use client";

import Link from "next/link";
import { usePageStore , Pages} from "../store/pageStore";
// import styles from "../styles/style.module.css";




export default function Navbar(){



    return (
        <div className="flex justify-between items-center w-full h-16 bg-white px-14 pt-10">
            <div className="flex justify-between items-center h-full w-1/3">
                <NavbarItem to="about" text="About Us" />
                <NavbarItem to="/" text="Home"/>
                <NavbarItem to="newsandevents" text="News & Events"/>
            </div>
            <img  src="mainlogo.png" className={`w-60 ml-4 z-10 `}/> 
            <div className="flex justify-between items-center h-full w-1/3">
                <NavbarItem minwidth="135px" to="ourbrands" text="Our Brands"/>
                <NavbarItem to="investorrelations" text="Investors"/>
                <NavbarItem to="careers" text="Careers"/>
            </div>

        </div>
    )
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