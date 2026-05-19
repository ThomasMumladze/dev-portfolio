import profile_picture from "../assets/profile_picture.jpg";
import cv_pdf from "../assets/data/cv.pdf";
import { GoDownload } from "react-icons/go";

// ========== component ========== //
import SkilLCard from "../components/SkilLCard";

// ========== skill interface ========== //
import type { SkillType } from "../types/skillType";

// ========== skill data json ========== //
import _skillData from "../assets/data/skill.json";

// ========== component ========== //
import H1 from "../components/H1";
import H3 from "../components/H3";

const About = () => {
    const skillData = _skillData as SkillType[];

    return (
        <article className="about-page">
            <section id="route-pathname">
                <div className="route-pathname">
                    home {">"} <H3 title={location.pathname} />
                </div>
            </section>
            <section id="about-me">
                <div className="about-section">
                    <div className="about-section--content">
                        <div>
                            <H3 title="full stack developer" />
                            <p>
                                Turning ideas into interactive and reliable web experiences. I focus on building full stack
                                applications that combine clean design, efficient backend logic, and smooth user interaction.
                                From responsive frontend interfaces to scalable server architecture.
                                <br /> I work with modern technologies such as <span>React</span>,<span>TypeScript</span>,
                                <span>Net Core</span>, and <span>databases</span> to create applications that are fast,
                                functional, and built with attention to detail. Constant learning, problem solving.
                            </p>
                        </div>
                        <div className="profile-details">
                            <div className="profile-picture">
                                <img src={profile_picture} alt="" />
                            </div>
                            <H3 title="thomas mumladze" />
                            <a className="btn-primary" href={cv_pdf} download>
                                resume <GoDownload />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

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
        </article>
    );
};

export default About;
