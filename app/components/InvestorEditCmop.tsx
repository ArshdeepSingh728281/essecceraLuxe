'use client';

import { useRef, useState ,useEffect } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

// Types
type ReportFile = {
  fname: string;
  file: string; // base64-encoded PDF
};

type Report = {
  title: string;
  files: ReportFile[];
};


export default function InvestorRelationsPage() {

    const [loading,setLoading] = useState(false)
  

  const [newrow,setnewrow] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState('');

  const [reports, setReports] = useState<Report[]>([
    {
      title: 'Quarter 1',
      files: [
        { fname: 'Q1 Financial Report', file: '' },
        { fname: 'Q1 Investor Brief', file: '' },
      ],
    },
    {
      title: 'Quarter 2',
      files: [{ fname: 'Q2 Financial Report', file: '' }],
    },
    {
      title: 'Quarter 3',
      files: [{ fname: 'Q3 Overview', file: '' }],
    },
  ]);

  const [activeQuarter, setActiveQuarter] = useState<string>(reports[0].title);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/pdf') {
      alert('Only PDF files are allowed.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;

      setReports((prev) => {
        const updated = [...prev];
        const quarterIndex = updated.findIndex((r) => r.title === activeQuarter);
        if (quarterIndex === -1) return prev;

        const fileName = file.name;

        const updatedFiles = [
          ...updated[quarterIndex].files,
          {
            fname: fileName,
            file: base64,
          },
        ];

        updated[quarterIndex] = {
          ...updated[quarterIndex],
          files: updatedFiles,
        };

        return updated;
      });
    };

    reader.readAsDataURL(file);
  };

  const handleDeleteFile = (fileIndex: number) => {
    setReports((prev) => {
      const updated = [...prev];
      const quarterIndex = updated.findIndex((r) => r.title === activeQuarter);
      if (quarterIndex === -1) return prev;

      const updatedFiles = updated[quarterIndex].files.filter((_, idx) => idx !== fileIndex);

      updated[quarterIndex] = {
        ...updated[quarterIndex],
        files: updatedFiles,
      };

      return updated;
    });
  };

  const activeReport = reports.find((r) => r.title === activeQuarter);




  


  async function postProp(){
    setLoading(true)

    try {

      const response = await fetch('/api/postpage', {
          method:'POST',
          headers:{"Content_Type":"application/json"},
          body: JSON.stringify({pagename:"investor",otp,savedata:{reports}})
      })
       if ( response.status == 200) {
           const result = await response.json()
           console.log(result)

           if(result.data.success=="true"){
            window.location.reload();
          }
      if(result.data.success=="false"){
          alert(result.msg);
              setLoading(false)

      }
      } else if (response.status==400) {
       console.log("error")
      }

  }catch (e) {
      console.log(e)
  }}








  async function sendotp(){
    console.log(reports)
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
              body: JSON.stringify({pagename:"investor"})
          })
           if ( response.status == 200) {
               const result = await response.json()
               console.log(result)
               if(result.success==true){
                setReports(result.page.data.reports)
  
    
                  
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
    <div className="min-h-screen bg-white p-16 text-black font-sans">
      <h1 className="text-4xl font-bold mb-10">Investor Relations</h1>

      <div className="flex space-x-16">
        {/* Left Panel */}
        <div className="w-64">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Financial Reports</h2>
          <ul className="space-y-4">
            {/* {reports.map((report) => (
              <li
                key={report.title}
                onClick={() => setActiveQuarter(report.title)}
                className={`flex items-center cursor-pointer transition-all ${
                  activeQuarter === report.title ? 'font-bold text-black' : 'text-gray-500'
                }`}
              >
                <span
                  className={`w-1 h-5 mr-3 rounded-sm ${
                    activeQuarter === report.title ? 'bg-[#e7dacc]' : 'bg-transparent'
                  }`}
                />
                <input type="text" value={report.title} />
              </li>
            ))} */}


{reports.map((report, index) => (
  <li
    key={index}
    className={`flex items-center justify-between cursor-pointer transition-all ${
      activeQuarter === report.title ? 'font-bold text-black' : 'text-gray-500'
    }`}
  >
    {/* Left: Active indicator + Editable title */}
    <div
      onClick={() => setActiveQuarter(report.title)}
      className="flex items-center w-full"
    >
      <span
        className={`w-1 h-5 mr-3 rounded-sm ${
          activeQuarter === report.title ? 'bg-[#e7dacc]' : 'bg-transparent'
        }`}
      />
      <input
        type="text"
        value={report.title}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          const newTitle = e.target.value;
          setReports((prevReports) => {
            const updated = [...prevReports];
            updated[index] = { ...updated[index], title: newTitle };

            if (activeQuarter === report.title) {
              setActiveQuarter(newTitle);
            }

            return updated;
          });
        }}
        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-black w-full"
      />
    </div>

    {/* Right: Delete icon */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        setReports((prev) => {
          const updated = prev.filter((_, i) => i !== index);
          if (report.title === activeQuarter && updated.length > 0) {
            setActiveQuarter(updated[0].title); // reset to first available
          } else if (updated.length === 0) {
            setActiveQuarter('');
          }
          return updated;
        });
      }}
      className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
      title="Delete Report"
    >
      {/* Trash SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    </button>
  </li>
))}




            <div className='flex flex-row items-center justify-center'>
               <input type="text" className='p-2 rounded' onChange={(e)=>{setnewrow(e.target.value)}} style={{boxShadow:"#87878736 2px 2px 10px inset"}} value={newrow}/>
              <div
  onClick={() => {
    const trimmed = newrow.trim();

    if (trimmed !== '') {
      const alreadyExists = reports.some(
        (report) => report.title.toLowerCase() === trimmed.toLowerCase()
      );

      if (!alreadyExists) {
        setReports((prev) => [...prev, { title: trimmed, files: [] }]);
        setActiveQuarter(trimmed); // optionally set new one as active
      } else {
        alert('A report with this title already exists.');
      }
    }
    setnewrow('')
  }}

             className='flex items-center cursor-pointer justify-center p-2 bg-[#e5e5e5] ml-2 rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

               </div>
            </div>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-400" />

        {/* Right Panel */}
        <div className="flex flex-col space-y-5">
          {activeReport?.files.map((file, idx) => (
            <div key={idx} className="flex items-center space-x-3 cursor-pointer">
              <FaRegFileAlt className="text-indigo-500" />
              <span className="text-lg font-medium ml-2">
                <a className='no-underline text-black cursor-pointer' href={file.file} target="_blank">{file.fname}</a>
                {file.file && (
                  <a
                    href={file.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-sm text-green-600 underline"
                  >
                    View
                  </a>
                )}
              </span>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteFile(idx)}
                className="ml-3 text-red-600 hover:bg-red-100 rounded p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={handlePdfUpload}
            className="hidden"
          />

          {/* Upload Button */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center mt-[30px] bg-[#e5e5e5] py-2 cursor-pointer rounded hover:bg-[#bbbbbb] active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
        </div>
      </div>




      <div onClick={() => {setShowModal(true);sendotp()}} className="w-full flex items-center justify-center mt-[300px] mb-[-300px]">
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







    </div>
  );
}
