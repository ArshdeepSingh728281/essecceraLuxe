import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import Investor from "../components/Investors"

export default function AboutPage() {
  return (
    <div>
      <TopLine/>
      <Navbar/>
      <Investor/>
      <Footer/>
      <Copyright/>
      
    </div>
  );
}