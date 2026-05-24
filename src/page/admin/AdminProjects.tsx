import { useState } from "react";

// ========== Component ========== //
import Button from "../../components/Button";
import H3 from "../../components/H3";
import Input from "../../components/Input";

const AdminProjects = () => {
    const [selectedProject, setSelectedProject] = useState(false);

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
                        <Input label="" onChange={() => {}} placeholder="search project" type="text" />
                        <Button title="+ add project" />
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
                                <tr className={`${selectedProject ? "selected-project" : ""}`}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedProject}
                                            onChange={() => setSelectedProject(!selectedProject)}
                                        />
                                    </td>
                                    <td>techstore</td>
                                    <td>back-end</td>
                                    <td>java.api</td>
                                    <td>java , mssql , MsSql</td>
                                    <td>
                                        <div>
                                            <span className="get">GET</span>
                                            <span className="post">POST</span>
                                            <span className="put">PUT</span>
                                            <span className="delete">DELETE</span>
                                        </div>
                                    </td>
                                    <td>in development</td>
                                    <td>gitHub</td>
                                    <td>
                                        <span className="active">active</span>
                                    </td>
                                    <td>2025 / 01 /06</td>
                                    <td>2025 / 03 /21</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="project-pagination">
                        <Button title="1" onCLick={() => {}} />
                        <Button title="2" onCLick={() => {}} />
                        <Button title="3" onCLick={() => {}} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default AdminProjects;
