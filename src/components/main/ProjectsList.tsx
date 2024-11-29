import ProjectButton from "../reusable/ProjectButton";
import { projectsData } from "../../data/projects"


const ProjectsList = () => {
    return (
        <div>
            {projectsData.map((project) => (
                <ProjectButton title={project.title} description={project.description} techs={project.techs} id={project.id} />
            ))}
        </div>
    );
};

export default ProjectsList;