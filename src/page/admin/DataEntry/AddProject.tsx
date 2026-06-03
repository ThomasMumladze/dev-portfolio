// ========== React ========== //
import { useState } from "react";
// ========== Constants ========== //
import H3 from "../../../components/H3";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

// const TECH_INPUT = ["GET", "POST", "PUT", "DELETE"];

const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"];

const AddProject = () => {
    const [selectedMethods, setSelectedMethods] = useState<string[]>([]);

    const [projectUrls, setProjectUrls] = useState({
        urls: {
            gitHub: "",
            azure: "",
            live: "",
        },
    });

    // const [technologies, setTechnologies] = useState([]);
    console.log(selectedMethods);
    return (
        <div className="add-project--Project">
            <H3 title="add project" />
            <hr />
            <div className="add-project--field">
                <Input label="project nama" value={""} onChangeFunc={() => {}} placeholder="project nama" type="text" />
            </div>
            <div className="input-wrapper">
                <div className="add-project--field">
                    <Input label="project type" value={""} onChangeFunc={() => {}} placeholder="project type" type="text" />
                </div>
                <div className="add-project--field">
                    <Input label="language" value={""} onChangeFunc={() => {}} placeholder="language" type="text" />
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
                            value={""}
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
                            value={""}
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
                            value={""}
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
                        <Input value={""} label="add status" onChangeFunc={() => {}} placeholder="add status" type="text" />
                    </div>
                    <div className="add-project--field">
                        <Input
                            label="select technologies"
                            value={""}
                            onChangeFunc={() => {}}
                            placeholder="select technologies"
                            type="text"
                        />
                    </div>

                    <div className="add-project--field">
                        {/* <Input label="select methods" onChangeFunc={() => {}} placeholder="select methods" type="text" /> */}

                        <label>select methods</label>
                        <div className="http-methods">
                            {HTTP_METHODS.map((skill) => (
                                <label key={skill}>
                                    <div className="--skill">
                                        <input
                                            type="checkbox"
                                            value={skill}
                                            checked={selectedMethods.includes(skill)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedMethods([...selectedMethods, skill]);
                                                } else {
                                                    setSelectedMethods(selectedMethods.filter((s) => s !== skill));
                                                }
                                            }}
                                        />
                                        {skill}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </figcaption>
            </div>
        </div>
    );
};

export default AddProject;
