import Link from "next/link";

export default function Footer(){
    return (
        <div className="footer-section">
            <div className="container">
                <div className="newsletter-section">
                    <div className="newsletter-section-text">
                        Join our newsletter to keep up to date with us!
                    </div>
                    <div className="newsletter-section-input">
                        <img src="./userIcon.png"></img>
                        <input type="mail" placeholder="Enter your email"></input>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="logo-tagline">
                        <img src="./logo.svg"></img>
                        <p>A full service law firm.</p>
                    </div>
                    <div className="footer-links">
                        <div className="navigation-links">
                            <div className="footer-links-title">Navigation</div>
                            <Link href="" className="footer-nav-link">Home</Link>
                            <Link href="" className="footer-nav-link">About Us</Link>
                            <Link href="" className="footer-nav-link">Insights</Link>
                            <Link href="" className="footer-nav-link">Attorneys</Link>
                            <Link href="" className="footer-nav-link">FAQs</Link>
                        </div>
                        <div className="footer-area-of-practices">
                            <div className="footer-links-title">Area of Practices</div>
                            <Link href="" className="footer-nav-link">Business Law</Link>
                            <Link href="" className="footer-nav-link">Dispute Resolution</Link>
                            <Link href="" className="footer-nav-link">Legal Reform</Link>
                            <Link href="" className="footer-nav-link">Civil Law Practices</Link>
                        </div>
                        <div className="footer-resources">
                            <div className="footer-links-title">Area of Practices</div>
                            <Link href="" className="footer-nav-link">Constitution of Nepal</Link>
                            <Link href="" className="footer-nav-link">Muluki Aain</Link>
                            <Link href="" className="footer-nav-link">Faisala Portal</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div>Designed and Developed with Yojana!</div>
                    <div>© 2024 Infinity and Partners Pvt. Ltd.</div>
                    <div className="footer-sublinks-section">
                        <Link href="/terms-of-service" className="footer-sublink">Terms of Service</Link>
                        <Link href="/privacy-policy" className="footer-sublink">Privacy Policy</Link>
                        <Link href="" className="footer-sublink">Cookies</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}