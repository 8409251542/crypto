import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravi Shankar </span>
            from <span className="purple"> Gaya,Bihar, India.</span>
            <br />
            I am currently learning Full Stuck from GEEKSTER.
            <br />
            I have completed B.Tech in Computer Science from UEM, Jaipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Book Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming isn't about what you know; it's about what you can."{" "}
          </p>
          <footer className="blockquote-footer">Chris Pine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
