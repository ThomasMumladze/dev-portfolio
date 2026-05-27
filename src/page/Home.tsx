import { useEffect, useRef, useState } from "react";

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
import { GetProjects } from "../assets/api/LiveApi";
import GitHubRepo from "../components/GitHubRepo";

const Home = () => {
    const [projectData, setProjectData] = useState<ProjectType[]>([]);

    const slideRef = useRef(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const ITEMS_PER_PAGE = 11;
    const totalPages = Math.ceil(Object.keys(icons).length / ITEMS_PER_PAGE);

    useEffect(() => {
        GetProjects().then((res) => {
            setProjectData(res);
        });

        const interval = setInterval(() => {
            slideRef.current = (slideRef.current + 1) % totalPages;

            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${slideRef.current * 100}%)`;
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [slideRef.current, totalPages]);

    return (
        <article className="home-page">
            <section>
                <GitHubRepo />
            </section>
            <section id="skill-slider">
                <div className="icon-slider-wrapper">
                    <div
                        className="icon-slider"
                        ref={sliderRef}
                        style={{ transform: `translateX(-${slideRef.current * 100}%)` }}
                    >
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
                        .filter(
                            (x: ProjectType) =>
                                x.applicationType === "front-end" &&
                                (x.status === "in development" || x.status === "completed"),
                        )
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
                        .filter(
                            (x: ProjectType) =>
                                x.applicationType === "back-end" &&
                                (x.status === "in development" || x.status === "completed"),
                        )
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
