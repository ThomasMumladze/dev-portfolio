// ==========  react router ========== //
import { Link } from "react-router";

//==========  react icon ========== //
import { FaGithub } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

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

                <div className="card-tagline">#{data.type}</div>

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
                        {data.technologies.map((tech, _) => (
                            <span key={_} className="tech-tag">
                                {tech}
                                {_ < data.technologies.length - 1 && <span className="tech-separator"> · </span>}
                            </span>
                        ))}
                    </p>
                </div>

                <blockquote>
                    <div className="bottom-brand">{data.applicationName} </div>
                    <div className="bottom-tagline">{data.description}</div>

                    <div className="btn-row">
                        {(data.urls.live?.length ?? 0) > 1 ? (
                            <Link to={data.urls.live ?? ""} className="btn" target="_blank">
                                <span>Live</span>
                                <span className="btn-icon">⟺</span>
                            </Link>
                        ) : null}

                        {(data.urls.gitHub?.length ?? 0) > 1 ? (
                            <Link to={data.urls.gitHub ?? ""} className="btn" target="_blank">
                                <span>GitHub</span>
                                <span className="btn-icon">
                                    <FaGithub />
                                </span>
                            </Link>
                        ) : null}
                        {(data.urls.azure?.length ?? 0) > 1 ? (
                            <Link to={data.urls.gitHub ?? ""} className="btn" target="_blank">
                                <span>Azure</span>
                                <span className="btn-icon">
                                    <VscAzure />
                                </span>
                            </Link>
                        ) : null}
                    </div>
                </blockquote>
            </div>
        </div>
    );
};

export default Card;
