// ========== react router ========== //
import { Link, useLocation } from "react-router";

const Navigation = () => {
    const location = useLocation().pathname;

    return (
        <nav>
            <ul>
                <li className={`${location == "/" ? "active" : ""}`}>
                    <Link to={"/"}>home</Link>
                </li>
                <li className={`${location == "/project" ? "active" : ""}`}>
                    <Link to={"/project"}>project</Link>
                </li>
                <li className={`${location == "/about-me" ? "active" : ""}`}>
                    <Link to={"/about-me"}>about-me</Link>
                </li>
                <li className={`${location == "/" ? "contact" : ""}`}>
                    <Link to={"/"}>contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
