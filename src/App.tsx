import "./App.scss";

// ========== React Hook ========== //
import { useEffect, useState } from "react";

// ========== react-router ========== //
import { Outlet, useLocation } from "react-router";

// ========== component ========== //
import ContextMenu from "./components/ContextMenu";
import CustomConsole from "./components/CustomConsole";

// ========== Layouts ========== //
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// ========== Authorization ========== //
import useAuthorization from "./hook/useAuthorization";
import type { Authorization } from "./types/authorization";

function App() {
    const { ...authorization } = useAuthorization() as Authorization;
    const location = useLocation();
    const [showConsole, setShowConsole] = useState(false);

    useEffect(() => {
        console.log("Hello From", location.pathname.slice(1, -1));

        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <ContextMenu showConsole={showConsole} setShowConsole={setShowConsole} />
            {location.pathname === "/project-details" ? null : <Header />}

            <main>
                <Outlet context={{ authorization }} />

                <CustomConsole showConsole={showConsole} setShowConsole={setShowConsole} />
            </main>

            <Footer />
        </>
    );
}

export default App;
