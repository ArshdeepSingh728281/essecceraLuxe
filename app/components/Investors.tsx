

"use client";

import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { useInvestorStore } from "../store/investor";

export default function InvestorRelationsPage() {
  const { reports } = useInvestorStore();
  const [activeQuarter, setActiveQuarter] = useState(
    reports[0]?.title ?? "Quarter 1"
  );
  const activeReport = reports.find((r) => r.title === activeQuarter);

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-16 text-black font-sans xl:ml-[30px] xl:mt-[30px] ">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center md:text-left ">
        Investor Relations
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0">
        {/* Left Panel */}
        <div className="md:w-64 w-full">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">
            Financial Reports
          </h2>
          <ul className="space-y-4">
            {reports.map((report) => (
              <li
                key={report.title}
                onClick={() => setActiveQuarter(report.title)}
                className={`flex items-center cursor-pointer transition-all ${
                  activeQuarter === report.title
                    ? "font-bold text-black"
                    : "text-gray-500"
                }`}
              >
                <span
                  className={`w-1 h-5 mr-3 rounded-sm ${
                    activeQuarter === report.title
                      ? "bg-[#e7dacc]"
                      : "bg-transparent"
                  }`}
                />
                {report.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-gray-400" />

        {/* Right Panel */}
        <div className="flex-1 flex flex-col space-y-5">
          {activeReport?.files.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 cursor-pointer hover:text-indigo-600 transition"
            >
              <FaRegFileAlt className="text-indigo-500" />
              <span className="text-base md:text-lg font-medium">
                <a href={file.file} target="blank" className="no-underline text-black cursor-pointer">
                  {file.fname}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
