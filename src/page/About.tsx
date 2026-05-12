import SkilLCard from "../components/SkilLCard";

import type { SkillType } from "../types/skillType";

import _skillData from "../assets/data/skill.json";

const About = () => {
    const skillData = _skillData as SkillType[];

    console.log(skillData.map);

    return (
        <article className="about-page">
            <section id="skills">
                <div className="skill-section">
                    <div className="skill-section--header">
                        <h1> technical skill</h1>
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
