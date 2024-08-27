import Link from "next/link";

export default function Insights(){
    const insightsSectionContents = [
        {title: "Recruitment of Foreign Nationals: A General Guide",
        description: "This guide provides an overview of the regulations governing the recruitment of foreign nationals by Nepalese enterprises. It includes the basic, regulatory, procedural, and other aspects of recruitment, offering a step-by-step guide for enterprises looking to hire foreigners. ",
        date: "Saturday, August 24, 2024",
        image: "./insights-hero-image.png"},
    ];

    let insightsSectionOtherContents = [
        {title: "General Note: Redundancy and Compliances",
        description: "This article explores the regulatory framework for layoffs and retrenchments in Nepal, as per the Labor Act 2017 and Labor Rules 2018.",
        image: "./redundancy.png",
        date: "Monday, July 28, 2024"},

        {title: "General Note: Redundancy and Compliances",
        description: "This article explores the regulatory framework for layoffs and retrenchments in Nepal, as per the Labor Act 2017 and Labor Rules 2018.",
        image: "./redundancy.png",
        date: "Monday, July 28, 2024"},

        {title: "General Note: Redundancy and Compliances",
        description: "This article explores the regulatory framework for layoffs and retrenchments in Nepal, as per the Labor Act 2017 and Labor Rules 2018.",
        image: "./redundancy.png",
        date: "Monday, July 28, 2024"},
    ];

    return (
    <div className="container">
        <div className="insights-section">
            <div className="insights-section-header">
                <h2>Read Our</h2>
                <h2>Latest Insights</h2>
            </div>
            <div className="insights-section-main">
                <div className="insights-section-main-image"><img src={insightsSectionContents[0].image}></img></div>
                <div className="insights-section-main-content">
                    <div className="insights-section-main-date">{insightsSectionContents[0].date}</div>
                    <div className="insights-section-main-title">{insightsSectionContents[0].title}</div>
                    <div className="insights-section-main-description">{insightsSectionContents[0].description}</div>
                    <Link href="" className="insights-section-main-link">Read More</Link>
                </div>
            </div>
            <div className="insights-section-other-content">
                    {insightsSectionOtherContents.map(data => (
                        <div className="insights-contents">
                            <div className="insights-contents-image"><img src={data.image}></img></div>
                            <div className="insights-contents-date">{data.date}</div>
                            <div className="insights-contents-title">{data.title}</div>
                            <div className="insights-contents-description">{data.description}</div>
                            <Link href="" className="insights-contents-link">Read More</Link>
                        </div>
                    ))}
            </div>
        </div>
    </div>
    );
}