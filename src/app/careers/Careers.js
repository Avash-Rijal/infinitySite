import "../globals.css";
import Link from "next/link";

export default function Careers() {
    let careersContent = 1;
    let job_openings = [
        {
            date: "12’th January 2024",
            title: "Advocate Intern",
            category: "Commercial Law",
            job_level: "Entry Level",
            job_type: "Full Time",
            job_description:"Explore thousands of high-quality career page images on Dribbble. Your resource to get inspired, discover and connect with designers worldwide. Explore thousands of high-quality career page images on Dribbble. Your resource to get inspired, discover and connect with designers worldwide. ",
            salary : "43,000",
        }
    ]; 
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
                    {job_openings.map(data => {
                        <div className="job-opening-box">
                            <div className="job-opening-date">{data.date}</div>
                            <div className="job-opening-title">{data.title}</div>
                            <div className="job-opening-category">{data.category}</div>
                            <div className="job-opening-level">{data.job_level}</div>
                            <div className="job-opening-type">{data.job_type}</div>
                            <div className="job-opening-description">{data.job_description}</div>
                            <div className="job-opening-bottom">
                                <div>{data.salary}</div>
                                <button>Join Now</button>
                                </div>
                        </div>
                    })}
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
