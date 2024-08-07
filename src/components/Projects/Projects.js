import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//import project2 from "../../Assets/Projects/project2.png";

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
              
              isBlog={false}
              title="Software Project Estimation using Machine Learning"
              description="Improving software project estimates by investigating ML techniques, accurately predicting team size and costs through analogous estimation. Improved project planning, optimizing resource allocation for enhanced efficiency."
              ghLink="https://github.com/Dileepkumar7858/project-mini/blob/main/all%20per.py"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={project2}
              isBlog={false}
              title="Sematic Communication in 6G Network"
              description="This project revolutionizes communication by prioritizing semantic essence, leveraging AI in 6G networks for
efficient picture transmission. It conserves bandwidth through segmentation maps, pioneering multimedia transfer via semantic communication."
              ghLink="https://github.com/Dileepkumar7858/Project-major/blob/main/CODE/exp1.m"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
