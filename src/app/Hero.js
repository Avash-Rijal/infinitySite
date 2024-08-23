import "./globals.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
            <div className="hero-text-title">
                <h2>Initial Public Offering (IPO)</h2>
                <h2>A General Guide</h2>
            </div>

            <p>
                This IPO guide outlines the process and regulations governing Initial Public Offerings (IPOs) in Nepal. 
                It covers the basic, regulatory, procedural, and conditional aspects of IPO issuance, providing a step-by-step guide for companies seeking to enter into equity market.
            </p>

            <button>Read More &#8594;</button>
        </div>
        <div className="hero-image">
            <img src="chartImage.png"></img>
        </div>
      </div>
    </div>
  );
}