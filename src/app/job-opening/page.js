import Footer from "../Footer";
import "../globals.css";
import Header from "../Header";
import JobOpening from "./JobOpening";

export default function Home() {
  return (
    <main>
        <Header/>  
        <JobOpening/>
        <Footer/>
    </main>
  );
}
