import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import nestJsBoilerPlate from "../../Assets/Projects/nestjs_boiler_plate.png";
import expressBoilerPlate from "../../Assets/Projects/expressjs_boiler_plate.png";
import myChatbot from "../../Assets/Projects/personal_chatbot.jpeg";
import multiplePdfChatbot from "../../Assets/Projects/multiple_pdf_chatbot.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import ProjectCard from "../Cards/Cards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nestJsBoilerPlate}
              isBlog={false}
              title="NestJs-Boiler plate"
              description="Created nest js boiler plate as template repo. So that anyone or myself can quickly setup basic cruds that are required for almost each project. It has two branches, master branch contains basic user crud with JWT Auth and in other branch it has RBAC implemented."
              ghLink="https://github.com/Rehman-Akram/boiler-plate-nestjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expressBoilerPlate}
              isBlog={false}
              title="Express-Boiler plate"
              description="Created express js boiler plate which maintains proper modular structure and helps to get started with proper structured express app without any time. It contains basic user crud with JWT passport strategy."
              ghLink="https://github.com/Rehman-Akram/boiler-plate-express"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myChatbot}
              isBlog={false}
              title="My chatbot"
              description="Developed chatbot on my personal data using python with streamlit as frontend. This enables user to create their own personal chatbots."
              ghLink=""
              demoLink="asd"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiplePdfChatbot}
              isBlog={false}
              title="Multiple PDFs chatbot"
              description="In this project, user can train chatbot on manual pdfs. Provide PDFs runtime and bot will answer on the basis of pdfs uploaded. Used streamlit as frontend."
              ghLink=""
              demoLink="asd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is only frontend project created on react, showcasing my portfolio"
              ghLink="https://github.com/Rehman-Akram/portfolio"
              demoLink="asd"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
