import Link from "next/link";
import "../globals.css";

export default function AttorneysPage() {
    let advocates_list = [
        {
            name:"Narayan Chaulagain",
            image:"/narayan_sir.png",
            designation:"Managing Partner",
        },
        {
            name:"Lekha Nath Bhattarai",
            image:"/lekhanath_sir.png",
            designation:"Managing Partner",
        },
        {
            name:"Pratima Kanel Kharel",
            image:"/pratima_maam.png",
            designation:"Founding Partner",
        },
        {
            name:"Astha Poudel",
            image:"/astha_maam.png",
            designation:"Associate",
        },
        {
            name:"Gyanu Tamang",
            image:"/gyanu_maam.png",
            designation:"Associate",
        },
        {
            name:"Rejina Paudyal",
            image:"/rejina_maam.png",
            designation:"Associate",
        },
        {
            name:"Aashma Acharya",
            image:"/aashma_maam.png",
            designation:"Associate",
        },
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
        {
            image: "/related_articles_image.png",
            category: "Business Law",
            date: "Sunday, July 24, 2022 ",
            title: "Laws to change private company to Public Company.",
            description: "There are many factors that can decide whether or not a company can turn to public or not.",
            link: "",
        }
]
    return (
    <div className="container">
        <div className="advocates-page-header">
            <div className="advocates-page-header">

                <div className="advocates-page-heading">
                    <h2>Meet our</h2>
                    <h2>Professional Advocates</h2>
                </div>

                <div className="divider"></div>

                <div className="advocates-page-description">
                    <p> 
                        We are a team of experienced and professional advocates. Our team is filled with professionals of different fields. 
                    </p>    
                </div>

            </div>
        </div>
        <div className="advocates-page-container">
            {advocates_list.map(data => (
                <div className="advocate_card">
                    <img src={data.image}></img>
                    <div className="advocate_name">{data.name}</div>
                    <div className="advocate_designation">{data.designation}</div>
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
