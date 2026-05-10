import { IoSearchOutline } from "react-icons/io5";

import _project from "../assets/data/project.json";
import type { ProjectType } from "../types/projectType";

import Card from "../components/Card";
import { useState } from "react";

const type = ["all", "back-end", "front-end", "full-stack", "console app", "game"];
const tech = ["all", "java", "react", "javascript", ".net core", "C#", "unity"];
const status = ["all status", "stopped", "in development", "completed"];

const Project = () => {
    const projectData = _project as unknown as ProjectType[];

    const [selectedType, setSelectedType] = useState("all");
    const [selectedTech, setSelectedTech] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all status");
    const [searchedProject, setSearchedProject] = useState("");

    const filteredProject = projectData.filter((project) => {
        const matchType = selectedType === "all" || project.type === selectedType;
        const matchTech = selectedTech === "all" || project.technologies.includes(selectedTech);
        const matchStatus = selectedStatus === "all status" || project.status.includes(selectedStatus);
        const matchSearch =
            searchedProject === "" || project.applicationName.toLowerCase().includes(searchedProject.toLocaleLowerCase());

        return matchType && matchTech && matchSearch && matchStatus;
    });

    return (
        <article className="project-page">
            <div className="page__filter">
                <div className="page__filter--search">
                    <IoSearchOutline />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        onChange={(e) => setSearchedProject(e.target.value)}
                    />
                    <select onChange={(e) => setSelectedStatus(e.target.value)}>
                        {status && status.map((item, _) => <option key={_}>{item}</option>)}
                    </select>
                </div>
                <div className="page__filter--type">
                    <h4>type</h4>
                    {type &&
                        type.map((item, _) => (
                            <span
                                className={`${selectedType == item ? "active-filter" : ""}`}
                                onClick={() => setSelectedType(item)}
                                key={_}
                            >
                                {item}
                            </span>
                        ))}
                </div>
                <div className="page__filter--tech">
                    <h4>tech</h4>
                    {tech &&
                        tech.map((item, _) => (
                            <span
                                className={`${selectedTech == item ? "active-filter" : ""}`}
                                onClick={() => setSelectedTech(item)}
                                key={_}
                            >
                                {item}
                            </span>
                        ))}
                </div>
            </div>
            <p>{filteredProject.length} project founded</p>
            <div className="product__list">
                {filteredProject.map((item: ProjectType) => (
                    <Card key={item.id} data={item} />
                ))}
                {filteredProject.length < 1 ? <h1>project not found</h1> : ""}
            </div>
        </article>
    );
};

export default Project;
