// ========== React ========== //
import { useEffect, useState } from "react";
import { Link } from "react-router";

// ========== Component ========== //
import Button from "../../components/Button";
import H3 from "../../components/H3";
import Input from "../../components/Input";

// ========== asset ========== //
import { GetProjects } from "../../assets/api/LiveApi";

const AdminProjects = () => {
    const [selectedProject, setSelectedProject] = useState<number | boolean>(false);
    const [projectData, setProjectData] = useState<any>([]);

    useEffect(() => {
        GetProjects().then((res) => setProjectData(res));
    }, []);

    return (
        <article className="admin-projects">
            <div className="project-list">
                <div className="project-list--filter">
                    <H3 title="Filter" />
                    <div className="filter-options">
                        <select>
                            <option value="">project status</option>
                            <option value="">in development</option>
                            <option value="">completed</option>
                            <option value="">stopped</option>
                        </select>

                        <select>
                            <option value="">category</option>
                            <option value="">front-end</option>
                            <option value="">back-end</option>
                            <option value="">full-stack</option>
                            <option value="">console app</option>
                            <option value="">game</option>
                        </select>

                        <select>
                            <option value="">technologies</option>
                            <option value="">Java</option>
                            <option value="">spring boot</option>
                            <option value="">c sharp</option>
                            <option value="">.Net Core</option>
                            <option value="">React</option>
                            <option value="">java script</option>
                        </select>

                        <select>
                            <option value="">activity status</option>
                            <option value="">active</option>
                            <option value="">deleted</option>
                            <option value="">public</option>
                        </select>
                    </div>
                    <div className="filter-search">
                        <Input label="" onChangeFunc={() => {}} placeholder="search project" type="text" />
                        <Button>
                            <Link to={"add-project"}>+ add project</Link>
                        </Button>
                    </div>
                </div>
                <div className="project-list--content">
                    <div className="project-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        <H3 title="Project" />
                                    </th>
                                    <th>
                                        <H3 title="type" />
                                    </th>
                                    <th>
                                        <H3 title="language" />
                                    </th>
                                    <th>
                                        <H3 title="technologies" />
                                    </th>
                                    <th>
                                        <H3 title="Method" />
                                    </th>
                                    <th>
                                        <H3 title="Status" />
                                    </th>
                                    <th>
                                        <H3 title="url" />
                                    </th>
                                    <th>
                                        <H3 title="activity" />
                                    </th>
                                    <th>
                                        <H3 title="created" />
                                    </th>
                                    <th>
                                        <H3 title="updated" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectData &&
                                    projectData.map((item: any, index: number) => (
                                        <tr
                                            key={index}
                                            className={`${selectedProject == item.projectId ? "selected-project" : ""}`}
                                        >
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    onChange={() =>
                                                        setSelectedProject((prev) =>
                                                            prev === item.projectId ? null : item.projectId,
                                                        )
                                                    }
                                                    checked={selectedProject === item.projectId}
                                                />
                                            </td>
                                            <td>{item.applicationName}</td>
                                            <td>{item.applicationType}</td>
                                            <td>{item.programmingLanguage}</td>
                                            <td>
                                                {item.technologies &&
                                                    item.technologies
                                                        .slice(0, 3)
                                                        .map((t: any, _: number) => <span key={_}>{t}</span>)}
                                            </td>
                                            <td>
                                                <div>
                                                    {/* <span className="get">GET</span>
                                                    <span className="post">POST</span>
                                                    <span className="put">PUT</span>
                                                    <span className="delete">DELETE</span> */}

                                                    {item.methods &&
                                                        item.methods.slice(0, 3).map((t: any, _: number) => (
                                                            <span className={t.toLowerCase()} key={_}>
                                                                {t}
                                                            </span>
                                                        ))}
                                                </div>
                                            </td>
                                            <td>{item.status}</td>
                                            <td>gitHub</td>
                                            <td>{item.isActive ? <span className="active">active</span> : null}</td>
                                            <td> {new Date(item.createdAt).toLocaleDateString()} </td>
                                            <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="project-pagination">
                        {/* <Button title="1" onCLick={{}} /> */}
                        {/* <Button title="2" onCLick={{}} /> */}
                        {/* <Button title="3" onCLick={{}} /> */}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default AdminProjects;
