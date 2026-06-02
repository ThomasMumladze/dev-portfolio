// ========== React ========== //
import { Link } from "react-router";

// ========== Admin Pages ========== //
import AddContact from "./AddContact";
import AddProject from "./AddProject";
import AddSkills from "./AddSkills";

const DataEntry = () => {
    return (
        <article className="add-data-page">
            <div>
                <Link to={"/admin-dashboard"}> {"<- dashboard"}</Link>
            </div>
            <AddProject />
            <div className="add-data-page-skills-contact">
                <AddSkills />
                <AddContact />
            </div>
        </article>
    );
};

export default DataEntry;
