import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import nestJsBoilerPlate from "../../Assets/Projects/nestjs_boiler_plate.png";
import expressBoilerPlate from "../../Assets/Projects/expressjs_boiler_plate.png";
import myChatbot from "../../Assets/Projects/personal_chatbot.jpeg";
import multiplePdfChatbot from "../../Assets/Projects/multiple_pdf_chatbot.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import ProjectCard from "../Cards/Cards";
import gRPC from "../../Assets/Projects/microservice-architecture.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project - Loyalty Reward App"
              description="Worked as Backend Developer + Team Lead - It seamlessly integrates with multiple businesses, providing an easy-to-use platform for managing customer rewards, tracking engagement, and delivering personalized offers. By leveraging the features of the Loyalty Reward App, businesses can effectively enhance customer satisfaction and drive repeat business"
              tools='React-JS, Nest-JS, Postgresql, AWS, Typeorm, Sockets, Typescript'
              isAchievement="Focusteck"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project - Global Care Finder"
              description="Worked as Backend Developer + Team Lead - A comprehensive tool for online appointment and chat system. It provides a patient to book an appointment with doctor as per doctor's available time slots, further doctor and patient can chat once appointment is booked. Patient can find doctor on the basis of location, doctor's expertise, qualification, etc."
              tools='React-JS, Nest-JS, Postgresql, AWS, Typeorm, Sockets, Typescript'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project - Helphive"
              description="Worked as full stack developer (MEAN). Live customized chatting product build from scratch. It contains both admin panel and public chatbots for specific domain. These chatbots can be created, updated and trained on custom data."
              tools='Typescript, Nest-JS, Postrgresql, Typeorm, Dynamo Db, Open Ai, AWS, Sockets, Angular, Bootstrap'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project - Ideawake"
              description="Worked as full stack developer (MEAN). Its an idea management platform live product which is proven to transform ideas to impact. It is completely dynamic and can be updated as per customer needs. Created new features, resolved bugs, Node and typeorm version upgradation etc."
              tools='Microservices Architecture, Redis, Nest-JS, Postgresql, Mongo DB, Angular, Sockets, Open Ai, Bootstrap, Elastic Search, Open Search,  AWS, Dockers'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project - Bib"
              description="Worked as backend developer. A project for volunteers who can take part volunteerily in a social cause"
              tools='Nest-JS, Apollo GraphQL, Postgresql, Typeorm'
              isAchievement="Kwanso"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project - Helmer"
              description="Worked as Backend devleper. A tool for a law firm which enables them to managed all there workings, records, meetings digitally."
              tools='Nest-JS, Apollo GraphQL, Postgresql, Typeorm'
              isAchievement="Kwanso"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Project - Mindcette"
              description="Worked as frontend react developer and integrated it with backend. A project created from scratch. A tool to test entrepreneurial thinking of a person"
              tools='React, Material UI, Apollo GraphQL'
              isAchievement="Kwanso"
            />
          </Col>
          
          
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Personal Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my personal projects I've developed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nestJsBoilerPlate}
              isBlog={false}
              title="NestJs-Boiler plate"
              description="Created nest js boiler plate as template repo. So that anyone or myself can quickly setup basic cruds that are required for almost each project. It has two branches, master branch contains basic user crud with JWT Auth and in other branch it has RBAC implemented."
              tools='Typescript, Nest-JS, Postrgresql, Typeorm'
              ghLink="https://github.com/Rehman-Akram/boiler-plate-nestjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expressBoilerPlate}
              isBlog={false}
              title="Express-Boiler plate"
              description="Created express js boiler plate which maintains proper modular structure and helps to get started with proper structured express app without any time. It contains basic user crud with JWT passport strategy."
              tools='Javascript, Express-js, Postrgresql, Sequelize'
              ghLink="https://github.com/Rehman-Akram/boiler-plate-express"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myChatbot}
              isBlog={false}
              title="My chatbot"
              description="Developed chatbot on my personal data using python with streamlit as frontend. This enables user to create their own personal chatbots."
              ghLink=""
              demoLink="asd"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiplePdfChatbot}
              isBlog={false}
              title="Multiple PDFs chatbot"
              description="In this project, user can train chatbot on manual pdfs. Provide PDFs runtime and bot will answer on the basis of pdfs uploaded. Used streamlit as frontend."
              tools='Python, streamlit, langchain, FAISS, Gemini'
              ghLink="https://github.com/Rehman-Akram/chat-with-multiple-pdfs"
              demoLink="http://54.254.151.238:8501"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is only frontend project created on react, showcasing my portfolio"
              tools='Javascript, React, bootstrap'
              ghLink="https://github.com/Rehman-Akram/portfolio"
              demoLink="https://d263l9642rjt91.cloudfront.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gRPC}
              isBlog={false}
              title="Microservices Communication (Api Gateway) Using gRPC"
              description="This is only backend project. In this project, i have created 5 repos. Api gateway, auth microservice, product microservice, order microservice along with proto buffer repo which is being used in all services to provide interface definitions"
              tools='Typescript, Nestjs, Postgresql'
              ghLink="https://github.com/Rehman-Akram/grpc-api-gateway"
            />
          </Col>
          
        </Row>
      </Container>
      
    </Container>
  );
}

export default Projects;
