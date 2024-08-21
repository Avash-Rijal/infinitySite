import "./globals.css";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="container">
      <div className="navBar">
        <div className="logo">
          <img src="logo.svg"></img>
        </div>
        <div className="navOptions">
          <NavBar></NavBar>
          <div className="searchIcon">
            <img src="searchIcon.svg"></img>
          </div>
        </div>

      </div>
    </main>
  );
}
