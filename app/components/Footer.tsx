export default function Footer() {
  return (
    <div className="giveshadow bg-[#D4C9BE] flex items-start justify-between flex-row mt-[80px] px-[60px] pb-[100px] pt-[50px] flex-wrap">
        <img  src="mainlogo.png" className={`w-60 ml-4 z-10 mr-[20px]`}/>

        <FootItemBluePrint about="About Us"> 
            <FootItemBluePrintInneritem itemname="Our Mission" to="about"/>
            <FootItemBluePrintInneritem itemname="Our Story" to="about"/>
            <FootItemBluePrintInneritem itemname="Leadership team" to="about"/>
            <FootItemBluePrintInneritem itemname="Our Accomplishments" to="about"/>
        </FootItemBluePrint>

        <FootItemBluePrint about="Our Brands"> 
            <FootItemBluePrintInneritem itemname="Know our brand" to="about"/>
            <FootItemBluePrintInneritem itemname="Our purpose" to="about"/>
        </FootItemBluePrint>

        <FootItemBluePrint about="Others"> 
            <FootItemBluePrintInneritem itemname="Our Workplace" to="about"/>
            <FootItemBluePrintInneritem itemname="News and Events" to="about"/>
            <FootItemBluePrintInneritem itemname="Careers" to="about"/>
        </FootItemBluePrint>

        <FootItemBluePrint about="Contact Us"> 
            <FootItemBluePrintInneritem itemname="Our mail" to="about"/>
            <FootItemBluePrintInneritem itemname="Our Helpline Number" to="about"/>
        </FootItemBluePrint>


    </div>
  )
}



function FootItemBluePrint({about,children}:{about:string,children:React.ReactNode}){
    return (
        <div className="flex flex-col">
            <div className="font-[500]  text-[30px] ">{about}</div>
            {children}
        </div>
    )
}



function FootItemBluePrintInneritem({itemname,to}:{itemname:string,to:string}){
    return(
        <a href={to} className="mt-[10px]">{itemname}</a>
    )
}