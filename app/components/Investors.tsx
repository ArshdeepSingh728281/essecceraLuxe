'use client';

import { useEffect, useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

type ReportFile = {
  fname: string;
  file: string; // file URL or base64
};

type Report = {
  title: string;
  files: ReportFile[];
};

export default function InvestorRelationsPage() {
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
  const activeReport = reports.find((report) => report.title === activeQuarter);

  useEffect(() => {
    // This setReports call seems redundant if it's setting the same initial data
    setReports([
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
  }, []);

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
                    ? 'font-bold text-black'
                    : 'text-gray-500'
                }`}
              >
                <span
                  className={`w-1 h-5 mr-3 rounded-sm ${
                    activeQuarter === report.title
                      ? 'bg-[#e7dacc]'
                      : 'bg-transparent'
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
                {file.fname}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
