import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, I am <span className="purple">Josiah Williams </span>,
            Frontend web developer from{" "}
            Lagos, Nigeria.
            <br />
            <br />
            Apart from being a frontend web developer, I'm also :
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Graphic Designer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Wordpress developer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Upcoming webflow developer
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
