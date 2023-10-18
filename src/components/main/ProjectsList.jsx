import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectButton from "../reusable/ProjectButton";
import Slideshow from "../reusable/Slideshow";


const ProjectsList = () => {
    const {
        projects
    } = useContext(ProjectsContext);

    return (
        projects.map((project) => (
            <ProjectButton title={project.title} description={project.description} techs={project.techs} id={project.id}> </ProjectButton>
        ))
    );
};

export default ProjectsList;