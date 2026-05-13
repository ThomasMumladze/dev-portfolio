// ==========  react router ========== //
import { Link } from "react-router";

// ==========  component ========== //
import Card from "../components/Card";

// ==========  project data json ========== //
import _projectData from "../assets/data/project.json";

// ==========  type for project data ==========  //
import type { ProjectType } from "../types/projectType";
import H1 from "../components/H1";

const Home = () => {
    const projectData = _projectData as unknown as ProjectType[];
    console.log(projectData.find((x) => x.type == "front-end"));

    return (
        <article className="home-page">
            <section id="front-end">
                <div className="section-header">
                    <H1 title="front-end" />
                    <Link to="/project">view all</Link>
                </div>

                {/* ========== mapping list of project ==========  // */}
                <div className="project-list">
                    {projectData
                        .filter((x: ProjectType) => x.type === "front-end")
                        .slice(0, 4)
                        .map((item: ProjectType) => (
                            <Card key={item.id} data={item} />
                        ))}
                </div>
            </section>

            <section id="back-end">
                <div className="section-header">
                    <H1 title="back-end" />
                    <Link to="/project">view all</Link>
                </div>

                {/* ========== mapping list of project ==========  // */}
                <div className="project-list">
                    {projectData
                        .filter((x: ProjectType) => x.type === "back-end")
                        .slice(0, 4)
                        .map((item: ProjectType) => (
                            <Card key={item.id} data={item} />
                        ))}
                </div>
            </section>
        </article>
    );
};

export default Home;
