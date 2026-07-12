import axios from "axios";

const BASE_URL = "https://api.github.com";

const getAuthHeaders = () => ({
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
});

export const getGitHubUser = (signal?: AbortSignal) => {
    axios
        .get(`${BASE_URL}/user/repos`, {
            headers: getAuthHeaders(),
            signal,
        })
        .catch((Error) => {
            if (Error.code === "ERR_CANCELED") {
                console.warn("GItHub User Request Canceled");
                return [];
            }

            console.error("GitHub user fetch error:", Error.response.status, Error.response.data);
            throw Error;
        });
};

export const getGitHubRepositories = async (signal?: AbortSignal) => {
    return await axios
        .get(`${BASE_URL}/user/repos`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
            signal,
            params: {
                sort: "update",
                per_page: 4,
            },
        })
        .catch((Err) => {
            if (Err.code === "ERR_CANCELED") {
                console.warn("GitHub repositories request canceled");
                return [];
            }
            console.error("GitHub repositories fetch error:", Err.response?.status, Err.response?.data);
            throw Err;
        });
};
