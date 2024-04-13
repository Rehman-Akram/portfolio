import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.JPEG"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered a 
              <i> 
                <b className="purple"> Passion for Programming &nbsp; 
                </b>
              </i>
               during my master's thesis at UET from 2014 to 2016, where I explored 
              <i> 
                <b className="purple"> Software-Defined Networks. &nbsp;
                </b>
              </i>
              Starting with 
              <i> 
                <b className="purple"> Python, &nbsp;
                </b>
              </i>
               I immersed myself in coding, pursued further studies in computer science, and transitioned into the realm of 
               
               <i> 
                <b className="purple"> Web Development as a Profession in 2021.
                </b>
              </i>
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> Javascript, Typescript &nbsp;</b>
              </i>
              and like to code in
              <i>
                <b className="purple"> Python </b>
              </i>
              for AI related stuff
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">websites </b> and
                also in areas related to{" "}
                <b className="purple">
                  Generative AI.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Nestjs</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid round-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rehman-Akram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rehman-akram-1667b567"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
