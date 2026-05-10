import "./App.scss";

// ========== react-router ========== //
import { Outlet, useLocation } from "react-router";

// ========== component ========== //
import Header from "./layout/Header";
import { useEffect } from "react";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <>
            {location.pathname === "/project-details" ? null : <Header />}

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
