import Link from "next/link";

export default function OfficeLocation(){
    const map = "./map.png";
    return (
    <div className="container">
        <div className="office-location-container">
            <div className="office-location-header">
                <h2>Find Our</h2>
                <h2>Office Location</h2>
            </div>

            <div className="office-location-contents">
                <div className="office-location-map">
                    <img src={map}></img>
                </div>
                <div className="office-contact-details">
                    <div className="office-contact-phone">
                        <span className="contact-info">Phone:</span>
                        <br></br>
                        977 980-1234567
                    </div>

                    <div className="divider"></div>

                    <div className="office-contact-email">
                        <span className="contact-info">Email:</span>
                        <br></br>
                        inquiry@infinitynp.com
                    </div>

                    <div className="divider"></div>
                    
                    <div className="office-contact-address">
                        <span className="contact-info">Address:</span>
                        <br></br>
                        Ekkakrit Marg, Anamnagar
                        <br></br>
                        Kathmandu, Nepal
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}