// ========== component ========== //
import { Link } from "react-router";

import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import { LIVE_API } from "../constants/ApiUrl";

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // ❗️ IMPORTANT: prevent loop
        if (originalRequest.url.includes("/api/Auth/refresh")) {
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await axios.post(`${LIVE_API}/api/Auth/refresh`, {}, { withCredentials: true });

                return axios(originalRequest);
            } catch (err) {
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    },
);

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        axios
            .get(`${LIVE_API}/api/Auth/check`, { withCredentials: true })
            .then(() => setIsAuth(true))
            .catch(() => setIsAuth(false));
    }, []);

    return (
        <header>
            <div className="header-content">
                <h1>thomas mumladze</h1>
                <div>
                    <Navigation />

                    {isAuth ? (
                        <Link className="login-page-link" to="/admin-dashboard">
                            admin
                        </Link>
                    ) : (
                        <Link className="login-page-link" to={"/log-in"}>
                            login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
