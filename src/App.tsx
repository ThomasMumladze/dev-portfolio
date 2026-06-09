import "./App.scss";

// ========== React Hook ========== //
import { useEffect, useState } from "react";

// ========== react-router ========== //
import { Outlet, useLocation } from "react-router";

// ========== component ========== //
import ContextMenu from "./components/ContextMenu";

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
            <main>
                <Outlet context={{ authorization }} />
            </main>
        </>
    );
}

export default App;
