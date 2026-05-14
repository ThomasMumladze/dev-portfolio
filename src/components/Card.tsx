import { VscAzure } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";

// ==========  react router ========== //
import { Link } from "react-router";

// ==========  project interface ========== //
import type { ProjectType } from "../types/projectType";
import H3 from "./H3";

// ========== props interface ========== //
interface Props {
    data: ProjectType;
}

const Card = (props: Props) => {
    const { data } = props;

    const links = [
        data.urls.azure && {
            label: "azure",
            icon: <VscAzure />,
            to: data.urls.azure,
        },
        data.urls.gitHub && {
            label: "github",
            icon: <FaGithub />,
            to: data.urls.gitHub,
        },
        data.urls.live && {
            label: "live",
            icon: <CgMediaLive />,
            to: data.urls.live,
        },
    ].filter(Boolean);

    return (
        <div className="card-wrapper">
            <div className="card-wrapper--header">
                <H3 title={data.applicationName} />
                <p className={`${data.status}`}>{data.status}</p>
            </div>
            <div className="project-type">
                <p>{data.type}</p>
                <p>{data.language}</p>
            </div>

            {data.methods.length > 1 ? (
                <div className="methods">
                    {data.methods.map((item, _) => (
                        <p className={`${item.toLocaleLowerCase()}`} key={_}>
                            {item}
                        </p>
                    ))}
                </div>
            ) : null}

            {data.technologies.length > 1 ? (
                <div className="technologies">
                    <p>{data.technologies.join(", ")}</p>
                </div>
            ) : null}

            <div className="description">
                <p>{data.description ? <> {data.description} </> : "no description"}</p>
            </div>

            <div className="url">
                {links.map((item: any, index) => (
                    <div className="url-item" key={index}>
                        <Link
                            className="btn-primary"
                            to={item.to}
                            target="_blank"
                            style={{
                                gridColumn: links.length % 2 === 1 && index === links.length - 1 ? "1 / -1" : "auto",
                            }}
                        >
                            {item.label} {item.icon}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
