import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Automated TollTax"
              description="Seamless toll tax collection enables automatic, contactless payment using technologies like FASTag or ANPR, reducing traffic congestion and enhancing efficiency at toll plazas."
              ghLink="https://github.com/ArumilliLikitha/Seamless-TollTax-Collection-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Lab AI Assistant"
              description="A Smart Lab AI Assistant automates data analysis, experiment tracking, and equipment monitoring, enhancing research productivity and ensuring precision in scientific workflows."
              ghLink="https://github.com/ArumilliLikitha/Lab-Assisstant-Project"
            />
          </Col>


         

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
