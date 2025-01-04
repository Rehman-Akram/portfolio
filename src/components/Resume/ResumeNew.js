import React, { useState, useEffect } from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cv from "../../Assets/Rehman_Resume.pdf";
import shortResume from "../../Assets/Rehman-Akram-Resume.pdf"; // Assuming you have a short resume PDF
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const renderPdfPages = (pdf, pageCount) => {
    return Array.from(new Array(pageCount), (el, index) => (
      <Document
        file={pdf}
        key={`page_${index + 1}`}
        loading=""
        className="d-flex justify-content-center"
      >
        <Page pageNumber={index + 1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    ));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Tabs defaultActiveKey="cv" id="resume-tabs" className="mb-3">
          <Tab eventKey="cv" title="CV (4 pages)">
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={cv}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>

            <Row className="resume">{renderPdfPages(cv, 4)}</Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={cv}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          </Tab>
          <Tab eventKey="resume" title="Resume (1 page)">
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={shortResume}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Row>

            <Row className="resume">{renderPdfPages(shortResume, 1)}</Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={shortResume}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default ResumeNew;
