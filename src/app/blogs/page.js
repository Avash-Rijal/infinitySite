import Footer from "../Footer";
import "../globals.css";
import Header from "../Header";
import Blogs from "./Blogs";

export default function Home() {
  return (
    <main>
        <Header/>  
        <Blogs/>
        <Footer/>
    </main>
  );
}
