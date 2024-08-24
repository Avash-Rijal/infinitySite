export default function Insights(){
    const insightsSectionContents = [
        {title: "Recruitment of Foreign Nationals: A General Guide"},
        {description: "This guide provides an overview of the regulations governing the recruitment of foreign nationals by Nepalese enterprises. It includes the basic, regulatory, procedural, and other aspects of recruitment, offering a step-by-step guide for enterprises looking to hire foreigners. "},
        {date: "Saturday, August 24, 2024"},
        {image: "/image"}
    ];
    return (
        <div className="insights-section">
            <div className="insights-section-header">
                <h2>Read Our</h2>
                <h2>Latest Insights</h2>
            </div>
            <div className="insight-section-main">
                <div className="insight-section-main-image">{insightsSectionContents[0].image}</div>
                <div className="insight-section-main-content">
                    <div className="insight-section-main-date">{insightsSectionContents[0].date}</div>
                    <div className="insight-section-main-title">{insightsSectionContents[0].title}</div>
                    <div className="insight-section-main-description">{insightsSectionContents[0].description}</div>
                    <Link href="" className="insight-section-main-link">Read More</Link>
                </div>
            </div>
        </div>
    );
}