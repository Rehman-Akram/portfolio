import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import eventLoop from "../../Assets/Blogs/Event_loop_node_js.png"
import microservices from "../../Assets/Blogs/monolithic_microservices_architecture.jpeg"
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
          
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
