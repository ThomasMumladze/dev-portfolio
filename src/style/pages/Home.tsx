import Card from "../../components/Card";

import _projectData from "../../assets/data/project.json";

import type { Project } from "../../types/projectType";

const Home = () => {
    const projectData = _projectData as unknown as Project[];
    return (
        <article className="home-page">
            <section id="project">
                {projectData.map((item: Project) => (
                    <Card key={item.id} data={item} />
                ))}
            </section>
        </article>
    );
};

export default Home;
