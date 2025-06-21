"use client"

import { useEffect, useRef, useState } from "react";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/NavbarEdit";
import TopLine from "../components/TopLine";
import Head from "next/head";

type TeamMember = {
  name: string;
  desc: string;
  img: string;
};

export default function AboutPage() {


  const [loading,setLoading] = useState(false)
  
  const [aboutText, setAboutText] = useState<string>(
    "              Kyoto Ceramics was founded in 2005 by Hana Tanaka, a passionate collector of Japanese ceramics. Her vision was to create a space where the beauty and craftsmanship of           these unique pieces could be shared with a wider audience. Over the years, Kyoto Ceramics has grown into a leading online destination for Japanese ceramics,           representing both established and emerging artists."
  );

  const [missionText, setMissionText] = useState<string>(
    "At Kyoto Ceramics, our mission is to connect people..."
  );

  const [team, setTeam] = useState<TeamMember[]>([
    { name: "Kenji Sato", desc: "Kenji Sato is known...", img: "" },
    { name: "Akari Ito", desc: "Akari Ito's work is...", img: "" },
    { name: "Hiroshi Nakamura", desc: "Hiroshi Nakamura combines...", img: "" },
  ]);

    const [showModal, setShowModal] = useState(false);
    const [otp, setOtp] = useState('');

  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const missionRef = useRef<HTMLTextAreaElement>(null);

const autoResize = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
  if (ref.current) {
    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }
};


  useEffect(() => {
    autoResize(aboutRef);
    autoResize(missionRef);
  }, [aboutText, missionText]);

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result === "string") {
        const updatedTeam = [...team];
        updatedTeam[index].img = result;
        setTeam(updatedTeam);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteMember = (index: number) => {
    const updatedTeam = [...team];
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  };

  const addNewMember = () => {
    setTeam([...team, { name: "", desc: "", img: "" }]);
  };










  

  async function postProp(){
    setLoading(true)
    try {

      const response = await fetch('/api/postpage', {
          method:'POST',
          headers:{"Content_Type":"application/json"},
          body: JSON.stringify({pagename:"aboutus",otp,savedata:{team,aboutText,missionText}})
      })
       if ( response.status == 200) {
           const result = await response.json()
          //  console.log(result)
           if(result.data.success=="true"){
            window.location.reload();
          }
      if(result.data.success=="false"){
            setLoading(false)
          alert(result.msg);
      }
      } else if (response.status==400) {
       console.log("error")
      }

  }catch (e) {
      console.log(e)
  }}








  async function sendotp(){
    console.log(team)
    try {
      const response = await fetch('/api/postpage', {
          method:'GET',
      })
       if (response.status == 200) {
          //  const result = await response.json()
          //  console.log(result)
          //  if(result.data.success=="true"){
          // }
      } else if (response.status==400) {
       console.log("error")
      }

  }catch (e) {
      console.log(e)
  }}





  
      async function getInitialdata(){
  
      try {
  
        const response = await fetch('/api/getpage', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({pagename:"aboutus"})
        })
         if ( response.status == 200) {
             const result = await response.json()
             console.log(result)
             if(result.success==true){
              setAboutText(result.page.data.aboutText);
              setMissionText(result.page.data.missionText)
              setTeam(result.page.data.team)

  
                
            }
        if(result.success=="false"){
            alert(result.msg);
        }
        } else if (response.status==400) {
         console.log("error")
        }
  
    }catch (e) {
        console.log(e)
    }}
  
  
  
  
    useEffect(()=>{
  
      getInitialdata();
  
    },[])
  





  return (
    <>
      <Head>
        <title>About - Kyoto Ceramics</title>
      </Head>

      <div className="relative flex min-h-screen flex-col bg-[#fcfaf8] overflow-x-hidden">
        <TopLine />
        <Navbar />

        <div className="flex-grow flex flex-col items-center px-4 sm:px-10 lg:px-20 xl:px-40 py-8 mt-[20px]">
          <div className="w-full max-w-5xl flex flex-col gap-6">

            {/* Hero Section */}
            <div
              className="bg-cover bg-center flex flex-col justify-end rounded-lg min-h-[218px] sm:min-h-[300px]"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuMsNhi-HNXBDkLEnXQ8KdlsMvfgC-G6Q94G_lsS5WRU-tAkcBuux2B85GMXlDeA7mOiZp7lHeM2beptwdoalZrOkdZkXwYJJ6IPAotl5Wl7zXhFeQ3xNngSIE9PRBzBy2ruRrP8EtPR03HV2ZrXawoVsDMsf52Uc1tT_xYX9f9tKtLb5aafcYpUo-yTZyrCxqXqmKpfmn0Y5TDZKuLQEISYnlO4ulJkHAimkNgILHGGMk_2jhj3E-MWlADzkY7A1yUb6hV7mSBus")',
              }}
            >
              <div className="p-4">
                <p className="text-white text-2xl sm:text-3xl font-bold">Our Story</p>
              </div>
            </div>

            {/* About Text */}
            <textarea
              ref={aboutRef}
              className="text-[#1b130e] text-base leading-relaxed px-1 p-2 border rounded w-full resize-none"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              rows={1}
            />

            {/* Our Team */}
            <div>
              <h2 className="text-[#1b130e] text-xl sm:text-2xl font-bold px-1 pb-3">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {team.map((artist, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    {artist.img && (
                      <div
                        className="aspect-square bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${artist.img})` }}
                      />
                    )}
                    <input
                      type="text"
                      value={artist.name}
                      onChange={(e) => {
                        const updated = [...team];
                        updated[index].name = e.target.value;
                        setTeam(updated);
                      }}
                      className="text-[#1b130e] font-medium border p-1 rounded"
                      placeholder="Name"
                    />
                    <textarea
                      value={artist.desc}
                      onChange={(e) => {
                        const updated = [...team];
                        updated[index].desc = e.target.value;
                        setTeam(updated);
                      }}
                      className="text-[#976b4e] text-sm border p-1 rounded"
                      placeholder="Description"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e)}
                    />
                    <button
                      onClick={() => handleDeleteMember(index)}
                      className="text-red-600 text-sm underline mt-1"
                    >
                      Delete Member
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={addNewMember}
                className="mt-4 px-4 py-2 bg-[#976b4e] text-white rounded hover:bg-[#7a543b]"
              >
                Add New Member
              </button>
            </div>

            {/* Mission Section */}
            <div>
              <h2 className="text-[#1b130e] text-xl sm:text-2xl font-bold px-1 pb-3 pt-4">Our Mission</h2>
              <textarea
                ref={missionRef}
                className="text-[#1b130e] text-base leading-relaxed px-1 p-2 border rounded w-full resize-none"
                value={missionText}
                onChange={(e) => setMissionText(e.target.value)}
                rows={1}
              />
            </div>
          </div>
        </div>

        
        


        
      <div onClick={() => {setShowModal(true);sendotp()}} className="w-full flex items-center justify-center">
      <div className="w-[90%] text-center py-[13px] text-[20px] mt-[100px] rounded-md bg-black mt-8 text-white cursor-pointer hover:bg-[#212121e6] active:bg-[#1e1e1ec4] " >
              Save
      </div>
      </div>



        <div className="flex flex-col items-center justify-center ">
     

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-center">Enter OTP</h2>
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 text-center text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123456"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              >
                Close
              </button>
              <button
                onClick={()=>{postProp()}}
                className="px-4 py-2  bg-[#bfb1a1] cursor-pointer text-white rounded hover:bg-gray text-sm flex items-center justify-center"
              >
                {loading?<div className="spinnercareer"></div>:<div className="flex items-center justify-center">Submit</div>}

              </button>
            </div>
          </div>
        </div>
      )}
    </div>




        <Footer />
        <Copyright />
      </div>
    </>
  );
}
