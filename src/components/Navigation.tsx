// ========== react router ========== //
import { Link, useLocation } from "react-router";

// ========== react icon ========== //
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";

const Navigation = () => {
    const location = useLocation().pathname;

    const [activeNavigation, setActiveNavigation] = useState<boolean>(false);

    const handleActiveNavigation = () => {
        setActiveNavigation(!activeNavigation);
    };

    useEffect(() => {
        setActiveNavigation(false);
    }, [location]);

    return (
        <nav>
            <CiMenuBurger onClick={handleActiveNavigation} />

            <ul className={`${activeNavigation ? "nav-active" : ""}`}>
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
                    <Link to={"/contact"}>contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
