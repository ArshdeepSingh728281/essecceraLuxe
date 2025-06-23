


"use client";

import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import Investor from "../components/Investors";
import { useInvestorStore } from "../store/investor";
import { usePageStore } from "../store/pageStore";
import { useEffect } from "react";

type ReportFile = {
  fname: string;
  file: string;
};

type Report = {
  title: string;
  files: ReportFile[];
};

export default function InvestorPage({
  serverReports,
}: {
  serverReports: Report[];
}) {
  const { setReports } = useInvestorStore();

  useEffect(() => {
    setReports(serverReports);
  }, [serverReports]);

  
  const {  setSelectedPage } = usePageStore();  
  useEffect(()=>{
    setSelectedPage("investorrelations")
  },[])


  return (
    <div>
      <TopLine />
      <Navbar />
      <Investor />
      <Footer />
      <Copyright />
    </div>
  );
}
