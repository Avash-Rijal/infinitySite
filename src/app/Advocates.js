import Link from "next/link";

export default function Advocates(){
    let advocatesList = [
        {name: "Lekha Nath Bhattarai", designation: "Managing Partner", image: "./advocateImage.png"},
        {name: "Lekha Nath Bhattarai", designation: "Managing Partner", image: "./advocateImage.png"},
        {name: "Lekha Nath Bhattarai", designation: "Managing Partner", image: "./advocateImage.png"},
        {name: "Lekha Nath Bhattarai", designation: "Managing Partner", image: "./advocateImage.png"},
    ]

    return (
        <div className="advocates-section">
            <div className="advocates-section-heading">
                <h2>Meet Our</h2>
                <h2>Professional Advocates</h2>
            </div>
            <div className="advocates-section-list">
                {advocatesList.map(data => (
                    <div className="advocates-individual-box">
                        <div className="advocates-individual-box-image">
                            <img src={data.image}></img>
                        </div>
                        <div className="advocates-individual-box-name">{data.name}</div>
                        <div className="advocates-individual-box-designation">{data.designation}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}