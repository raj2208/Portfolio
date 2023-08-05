import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  githubRepo,
}) => {
  const openLink = () => {
    window.location.href = link;
  };

  const openGithubRepo = () => {
    window.location.href = githubRepo;
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div>
            <span>{description}</span>
          </div>
          <div className="btn-group mt-3">
            <button className="btn btn-primary" onClick={openLink}>
              Visit Website
            </button>
            <button className="btn btn-secondary" onClick={openGithubRepo}>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};
