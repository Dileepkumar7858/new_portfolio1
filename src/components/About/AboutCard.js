import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Dileep Kumar Arumulla </span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            I am a Full Stack Developer.
            <br />
            I am Under Graduate B.Tech(Bachelors of Technology) in Electronics and
            Communication Engineering at Vardhaman College of Engineering,
            Shamshabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs on Medium.com
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Bridging code and creativity, one stack at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Dileep Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
