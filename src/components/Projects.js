import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                    Explore My Portfolio: A Showcase of Innovative Projects and
                    Creative Endeavors
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
                        <p>
                          <h3>ShopCart</h3> ShopCart is a cutting-edge
                          e-commerce shopping cart app that delivers a seamless
                          online shopping experience through an intuitive,
                          responsive interface. It features product browsing,
                          secure checkout with multiple payment options, and
                          cart management, all accessible on any device. Built
                          using React, HTML5, and CSS3 for the frontend, and
                          Node.js with Express.js for the backend, ShopCart
                          leverages MongoDB or a SQL-based database for data
                          management. The app integrates with payment gateways
                          like Stripe and PayPal, and is hosted on platforms
                          such as AWS or Heroku. With a focus on security and
                          user privacy, ShopCart offers a streamlined and
                          efficient shopping experience.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <h3>ProManage</h3> ProManage is an advanced project
                          management app developed with React.js, designed to
                          optimize project planning and execution. It features
                          an intuitive dashboard, Kanban boards, and Gantt
                          charts for task management and project visualization.
                          Teams can collaborate in real time with integrated
                          chat, file sharing, and comment tools. Time tracking,
                          milestone monitoring, and detailed reporting ensure
                          efficient progress tracking and resource allocation.
                          ProManage supports role-based access, real-time
                          notifications, and integrates with tools like Slack
                          and Google Drive. With a focus on user experience and
                          productivity, ProManage transforms project management
                          for teams and organizations of all sizes.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          <h3>TimeTrek</h3>
                          TimeTrek is a sleek and efficient countdown app built
                          with React.js, designed to help users keep track of
                          important events and deadlines with precision. This
                          app offers a visually appealing and highly functional
                          interface that enables users to set, manage, and
                          customize countdowns for various occasions, from
                          personal milestones to professional deadlines.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
