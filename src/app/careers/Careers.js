import "../globals.css";
import Link from "next/link";

export default function Careers() {
    let careersContent = 1;
    return (
    <div className="container">
        <div className="careers-header">

            <div className="careers-heading">
                <h2>Explore</h2>
                <h2>Career Opportunities</h2>
            </div>

            <div className="divider"></div>

            <div className="careers-description">
                <p> 
                    We are a team of experienced and professional advocates. Our team is filled with professionals of different fields. 
                </p>    
            </div>

        </div>

        <div className="careers-content">
            {
                careersContent === 1 ? 
            
                <div className="job-openings">

                </div> 
                :
                <div className="no-job-openings">
                    <img src="./noJobOpenings.png"></img>
                    <div className="no-job-openings-title">Currently No Job Openings</div>
                    <div className="no-job-openings-text">We appreciate your interest in Infinity Partners. Positions will be  opening soon, keep updated.</div>
                </div> 
            }
        </div>

    </div>
    );
}
