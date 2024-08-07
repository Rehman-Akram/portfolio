import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rehman Akram</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Rehman-Akram"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rehman-akram-1667b567/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
                <a
                  href="https://medium.com/@rehmanakram03"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <FaMedium />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:rehmanakram03@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <SiGmail />
                </a>
              </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
