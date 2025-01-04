import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import Particle from "../Particle";
import cv from "../../Assets/Rehman_Resume.pdf";
import resume from "../../Assets/Rehman-Akram-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState("cv");
  const [numPages, setNumPages] = useState({ cv: 4, resume: 1 });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess =
    (pdf) =>
    ({ numPages }) => {
      setNumPages((prev) => ({ ...prev, [pdf]: numPages }));
    };

  const renderPdfPages = () => {
    return Array.from({ length: numPages[activeTab] }, (_, index) => (
      <Document
        file={activeTab === "cv" ? cv : resume}
        key={`page_${index + 1}`}
        onLoadSuccess={onDocumentLoadSuccess(activeTab)}
        className="d-flex justify-content-center"
      >
        <Page
          pageNumber={index + 1}
          scale={width > 786 ? 1.4 : 0.7}
          renderAnnotationLayer={false}
        />
      </Document>
    ));
  };

  return (
    <div>
      <Container fluid className="resume-section px-4 py-5">
        <Particle />
        <Row className="sticky justify-content-center my-4">
          <Col xs="auto">
            <Button
              variant={activeTab === "cv" ? "primary" : "outline-primary"}
              onClick={() => setActiveTab("cv")}
              className="toggle-btn"
            >
              Detailed CV
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant={activeTab === "resume" ? "primary" : "outline-primary"}
              onClick={() => {
                setActiveTab("resume");
              }}
              className="toggle-btn"
            >
              Resume
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="primary"
              href={activeTab === "cv" ? cv : resume}
              download={
                activeTab === "cv"
                  ? "Rehman_Detailed_CV.pdf"
                  : "Rehman_Resume.pdf"
              }
              className="download-btn"
            >
              <AiOutlineDownload />
              &nbsp;Download {activeTab === "cv" ? "Detailed CV" : "Resume"}
            </Button>
          </Col>
        </Row>
        <Row className="resume-content">{renderPdfPages()}</Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
