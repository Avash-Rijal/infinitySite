import "./globals.css";
import Link from "next/link";

export default function Header() {
    return (
    <div className="container">
        <div className="header">
            <Link href="/" className="logo">
                <img src="logo.svg"></img>
            </Link>
            <div className="navOptions">
                <div className="navLinksContainer">
                        <Link href="/" className="main-links home" id="navLink">Home</Link>
                        <Link href="/about-us" className="about-us" id="navLink">About Us</Link>
                        <Link href="" className="area-of-practice" id="navLink">Area of Practice
                            <ul className="sub-links-container">
                                <li href="" className="sub-links">Business Law</li>
                                <li href="" className="sub-links">Dispute Resolution</li>
                                <li href="" className="sub-links">Legal Reform</li>
                                <li href="" className="sub-links">Civil Law Form</li>
                            </ul>
                        </Link>
                        <Link href="" className="insights" id="navLink">Insights
                            <ul className="sub-links-container">
                                <li href="" className="sub-links">Test Insights</li>
                                <li href="" className="sub-links">Test Insights</li>
                                <li href="" className="sub-links">Test Insights</li>
                                <li href="" className="sub-links">Test Insights</li>
                            </ul>
                        </Link>
                        <Link href="/advocates" className="attorneys" id="navLink">Attorneys</Link>
                        <Link href="/careers" className="careers" id="navLink">Careers</Link>
                </div>
                <div className="searchIcon">
                    <img src="searchIcon.svg"></img>
                </div>
            </div>
        </div>
    </div>
    );
}
