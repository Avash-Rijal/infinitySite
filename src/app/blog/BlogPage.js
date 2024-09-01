import Link from "next/link";
import "../globals.css";
import Home from "../page";

export default function Blog() {

    let blog_page_content = {
        title: "Initial Public Offering (IPO): A General Guide",
        date: "Sunday,  August 19, 2024",
        category: "Business Law",
        overview: "This IPO guide outlines the process and regulations governing Initial Public Offerings (IPOs) in Nepal. It covers the basic, regulatory, procedural, and conditional aspects of IPO issuance, providing a step-by-step guide for companies seeking to enter into equity market.",
        background_image:"",
        heroImage:"",
    }

    let blog_page_contributors = [
        {
            name: "Mr. Narayan Chaulagain",
            designation: "Managing Partner",
            image: "/narayan_sir.png",
        },
        {
            name: "Ms. Astha Poudel",
            designation: "Associate",
            image: "/astha_maam.png",
        }
    ]

    let related_articles = [
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
            <h1 className="blog-page-header">{blog_page_content.title}</h1>
            <div className="blog-page-date-category">
                <p className="blog-page-date">{blog_page_content.date}</p>
                <p className="blog-page-category">{blog_page_content.category}</p>
            </div>
            <div className="blog-page-hero-section">
                    <div className="blog-page-hero-overview">
                        <h2>Overview</h2>
                        <p>{blog_page_content.overview}</p>
                        <button>
                            <img src="pdf.svg"></img>
                            <span>Download this Article</span>
                        </button>
                    </div>
                    <div className="blog-page-hero-image">
                        <img src="/chartImage.png"></img>
                    </div>
            </div>
            <div className="blog-page-content-section">
            </div>
            <div className="blog-page-contributors-section">
                <h2>Contributors</h2>
                {blog_page_contributors.map(data => (
                    <div className="blog-page-contributors-card">
                        <img src={data.image}></img>
                        <div className="contributor-details">
                            <p>{data.name}</p>
                            <p>{data.designation}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="related_articles_section">
                <h2 className="related_articles_header">Related Articles</h2>
                <div className="related_articles_content_section">
                    {related_articles.map(data => (
                        <div className="related_articles_card">
                            <div className="related_articles_image">
                                <img src={data.image}></img>
                            </div>
                            <div className="related-articles-category-contents">
                                <div className="related-articles-category-date">
                                    <div className="related-articles-category">{data.category}</div>
                                    <div className="related-articles-date">{data.date}</div>
                                </div>
                                <div className="related-articles-title">{data.title}</div>
                                <div className="related-articles-description">{data.description}</div>
                                <Link href="" className="related-articles-link">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}