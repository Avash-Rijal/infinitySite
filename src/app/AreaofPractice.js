import "./globals.css";

export default function AreaofPractice() {
    const areaofPractice = [{name:"Business Law", description: "Expertise in business-related legal matters, including contract drafting, mergers, and corporate governance. We protect business interests and facilitate smooth operations.", imgsrc: "./suitcase.png"},
        {name:"Dispute Resolution", description: "Comprehensive services for resolving conflicts through arbitration, and litigation. Our skilled attorneys aim for effective, efficient solutions in business, contractual, and personal disputes.", imgsrc: "./handshake.png"},
        {name:"Legal Reform", description: "Advocacy and implementation of legal changes to improve existing laws. We work with various entities to draft new legislation, amend outdated laws, and promote equitable legal standards.", imgsrc: "./note.png"},
        {name:"Civil Law Practice", description: "Broad services in civil law, covering civil rights, property disputes, family law, and contracts. We offer personalized legal solutions to protect individual and entity rights.", imgsrc: "./bank.png"}
     ]
  return (
    <div className="container">
    <div className="area-of-practice-section">
        <div className="area-of-practice-header">

            <div className="area-of-practice-heading">
                <h2>Explore our</h2>
                <h2>Area of Practices</h2>
            </div>

            <div className="divider"></div>

            <div className="area-of-practice-description">
                <p>At Infinity Partners, we offer a wide range of legal services.
                Our experienced attorneys provide practical advice and effective solutions. 
                Find out how we can help:</p>    
            </div>

        </div>

        <div className="area-of-practice-content">
                {areaofPractice.map(data => (
                    <div className="area-of-practice-card">
                        <h4>{data.name}</h4>
                        <p>{data.description}</p>
                        <div></div>
                        <div className="area-of-practice-card-bottom">
                            <img src={data.imgsrc}></img>
                            <button>Learn More</button>
                        </div>
                    </div>
                ))}

        </div>
    </div>
    </div>
  );
}