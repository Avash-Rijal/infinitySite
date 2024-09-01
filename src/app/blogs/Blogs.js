import Link from "next/link";
import "../globals.css";
import Home from "../page";

export default function Blogs() {

    let featured_insight = {
        title: "Initial Public Offering (IPO)",
        sub_title: " A General Guide",
        category: "Business Law",
        date: "Sunday, July 24, 2022 ",
        description: "This IPO guide outlines the process and regulations governing Initial Public Offerings (IPOs) in Nepal. It covers the basic, regulatory, procedural, and conditional aspects of IPO issuance, providing a step-by-step guide for companies seeking to enter into equity market."
    }

    let recent_insights= [
        {
            title: "Laws to change private company to Public Company.",
            category: "Business Law",
            date: "Sunday, July 24, 2022",
            description: "There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.",
            image: "/related_articles_image.png"   
        },
        {
            title: "What companies are eligible to issue IPO in Nepal ?",
            category: "Corporate Law",
            date: "Sunday, July 24, 2022 ",
            description: "There are many factors that can decide whether or not a company can apply to issue public offering ie. IPO In Nepse. ",
            image: "/blogImages.png"   
        },
        {
            title: "Laws to change private company to Public Company.",
            category: "Business Law",
            date: "Sunday, July 24, 2022",
            description: "There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.",
            image: "/related_articles_image.png"   
        },
        {
            title: "What companies are eligible to issue IPO in Nepal ?",
            category: "Corporate Law",
            date: "Sunday, July 24, 2022 ",
            description: "There are many factors that can decide whether or not a company can apply to issue public offering ie. IPO In Nepse. ",
            image: "/blogImages.png"   
        },
        {
            title: "Laws to change private company to Public Company.",
            category: "Business Law",
            date: "Sunday, July 24, 2022",
            description: "There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.",
            image: "/related_articles_image.png"   
        },
        {
            title: "What companies are eligible to issue IPO in Nepal ?",
            category: "Corporate Law",
            date: "Sunday, July 24, 2022 ",
            description: "There are many factors that can decide whether or not a company can apply to issue public offering ie. IPO In Nepse. ",
            image: "/blogImages.png"   
        },
        {
            title: "Laws to change private company to Public Company.",
            category: "Business Law",
            date: "Sunday, July 24, 2022",
            description: "There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.",
            image: "/related_articles_image.png"   
        },
        {
            title: "What companies are eligible to issue IPO in Nepal ?",
            category: "Corporate Law",
            date: "Sunday, July 24, 2022 ",
            description: "There are many factors that can decide whether or not a company can apply to issue public offering ie. IPO In Nepse. ",
            image: "/blogImages.png"   
        },
        {
            title: "Laws to change private company to Public Company.",
            category: "Business Law",
            date: "Sunday, July 24, 2022",
            description: "There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.There are many factors that can decide whether or not a company can turn to public or not.",
            image: "/related_articles_image.png"   
        },
    ]

    return (
        <div className="blogs_page">
            <h2 className="featured_insight_title"><span>Our</span> Featured Insight</h2>
            <div className="featured_insight_content">
                <div className="featured_insight_details">
                    <img src="/chartImage.png"></img>
                    <div className="featured_insight_content_details">
                        <h2 className="featured_insight_content_title">
                            {featured_insight.title} 
                            <br></br>
                            {featured_insight.sub_title}
                        </h2>
                        <p>{featured_insight.category} | {featured_insight.date}</p>
                        <p>{featured_insight.description}</p>
                        <button>
                            <span>Read More</span>
                            <img src="right_arrow.svg"></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="recent_insights">
                    <h2>Read our</h2>
                    <h2>Recent Insights</h2>
                    <div className="recent_insights_container">
                        {recent_insights.map(data => (
                        <div className="recent_insights_card">
                            <div className="recent_insights_image">
                                <img src={data.image}></img>
                            </div>
                            <div className="recent_insights-category-contents">
                                <div className="recent_insights-category-date">
                                    <div className="recent_insights-category">{data.category}</div>
                                    <div className="recent_insights-date">{data.date}</div>
                                </div>
                                <div className="recent_insights-title">{data.title}</div>
                                <div className="recent_insights-description">{data.description}</div>
                                <Link href="" className="recent_insights-link">Read More</Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}