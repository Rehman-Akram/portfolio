import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiGithub,
  SiJira,
  SiClickup,
  SiSkype,
  SiGooglemeet,
  SiConfluence,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <span className="hover-text">MAC</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="hover-text">VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="hover-text">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <span className="hover-text">Slack</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <span className="hover-text">Github</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <span className="hover-text">JIRA</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup />
        <span className="hover-text">ClickUp</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSkype />
        <span className="hover-text">Skype</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglemeet />
        <span className="hover-text">Google Meet</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence />
        <span className="hover-text">Confluence</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <span className="hover-text">Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <span className="hover-text">AWS</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
