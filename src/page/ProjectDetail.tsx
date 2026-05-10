import React from "react";
import { Link, useLocation, useNavigate } from "react-router";

const ProjectDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.data;

    if (!project) {
        navigate("/project");
        return null;
    }

    const statusSlug = project.status?.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="pd-page">
            <div className="pd-wrap">
                <Link to="/project" className="pd-back">
                    <span className="pd-back__arrow">›</span>
                    back to projects
                </Link>

                <div className="pd-hero">
                    <div className="pd-hero__left">
                        <span className="pd-badge">{project.language}</span>
                        <h1 className="pd-name" data-text={project.applicationName}>
                            {project.applicationName}
                        </h1>
                        <div className="pd-meta">
                            <span className="pd-meta__type">#{project.type}</span>
                            <span className={`pd-meta__status pd-meta__status--${statusSlug}`}>#{project.status}</span>
                        </div>
                    </div>

                    {project.methods && project.methods.length > 0 && (
                        <div className="pd-methods">
                            {project.methods.map((method: string) => (
                                <span key={method} className={`pd-method pd-method--${method.toLowerCase()}`}>
                                    {method}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pd-divider" />

                <div className="pd-tech">
                    {project.technologies?.map((tech: string, i: number) => (
                        <React.Fragment key={tech}>
                            <span className="pd-tech__item">{tech}</span>
                            {i < project.technologies.length - 1 && <span className="pd-tech__sep">·</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="pd-grid">
                    <div className="pd-cell pd-cell--full">
                        <p className="pd-label">// description</p>
                        <p className="pd-desc">{project.description}</p>
                    </div>

                    <div className="pd-cell">
                        <p className="pd-label">// links</p>
                        <div className="pd-links">
                            {project.urls?.gitHub && (
                                <a href={project.urls.gitHub} target="_blank" rel="noreferrer" className="pd-link-btn">
                                    GitHub
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            )}
                            {project.urls?.live && (
                                <a href={project.urls.live} target="_blank" rel="noreferrer" className="pd-link-btn">
                                    Live
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            )}
                            {project.urls?.azure && (
                                <a href={project.urls.azure} target="_blank" rel="noreferrer" className="pd-link-btn">
                                    Azure ↗
                                </a>
                            )}
                            {!project.urls?.gitHub && !project.urls?.live && !project.urls?.azure && (
                                <span className="pd-no-links">no links available</span>
                            )}
                        </div>
                    </div>

                    <div className="pd-cell">
                        <p className="pd-label">// info</p>
                        <div className="pd-info">
                            <div className="pd-info__row">
                                <span className="pd-info__key">type</span>
                                <span className="pd-info__val">{project.type}</span>
                            </div>
                            <div className="pd-info__row">
                                <span className="pd-info__key">language</span>
                                <span className="pd-info__val">{project.language}</span>
                            </div>
                            <div className="pd-info__row">
                                <span className="pd-info__key">status</span>
                                <span className={`pd-info__val pd-meta__status--${statusSlug}`}>{project.status}</span>
                            </div>
                            <div className="pd-info__row">
                                <span className="pd-info__key">id</span>
                                <span className="pd-info__val pd-info__val--muted">#{project.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
