import Footer from "../Footer";
import "../globals.css";
import Header from "../Header";
import AttorneysPage from "./AttorneysPage";

export default function Home() {
  return (
    <main>
        <Header/>  
        <AttorneysPage/>
        <Footer/>
    </main>
  );
}
