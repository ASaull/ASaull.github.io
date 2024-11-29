import { projectsData as projects } from "../../data/projects"
import Slideshow from "../reusable/Slideshow"

function getProject(id: string) {
    let project = projects.find(project => project.id === id);
    return project;
}

type SingleProjectProps = {
    id: string;
};

const SingleProject = ({id}: SingleProjectProps) => {
    const project = getProject(id);

    if (project) {
        return (
            <div className="project-content">
                <Slideshow images={project.images}/>
                <h2>What I Did</h2>
                {project.detailed_description.split('\n').map((p) =>(
                    <p>{p}</p>
                ))}
                <h2>What Challenged Me</h2>
                {project.challenges.split('\n').map((p) =>(
                    <p>{p}</p>
                ))}
                <h2>What I Learned</h2>
                {project.insights.split('\n').map((p) =>(
                    <p>{p}</p>
                ))}
                <h2>The Future?</h2>
                {project.future.split('\n').map((p) =>(
                    <p>{p}</p>
                ))}
            </div>
        )
    } else {
        return (
            <div/>
        )
    }
}

export default SingleProject;