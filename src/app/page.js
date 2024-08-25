import Advocates from "./Advocates";
import AreaofPractice from "./AreaofPractice";
import "./globals.css";
import Header from "./Header";
import Hero from "./Hero";
import Insights from "./Insights";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Hero/>
      <AreaofPractice/>
      <Insights/>
      <Advocates/>
    </main>
  );
}
