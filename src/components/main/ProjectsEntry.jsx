import image from '../images/me.jpg'
import git from '../images/github-mark-white.svg'
import { ProjectsProvider } from '../../context/ProjectsContext'
import ProjectsList from '../main/ProjectsList'

import '../../main.css'

const ProjectsEntry = () => {
    return (
        <div className='main'>
            <div className = "container">
                <div className = "row">
                    <div className = "column left">
                        <div className = "aboutme">
                            <img src={image} alt="A Picture of Aidan" className='image'/>
                        </div>
                        <h1 className='title'> Aidan Saull </h1>
                        <h2 className='subtitle'> Selected Projects </h2>
                        <p className='blurb'> Some stuff I've done over the last few years that I think is interesting/relevant to whomever has received this link.</p>
                        <h3 className='year'>2019-2024</h3>
                        <h2 className='subtitle'>Version: 1.1 — "Neumorphic"</h2>
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