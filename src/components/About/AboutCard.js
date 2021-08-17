import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">John Thummel </span>
            from <span className="purple"> Strasbourg, France.</span>
            <br />I am a Software Dev of 20+ years of personal/non-professional experience. It has been my only goal and dream to pursue the art of code.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working as a <a href="http://www.dallasmakerspace.org">Maker</a> in any medium
            </li>
            <li className="about-activity">
              <ImPointRight /> Especially <a href="http://www.instagram.com/narkane142">wood</a> and <a href="http://www.instagram.com/narkane142">leather</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "To create is the highest human pursuit - DEUS FIO"{" "}
          </p>
          <footer className="blockquote-footer">Thummel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
