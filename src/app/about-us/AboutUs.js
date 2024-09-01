import "../globals.css";

export default function AboutUs() {

  return (
    <div className="container">
        <div className="about-us-page">

            <div className="about-us-page-header">

                <div className="about-us-page-heading">
                    <h2>Get to Know</h2>
                    <h2>About Us</h2>
                </div>

                <div className="divider"></div>

                <div className="about-us-header-description">
                    <p> 
                        We are a team of experienced and professional advocates. Our team is filled with professionals of different fields. 
                    </p>    
                </div>

            </div>

            <div className="about-us-page-hero">
                <img src="./about-us-hero-image.png"></img>
            </div>

            <div className="about-us-page-content">
                <h2>Who Are We</h2>
                <p>
                    We are not merely a collection of legal experts offering specialized services through a shared
                    platform. We are an innovative institution dedicated to revolutionizing the delivery of legal services. With a profound understanding of the domestic legal landscape, we integrate the best practices from leading global institutions to meeting local needs effectively. We are a full-service law firm, which offers a comprehensive array of specialized legal services, ensuring that our clients receive all necessary support under one roof. Our practical, solution-oriented approach places our clients&#39; needs at the forefront of everything we do.
                </p>

                <h2>How We Work</h2>
                <p>
                    At Infinity &amp; Partners, we are driven by a passion for the law and a commitment to continuous
                    learning. We stay current with legal developments, enhancing our expertise to meet the evolving
                    needs of our clients. Our innovative approach and dedication to professional growth allow us to
                    deliver high-quality and efficient, legal solutions. We whole heartedly invest in understanding
                    our client&#39;s business and the aspirations behind it - and our team is adept to bring all of these
                    aims to life. We innovate, implement and adapt to foster suitable growth beyond numbers. Our
                    Objective is not to outperform others, but to achieve excellence in our daily operations through
                    continuous growth and self-improvement.
                </p>

                <h2>Our Values</h2>
                <div className="about-us-page-values">
                    <div className="about-us-page-value-box">
                        <img src="./integrity.png"></img>
                        <p><b>Integrity:</b> Integrity is not just a superficial word for us but is our cherished value and
                        unwavering commitment. We maintain highest level of integrity in all our dealings with our
                        clients, Government agencies and partners. At all times and under any circumstance, we are and remain compliant with the regulations and uphold professional ethics at all times.
                        </p>
                    </div>
                    <div className="about-us-page-value-box">
                        <div className="about-us-page-value-image">
                            <img src="./inclusion.png"></img>
                        </div>
                        <p><b>Inclusion:</b> We have a firm advocate for the inclusion and diversity of our team members. Our institution operates on democratic principles without hierarchical structures. We believe
                        that inclusion is a driver of continuous change and improvement.
                        </p>
                    </div>
                    <div className="about-us-page-value-box">
                        <img src="./innovation.png"></img>
                        <p><b>Innovation:</b> We are in a knowledge industry and innovation is at the heart of everything we
                        do. We inherently value ideas, originality, and creativity, aspiring to be creators of lasting
                        impact rather than mere followers of trends.
                        </p>
                    </div>
                    <div className="about-us-page-value-box">
                        <img src="./sustainability.png"></img>
                        <p><b>Sustainability:</b> We strive to redefine success by measuring it not solely by financial metrics
                        but by client satisfaction and the overall well-being of our colleagues. True to our name, we
                        aim to establish our institution as a sustainable and enduring organization.
                        </p>
                    </div>
                    <div className="about-us-page-value-box">
                        <img src="./client-centric-approach.png"></img>
                        <p><b>Client-centric approach:</b> Clients are first and foremost for us. We regard our work as an
                        essential service to people and businesses. We understand the intricacies of business and
                        always strive to offer a pragmatic and qualitative solution. We take full ownership of our
                        responsibilities and honour the trust bestowed upon us by our clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
