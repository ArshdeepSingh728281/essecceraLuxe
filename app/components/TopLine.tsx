export default function TopLine() {
  return (
    <div className="w-full bg-[#D4C9BE] h-2 flex overflow-hidden items-center justify-between " >
        <div className="polygon bg-white h-5 w-5 " style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
        <div className="polygon bg-white h-5 w-5" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
    </div>
  )
}