import { projectsData as projects } from "../../data/projects"
import Slideshow from "../reusable/Slideshow.jsx"

function getProject(id) {
    let project = projects.find(project => project.id === id);
    return project;
}

// export async function loader({ params }) {
//     const project = getProject(params.projectID);
//     return { project };
// }

const SingleProject = ({id}) => {
    const project = getProject(id);

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
}

export default SingleProject;