import "./globals.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="logo.svg"></img>
            </div>
            <div className="navOptions">
                <div className="navLinksContainer">
                        <div className="home" id="navLink">Home</div>
                        <div className="about-us" id="navLink">About Us</div>
                        <div className="area-of-practice" id="navLink">Area of Practice
                            <div className="sub-links-container">
                                <Link href={""} className="sub-links">Business Law</Link>
                                <Link href={""} className="sub-links">Dispute Resolution</Link>
                                <Link href={""} className="sub-links">Legal Reform</Link>
                                <Link href={""} className="sub-links">Civil Law Form</Link>
                            </div>
                        </div>
                        <div className="insights" id="navLink">Insights
                            <div className="sub-links-container">
                                <Link href={""} className="sub-links">Test Insights</Link>
                                <Link href={""} className="sub-links">Test Insights</Link>
                                <Link href={""} className="sub-links">Test Insights</Link>
                                <Link href={""} className="sub-links">Test Insights</Link>
                            </div>
                        </div>
                        <div className="attorneys" id="navLink">Attorneys</div>
                        <div className="careers" id="navLink">Careers</div>
                </div>
                <div className="searchIcon">
                    <img src="searchIcon.svg"></img>
                </div>
            </div>
        </div>
    );
}
