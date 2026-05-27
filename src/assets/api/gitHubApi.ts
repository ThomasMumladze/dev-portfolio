import axios from "axios";
const abortController = new AbortController();

const BASE_URL = "https://api.github.com";

export const gitHubUser = axios.get(`${BASE_URL}/user`, {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
});

export const gitHubRepository = axios
    .get(`${BASE_URL}/user/repos`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
        signal: abortController.signal,
        maxRedirects: 0,
    })
    .catch((err) => {
        if (err.name === "CanceledError") console.warn("Request Canceled");
    });
