import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiRedis,
  SiSequelize,
  SiPostgresql,
  SiNestjs,
  SiTypescript,
  SiExpress,
  SiAngular,
  SiAwslambda,
  SiAmazonaws,
  SiGraphql,
  SiDocker,
  SiOpenai,
  SiOpensearch,
  SiElasticsearch,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
       <SiNestjs />
       <span className="hover-text">Nest Js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="hover-text">Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <span className="hover-text">Typescript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="hover-text">Node Js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="hover-text">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <span className="hover-text">Express</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="hover-text">Mongo Db</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <span className="hover-text">Angular</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSequelize />
        <span className="hover-text">Sequelize</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
        <span className="hover-text">Lambda Functions</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <span className="hover-text">Redis</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span className="hover-text">Postgresql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span className="hover-text">Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <span className="hover-text">AWS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <span className="hover-text">GraphQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
        <span className="hover-text">Elastic Search</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpensearch />
        <span className="hover-text">Open Search</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <span className="hover-text">Open AI</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <span className="hover-text">Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="small-text">TYPEORM</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="small-text">Generative AI</span>
      </Col>
    </Row>
  );
}

export default Techstack;
