import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              title="PredictoCare"
              description="Engineered an advanced ML-based system, improving cancer cell classification accuracy from 92% to 96%. Redesigned data preprocessing workflows, leveraging parallel processing to decrease model training time by 20% and improve resource efficiency. Delivered a user-friendly deployment interface, enabling seamless adoption by healthcare professionals."
              ghLink="https://github.com/PriyanshuSharma18/PredictoCare"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="OpenWiki"
              description="Designed a secure, scalable platform supporting 100+ concurrent users, enhancing collaboration efficiency. Integrated markdown support, improving content formatting flexibility by 40%. Validated application performance, achieving 99.5% uptime and minimal latency under heavy user loads."
              ghLink="https://github.com/PriyanshuSharma18/OpenWiki"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
