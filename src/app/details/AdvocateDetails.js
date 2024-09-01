import Link from "next/link";
import "../globals.css";

export default function AdvocateDetails() {

    let advocate_details =
    {
        image: "/narayan_sir.png",
        name: "Narayan Chaulagain",
        designation: "Managing Partner",
        description: "Narayan is a founding partner at Infinity & Partners and currently serves as the Managing Partner. Since starting his commercial law practice in 2005, Narayan has been advising clients on various aspects of project finance deals, energy and infrastructure projects, mergers and acquisitions, and conducting legal due diligence exercises. His skill set extends to several legal reform projects focusing on energy, infrastructure, foreign investment, private equity, and corporate laws.",
        sub_description: "Outside of his professional life, Narayan is an avid reader who enjoys spending his free time reading and traveling.",
        phone: "9801035408",
        mail: "narayan@infinitynp.com",
        qualifications: [
            {
                education: "LL.M",
                university: "Tribhuvan University",
                completion_date: "2008"
            },
            {
                education: "LL.B (5 Years)",
                university: "Purwanchal University",
                completion_date: "2005"
            }
        ],
        affiliations: ["Nepal Bar Association", "International Bar Association", "SAARC Law-Nepal"],
        resolution_services: 
        [
            "Business Registration and Corporate Compliance",
            "Foreign Investment",
            "Infrastructure Projects",
            "Private Equity and Venture Capital",
            "Anti-Trust and Competition",
            "Legal Reforms."
        ]
    }

    let advocate_practice_areas = [
        {
        name: "Commercial Law",
        description: "Expertise in business-related legal work."
        },
        {
        name: "Dispute Resolution",
        description: "Comprehensive services for resolution..."
        },
    ]

    let published_articles = [
        {
            image: "/related_articles_image.png",
            category: "Business Law",
            date: "Sunday, July 24, 2022 ",
            title: "Laws to change private company to Public Company.",
            description: "There are many factors that can decide whether or not a company can turn to public or not.",
            link: "",
        },
        {
            image: "/related_articles_image.png",
            category: "Business Law",
            date: "Sunday, July 24, 2022 ",
            title: "Laws to change private company to Public Company.",
            description: "There are many factors that can decide whether or not a company can turn to public or not.",
            link: "",
        },
    ]

    return (
    <div className="container">
        <div className="advocate_details_introduction">
            <div className="advocate_image">
                <img src={advocate_details.image}></img>
            </div>
            <div className="advocate_details_introduction_content">
                <h2>{advocate_details.name}</h2>
                <p>{advocate_details.designation}</p>
                <p>{advocate_details.description}</p>
                <p>{advocate_details.sub_description}</p>
                <div>
                    <img src="/phone.png"></img>
                    <p>{advocate_details.phone}</p>
                </div>
                <div>
                    <img src="/mail.png"></img>
                    <p>{advocate_details.mail}</p>
                </div>
            </div>
        </div>
        <div className="advocate_details_page_bottom_contents">
            <div className="advocate_details_qualifications">
                <div className="advocate_practice_area">
                    <h2>Practice Area</h2>
                    {advocate_practice_areas.map(data => (
                        <div className="advocate_practice_area_card">
                            <div className="advocate_practice_area_icon">
                                <img src="/advocate_icon.svg"></img>
                            </div>
                            <div className="advocate_practice_area_details">
                                <p>{data.name}</p>
                                <p>{data.description}</p>
                            </div>
                            <div className="advocate_practice_area_link">
                                <img src="/next_arrow_icon.png"></img>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="advocate_resolution_services">
                    <h2>Resolution Services</h2>
                    <ul className="advocate_resolution_services_list">
                        {advocate_details.resolution_services.map(data => (
                            <li>{data}</li>
                        ))}
                    </ul>
                </div>
                <div className="advocate_qualifications">
                    <h2>Qualifications</h2>
                    <div className="qualifications_card_container">
                        {advocate_details.qualifications.map(data => (
                            <div className="qualifications_card">
                                <img src="/qualification_icon.svg"></img>
                                <div className="qualification_card_content">
                                    <p>{data.education}</p>
                                    <p>{data.university}, {data.completion_date}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="advocate_affiliations">
                    <h2>Key Affiliations</h2>
                    <ul className="advocate_affiliations_container">
                        {advocate_details.affiliations.map(data => (
                            <li>{data}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="published_articles_section">
                <h2>Published Articles</h2>
                <div className="published_articles_content_section">
                    {published_articles.map(data => (
                        <div className="published_articles_card">
                            <div className="published_articles_image">
                                <img src={data.image}></img>
                            </div>
                            <div className="published_articles-category-contents">
                                <div className="published_articles-category-date">
                                    <div className="published_articles-category">{data.category}</div>
                                    <div className="published_articles-date">{data.date}</div>
                                </div>
                                <div className="published_articles-title">{data.title}</div>
                                <div className="published_articles-description">{data.description}</div>
                                <Link href="" className="published_articles-link">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
    );
}