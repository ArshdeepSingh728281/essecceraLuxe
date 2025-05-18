import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import NewsAndEventsContent from "../components/NewsAndEvents"; 
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import NewsAndEventsMiddleText from "../components/NewsAndEventsMiddle";
import NewsAndEventsBottomText from "../components/NewsAndEventBottom";

export default function NewsAndEventsPage() {
  return (
    <div>
      <TopLine />
      <Navbar />
      <NewsAndEventsContent />  
      <NewsAndEventsMiddleText/> 
      <NewsAndEventsBottomText/> 
      <Footer/>
      <Copyright/>
    </div>
  );
}
