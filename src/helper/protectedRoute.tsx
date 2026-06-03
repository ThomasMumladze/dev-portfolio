import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

// ========== Test Api ========= //
import { LIVE_API } from "../constants/ApiUrl";

// protectedRoute
export const ProtectedRoute = () => {
    // const [isAuth, setIsAuth] = useState<boolean | null>(null);

    // useEffect(() => {
    //     axios
    //         .get(`${LIVE_API}/api/Auth/check`, { withCredentials: true })
    //         .then(() => setIsAuth(true))
    //         .catch(() => setIsAuth(false));
    // }, []);

    // if (isAuth === null) return null;

    // if (!isAuth) {
    //     return <Navigate to="/" replace />;
    // }

    return <Outlet />;
};
