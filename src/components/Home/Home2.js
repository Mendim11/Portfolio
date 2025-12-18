import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  // State and handlers for projects modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Projects array
  const projects = [
    {
      name: "AwesomeReactApp",
      description:
        "A responsive and interactive web application built with React, showcasing modern UI, Dark Mode and reusable components.",
      link: "https://lawkos-reactjs.netlify.app",
    },
    {
      name: "Revivo Clinic",
      description:
        "A responsive and interactive web application built with React, For a medical office in Prishtina.",
      link: "https://revivo-clinic.live",
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
        "A useful webpage made for a local farm in Kosova, Made with wordpress.",
      link: "https://kaage-farm.com/",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

        {/* === Projects Section === */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8} className="project-description">
            <h1 className="project-heading">
              My Latest <strong className="purple">React Projects</strong>
            </h1>
            <p style={{ fontSize: "1.1em", color: 'white' }}>
              I’ve been working on multiple React projects recently. Click below
              to explore them all!
            </p>

            <Button onClick={handleShow} className="view-project-btn" variant="primary">
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

        {/* === “Let Me Introduce Myself” Section === */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, React.js and Wordpress. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Vue.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Vue.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* === Social Links === */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mendim11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mendimgashi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mendxm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Home2;
