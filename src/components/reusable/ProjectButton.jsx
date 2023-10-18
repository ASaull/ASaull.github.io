import SingleProject from "../main/SingleProject";
import React, { useState } from "react";
import { useRef } from "react";
import Slideshow from "./Slideshow";

function ProjectButton({ title, description, techs, id}) {
    const contentRef = useRef();

    const toggle = () => {
        setOpen(!open);
    };
    const [open, setOpen] = useState(false);

    if (contentRef.current) console.log(contentRef.current.scrollHeight);

    return <div className="project-div" style={open ? { backgroundColor: "#f1e6e4", filter: "drop-shadow(15px 15px 0px black)" } : {}}>
            <div className="row">
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" />
            <div className="column">
                <h1>{title}</h1>
                <p>{description}</p>
                <ul>
                    {techs.map((tech) => (
                        <li>{tech}</li>
                    ))}
                </ul>
            </div>
            <div className="column button-column">
                <button className="project-button" onClick={toggle} type="button" style={open ? {opacity: "100%"} : {}}>
                    <span className="material-symbols-outlined size-48" style={open ? {transform: "rotate(180deg)"} : {transform: "rotate(0)"} }>arrow_downward</span>
                </button>
            </div>
        </div>
        <div className="row content-parent" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px"}}>
            <SingleProject id={id}/>
        </div>
    </div>;
}

export default ProjectButton;