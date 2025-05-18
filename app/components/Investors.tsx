'use client';

import { useState } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

const quarterKeys = ['Quarter 1', 'Quarter 2', 'Quarter 3'] as const;
type Quarter = typeof quarterKeys[number];

const reports: Record<Quarter, string[]> = {
  'Quarter 1': [
    'Q1 Annual Report',
    'Q1 Board Meeting Information',
    'Q1 Sustainability Report',
    'Q1 Investor Presentation',
  ],
  'Quarter 2': [
    'Annual Reports',
    'Board Meeting Information',
    'Business Responsibility & Sustainability Reporting',
    'Investor Presentation Results Q2',
  ],
  'Quarter 3': [
    'Q3 Financial Overview',
    'Q3 Shareholder Insights',
    'Q3 Responsibility Report',
    'Investor Call Highlights Q3',
  ],
};

export default function InvestorRelationsPage() {
  const [activeQuarter, setActiveQuarter] = useState<Quarter>('Quarter 1');

  return (
    <div className="min-h-screen bg-[#ffffff] p-16 text-black font-sans">
      <h1 className="text-4xl font-bold mb-10">Investor Relations</h1>

      <div className="flex space-x-16">
        {/* Left Panel */}
        <div className="w-64">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Financial Reports</h2>
          <ul className="space-y-4">
            {Object.keys(reports).map((quarter) => (
              <li
                key={quarter}
                onClick={() => setActiveQuarter(quarter as Quarter)}
                className={`flex items-center cursor-pointer transition-all ${
                  activeQuarter === quarter ? 'font-bold text-black' : 'text-gray-500'
                }`}
              >
                {/* Vertical bar */}
                <span
                  className={`w-1 h-5 mr-3 rounded-sm ${
                    activeQuarter === quarter ? 'bg-[#e7dacc]' : 'bg-transparent'
                  }`}
                />
                {quarter}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-400" />

        {/* Right Panel */}
        <div className="flex flex-col space-y-5">
          {reports[activeQuarter].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <FaRegFileAlt className="text-indigo-500" />
              <span className="text-lg font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
