import { useEffect, useState } from "react";

// ==========  react router ========== //
import { Link } from "react-router";

// ==========  component ========== //
import Card from "../components/Card";
import H3 from "../components/H3";

// ==========  project data json ========== //
import _projectData from "../assets/data/project.json";

// ==========  type for project data ==========  //
import type { ProjectType } from "../types/projectType";

// ==========  icons ========== //
import { front_end_icon, back_end_icon, tool_icon } from "../assets/icon";
const icons = { ...front_end_icon, ...back_end_icon, ...tool_icon };

// ==========  helper ========== //
import { randomColor } from "../helper/randomColor";

// ==========  Api ========== //
import { GetProjects } from "../assets/api/live/LiveApi";

const Home = () => {
    // const projectData = TestApi().then((res) => res) as unknown as ProjectType[];
    const [projectData, setProjectData] = useState<ProjectType[]>([]);

    const [nextSlide, setNextSlide] = useState(0);
    const ITEMS_PER_PAGE = 11;
    const totalPages = Math.ceil(Object.keys(icons).length / ITEMS_PER_PAGE);

    const handleNextSlide = () => {
        setNextSlide((prev) => (prev + 1) % totalPages);
    };

    useEffect(() => {
        GetProjects().then((res) => {
            setProjectData(res);
        });

        const interval = setInterval(handleNextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <article className="home-page">
            <section id="skill-slider">
                <div className="icon-slider-wrapper">
                    <div className="icon-slider" style={{ transform: `translateX(-${nextSlide * 100}%)` }}>
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div key={pageIndex} className="icon-page">
                                {Object.entries(icons)
                                    .slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)
                                    .map(([_, Icon], index) => (
                                        <div key={index}>
                                            <Icon style={{ color: randomColor() }} />
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="front-end">
                <div className="section-header">
                    <H3 title="front-end" />
                    <Link to="/project">view all</Link>
                </div>

                {/* ========== mapping list of project ==========  // */}
                <div className="project-list">
                    {projectData
                        .filter((x: ProjectType) => x.applicationType === "front-end")
                        .slice(0, 4)
                        .map((item: ProjectType) => (
                            <Card key={item.projectId} data={item} />
                        ))}
                </div>
            </section>

            <section id="back-end">
                <div className="section-header">
                    <H3 title="back-end" />
                    <Link to="/project">view all</Link>
                </div>

                {/* ========== mapping list of project ==========  // */}
                <div className="project-list">
                    {projectData
                        .filter((x: ProjectType) => x.applicationType === "back-end")
                        .slice(0, 4)
                        .map((item: ProjectType) => (
                            <Card key={item.projectId} data={item} />
                        ))}
                </div>
            </section>

            <section id="games">
                <div className="section-header">
                    <H3 title="games" />
                    <Link to="/project">view all</Link>
                </div>

                {/* ========== mapping list of project ==========  // */}
                <div className="project-list">
                    {projectData
                        .filter((x: ProjectType) => x.applicationType === "game")
                        .slice(0, 4)
                        .map((item: ProjectType) => (
                            <Card key={item.projectId} data={item} />
                        ))}
                </div>
            </section>
        </article>
    );
};

export default Home;
