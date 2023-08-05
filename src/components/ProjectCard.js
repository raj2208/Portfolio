import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  githubRepo,
}) => {
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
            {/* Use anchor tags with target="_blank" */}
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">Visit Website</button>
            </a>
            <a href={githubRepo} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
