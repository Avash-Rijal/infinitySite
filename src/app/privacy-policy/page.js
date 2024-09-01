import Footer from "../Footer";
import "../globals.css";
import Header from "../Header";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Home() {
  return (
    <main>
        <Header/>  
        <PrivacyPolicy/>
        <Footer/>
    </main>
  );
}
