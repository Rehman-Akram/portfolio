import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import nestJsBoilerPlate from "../../Assets/Projects/nestjs_boiler_plate.png";
import expressBoilerPlate from "../../Assets/Projects/expressjs_boiler_plate.png";
import Card from "../Cards/Cards";


function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my Certificates and Courses i Completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card
              imgPath={nestJsBoilerPlate}
              isBlog={false}
              title="Employee of Month"
              description="Got employee of the month recognition for the month of March,2024 at Focusteck"
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={nestJsBoilerPlate}
              isBlog={false}
              title="Employee of Month"
              description="Got employee of the month recognition for the month of March,2024 at Focusteck"
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={nestJsBoilerPlate}
              isBlog={false}
              title="Employee of Month"
              description="Got employee of the month recognition for the month of March,2024 at Focusteck"
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={expressBoilerPlate}
              isBlog={false}
              title="CCNA Certified"
              description="CCNA Certified in 2016"
              isAchievement="CISCO-CSCO12951643"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={expressBoilerPlate}
              isBlog={false}
              title="Achieving Excellence in Leadership"
              description="Attended 2 weeks workshop to enhance leadership skills"
              isAchievement="LUMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={expressBoilerPlate}
              isBlog={false}
              title="FUEL"
              description="2 years program for future leaders of PTCL in collaboration with engage consultants"
              isAchievement="Engage Consultants & PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={expressBoilerPlate}
              isBlog={false}
              title="Fundamentals Of LangChaing"
              description="LangChain crash course"
              isAchievement="COURSERA"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
