import axios from "axios";
import { useEffect, useState } from "react";

const TECH_INPUT = ["GET", "POST", "PUT", "DELETE"];
const AddProject = () => {
    const [projectUrls, setProjectUrls] = useState({
        urls: {
            gitHub: "",
            azure: "",
            live: "",
        },
    });

    const [technologies, setTechnologies] = useState([]);

    return (
        <div className="add-project--Project">
            <div className="add-project--field">
                <label>Project Name</label>
                <input type="text" placeholder="project nama" />
            </div>

            <div className="input-wrapper">
                <div className="add-project--field">
                    <label>Project type</label>
                    <input type="text" placeholder="project type" />
                </div>
                <div className="add-project--field">
                    <label>language</label>
                    <input type="text" placeholder="language" />
                </div>
            </div>

            <div className="add-project--field">
                <label>description</label>
                <textarea rows={8} placeholder="description"></textarea>
            </div>

            <div className="input-wrapper">
                <figcaption>
                    <div className="add-project--field">
                        <label>GitHub URL</label>
                        <input
                            placeholder="GitHub URL"
                            value={projectUrls.urls.gitHub}
                            onChange={(e) =>
                                setProjectUrls((prev) => ({
                                    ...prev,
                                    urls: {
                                        ...prev.urls,
                                        gitHub: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                    <div className="add-project--field">
                        <label>Azure UR</label>
                        <input
                            placeholder="Azure URL"
                            value={projectUrls.urls.azure}
                            onChange={(e) =>
                                setProjectUrls((prev) => ({
                                    ...prev,
                                    urls: {
                                        ...prev.urls,
                                        azure: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                    <div className="add-project--field">
                        <label>Live URL</label>
                        <input
                            placeholder="Live URL"
                            value={projectUrls.urls.live}
                            onChange={(e) =>
                                setProjectUrls((prev) => ({
                                    ...prev,
                                    urls: {
                                        ...prev.urls,
                                        live: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                </figcaption>

                <figcaption>
                    <div className="add-project--field">
                        <label>add status</label>
                        <input placeholder="completed / in development/ stopped" type="text" />
                    </div>
                    <div className="add-project--field">
                        <label>select technologies</label>
                        <input placeholder="react , c# , java ..." type="text" />
                    </div>

                    <div className="add-project--field">
                        <label>select methods</label>
                        <input placeholder="GET , POST , PUT ..." type="text" />
                    </div>
                </figcaption>
            </div>
        </div>
    );
};

export default AddProject;
