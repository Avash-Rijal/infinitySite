import Footer from "../Footer";
import "../globals.css";
import Header from "../Header";
import Blog from "./BlogPage";

export default function Home() {
  return (
    <main>
        <Header/>  
        <Blog/>
        <Footer/>
    </main>
  );
}
