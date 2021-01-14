import React from "react";
import interim3 from "../../interim3.svg";
import "./upcoming-styles.css";

const UpcomingEvents = () => {
  return (
    <div className="events-container">
      <h1 className="events-heading">Upcoming Events</h1>
      <img className="interimImage" src={interim3} alt="Interim" />
      <div className="events-grid">
        {/* Card 1 */}
        <div className="card-container">
          <div className="image-container">
            <img src="assets/img/horeb1.jpg" alt="Image 1" />
          </div>
          <div className="card-header">
            <a href="#">Opening of new auditorium</a>
          </div>
          <div className="card-date">August 1, 2018</div>
          <div className="card-text">
            Join us this Sunday 15th July for the grand inaugral Sunday service
            at our new premises at Etham. 20 Passey Place, SE9 5DQ
          </div>
        </div>
        {/* Card 2 */}
        <div className="card-container">
          <img src="assets/img/horeb2.jpg" alt="Image 2" />
          <div className="card-header">
            <a href="#">Our minibus service</a>
          </div>
          <div className="card-date">August 1, 2018</div>
          <div className="card-text">
            We have a minibus service on Sundays departing from Camberwell
            (Lowth Road) at 08:30am.
          </div>
        </div>
        {/* Card 3 */}
        <div className="card-container">
          <img src="assets/img/horeb1.jpg" alt="Image 3" />
          <div className="card-header">
            <a href="#">Prophetic week</a>
          </div>
          <div className="card-date">July 20, 2018</div>
          <div className="card-text">
            Join us for a Prophetic week beginning Sunday 22nd July with Prophet
            Paul Okai. Theme is: Your Hope and Expectations shall be fulfilled!
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
