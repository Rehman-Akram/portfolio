import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { GoOrganization } from "react-icons/go";

function Cards(props) {
  return (
    <Card className="project-card-view d-flex flex-column h-100">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.tools && <div style={{textAlign: "left"}}><strong><u>Stack:</u></strong> {props.tools}</div>}
        <div className="mt-auto"> {/* Add mt-auto here to push buttons to the bottom */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
      {props.isAchievement && (
        <Card.Footer>
          <div style={{ marginLeft: "10px" }}>
            <GoOrganization /> &nbsp;
            {props.isAchievement}
          </div>
        </Card.Footer>
      )}
    </Card>
  );
}
export default Cards;
