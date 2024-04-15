import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Education from "../Education/Education";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />

        <h1 className="project-heading education">
          My <strong className="purple">Education</strong>
        </h1>
        <Education
          institution="COMSATS LAHORE"
          degree="Masters"
          fieldOfStudy="Computer Science"
          year="2018-2021"
        />
        <Education
          institution="UET LAHORE"
          degree="Masters"
          fieldOfStudy="Telecom Networks"
          year="2014-2016"
        />
        <Education
          institution="UET LAHORE, FSD Campus"
          degree="Engineering"
          fieldOfStudy="Electronics & Communication"
          year="2006-2010"
        />
        <Education
          institution="GCU Lahore"
          degree="F.Sc"
          fieldOfStudy="Pre-Engineering"
          year="2004-2006"
        />
      </Container>
    </Container>
  );
}

export default About;
