'use client';

import { useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

// Types
type ReportFile = {
  fname: string;
  file: string; // file URL or base64
};

type Report = {
  title: string; // e.g. "Quarter 1"
  files: ReportFile[];
};

export default function InvestorRelationsPage() {
  // Reports data
  const [reports, setReports] = useState<Report[]>([
    {
      title: 'Quarter 1',
      files: [
        {
          fname: 'Q1 Financial Report',
          file: '',
        },
        {
          fname: 'Q1 Investor Brief',
          file: '',
        },
      ],
    },
    {
      title: 'Quarter 2',
      files: [
        {
          fname: 'Q2 Financial Report',
          file: '',
        },
      ],
    },
    {
      title: 'Quarter 3',
      files: [
        {
          fname: 'Q3 Overview',
          file: '',
        },
      ],
    },
  ]);

  // Active quarter state — default to the first report's title
  const [activeQuarter, setActiveQuarter] = useState<string>(reports[0].title);

  // Find the active report
  const activeReport = reports.find((report) => report.title === activeQuarter);

  return (
    <div className="min-h-screen bg-white p-16 text-black font-sans">
      <h1 className="text-4xl font-bold mb-10">Investor Relations</h1>

      <div className="flex space-x-16">
        {/* Left Panel */}
        <div className="w-64">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Financial Reports</h2>
          <ul className="space-y-4">
            {reports.map((report) => (
              <li
                key={report.title}
                onClick={() => setActiveQuarter(report.title)}
                className={`flex items-center cursor-pointer transition-all ${
                  activeQuarter === report.title ? 'font-bold text-black' : 'text-gray-500'
                }`}
              >
                {/* Vertical bar */}
                <span
                  className={`w-1 h-5 mr-3 rounded-sm ${
                    activeQuarter === report.title ? 'bg-[#e7dacc]' : 'bg-transparent'
                  }`}
                />
                {report.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-400" />

        {/* Right Panel */}
        <div className="flex flex-col space-y-5">
          {activeReport?.files.map((file, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className='flex flex-row items-center justify-center cursor-pointer'>
              <FaRegFileAlt className="text-indigo-500 cursor-pointer" />
              <span className="text-lg font-medium cursor-pointer">{file.fname}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
