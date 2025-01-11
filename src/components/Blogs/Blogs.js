import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import eventLoop from "../../Assets/Blogs/Event_loop_node_js.png"
import groqApi from "../../Assets/Blogs/GroqApi.png"
import microservices from "../../Assets/Blogs/monolithic_microservices_architecture.jpeg"
import grpc from "../../Assets/Blogs/microservice-architecture.png"
import communicationPatterns from "../../Assets/Blogs/communication-patterns.png"
import BlogCard from "../Cards/Cards";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Please find list of my blogs
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogCard
              imgPath={groqApi}
              isBlog={true}
              title="Exploring Groq API with Streamlit by creating a simple chatbot using llama3 llm"
              description="In this blog, I have explored Groq API (AI Inference) to call open source models as an api. Further explored Streamlit that how it provides quick support for creating UI and deploy on cloud freely. I used Streamlit and Groq API to create simple chatbot using llama3 llm."
              ghLink="https://medium.com/@rehmanakram03/building-a-chatbot-with-groq-apis-llama-3-and-streamlit-with-deployment-on-cloud-74ef041f60d2"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogCard
              imgPath={eventLoop}
              isBlog={true}
              title="Internals of Node-JS Event loop"
              description="In this blog, i have discussed in detailed with an example that how event loop works in a node js."
              ghLink="https://medium.com/@rehmanakram03/internals-of-node-js-event-loop-74e79d31bbfc"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
              imgPath={microservices}
              isBlog={true}
              title="Monolithic Vs Microservice Architecture"
              description="A brief blog for comparision between monolithic and microservices architecture."
              ghLink="https://focusteck.com/monolithic-vs-microservice-architecture/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
              imgPath={grpc}
              isBlog={true}
              title="Microservices Communication (API-Gateway) Using gRPC"
              description="A blog with github repos for gRPC communication between microservices."
              ghLink="https://medium.com/@rehmanakram03/microservices-communication-api-gateway-pattern-using-grpc-a165c7425bfb"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogCard
              imgPath={communicationPatterns}
              isBlog={true}
              title="Interservice Communication: Synchronous vs Asynchronous Communication"
              description="A blog, briefly describing synchronous and asynchronous communication patterns in microservices architecture."
              ghLink="https://medium.com/@rehmanakram03/interservice-communication-synchronous-asynchronous-communication-e22ca8291c15"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
