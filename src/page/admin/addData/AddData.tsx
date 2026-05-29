import { Link } from "react-router";
import AddContact from "./AddContact";
import AddProject from "./AddProject";
import AddSkills from "./AddSkills";

const AddData = () => {
    return (
        <article className="add-data-page">
            <div>
                <Link to={"/admin-dashboard"}> {"<- dashboard"}</Link>
            </div>
            <div className="add-data-page-wrapper">
                <AddProject />
                <div>
                    <AddSkills />
                    <AddContact />
                </div>
            </div>
        </article>
    );
};

export default AddData;
