import { gitHubRepository } from "../assets/api/gitHubApi";

import { useEffect, useState } from "react";

import axios from "axios";

import { FaLaptopCode } from "react-icons/fa";
import H3 from "./H3";
import { Link } from "react-router";
import { FaRegClone } from "react-icons/fa";

const GitHubRepo = () => {
    const [repos, setRepos] = useState<any[]>([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const repoRes: any = await gitHubRepository; // ან gitHubRepository()

                const repoList = repoRes.data.slice(0, 4);

                const enrichedRepos = await Promise.all(
                    repoList.map(async (repo: any) => {
                        const langRes = await axios.get(repo.languages_url);
                        const langData = langRes.data;

                        const total = Object.values(langData).reduce((a: number, b: any) => a + b, 0);

                        const languages = Object.fromEntries(
                            Object.entries(langData).map(([lang, bytes]) => [
                                lang,
                                (((bytes as number) / total) * 100).toFixed(2),
                            ]),
                        );

                        return { ...repo, languages };
                    }),
                );

                if (isMounted) setRepos(enrichedRepos);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    const sortedRepos = [...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    return (
        <article className="github-repo">
            <div className="github-repo--header">
                <H3 title="latest repository" />
                <Link to={"https://github.com/ThomasMumladze?tab=repositories"} target="_blank">
                    view all
                </Link>
            </div>
            <div className="github-repo--card">
                {sortedRepos.slice(0, 4).map((repo) => (
                    <div key={repo.id} className="wrapper">
                        <div className="wrapper-header">
                            <div className="repo-icon">
                                <span>
                                    <FaLaptopCode />
                                </span>
                            </div>

                            <blockquote>
                                <H3 title={repo.name} />

                                <span>push | {repo.pushed_at}</span>
                            </blockquote>
                        </div>

                        <hr />

                        <div className="language-usage">
                            {repo.languages &&
                                Object.entries(repo.languages)

                                    .map(([lang, pct]: any) => (
                                        <div key={lang}>
                                            <p>{lang}</p>
                                            <div className="w-indicator">
                                                <div style={{ width: `${pct}%` }}></div>
                                            </div>
                                            <p>| {pct}%</p>
                                        </div>
                                    ))}
                        </div>

                        <hr />

                        <div className="default-branch">
                            <span>
                                <p>branch</p>
                                <H3 title={repo.default_branch} />
                            </span>

                            <span>
                                <p>repository</p>
                                <H3 title={repo.private ? "private" : "public"} />
                            </span>
                        </div>

                        <div className="urls">
                            <Link to={repo.clone_url}>
                                clone | <FaRegClone />
                            </Link>

                            <Link to={repo.html_url} target="_blank">
                                Url |
                                <svg
                                    data-component="Octicon"
                                    aria-hidden="true"
                                    focusable="false"
                                    className="octicon octicon-repo"
                                    viewBox="0 0 16 16"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    display="inline-block"
                                    overflow="visible"
                                >
                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default GitHubRepo;
