// ==========  react router ========== //
import { Link } from "react-router";

// ==========  project interface ========== //
import type { ProjectType } from "../types/projectType";

interface Props {
    data: ProjectType;
}

const Card = (props: Props) => {
    const { data } = props;

    return (
        <div className="card-wrapper">
            <div className="top-card">
                <div className="card-label">{data.language}</div>

                <div className="card-name">{data.applicationName}</div>

                <div className="card-tagline">
                    <span>#{data.type}</span>
                    <span
                        className={`${data.status == "stopped" ? "inactive" : data.status === "in development" ? "active" : "finished"}`}
                    >
                        #{data.status}
                    </span>
                </div>

                <div className="features">
                    {data.methods &&
                        data.methods.map((label, _) => (
                            <div key={_} className="feature-pill">
                                <span>{label}</span>
                            </div>
                        ))}
                </div>
            </div>

            <div className="bottom-card">
                <div className="tech-stack">
                    <p>
                        {data.technologies.slice(0, 2).map((tech, _) => (
                            <span key={_} className="tech-tag">
                                {tech}
                                {_ < data.technologies.length - 1 && <span className="tech-separator"> · </span>}
                            </span>
                        ))}
                    </p>
                </div>

                <blockquote>
                    <div className="bottom-description">{data.description}</div>
                    <div className="btn-row">
                        <Link to={"/project-details"} state={{ data }} className="btn">
                            <span>view details</span>
                            <span className="btn-icon">⟺</span>
                        </Link>
                    </div>
                </blockquote>
            </div>
        </div>
    );
};

export default Card;
