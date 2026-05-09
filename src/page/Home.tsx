// ==========  react router ========== //
import { Link } from "react-router";

// ==========  component ========== //
import Card from "../components/Card";

// ==========  project data json ========== //
import _projectData from "../assets/data/project.json";

// ==========  type for project data ==========  //
import type { Project } from "../types/projectType";

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

                {/* ========== mapping list of project ==========  // */}
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
