// ========== React ========== //
import { useState } from "react";
// ========== Constants ========== //
import H3 from "../../../components/H3";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

// const TECH_INPUT = ["GET", "POST", "PUT", "DELETE"];
const AddProject = () => {
    const [projectUrls, setProjectUrls] = useState({
        urls: {
            gitHub: "",
            azure: "",
            live: "",
        },
    });

    // const [technologies, setTechnologies] = useState([]);

    return (
        <div className="add-project--Project">
            <H3 title="add project" />
            <hr />
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

            <hr />

            <div className="add-project--field">
                <TextArea label="description" placeholder="description" textAreValue="" textAreaRow={8} />
            </div>

            <hr />

            <div className="input-wrapper">
                <figcaption>
                    <div className="add-project--field">
                        <Input
                            label="GitHub URL"
                            onChangeFunc={(e) =>
                                setProjectUrls((prev) => ({
                                    ...prev,
                                    urls: {
                                        ...prev.urls,
                                        gitHub: e.target.value,
                                    },
                                }))
                            }
                            placeholder="GitHub Url"
                            type="text"
                        />
                    </div>
                    <div className="add-project--field">
                        <Input
                            label="Azure URL"
                            onChangeFunc={(e) =>
                                setProjectUrls((prev) => ({
                                    ...prev,
                                    urls: {
                                        ...prev.urls,
                                        azure: e.target.value,
                                    },
                                }))
                            }
                            placeholder="azure Url"
                            type="text"
                        />
                    </div>
                    <div className="add-project--field">
                        <Input
                            label="live URL"
                            onChangeFunc={(e) =>
                                setProjectUrls((prev) => ({
                                    ...prev,
                                    urls: {
                                        ...prev.urls,
                                        live: e.target.value,
                                    },
                                }))
                            }
                            placeholder="live Url"
                            type="text"
                        />
                    </div>
                </figcaption>

                <figcaption>
                    <div className="add-project--field">
                        <Input label="add status" onChangeFunc={() => {}} placeholder="add status" type="text" />
                    </div>
                    <div className="add-project--field">
                        <Input
                            label="select technologies"
                            onChangeFunc={() => {}}
                            placeholder="select technologies"
                            type="text"
                        />
                    </div>

                    <div className="add-project--field">
                        <Input label="select methods" onChangeFunc={() => {}} placeholder="select methods" type="text" />
                    </div>
                </figcaption>
            </div>
        </div>
    );
};

export default AddProject;
