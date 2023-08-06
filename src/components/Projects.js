import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import expenseimg from "../assets/img/expenseimg.png";
import notesimg from "../assets/img/notesimg.png";
import weatherimg from "../assets/img/weatherimg.png";
import mathsgameimg from "../assets/img/mathsgameimg.png";
import stopwatchimg from "../assets/img/stopwatchimg.png";
import drawingimg from "../assets/img/drawingimg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Notes App Online",
      description:
        "Using MERN stack to create a online notes applicaiton with user authentication",
      imgUrl: notesimg,
      link: "undeployed-raj.netlify.app",
      githubRepo: "https://github.com/raj2208/Notes-App-MERN",
    },
    {
      title: "Weather Forecast App",
      description: "Using ReactJs ",
      imgUrl: weatherimg,
      link: "https://raj-weather-app.netlify.app/",
      githubRepo: "https://www.youtube.com/",
    },
    {
      title: "Expense App MERN",
      description: "Design & Development",
      imgUrl: expenseimg,
      link: "undeployed-raj.netlify.app",
      githubRepo: "https://www.youtube.com/",
    },
    {
      title: "Stopwatch App",
      description: "Design & Development",
      imgUrl: stopwatchimg,
      link: "https://stopwatch-raj.netlify.app/",
      githubRepo: "https://github.com/raj2208/StopWatch-Application",
    },
    {
      title: "Drawing App",
      description: "Design & Development",
      imgUrl: drawingimg,
      link: "https://drawing-app-raj.netlify.app/",
      githubRepo: "https://github.com/raj2208/Drawing-App",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mathsgameimg,
      link: "https://raj-maths-game.netlify.app/",
      githubRepo: "https://github.com/raj2208/Maths-Game",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the my projects. <br /> Hover over them to
                    visit the site or the source code in github.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        alt="bgimage"
        className="background-image-right"
        src={colorSharp2}
      ></img>
    </section>
  );
};
