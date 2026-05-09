import { FaGithub } from "react-icons/fa";

const FEATURES = [{ label: "post" }, { label: "GET" }, { label: "PUT" }, { label: "DELETE" }];

const TECH_STACK = ["java", "msSQL"];

const Card = () => {
    return (
        <div className="card-wrapper">
            <div className="top-card">
                <div className="brand-badge">java.api</div>

                <div className="brand-name">techstore</div>

                <div className="brand-tagline">#back-end</div>

                <div className="features">
                    {FEATURES.map(({ label }) => (
                        <div key={label} className="feature-pill">
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bottom-card">
                <div className="tech-stack">
                    {TECH_STACK.map((tech, i) => (
                        <span key={tech} className="tech-tag">
                            {tech}
                            {i < TECH_STACK.length - 1 && <span className="tech-separator">·</span>}
                        </span>
                    ))}
                </div>

                <blockquote>
                    <div className="bottom-brand">TechStore</div>
                    <div className="bottom-tagline">java web api for techstore website</div>

                    <div className="btn-row">
                        <button className="btn">
                            <span>Live</span>
                            <span className="btn-icon">⟺</span>
                        </button>
                        <button className="btn ">
                            <span>GitHub</span>
                            <span className="btn-icon">
                                <FaGithub />
                            </span>
                        </button>
                    </div>
                </blockquote>
            </div>
        </div>
    );
};

export default Card;
