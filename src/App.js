import './main.css'

import ProjectsEntry from './components/main/ProjectsEntry';
import SingleProject from './components/main/SingleProject';

import { BrowserRouter as Router, Routes, 
    Route, Redirect,} from "react-router-dom";

function App() {
    return (
        <div className="main">
            <ProjectsEntry />
        </div>
    );
}

export default App;
