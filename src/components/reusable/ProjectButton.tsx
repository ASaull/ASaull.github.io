import SingleProject from "../main/SingleProject";
import React, { useState } from "react";
import { useRef } from "react";

type ProjectButtonProps = {
    title: string;
    description: string;
    techs: string[];
    id: string;
}

function ProjectButton({ title, description, techs, id}: ProjectButtonProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    const toggle = () => {
        setOpen(!open);
    };
    const [open, setOpen] = useState(false);

    if (contentRef.current) {
        console.log(contentRef.current.scrollHeight);
    } else {
        console.log("no content ref")
    }

    return (
        <div className={"project-div"} style={open ? { backgroundColor: "rgba(255, 255, 255, 0.5)", boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.4)" } : {}}>
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
                    <button className="project-button" onClick={toggle} type="button" style={open ? {opacity: "100%", boxShadow: "0px 0px 0px #00000020, -0px -0px 0px #ffffff76, inset 5px 5px 10px #00000020, inset -5px -5px 10px #ffffff76"} : {}}>
                        <span className="material-symbols-outlined size-48" style={open ? {transform: "rotate(180deg)"} : {transform: "rotate(0)"} }>arrow_downward</span>
                    </button>
                </div>
            </div>
            <div className="row content-parent" ref={contentRef} style={open ? { height: contentRef.current ? contentRef.current.scrollHeight + "px" : 0 } : { height: "0px"}}>
                <SingleProject id={id}/>
            </div>
        </div>
    );
}

export default ProjectButton;