import Advocates from "./Advocates";
import Appointment from "./Appointment";
import AreaofPractice from "./AreaofPractice";
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";
import Hero from "./Hero";
import Insights from "./Insights";
import OfficeLocation from "./OfficeLocation";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <AreaofPractice/>
      <Insights/>
      <Advocates/>
      <Appointment/>
      <OfficeLocation/>
      <Footer/>
    </main>
  );
}
