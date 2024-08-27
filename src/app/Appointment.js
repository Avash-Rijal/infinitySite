import "./globals.css";

export default function Appointment() {

  const appointmentSectionImage = "./appointment.png";

  return (
    <div className="appointment-section">
        <div className="container">
            <div className="appointment-section-content">
              <div className="appointment-section-text-section">
                <div className="appointment-section-header">
                    <h2>Book Your</h2>
                    <h2>Appointment</h2>
                </div>
                <div className="appointment-section-form">
                  <form>
                    <div className="form-details">
                      <input type="text" name="fullname" placeholder="Full Name"></input>
                      <input type="mail" name="mail" placeholder="Email"></input>
                    </div>

                    <div className="form-details">
                      <input type="number" name="number" placeholder="Phone Number"></input>
                      <input type="text" name="subject" placeholder="Subject"></input>
                    </div>

                    <div className="form-message">
                      <textarea placeholder="Message"></textarea>
                    </div>

                    <button className="appointment-form-submit-button">Book your Appointment</button>
                  </form>
                </div>
              </div>
              <div className="appointment-section-image">
                <img src={appointmentSectionImage}></img>
              </div>
            </div>
        </div>
    </div>
  );
}