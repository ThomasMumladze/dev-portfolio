import { IoSearchOutline } from "react-icons/io5";

import _project from "../assets/data/project.json";

import Card from "../components/Card";

const type = ["back-end", "front-end", "full-stack", "console app", "game"];
const tech = ["java", "MsSql", "css", "scss", "React.js", "javascript", "TypeScript", ".Net Core", "C#", "Unity"];

const Project = () => {
    return (
        <article className="project-page">
            <div className="page__filter">
                <div className="page__filter--search">
                    <IoSearchOutline />
                    <input type="text" placeholder="Search projects..." />
                </div>
                <div className="page__filter--type">
                    <h4>type</h4>
                    {type && type.map((item, _) => <span key={_}>{item}</span>)}
                </div>
                <div className="page__filter--tech">
                    <h4>tech</h4>
                    {tech && tech.map((item, _) => <span key={_}>{item}</span>)}
                </div>
            </div>
            <p>{_project.length} project founded</p>
            <div className="product__list">{_project && _project.map((item) => <Card key={item.id} data={item} />)}</div>
        </article>
    );
};

export default Project;
