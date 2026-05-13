// ========== component ========== //
import SkilLCard from "../components/SkilLCard";

// ========== skill interface ========== //
import type { SkillType } from "../types/skillType";

// ========== skill data json ========== //
import _skillData from "../assets/data/skill.json";

// ========== component ========== //
import H1 from "../components/H1";

const About = () => {
    const skillData = _skillData as SkillType[];

    return (
        <article className="about-page">
            <section id="skills">
                <div className="skill-section">
                    <div className="skill-section--header">
                        <H1 title="technical skill" />
                    </div>

                    {/* // ========== mapping skills data ========== // */}
                    <div className="skill-section--content">
                        {skillData.map((item, _) => (
                            <SkilLCard key={_} data={item} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="contact-section">
                    <div className="contact-section--header">
                        <H1 title="contact" />
                    </div>
                    <div className="contact-section--content"></div>
                </div>
            </section>
        </article>
    );
};

export default About;
