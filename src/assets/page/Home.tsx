import Card from "../../components/Card";

import _projectData from "../data/project.json";

import type { Project } from "../../types/projectType";
import { Link } from "react-router";

const Home = () => {
    const projectData = _projectData as unknown as Project[];

    return (
        <article className="home-page">
            <section id="project">
                <div className="section-header">
                    <h1>
                        <span>#</span>Projects
                    </h1>
                    <Link to="/">view all</Link>
                </div>

                <div className="project-list">
                    {projectData.slice(0, 4).map((item: Project) => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>
            </section>
        </article>
    );
};

export default Home;
