import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

export const ProjectsContext = createContext();

// This class isnt really necessary but if I scale the project up then this is better
export const ProjectsProvider = (props) => {
    const [projects] = useState(projectsData);

    return <ProjectsContext.Provider value={{projects}}>
        {props.children}
    </ProjectsContext.Provider>
}