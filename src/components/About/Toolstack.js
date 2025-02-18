import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJupyter,
  SiGithub,
  SiWindows,
  SiGooglecolab,
} from "react-icons/si";

function Toolstack() {
  return (
    <div>
      <h2 className="text-center">Priyanshu Sharma - Tools & Platforms</h2>
      <p className="text-center">
        <a href="https://www.linkedin.com/in/priyanshu-sharma-347a06250/">LinkedIn</a> |
        <a href="mailto:18priyanshusharma@gmail.com"> Email</a> |
        <a href="https://github.com/PriyanshuSharma18"> GitHub</a>
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecolab />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
