import AreaofPractice from "./AreaofPractice";
import "./globals.css";
import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Hero/>
      <AreaofPractice/>
    </main>
  );
}
