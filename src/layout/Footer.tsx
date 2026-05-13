import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router";

import { useEffect, useState } from "react";

import H3 from "../components/H3";

const Footer = () => {
    const formatTime = () => {
        const now = new Date();

        const year = now.getFullYear();
        const hours = String(now.getHours());
        const minutes = String(now.getMinutes());
        const second = String(now.getSeconds());

        return `${year} / ${hours}:${minutes}:${second}`;
    };

    const [time, setTime] = useState(formatTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <div className="footer-body">
                <div>
                    <H3 title="Email" />
                    <p>mumladzea4@gmail.com</p>
                </div>
                <div>
                    <H3 title="address" />
                    <p>Tbilisi , Georgia {`${time}`}</p>
                </div>
                <div>
                    <H3 title="Social" />
                    <Link to={"/"}>
                        <FaGithub />
                    </Link>
                    <Link to={"/"}>
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
            <div className="developer">
                <H3 title={`made by Thomas Mumladze 2026`} />
                <p>
                    @No Copyright{" "}
                    <Link to={"https://github.com/ThomasMumladze/dev-portfolio"} target="_blank">
                        portfolio Rep
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
