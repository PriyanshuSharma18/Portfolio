import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiTableau,
  SiPowerbi,
  SiGooglecloud,
  SiMysql,
  SiDjango,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

function Techstack() {
  return (
    <div>
      <h2 className="text-center">Priyanshu Sharma</h2>
      <p className="text-center">
        <a href="https://www.linkedin.com/in/priyanshu-sharma-347a06250/">LinkedIn</a> |
        <a href="mailto:18priyanshusharma@gmail.com"> Email</a> |
        <a href="https://github.com/PriyanshuSharma18"> GitHub</a>
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTableau />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPowerbi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiOpencv />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
