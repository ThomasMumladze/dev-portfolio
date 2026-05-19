// ========== project data json ========== //
import _project from "../assets/data/project.json";

// ========== project interface ==========//
import type { ProjectType } from "../types/projectType";

// ========== component ========== //
import Card from "../components/Card";
import Input from "../components/Input";
import H3 from "../components/H3";

// ========== react ========== //
import { useState } from "react";

// ========== filter options ========== //
const type = ["all", "back-end", "front-end", "full-stack", "console app", "game"];
const tech = ["all", "java", "react", "javascript", ".net core", "C#", "unity"];
const status = ["all status", "stopped", "in development", "completed"];

const Project = () => {
    const projectData = _project as unknown as ProjectType[];

    const [selectedType, setSelectedType] = useState("all");
    const [selectedTech, setSelectedTech] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all status");
    const [searchedProject, setSearchedProject] = useState("");

    // ========== filter projects ========== //
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
            <section id="route-pathname">
                <div className="route-pathname">
                    home {">"} <H3 title={location.pathname} />
                </div>
            </section>
            <section>
                <div className="page__filter">
                    <div className="page__filter--search">
                        <Input label="" placeholder="search project" type="text" onChange={setSearchedProject} />
                        <select name="status-options" onChange={(e) => setSelectedStatus(e.target.value)}>
                            {status && status.map((item, _) => <option key={_}>{item}</option>)}
                        </select>
                    </div>
                    <div className="page__filter--type">
                        <H3 title="type" />
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
                        <H3 title="tech" />
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
            </section>
            <section>
                <p>{filteredProject.length} project founded</p>
                <div className="product__list">
                    {filteredProject.map((item: ProjectType) => (
                        <Card key={item.id} data={item} />
                    ))}
                    {filteredProject.length < 1 ? <h1>project not found</h1> : ""}
                </div>
            </section>
        </article>
    );
};

export default Project;
