import SkilLCard from "../components/SkilLCard";

import _skillData from "../assets/data/skill.json";
import type { SkillType } from "../types/skillType";

const About = () => {
    const skillData = _skillData as unknown as SkillType[];

    return (
        <article className="about-page">
            <section id="skills">
                <div className="skill-section">
                    <div className="skill-section--header">
                        <h1>
                            <span>#</span>Skill
                        </h1>
                    </div>

                    <div className="skill-section--content">
                        {skillData.map((item, _) => (
                            <SkilLCard key={_} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
};

export default About;
