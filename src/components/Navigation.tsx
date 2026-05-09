import { Link, useLocation } from "react-router";
const Navigation = () => {
    const location = useLocation().pathname;

    return (
        <nav>
            <ul>
                <li className={`${location == "/" ? "active" : ""}`}>
                    <Link to={"/"}>
                        <span>#</span>home
                    </Link>
                </li>
                <li className={`${location == "/project" ? "active" : ""}`}>
                    <Link to={"/project"}>
                        <span>#</span>project
                    </Link>
                </li>
                <li className={`${location == "/" ? "about-me" : ""}`}>
                    <Link to={"/"}>
                        <span>#</span>about-me
                    </Link>
                </li>
                <li className={`${location == "/" ? "contact" : ""}`}>
                    <Link to={"/"}>
                        <span>#</span>contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
