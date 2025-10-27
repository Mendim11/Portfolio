import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const projects = [
    {
      name: "AwesomeReactApp",
      description:
        "A responsive and interactive web application built with React, showcasing modern UI and reusable components.",
      link: "https://lawkos-reactjs.netlify.app",
    },
    {
      name: "Revivo Clinic",
      description:
        "A responsive and interactive web application built with React, For a medical office in Prishtina.",
      link: "https://revivo-clinic.netlify.app",
    },
    {
      name: "User Management",
      description:
        "A demo version and concept of a user management page.",
      link: "https://users-managment-reactjs.netlify.app",
    },
    {
      name: "Find My Recipe",
      description:
        "A demo page and idea of a web that helps you find recipes of daily food.",
      link: "https://find-my-recipe-reactjs.netlify.app/",
    },
    {
      name: "Farm info Web",
      description:
        "An useful webpage made for a local farm in Kosova, Made with wordpress.",
      link: "https://kaage-farm.com/",
    },
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* === About Me Section === */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* === My Projects Section (Moved Above Skillset) === */}
        <h1 className="project-heading">
          My Latest <strong className="purple">React Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8} className="project-description">
            <p style={{ fontSize: "1.1em" }}>
              I’ve been working on multiple React projects recently. Click below
              to explore them all!
            </p>

            <Button
              onClick={handleShow}
              className="view-project-btn"
              variant="primary"
            >
              View Projects
            </Button>
          </Col>
        </Row>

        {/* === Modal Popup for Projects === */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>My React Projects</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {projects.map((project, index) => (
              <Card key={index} className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="outline-primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Modal.Body>
        </Modal>

        {/* === Skillset & Tools Section === */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
