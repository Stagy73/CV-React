import { data } from '../assets/data.js';

function Project() {
  const projects = data.filter(item => item.hasOwnProperty('project') && item.project);

  return (
    <div>
      <h1 className="projectData">Projets</h1>
      <div className="Nuages Nuages-text">
        <ul className="projectDataUl">
          {projects.map(({ project }) => (
            <li className="linuage" key={project}>
              {project}
            </li>
          ))}
          {projects.length === 0 && (
            <li className="linuage">No projects found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Project;
