import { Container, Row, Col } from "react-bootstrap";
import { Finalform } from "./MailchimpForm";
// import logo from "../assets/img/rajlogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/githubbb.svg";
import navIcon3 from "../assets/img/icons8-mail-100.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Finalform />
          <Col size={12} sm={6}>
            <a href="/Resume.pdf" download={true} className="Resume">
              My Resume
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/raj-kumar-rai-857b67177/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="https://github.com/raj2208"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="github" />
              </a>
              <a
                href="mailto:rajkrai22@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="mail" />
              </a>
            </div>
            <div className="raj-copyright">
              <p>Copyright 2023</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
