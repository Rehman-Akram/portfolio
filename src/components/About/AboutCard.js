import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rehman Akram </span>
            from <span className="purple"> Lahore, Pakistan. &nbsp;</span>
            Working in software development since <i><b className="purple">2021</b></i>.
            <br />
            I am currently employed as a software developer at Focusteck. 
            <br />
            I have completed Masters (MS) in Computer Sciences at COMSATS 
            Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Techs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Explore yourself to serve better!"{" "}
          </p>
          <footer className="blockquote-footer">Rehman Akram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
