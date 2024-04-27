import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import aiSummit from "../../Assets/Certificates/AI_summit_Image.jpg"
import collaboration from "../../Assets/Certificates/Collaboration_ALIGNMENT.jpg"
import innovativeThinking from "../../Assets/Certificates/Creative_Innovative_Thinking.jpg"
import managerialExcellence from "../../Assets/Certificates/Developing_Managerial_Excellence.jpg"
import digitalTraining from "../../Assets/Certificates/Digital_Training_Warrior.jpg"
import EOM_AUGUST from "../../Assets/Certificates/EOM_Aug_2023.jpg"
import EOM_JUNE from "../../Assets/Certificates/EOM_June_2023.jpg"
import EOM_MARCH from "../../Assets/Certificates/EOM_March_2024.jpg"
import engageConsultants from "../../Assets/Certificates/Engage_consultants_FUEL.jpg"
import franklinCovey from "../../Assets/Certificates/Franklin_Covey_Seven_habits_highly_effective_people.jpg"
import HMM from "../../Assets/Certificates/Harvard_Manage_Mentor.jpg"
import impactfulManagement from "../../Assets/Certificates/Impactfull_management_PTCL.jpg"
import lums from "../../Assets/Certificates/LUMS.png"
import ownership from "../../Assets/Certificates/Ownership_Execution.jpg"
import pmp from "../../Assets/Certificates/PMP_TRAINING.jpg"
import fuel from "../../Assets/Certificates/PTCL_FUEL.jpg"
import Card from "../Cards/Cards";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my Certificates and Courses i Completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <Card
              imgPath={aiSummit}
              isBlog={false}
              title="AI Summit 2024"
              description="Participated in AI Summit 2024 organized by 10Pearls and attended several workshops related to Generative AI"
              isAchievement="10 Pearls"
            />
          </Col>
          <Col md={4} className="project-card">
            <Card
              imgPath={lums}
              isBlog={false}
              title="Achieving Leadership Excellence"
              description="Participated in 1 week leadership workship at LUMS"
              isAchievement="LUMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={franklinCovey}
              isBlog={false}
              title="Seven Habits of Highly Effective People"
              description="The seven habits of highly effective people training by Franklin Covey"
              isAchievement="Franklin Covey"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={EOM_MARCH}
              isBlog={false}
              title="Employee of Month"
              description="Got employee of the month recognition for the month of March,2024 at Focusteck"
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={EOM_AUGUST}
              isBlog={false}
              title="Employee of Month"
              description="Got employee of the month recognition for the month of August,2023 at Focusteck"
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={EOM_JUNE}
              isBlog={false}
              title="Employee of Month"
              description="Got employee of the month recognition for the month of June,2023 at Focusteck"
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={digitalTraining}
              isBlog={false}
              title="Digital Training Warrior"
              description="Participated in workshop for effective and engaging digital training by Dr. Sunil Gupta"
              isAchievement="IDEAS Management Consultant"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={engageConsultants}
              isBlog={false}
              title="Future Leaders"
              description="Training program to build leadership skills by engage consultants led by Mr. Paul Keizer"
              isAchievement="Engage Consultants"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={fuel}
              isBlog={false}
              title="Future Leaders"
              description="2 years training program to build leadership skills"
              isAchievement="PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={pmp}
              isBlog={false}
              title="PMP Training"
              description="Successully completed 36 hours of PMP training, a pre-requisite for PMP certification"
              isAchievement="PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={HMM}
              isBlog={false}
              title="Harvard Manage Mentor"
              description="Successully completed course of Harvard Manage Mentor thorugh digital learning initiative, it covers management topics of conflict management & change management"
              isAchievement="PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={collaboration}
              isBlog={false}
              title="Collaboration & Alignment"
              description="Participated in workshop related to inter and intra teams collaboration and alignment of team(s) with organization goals,missions and vision"
              isAchievement="PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={innovativeThinking}
              isBlog={false}
              title="Creative and Innovative thinking"
              description="Participated in workshop focussing on creative and innovative thinking "
              isAchievement="PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={managerialExcellence}
              isBlog={false}
              title="Developing Managerial Excellence"
              description="Participated in workshop helping to develop managerial skills"
              isAchievement="PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={impactfulManagement}
              isBlog={false}
              title="Impactful Management"
              description="Workshop focuessed on management with impact in organization"
              isAchievement="PTCL"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={ownership}
              isBlog={false}
              title="Taking Ownership and Speedy Execution"
              description="Workshop focusses on how to take ownership and deliver efficiently"
              isAchievement="PTCL"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
