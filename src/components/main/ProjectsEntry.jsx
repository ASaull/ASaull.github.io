import image from '../images/me.jpg'
import git from '../images/github-mark.svg'
import { ProjectsProvider } from '../../context/ProjectsContext'
import ProjectsList from '../main/ProjectsList'

import '../../main.css'

const ProjectsEntry = () => {
    return (
        <div className='main'>
            <div className = "container">
                <div className = "row">
                    <div className = "column left">
                        <img src={image} className='image'/>
                        <h1 className='title'> Aidan Saull </h1>
                        <h2 className='subtitle'> Selected Projects </h2>
                        <p className='blurb'> Some stuff I've done over the last few years that I think is interesting/relevant to whomever has received this link.</p>
                        <h3 className='year'>2019-2023</h3>
                        <h2 className='subtitle'>Version: 1.0</h2>
                        <a href="https://github.com/ASaull">
                            <img src={git} className="githubIcon" />
                        </a>
                    </div>
                    <div className = "column right">
                        <div className='blankspace'/>
                        <ProjectsProvider>
                            <ProjectsList/>
                        </ProjectsProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsEntry;