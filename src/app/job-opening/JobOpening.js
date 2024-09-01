import Link from "next/link";
import "../globals.css";
import Home from "../page";

export default function JobOpening() {

    let job_details = {
        date: "12’th January 2024",
        title: "Advocate Intern",
        category: "Commercial Law",
        job_level: "Entry Level",
        job_type: "Full Time",
        job_description:"Explore thousands of high-quality career page images on Dribbble. Your resource to get inspired, discover and connect with designers worldwide. Explore thousands of high-quality career page images on Dribbble. Your resource to get inspired, discover and connect with designers worldwide. ",
        salary : "43,000",
    }

    return (
    <div className="job-opening">
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
            <div className="job-opening-details-box">
                <div className="job-opening-details-date">Posted on {job_details.date}</div>
                <div className="job-opening-details-title">{job_details.title}</div>
                <div className="job-opening-details-category">{job_details.category}</div>
                <div className="job-opening-details-level-type">
                    <div className="job-opening-details-level">{job_details.job_level}</div>
                    <div className="job-opening-details-type">{job_details.job_type}</div>
                </div>
                <div className="job-opening-details-description">{job_details.job_description}</div>
                <div className="job-opening-details-salary">
                    NPR. {job_details.salary}
                </div>
            </div>
            <div className="job-openings-content"></div>
        </div>
        <div className="job-openings-form-section">
            <div className="container">
                <div className="job-openings-form-header">
                        <h2>Quick Apply</h2>
                        <h2>For this Position</h2>
                </div>
                <div className="job-openings-form">
                    <h2>Applicant Information*</h2>
                    <div>
                        <input type="text" placeholder="Full Name"></input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}